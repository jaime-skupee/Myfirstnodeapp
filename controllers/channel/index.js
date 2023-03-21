import Category from '../../models/category.js'
import slugify from '../../utils/sluglify.js'
import { VIDEO_STATUS } from '../../utils/constants.js'

const create = async ( body ) => {

    const categoryBody = {
        title: body.title,
        slug: slugify(body.title),
        image: body.image ?? null,
        parent: body.parent ?? null,
        description: body.description,
        status: VIDEO_STATUS.CREATED
    }
    console.log('body', categoryBody)

    const category = await Category.create(categoryBody)
    return category
}

const retrieve = async () => {
    return Category.findAll({
        order: ['id']
    })
}

const retrieveSingle = async ( id ) => {
    return Category.findByPk( id )
}

const update = async ( id, body ) => {

    const category = await Category.findByPk(id)

    if( !category ) {
        return false
    }

    category.title = body.title ?? category.title
    category.slug = body.title ? slugify(body.title): category.slug
    category.image = body.image ?? category.image
    category.parent = body.parent ?? category.parent
    category.description = body.description ?? category.description
    
    await category.save()
    return category
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
