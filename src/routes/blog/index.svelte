<script context="module">
    export const load = async ({fetch}) => {
        const {blog} = await (await fetch('/api/blog')).json()
        // console.log('loading', blog)
        return {
            props: {
                blog
            }
        }
    }
</script>
<script>
    export let blog = []
    console.log('expected blog', blog)
</script>
<h1>Index du blog</h1>
{#if blog.length > 0}
    <ul>
     {#each blog as {id, title}}
          <li><a sveltekit:prefetch href="/blog/{id}" {title}>{title}</a></li>
     {/each}
    </ul>
{/if}