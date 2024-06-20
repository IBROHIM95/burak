import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';
import { LoginInput, MemberInput, AdminRequest } from '../lips/types/member';
import { MemberType } from '../lips/enum/member.enum';
import MemberService from '../models/Member.service';

const memberService = new MemberService();

const restaurantController : T = {}; 
restaurantController.goHome = (req:Request, res:Response) => {
    try{
        console.log('go home');
        
        res.render('home')
    } catch(err) {
        console.log('Error, goHome', err);
        
    }
    
};

restaurantController.getSignup = (req:Request, res:Response) => {
    try{
        res.render('signup')
    } catch(err) {
        console.log('Error, getSignup', err);
        
    }
    
};

restaurantController.getLogin = (req:Request, res:Response) => {
    try{
        res.render('login')
    } catch(err) {
        console.log('Error, getLogin ', err);
        
    }
    
};


restaurantController.processSignup = async (req:AdminRequest, res:Response) => {
    try{
        console.log('processSignup page');
        console.log('body', req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        //SESSION

        req.session.member = result;
        req.session.save(function () {
            res.send(result) 
        })
        
       
    } catch(err) {
        res.send(err);
        
    }
    
};

restaurantController.processLogin = async (req:AdminRequest, res:Response) => {
    try{
        console.log('processLogin');
        console.log('body:', req.body);
        const input : LoginInput = req.body;
        const result = await memberService.processLogin(input)
        //SESSION
        
        req.session.member = result;
        req.session.save(function () {
            res.send(result) 
        })

        
    } catch(err) {
        console.log('Error, processLogin', err);
        res.send(err)
        
    }
    
};




export default restaurantController