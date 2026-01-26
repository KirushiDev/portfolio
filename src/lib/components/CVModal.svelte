<script>
    import { createEventDispatcher } from 'svelte';
    
    export let show = false;
    export let pdfUrl = '/CV_ELANKEETHAN_Kirushikesan_BUT1.pdf';
    
    const dispatch = createEventDispatcher();
    
    function closeModal() {
        dispatch('close');
    }
    
    function handleKeydown(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
    
    function handleBackdropClick() {
        closeModal();
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if show}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <div 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 transition-opacity"
        on:click={handleBackdropClick}
        role="dialog"
        aria-modal="true"
    >
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
        <div 
            class="bg-gray-900 rounded-lg w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl"
            on:click|stopPropagation
            role="document"
        >
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 class="text-xl font-bold text-white flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Mon CV
                </h2>
                <div class="flex items-center gap-3">
                    <!-- Download button -->
                    <a
                        href={pdfUrl}
                        download
                        class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Télécharger
                    </a>
                    <!-- Open in new tab -->
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Nouvel onglet
                    </a>
                    <!-- Close button -->
                    <button
                        on:click={closeModal}
                        class="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Fermer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- PDF Viewer -->
            <div class="flex-1 bg-gray-800 overflow-hidden">
                <iframe
                    src={pdfUrl}
                    title="CV - ELANKEETHAN Kirushikesan"
                    class="w-full h-full border-0"
                ></iframe>
            </div>
        </div>
    </div>
{/if}
