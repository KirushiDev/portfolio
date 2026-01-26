<script>
    import { onMount } from 'svelte';
    
    let isScrolled = false;
    let isMobileMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            isScrolled = window.scrollY > 50;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            isMobileMenuOpen = false;
        }
    }

    function handleLogoClick(e) {
        e.preventDefault();
        scrollToSection('hero');
    }
</script>

<nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'}"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a
                    href="/"
                    class="text-white font-bold text-xl cursor-pointer"
                    on:click={handleLogoClick}
                >
                    Portfolio.
                </a>
            </div>

            <!-- Navigation - Desktop -->
            <div class="hidden md:block">
                <div class="ml-10 flex items-center space-x-8">
                    <button
                        on:click={() => scrollToSection('about')}
                        class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        À propos
                    </button>
                    <button
                        on:click={() => scrollToSection('path')}
                        class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Parcours
                    </button>
                    <button
                        on:click={() => scrollToSection('skills')}
                        class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Compétences
                    </button>
                    <button
                        on:click={() => scrollToSection('projects')}
                        class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Projets
                    </button>
                    <button
                        on:click={() => scrollToSection('contact')}
                        class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        Contact
                    </button>
                    <a
                        href="/CV_ELANKEETHAN_Kirushikesan_BUT1.pdf"
                        download
                        class="bg-[#2563eb] hover:bg-[#2563eb]/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        CV
                    </a>
                </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button
                    on:click={() => isMobileMenuOpen = !isMobileMenuOpen}
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                    aria-expanded="false"
                >
                    <span class="sr-only">Ouvrir le menu principal</span>
                    <!-- Icon when menu is closed -->
                    <svg
                        class="{isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <!-- Icon when menu is open -->
                    <svg
                        class="{isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    <div class="{isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-900 shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
                on:click={() => scrollToSection('about')}
                class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
                À propos
            </button>
            <button
                on:click={() => scrollToSection('path')}
                class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
                Parcours
            </button>
            <button
                on:click={() => scrollToSection('skills')}
                class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
                Compétences
            </button>
            <button
                on:click={() => scrollToSection('projects')}
                class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
                Projets
            </button>
            <button
                on:click={() => scrollToSection('contact')}
                class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
                Contact
            </button>
            <a
                href="/CV_ELANKEETHAN_Kirushikesan_BUT1.pdf"
                download
                class="bg-[#2563eb] hover:bg-[#2563eb]/80 text-white block px-3 py-2 rounded-md text-base font-medium mt-2 flex items-center justify-center"
                on:click={() => isMobileMenuOpen = false}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
                Télécharger CV
            </a>
        </div>
    </div>
</nav>
