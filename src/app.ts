import express from  'express'
import path from 'path'

// 1- qism entrance

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// 2- qism SESSION


// 3- qism VIEW 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

// 4- ROUTERS

export default app