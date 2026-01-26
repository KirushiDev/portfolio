<script>
    import LearnMoreButton from './LearnMoreButton.svelte';
    
    export let id;
    export let title;
    export let color;
    export let description;
    export let icon;

    function getBgColor() {
        return `background-color: ${color}`;
    }

    function getBorderColor() {
        return `border-color: ${color}`;
    }

    function isColorLight(hexColor) {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 155;
    }

    function getTextColor() {
        return isColorLight(color) ? 'color: #000000' : 'color: #ffffff';
    }
</script>

<div
    class="rounded-lg shadow-lg overflow-hidden border-2 flex flex-col h-full"
    style={getBorderColor()}
>
    <div class="p-4" style="{getBgColor()}; {getTextColor()}">
        <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold">{title}</h3>
            {#if icon}
                <div class="w-6 h-6">
                    <img
                        src={icon}
                        alt="{title} icon"
                        class="w-full h-full"
                        style="filter: brightness(0) invert(1)"
                    />
                </div>
            {/if}
        </div>
    </div>
    <div class="w-full p-4 bg-gray-800 text-gray-300 flex-grow flex flex-col">
        <p class="mb-auto">{description}</p>
        <div class="mt-4 flex justify-end">
            <LearnMoreButton to="/{id}" {color} />
        </div>
    </div>
</div>
