import r from '$lib/helpers/req'

export const get = async ({params}) => {
    // console.log('endpoint id:', params.id)
    const {item} = await r.getPostById(params.id)
    return {
        body: {
            item
        }
    }
}