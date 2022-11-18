import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRouter from './route/web';
import connection from './configs/connectDB';
import initAPIRoute from './route/api'

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8080;

//
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// setup view engine
configViewEngine(app);
// init webRouter
initWebRouter(app);
// initAPIRoure
initAPIRoute(app);
// connectDB: 
// connection(app);

app.get('/home', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})