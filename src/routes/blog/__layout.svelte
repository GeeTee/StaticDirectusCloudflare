<script context="module">
    export const load = async ({fetch}) => {
        const {blog} = await (await fetch('/api/blog')).json()
        // console.log('loading', blog)
        return {
            stuff: {
                blog
            }
        }
    }
</script>
<script>

</script>

<slot />