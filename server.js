import express from 'express';
import dotenv from 'dotenv'
import connectDb from './db/dbConnector.js'
import userRouter from './routes/userRoutes.js'
import teamRoutes from './routes/teamRoutes.js'
import cors from 'cors'
import morgan from 'morgan';
import path from 'path';
import {fileURLToPath} from 'url';



//esmodule fix
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);



//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan())
app.use(express.static(path.join(__dirname, './frontend/build')))



//dot env file config
dotenv.config()


//app routing
app.use('/api/v1/', userRouter)
app.use('/api/v1/team', teamRoutes)
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})


//db connection
connectDb();


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server established successfully at port: ${port}`);
})
    .on('error', (err) => {
        console.log('Error in connecting to the server');
        console.error(err);
    });
