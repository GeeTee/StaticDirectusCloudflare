import f from './scripts'
import { DIRECTUS_URL } from './Env'
const url = f.getMyEnvVar(DIRECTUS_URL)

const getAllPosts = async () => {
    const res = await fetch('https://2yufqfqe.directus.app/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            query {
                blog  (filter: {status: {_eq: "published"}}) {
                    id
                    title
                    date_created
                    date_updated
                }
            }
            `
        })
    })
    const {data: {blog}} = await res.json()
    console.log('getAllPosts', {url},{blog})
    return {
        blog,
        url
    }
}

const getPostById = async (id) => {
    const res = await fetch('https://2yufqfqe.directus.app/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
            query ($id: ID!) {
                blog_by_id (id: $id) {
                    id
                    title
                    html
                    date_created
                    date_updated
                }
            }
            `,
            variables: {
                id
            }
        })
    })
    const {data: {blog_by_id}} = await res.json()
    const item = {...blog_by_id}
    // console.log('getPostById', {id},{item})
    return {
        item,
    }
}

const reqServices = {
    getAllPosts,
    getPostById,
}
export default reqServices