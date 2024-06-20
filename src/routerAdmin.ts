import express, {Request, Response} from 'express';
const routerAdmin = express.Router();
import restaurantController from './controller/restaurant.controller';

/*  Restaurant */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
.get('/login', restaurantController.getLogin)
.post('/login', restaurantController.processLogin);

routerAdmin
.get('/signup',restaurantController.getSignup )
.post('/signup', restaurantController.processSignup);

routerAdmin
.get('/check-me',restaurantController.checkAuthSession )

/*  Products */


export default routerAdmin;