import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.router.js'
const app = express()
const port = 3000
dotenv.config()
app.use(cors())
app.use(express.json())
app.use('/api/v1/user' , userRouter)
app.get('/', (req, res) => res.send('Hello connected api!'))


dbConnection()
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
