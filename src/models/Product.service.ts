import Errors, { HttpCode } from "../lips/Errors"
import { Product, ProductInput } from "../lips/types/product"
import ProductModel from "../scheme/Product.model"
import { Message } from "../lips/Errors"

class ProductService{
private readonly productModel

constructor() {
    this.productModel = ProductModel
}

/**SPA */

/**SSR */

public async createNewProduct(input: ProductInput): Promise<Product>{
   try{
      return await this.productModel.create(input)
   }catch(err){
    console.error('Error, model:createNewProduct:', err);
    throw new Errors(HttpCode.BAD_REQUEST,Message.CREATE_FAILED)
    
   } 
}
}

export default ProductService