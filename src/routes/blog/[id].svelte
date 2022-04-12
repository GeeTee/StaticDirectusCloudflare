<script context="module">
    export const load = async ({fetch, params, stuff}) => {
        const {item} = await (await fetch(`/api/blog/${params.id}`)).json()
        const {blog} = stuff
        console.log('laoding item:', item, {blog})
        return {
            props: {
                item
            }
        }
    }
</script>
<script>
    export let item = {}
    import Article from "$lib/partials/dom/Article.svelte";
    import CreatedUpdatedDates from "$lib/partials/dates/CreatedUpdatedDates.svelte";
</script>
{#if Object.keys(item).length > 0}
    <Article>
        <svelte:fragment slot="header">
            <h1>{item.title}</h1>
        </svelte:fragment>

        {@html item.html}

        <svelte:fragment slot="footer">
            <CreatedUpdatedDates date_created={item.date_created} date_updated={item.date_updated} />
        </svelte:fragment>
    </Article> 
{:else}
    on a pas
{/if}

