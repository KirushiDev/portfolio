<script>
    export let date;
    export let title;
    export let description;
    export let isLast = false;
</script>

<div class="relative flex items-start">
    <!-- Vertical line -->
    {#if !isLast}
        <div class="absolute left-4 sm:left-5 top-5 sm:top-6 w-0.5 h-full bg-blue-500"></div>
    {/if}

    <!-- Timeline point -->
    <div class="z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 shadow-md flex-shrink-0">
        <div class="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"></div>
    </div>

    <!-- Content -->
    <div class="ml-4 sm:ml-6 pb-8">
        <span class="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-full mb-2">
            {date}
        </span>
        <h3 class="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <div class="text-gray-300 text-sm sm:text-base">
            {@html description}
        </div>
    </div>
</div>
