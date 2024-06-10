import express, {Request, Response} from 'express';
import {T} from '../lips/types/common';



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
        res.send('Signup page')
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


restaurantController.processSignup = (req:Request, res:Response) => {
    try{
        console.log('processSingup page');
        
        res.send('done')
    } catch(err) {
        console.log('Error, processSingup', err);
        
    }
    
};

export default restaurantController