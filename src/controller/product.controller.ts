import express, {Request, Response} from 'express';
import Errors from "../lips/Errors";
import { T } from "../lips/types/common";
import ProductService from '../models/Product.service';
import { AdminRequest } from '../lips/types/member';

const productService = new ProductService

const productController: T = {}

productController.getAllProducts= async (req: Request, res:Response) => {
    try{
        console.log('getAllProducts');
        res.render('products')   
    } catch(err) {
        console.log('error, getAllProducts');
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)    
    }
    
};

productController.createNewProduct= async (req:Request, res:Response) => {
    try{
        console.log('createNewProduct');
        res.send('DONE')
           
    } catch(err) {
        console.log('error, createNewProduct');
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)    
    }
    
};

productController.updateChosenProduct= async (req:Request, res:Response) => {
    try{
        console.log('updateChosenProduct');
           
    } catch(err) {
        console.log('error, updateChosenProduct');
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard)    
    }
    
};


export default productController