<script>
    import { goto } from '$app/navigation';
    
    export let to;
    export let color;
    
    function handleClick() {
        goto(to);
    }
</script>

<button
    on:click={handleClick}
    class="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-md transition-colors duration-300 inline-flex items-center"
    style="border-color: {color}; border-width: 1px;"
>
    En savoir plus
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
    </svg>
</button>
