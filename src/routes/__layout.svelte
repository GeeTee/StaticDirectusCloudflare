<script context="module">
    export const load = async ({url}) => {
        const path = url.pathname
        return {
            props: {
                path,
            }
        }
    }
</script>
<script>
    export let path
    import Nav from "$lib/partials/dom/Nav.svelte";
</script>
<div class="container">
<Nav {path} />
<slot />
</div>

<style>
    .container {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        max-width: 65rem;
    }
</style>