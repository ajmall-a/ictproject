const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config();

const PORT=process.env.PORT;
const app=new express();
app.use(morgan('dev'));

const mentorRoute=require('./routes/mentorRoutes');

const cors=require('cors');





app.use(cors());

app.use('/api',mentorRoute);




const db=require('./db/connection');


app.listen(PORT,(req,res)=>{

    console.log(`Server is running ${PORT}`);
})