import Videp from '../../models/video.js'
import slugify from '../../utils/sluglify.js'
import { GENERAL_STATUS } from '../../utils/constants.js'

const create = async ( body ) => {

    const channelBody = {
        title: body.title,
        slug: slugify(body.title),
        image: body.image ?? null,
        parent: body.parent ?? null,
        description: body.description,
        status: GENERAL_STATUS.ENABLED
    }
    console.log('body', channelBody)

    const channel = await Channel.create(channelBody)
    return channel
}

const retrieve = async () => {
    return Channel.findAll({
        order: ['id']
    })
}

const retrieveSingle = async ( id ) => {
    return Channel.findByPk( id )
}

const update = async ( id, body ) => {

    const channel = await Channel.findByPk(id)

    if( !channel ) {
        return false
    }

    channel.title = body.title ?? channel.title
    channel.slug = body.title ? slugify(body.title): channel.slug
    channel.image = body.image ?? channel.image
    channel.parent = body.parent ?? channel.parent
    channel.description = body.description ?? channel.description
    
    await channel.save()
    return channel
}

const destroy = async (id) => {
    return 'not yet implemented'
}

export {
    create,
    retrieve,
    retrieveSingle,
    update,
    destroy
}
