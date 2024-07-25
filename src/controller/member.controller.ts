import express, {NextFunction, Request, Response} from 'express';
import {T} from '../lips/types/common';
import { ExtendedRequest, Member, MemberInput, MemberUpdateInput } from '../lips/types/member';
import MemberService from '../models/Member.service';

import { LoginInput } from '../lips/types/member';
import Errors, { HttpCode, Message } from '../lips/Errors';
import AuthService from '../models/AuthService';
import { AUTH_TIMER } from '../lips/config';

const memberService = new MemberService();
const authService = new AuthService

const memberController: T = {}

 
memberController.getRestaurant = async (req:Request, res:Response) =>{
    try{
        console.log('getRestaurant');
        const result = await memberService.getRestaurant()
        
      res.status(HttpCode.OK).json(result)
    }catch(err){
        console.log('Error, getRestaurant', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }
}

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

memberController.logout = async (req:ExtendedRequest, res:Response) => {
    try{
        console.log('logout');
        res.cookie('accessToken',null, {maxAge: 0 , httpOnly: true})
        
      res.status(HttpCode.OK).json({logout: true})
    }catch(err){
        console.log('Error, logout', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }

}
memberController.getMemberDetail = async (req:ExtendedRequest, res:Response) => {
    try{
        console.log('getMemberDetail');
        const result = await memberService.getMemberDetail(req.member)
        
      res.status(HttpCode.OK).json(result)
    }catch(err){
        console.log('Error, getMemberDetail', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }

}
memberController.updateMember = async (req:ExtendedRequest, res:Response) => {
    try{
        console.log('updateMember');
        const input:MemberUpdateInput = req.body;
        if (req.file)input.memberImage = req.file.path.replace(/\\/g, '/');

        const result= await memberService.updateMember(req.member, input);

        res.status(HttpCode.OK).json(result)
        
    }catch(err){
        console.log('Error, updateMember', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }

}

memberController.getTopUsers = async (req:Request, res:Response) => {
    try{
        console.log('getTopUsers');
        const result= await memberService.getTopUsers();


        res.status(HttpCode.OK).json(result)
        
    }catch(err){
        console.log('Error, updateMember', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
    }

}

    memberController.verifyAuth = async (
        req:ExtendedRequest, 
        res:Response,
        next: NextFunction
    ) => {
      try{
       const token = req.cookies['accessToken'];
       if(token) req.member = await authService.checkAuth(token)

        if(!req.member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED)
         
         
        next();
      }
      catch(err){
        console.log('Error, verifyAuth', err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)
        
      }
    }
    
    memberController.retrieveAuth = async (
        req:ExtendedRequest, 
        res:Response, 
        next: NextFunction) => {
      try{
       let member = null;
       const token = req.cookies['accessToken'];
       if(token) req.member = await authService.checkAuth(token)

        
         
        next();
      }
      catch(err){
        console.log('Error, retrieveAuth', err);
        next();
        
      }
    }
    


export default memberController


