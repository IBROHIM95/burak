import express, {Request, Response} from 'express';
const router = express.Router();
import memberController from '../src/controller/member.controller';
import uploader from './lips/utils/uploader'
import productController from './controller/product.controller';
import orderController from './controller/order.controller';

router.get('/member/restaurant', memberController.getRestaurant);
router
.post('/member/login', memberController.login);
router
.post('/member/signup', memberController.signup)
router.
post('/member/logout', memberController.verifyAuth, 
                      memberController.logout)
router
.get('/member/detail', memberController.verifyAuth, memberController.getMemberDetail)

router.post('/member/update', 
    memberController.verifyAuth, 
    uploader('members').single('memberImage'), 
    memberController.updateMember)

router.get('/member/top-users', memberController.getTopUsers);


//*PRODUCT //paramslar slash va 2 nuqta bilan yaratilinadi, 
//query so'roq belgisi bilan va & belgisi bilan yana query qo'shiladi *//

router.get('/product/all', productController.getProducts);  
router.get('/product/:id', 
        memberController.retrieveAuth ,productController.getProduct);  


//* Order  *//

router.post('/order/create', 
    memberController.verifyAuth, orderController.createOrder )
  
router.get('/order/all', 
    memberController.verifyAuth 
    ,orderController.getMyOrders)    

 router.post('/order/update', 
    memberController.verifyAuth , 
    orderController.updateOrder  )   

export default router;