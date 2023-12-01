import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT=process.env.PORT || 3030
const app=express()




app.use(express.json())



app.listen(PORT,()=>{
    console.log(`The server is running in the port ${PORT}`)
})