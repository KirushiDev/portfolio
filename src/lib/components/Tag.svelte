<script>
    export let skill;
    export let linkable = true;
</script>

{#if linkable}
    <a
        href="/{skill.id}"
        class="px-2 py-1 text-xs font-semibold text-white rounded-full inline-block transition-transform hover:scale-105"
        style="background-color: {skill.color};"
    >
        {skill.title}
    </a>
{:else}
    <span
        class="px-2 py-1 text-xs font-semibold text-white rounded-full inline-block"
        style="background-color: {skill.color};"
    >
        {skill.title}
    </span>
{/if}
