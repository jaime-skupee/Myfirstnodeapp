import express from 'express'
//import dbconnection from './middlewares/dbconnection.js'
import handleError from './middlewares/handleError.js'
import categoryRouter from './routes/category.js'
import { VIDEO } from './utils/constants.js'

const app = express()
app.use(express.json())
const port = 3000

// app.use(dbconnection)
app.use('/category', categoryRouter)

app.get('/', async (request, response) => {
    
    return response.json(VIDEO)
})

app.use(handleError)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})