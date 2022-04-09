<script context="module">
    import r from '$lib/helpers/req'
    export const load = async ({params}) => {
        const {item} = await r.getPostById(params.id)
        console.log({item})
        return {
            props: {
                item
            }
        }
    }

</script>
<script>
    import { page } from "$app/stores";
    
    export let item = {}
    import CreatedUpdatedDates from "$lib/partials/dates/CreatedUpdatedDates.svelte";
    // console.log($page)
    $: id = $page.params.id

    
</script>
{#if Object.keys(item).length > 0}
     <article>
         <header>
             <h1>{item.title}</h1>
         </header>
         <div>
             {@html item.html}
         </div>
         <footer>
             <CreatedUpdatedDates date_created={item.date_created} date_updated={item.date_updated} />
         </footer>
     </article> 
{:else}
    on a pas
{/if}

