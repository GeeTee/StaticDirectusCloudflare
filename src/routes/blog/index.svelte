<script context="module">
    import r from '$lib/helpers/req'
    export const load = async () => {
        const {blog, url} = await r.getAllPosts()
        console.log('blog loading : ', blog, url)
        return {
            props: {
                blog,
                arr: []
            }
        }
    }
</script>
<script>
    export let blog = []
    export let arr = []
</script>
<h1>Index du blog</h1>
{#if arr.length > 0}
    <ul>
     {#each arr as {id, title}}
          <li><a sveltekit:prefetch href="/blog/{id}" {title}>{title}</a></li>
     {/each}
    </ul>
{/if}