import express from 'express'
import { create, retrieve, retrieveSingle, update } from '../controllers/category/index.js'

const router = express.Router()

router.get('/', async (request, response) => {
    const result = await retrieve()
    return response.send(result)
})

router.get('/:id', async (request, response) => {
    const { id } = request.params
    const result = await retrieveSingle(id)
    return response.send(result)
})

router.put('/:id', async (request, response) => {
    const { id } = request.params
    if( !request.body || !id ) {
        return response.send('Error, no body nor id')
    }
    const result = await update(id, request.body)
    return response.send(result)
})

router.post('/', async (request, response) => {
    if( !request.body ) {
        return response.send('Error, no body')
    }
    const result = await create( request.body )

    return response.send(result)
})

export default router