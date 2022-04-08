<script context="module">
    import r from '$lib/helpers/req'
    export const load = async ({fetch}) => {
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
        return {
            props: {
                blog
            }
        }
    }
</script>
<script>
    export let blog = []
</script>
<h1>Index du blog</h1>
{#if blog.length > 0}
    <ul>
     {#each blog as {id, title}}
          <li><a sveltekit:prefetch href="/blog/{id}" {title}>{title}</a></li>
     {/each}
    </ul>
{/if}