<script>
    export let path = ''
    const links = [
        {
            title: 'accueil',
            href: '/'
        },
        {
            title: 'blog',
            href: '/blog'
        },
    ]
</script>
<nav>
    {#each links as {title, href}}
         <a sveltekit:prefetch class:is-active={path === href} {href} {title}>{title}</a>
    {/each}
</nav>

<style>
    a {
        font-weight: bold;
        text-transform: uppercase;
        text-decoration: none;
        color: saddlebrown;
    }
    a:hover,
    a:focus {
        color: salmon;
    }
    a:not(:first-child) {
        margin-left: .5rem;
    }
    .is-active {
        color: sandybrown;
    }
</style>