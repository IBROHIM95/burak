import express from  'express'
import path from 'path';
import router from './router'
import routerAdmin from './routerAdmin';
import morgan from 'morgan';
import { MORGAN_FORMAT } from '../src/lips/config';

import session from 'express-session';
import ConnectMongoDB from 'connect-mongodb-session';
import { T } from './lips/types/common';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection : 'sessions',
})

// 1- qism entrance

const app = express();
app.use(express.static(path.join(__dirname, 'public'))); //middle ware folder client(BROWSER)
app.use(express.urlencoded({extended: true}));  //middleware : traditional API
app.use(express.json()); //Middleware : Rest API
app.use(morgan(MORGAN_FORMAT ))
// 2- qism SESSION
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie:{
            maxAge: 1000 * 3600 * 6, // 6h
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);
app.use(function (req, res, next)  {
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next()
})

// 3- qism VIEW 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.set('view engine', 'ejs')

// 4- ROUTERS

app.use('/admin', routerAdmin) //ssr: ejs           //middle ware 
app.use('/', router) // SPA: REACT          //middle ware 

export default app