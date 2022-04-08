<script>
    import { page } from "$app/stores";
    import r from '$lib/helpers/req'
    import CreatedUpdatedDates from "$lib/partials/dates/CreatedUpdatedDates.svelte";
    import LoadingSpinner from "$lib/UI/LoadingSpinner.svelte";
    // console.log($page)
    $: id = $page.params.id
    const getItem = async (id) => {
        const {item} = await r.getPostById(id)
        console.log('expected : ', item)
        return item
    }
    
</script>

{#await getItem(id)}
    <LoadingSpinner />
{:then item}
    <article>
        <header>
            <h1>{item?.title}</h1>
        </header>
        <div>
            {@html item?.html}
        </div>
        <footer>
            <CreatedUpdatedDates date_created={item?.date_created} date_updated={item?.date_updated} />
        </footer>
    </article>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>  
{/await}