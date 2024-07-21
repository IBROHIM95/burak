import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';
import { Member, MemberInput } from '../lips/types/member';
import MemberService from '../models/Member.service';

import { LoginInput } from '../lips/types/member';
import Errors, { HttpCode, Message } from '../lips/Errors';
import AuthService from '../models/AuthService';
import { AUTH_TIMER } from '../lips/config';

const memberService = new MemberService();
const authService = new AuthService

const memberController: T = {}

 
memberController.signup = async (req:Request, res:Response) => {
    try{
        console.log('signup page');
        
        const input: MemberInput = req.body,
           result: Member = await memberService.signup(input),
           token = await authService.createToken(result);

           res.cookie('accessToken', token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
           });
           
        
        res.status(HttpCode.CREATED).json({member: result, accessToken: token});
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
        console.log('result:', result);

        res.cookie('accessToken', token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
           });
           
        
        res.status(HttpCode.CREATED).json({member: result, accessToken: token});
        
       
    } catch(err) {
        console.log('Error, Login', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
        
    }
}

    memberController.verifyAuth = async (req:Request, res:Response) => {
      try{
       let member = null;
       const token = req.cookies['accessToken'];
       if(token) member = await authService.checkAuth(token)

        if(!member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED)
         console.log('member:', member);
         
        res.status(HttpCode.CREATED).json({member: member});
      }
      catch(err){
        console.log('Error, verifyAuth', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
        
      }
    }
    


export default memberController


