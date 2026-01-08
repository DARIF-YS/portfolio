/**
 * Portfolio Personnel - Développeur Web Senior
 * Script principal pour les fonctionnalités interactives
 */

// Données des projets (simulées, en réalité viendraient d'une API)
const projects = [
    {
        id: 1,
        title: "Plateforme E-commerce",
        description: "Développement d'une plateforme e-commerce complète avec panier, paiement sécurisé et interface d'administration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "Fullstack",
        year: "2023"
    },
    {
        id: 2,
        title: "Application de Gestion de Projets",
        description: "Application web pour la gestion de projets d'équipe avec tableaux Kanban, calendrier et suivi du temps.",
        technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
        category: "Frontend",
        year: "2023"
    },
    {
        id: 3,
        title: "SaaS Analytique",
        description: "Solution SaaS pour l'analyse de données en temps réel avec tableaux de bord personnalisables et rapports automatisés.",
        technologies: ["React", "Python", "Django", "Chart.js"],
        category: "Fullstack",
        year: "2022"
    },
    {
        id: 4,
        title: "Portfolio Artistique",
        description: "Création d'un portfolio en ligne pour un artiste avec galerie interactive, boutique en ligne et blog intégré.",
        technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
        category: "Frontend",
        year: "2022"
    },
    {
        id: 5,
        title: "Application Mobile Progressive",
        description: "Développement d'une PWA pour la réservation de services avec géolocalisation et notifications push.",
        technologies: ["Vue.js", "Firebase", "Service Workers", "IndexedDB"],
        category: "Frontend",
        year: "2021"
    },
    {
        id: 6,
        title: "API REST pour Service de Streaming",
        description: "Conception et développement d'une API RESTful sécurisée pour une plateforme de streaming vidéo.",
        technologies: ["Node.js", "Express", "JWT", "Redis"],
        category: "Backend",
        year: "2021"
    }
];

// Icônes pour les catégories de projets
const categoryIcons = {
    "Frontend": "bi-laptop",
    "Backend": "bi-server",
    "Fullstack": "bi-layers"
};

// Initialisation du portfolio lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initialisé');
    
    // Initialiser les composants
    initNavbar();
    initProjects();
    initContactForm();
    initScrollAnimations();
    
    // Ajouter la classe fade-in aux sections pour l'animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
});

/**
 * Initialisation de la navbar pour le défilement fluide
 */
function initNavbar() {
    // Fermer le menu hamburger sur mobile après un clic
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
    
    // Changer le style de la navbar au défilement
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
}

/**
 * Initialisation et affichage des projets
 */
function initProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    // Vider le conteneur
    projectsContainer.innerHTML = '';
    
    // Créer et insérer les cartes de projets
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

/**
 * Crée une carte Bootstrap pour un projet
 * @param {Object} project - Les données du projet
 * @returns {HTMLElement} - L'élément HTML de la carte
 */
function createProjectCard(project) {
    // Créer les badges de technologies
    const techBadges = project.technologies.map(tech => 
        `<span class="badge bg-primary tech-badge">${tech}</span>`
    ).join('');
    
    // Créer la carte
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4 mb-4';
    card.innerHTML = `
        <div class="card project-card h-100 border-0 shadow-sm">
            <div class="project-image rounded-top">
                <i class="bi ${categoryIcons[project.category] || 'bi-code-square'}"></i>
            </div>
            <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title fw-bold">${project.title}</h5>
                    <span class="badge bg-light text-dark">${project.year}</span>
                </div>
                <p class="card-text flex-grow-1">${project.description}</p>
                <div class="mb-3">
                    ${techBadges}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-auto">
                    <span class="badge bg-secondary">${project.category}</span>
                    <button class="btn btn-outline-primary btn-sm" onclick="viewProjectDetails(${project.id})">
                        Voir détails
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Affiche les détails d'un projet (simulé)
 * @param {number} projectId - L'ID du projet
 */
function viewProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        alert(`Détails du projet: ${project.title}\n\nDescription: ${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nCatégorie: ${project.category}\n\nAnnée: ${project.year}`);
    }
}

/**
 * Initialisation du formulaire de contact
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Validation et soumission du formulaire
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        // Vérifier la validité du formulaire
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }
        
        // Simuler l'envoi du formulaire
        simulateFormSubmission();
    });
}

/**
 * Simule l'envoi du formulaire de contact
 */
function simulateFormSubmission() {
    // Afficher un message de confirmation
    const submitButton = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Changer le texte du bouton
    submitButton.textContent = 'Envoi en cours...';
    submitButton.disabled = true;
    
    // Simuler un délai d'envoi
    setTimeout(() => {
        // Afficher un message de succès
        alert('Merci pour votre message! Je vous répondrai dans les plus brefs délais.');
        
        // Réinitialiser le formulaire
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').classList.remove('was-validated');
        
        // Réactiver le bouton
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

/**
 * Initialise les animations au défilement
 */
function initScrollAnimations() {
    // Animation simple des barres de compétences
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Les barres de progression sont déjà animées par Bootstrap
                // Nous pourrions ajouter une animation supplémentaire ici
                entry.target.style.transition = 'width 1.5s ease-in-out';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}

/**
 * Fonction utilitaire pour le défilement fluide vers les ancres
 */
function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    }
}

// Rendre les fonctions accessibles globalement si nécessaire
window.smoothScrollTo = smoothScrollTo;
window.viewProjectDetails = viewProjectDetails;