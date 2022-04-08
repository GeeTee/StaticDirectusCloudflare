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
<Nav {path} />
<slot />