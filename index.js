import express, { json } from 'express'
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import { userModel } from './database/model/user.model.js';
const app = express()
const port = 3000
dotenv.config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello connected api!'))
app.get('/users', async (req, res) => {
    let users = await userModel.find()
    res.json({ message: 'success', users })
})
app.post('/register', (async (req, res) => {
    const { name, email, payment, phone } = req.body;
    const user = await userModel.insertMany({ name, email, payment, phone });
    res.json({ Message: 'success', user });
    // let isExist = await userModel.findOne({email})
    // if (!isExist) {
    // }else{
    //     res.json({ Message: 'user is already exist' });
    // }
}))


const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://Apoc3939:aboc3939@cluster0.qwetbng.mongodb.net/Apoc3939");
    } catch (error) {
        console.log(error);
    }

}
dbConnection()
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
