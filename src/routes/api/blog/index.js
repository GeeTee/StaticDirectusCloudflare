import r from '$lib/helpers/req'

export const get = async () => {
    const {blog} = await r.getAllPosts()
    return {
        body: {
            blog
        }
    }
}