<script>
    import Pagination from '../../UI/ArticlesPagination.svelte'

    // PROPS
    export let pagination = {}
    export let itemId = null


    // CLASSES CSS
    let classBase = ['item']
    let classL = undefined
    
    for (const key in $$restProps) {
        if (!classBase.includes(key))
        {classBase.push(key)}
    }
    // console.log('classBase in Article : ', {classBase})
    if (classBase.length > 1) {classL = classBase.join(' ')}
    if (classBase.length === 1) {classL = classBase[0]}
</script> 

{#if Object.keys(pagination).length > 0}
     <Pagination {pagination} {itemId} />
{/if} 

<article
class={classL}
>
    {#if $$slots.header}
         <header>
             <slot name="header" />
         </header>
    {/if}
    <div class="content">
        <slot>Mon content</slot>
    </div>
    {#if $$slots.footer}
    <footer>
        <slot name="footer"></slot>
    </footer>
    {/if}
</article>

{#if Object.keys(pagination).length > 0}
     <Pagination {pagination} {itemId} />
{/if}

