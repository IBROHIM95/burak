import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';
import { Member, MemberInput } from '../lips/types/member';
import MemberService from '../models/Member.service';

import { LoginInput } from '../lips/types/member';
import Errors from '../lips/Errors';
import AuthService from '../models/AuthService';

const memberService = new MemberService();
const authService = new AuthService

const memberController: T = {}

 
memberController.signup = async (req:Request, res:Response) => {
    try{
        console.log('signup page');
        
        const input: MemberInput = req.body,
           result: Member = await memberService.signup(input),
           token = await authService.createToken(result);
           //TOKEN
        
        res.json({member: result})
    } catch(err) {
        console.log('error, signup');
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
        
        // res.json({});
        
    }
    
};

memberController.login = async (req:Request, res:Response) => {
    try{
        console.log('Login');
        const input : LoginInput = req.body,
           result = await memberService.login(input),
           token = await authService.createToken(result);
           console.log('token =>', token);
           
        //TOKEN
        console.log('result:', result);
        
        res.json({member: result})
    } catch(err) {
        console.log('Error, Login', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
        
    }
    
};

export default memberController


