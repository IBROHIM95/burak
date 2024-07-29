import { ExtendedRequest } from '../lips/types/member'
import {T} from '../lips/types/common'
import { Response } from 'express'
import Errors, { HttpCode } from '../lips/Errors'
import OrderService from '../models/Order.service'


const orderService = new OrderService()
const orderController: T = {}


orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try{
   console.log('createOrder');
   const result = await orderService.createOrder(req.member, req.body) 

   res.status(HttpCode.CREATED).json(result)
  }catch(err){
    console.log('Error, createOrder', err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard)
}
 }   


export default orderController