<script>
    import TimelineItem from './TimelineItem.svelte';
    
    export let items;
</script>

<div class="py-4">
    {#each items as item, index}
        <TimelineItem
            date={item.date}
            title={item.title}
            description={item.description}
            isLast={index === items.length - 1}
        />
    {/each}
</div>
