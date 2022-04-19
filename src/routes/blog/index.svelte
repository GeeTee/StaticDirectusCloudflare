<script context="module">
    export const load = async ({stuff}) => {
        // const {blog} = await (await fetch('/api/blog')).json()
        const {blog} = stuff
        // console.log('loading', blog)
        return {
            props: {
                blog
            }
        }
    }
</script>
<script>
    import {
    paginate,
    DarkPaginationNav
    } from 'svelte-paginate'
    import { fade } from 'svelte/transition'
    export let blog = []
    console.log('expected blog', blog)
    const items = [...blog]
    let currentPage = 1
    let pageSize = 2
    $: paginatedItems = paginate({ items, pageSize, currentPage })
</script>
<h1>Index du blog</h1>
{#if blog.length > 0}
    <ul>
     {#each paginatedItems as {id, title} (id)}
        <li
        out:fade="{{duration: 200}}"
        in:fade="{{delay: 200}}"
        >
            <a sveltekit:prefetch href="/blog/{id}" {title}>{title}</a>
        </li>
     {/each}
    </ul>
    <DarkPaginationNav
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={items.length}
        limit="{1}"
        showStepOptions="{true}"
        on:setPage={(e) => currentPage = e.detail.page}
    />
{/if}