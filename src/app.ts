import express from  'express'
import path from 'path';
import router from './router'
import routerAdmin from './routerAdmin';


// 1- qism entrance

const app = express();
app.use(express.static(path.join(__dirname, 'public'))); //middle ware folder client(BROWSER)
app.use(express.urlencoded({extended: true}));  //middleware : traditional API
app.use(express.json()); //Middleware : Rest API

// 2- qism SESSION


// 3- qism VIEW 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// 4- ROUTERS

app.use('/admin', routerAdmin) //ssr: ejs           //middle ware 
app.use('/', router) // SPA: REACT          //middle ware 

export default app