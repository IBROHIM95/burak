import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';
import { LoginInput, MemberInput, AdminRequest } from '../lips/types/member';
import { MemberType } from '../lips/enum/member.enum';
import MemberService from '../models/Member.service';
import Errors, { Message } from '../lips/Errors';

const memberService = new MemberService();

const restaurantController : T = {}; 
restaurantController.goHome = (req:Request, res:Response) => {
    try{
        console.log('go home');
        
        res.render('home')
    } catch(err) {
        console.log('Error, goHome', err);
        res.redirect('/admin')
        
    }
    
};

restaurantController.getSignup = (req:Request, res:Response) => {
    try{
        res.render('signup')
    } catch(err) {
        console.log('Error, getSignup', err);
        res.redirect('/admin')
        
    }
    
};

restaurantController.getLogin = (req:Request, res:Response) => {
    try{
        res.render('login')
    } catch(err) {
        console.log('Error, getLogin ', err); 
        res.redirect('/admin');  
    }  
};


restaurantController.processSignup = async (req:AdminRequest, res:Response) => {
    try{
        console.log('processSignup page');
        console.log('body', req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        

        req.session.member = result;
        req.session.save(function () {
            res.send(result) 
        })   
    } catch(err) {
        res.send(err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(` <script> alert("${message}"); window.location.replace('admin/signup')</script> `); 
        
    }
    
};

restaurantController.processLogin = async (req:AdminRequest, res:Response) => {
    try{
        console.log('processLogin');
        console.log('body:', req.body);
        const input : LoginInput = req.body;
        const result = await memberService.processLogin(input)
       
        
        req.session.member = result;
        req.session.save(function () {
            res.send(result) 
        })
             
    } catch(err) {
        console.log('Error, processLogin', err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG
        res.send(` <script> alert("${message}"); window.location.replace('admin/login')</script> `);  
    }   
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try{
        console.log('logout');
        req.session.destroy(function () {
            res.redirect('/admin')
        })    
    }catch(err) {
        console.log('Error, logout', err);
        res.redirect('/admin')
    }   
}

restaurantController.checkAuthSession = async (
    req:AdminRequest, 
    res:Response) => {
    try{
        console.log('checkAuthSession');
        if(req.session?.member) 
        res.send(` <script> alert("${req.session.member.memberNick}")</script> `);
        else res.send(  ` <script> alert("${Message.NOT_AUTHENTICATED}")</script> `);
    } catch(err) {
        console.log('Error, processLogin', err);
        res.send(err)   
    }   
};




export default restaurantController