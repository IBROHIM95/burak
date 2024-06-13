import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';
import { MemberInput } from '../lips/types/member';
import { MemberType } from '../lips/enum/member.enum';
import MemberService from '../models/Member.service';



const restaurantController : T = {}; 
restaurantController.goHome = (req:Request, res:Response) => {
    try{
        console.log('go home');
        
        res.send('Home page')
    } catch(err) {
        console.log('Error, goHome', err);
        
    }
    
};
restaurantController.getLogin = (req:Request, res:Response) => {
    try{
        res.send('Login page')
    } catch(err) {
        console.log('Error, getLogin ', err);
        
    }
    
};
restaurantController.getSignup = (req:Request, res:Response) => {
    try{
        res.send('DONE')
    } catch(err) {
        console.log('Error, getSignup', err);
        
    }
    
};

restaurantController.processLogin = (req:Request, res:Response) => {
    try{
        console.log('processLogin page');
        
        res.send('done')
    } catch(err) {
        console.log('Error, processLogin', err);
        
    }
    
};


restaurantController.processSignup = async (req:Request, res:Response) => {
    try{
        console.log('processSignup page');
        console.log('body', req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        
        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember)
        
        res.send(result)
    } catch(err) {
        res.send(err);
        
    }
    
};

export default restaurantController