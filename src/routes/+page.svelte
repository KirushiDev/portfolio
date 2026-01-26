<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import sliderImage from '$lib/assets/images/slider.png';
    import profilePhoto from '$lib/assets/images/photo_profil.png';
    import Timeline from '$lib/components/Timeline.svelte';
    import SkillCard from '$lib/components/SkillCard.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import timelineItems from '$lib/data/timeline.js';
    import skills from '$lib/data/skills.js';
    import projects from '$lib/data/projects.js';

    // Handle hash navigation when component mounts
    onMount(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    });

    function scrollToAbout() {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }

    function handleSkillClick(skillId) {
        goto(`/${skillId}`);
    }
</script>

<div>
    <!-- Navbar -->
    <Navbar />
    
    <!-- Hero Section -->
    <div id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0">
            <img
                src={sliderImage}
                alt="Background"
                class="w-full h-full object-cover brightness-50"
            />
        </div>

        <div class="text-center z-10 px-4">
            <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight text-glow">
                ELANKEETHAN Kirushikesan
            </h1>
            <p class="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
                Étudiant & Apprenti développeur
            </p>
        </div>

        <!-- Arrow -->
        <div
            class="absolute bottom-10 cursor-pointer"
            on:click={scrollToAbout}
            on:keydown={(e) => e.key === 'Enter' && scrollToAbout()}
            role="button"
            tabindex="0"
        >
            <svg
                class="w-10 h-10 text-white bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 10l7 7 7-7"
                />
            </svg>
        </div>
    </div>

    <!-- About Section -->
    <div id="about" class="py-20 px-4 bg-gray-900">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10 text-center">
                À propos de moi
            </h2>
            <div class="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div class="w-48 h-48 flex-shrink-0">
                        <img
                            src={profilePhoto}
                            alt="Photo de profil"
                            class="w-full h-full object-cover rounded-full border-4 border-gray-700 shadow-lg"
                        />
                    </div>
                    <div class="flex-1">
                        <p class="text-gray-300 text-lg mb-6">
                            Je m'appelle ELANKEETHAN Kirushikesan et je
                            suis actuellement en deuxième année de BUT
                            informatique à{" "}
                            <a
                                href="https://iut.univ-gustave-eiffel.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-400 hover:underline"
                            >
                                l'IUT de Marne-la-vallée
                            </a>{" "}
                            en alternance chez{" "}
                            <a
                                href="https://dessinetonmeuble.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-blue-400 hover:underline"
                            >
                                Aryga
                            </a>
                            , une entreprise spécialisée dans la
                            conception de meubles sur mesure en ligne.
                        </p>
                        <p class="text-gray-300 text-lg">
                            Je suis passionné par le développement web
                            et j'aimerais poursuivre mes études en école
                            d'ingénieur à l'issue de mon BUT.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Path Section - Timeline -->
    <div id="path" class="py-20 px-4 bg-gray-800">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10 text-center">
                Mon Parcours
            </h2>
            <div class="bg-gray-700 p-8 rounded-lg shadow-lg">
                <Timeline items={timelineItems} />
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <div id="skills" class="py-20 px-4 bg-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10 text-center">
                Compétences
            </h2>
            <p class="text-gray-300 text-lg text-center mb-10 max-w-3xl mx-auto">
                Le BUT Informatique est structuré autour de 6
                compétences fondamentales qui représentent ma formation.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each skills as skill, index}
                    <SkillCard
                        id={skill.id}
                        title={skill.title}
                        color={skill.color}
                        description={skill.description}
                        icon={skill.icon}
                    />
                {/each}
            </div>
        </div>
    </div>

    <!-- Projects Section -->
    <div id="projects" class="py-20 px-4 bg-gray-800">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-4xl font-bold text-white mb-10 text-center">
                Mes Projets
            </h2>
            <p class="text-gray-300 text-lg text-center mb-10 max-w-3xl mx-auto">
                Découvrez une sélection de mes projets personnels et
                académiques
            </p>

            <!-- Projects -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each projects.filter((project) => project.id !== 'network-tps') as project}
                    <ProjectCard
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                        skillsInfo={project.skillsInfo}
                    />
                {/each}
            </div>
        </div>
    </div>

    <!-- Footer with contact section -->
    <div id="contact">
        <Footer />
    </div>
</div>
