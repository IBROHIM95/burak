import express, {Request, Response} from 'express';
import Errors, { HttpCode, Message } from "../lips/Errors";
import { T } from "../lips/types/common";
import ProductService from '../models/Product.service';
import { AdminRequest } from '../lips/types/member';
import { ProductInput } from '../lips/types/product';

const productService = new ProductService

const productController: T = {}


/**SPA */

/**SSR */

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

productController.createNewProduct= async (req:AdminRequest, res:Response) => {
    try{
        console.log('createNewProduct');
        console.log('req.files', req.files);
        if(!req.files?.length)
            throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED)
        
        const data: ProductInput = req.body;
        data.productImage = req.files?.map((ele) => {
            return ele.path.replace(/\\/g, '/')
        })

        await productService.createNewProduct(data)

        res.send(` <script> alert("Sucessfully created"); window.location.replace('admin/product/all')</script> `);
        
           
    } catch(err) {
        console.log('error, createNewProduct');
        const message = 
        err  instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(` <script> alert("${message}"); window.location.replace('admin/product/all')</script> `);
          
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