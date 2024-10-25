// Speakers Data
const speakers = [
    {
        name: "Sarah Johnson",
        title: "Senior Engineer at Google, Chrome Dev Tools Team",
        bio: "Leading developer tools innovation and web performance optimization",
        image: "/api/placeholder/120/120"
    },
    {
        name: "Michael Chen",
        title: "Creator of PopularJS Framework",
        bio: "Pioneer in modern JavaScript frameworks and web architecture",
        image: "/api/placeholder/120/120"
    },
    {
        name: "Emily Rodriguez",
        title: "Web Accessibility Expert",
        bio: "Advocate for inclusive web development and universal design",
        image: "/api/placeholder/120/120"
    },
    {
        name: "David Kim",
        title: "Security Engineer at Mozilla",
        bio: "Specializing in web security and browser technologies",
        image: "/api/placeholder/120/120"
    },
    {
        name: "Lisa Wang",
        title: "UX Engineering Lead at Apple",
        bio: "Bridging the gap between design and development",
        image: "/api/placeholder/120/120"
    },
    {
        name: "James Wilson",
        title: "Web Performance Consultant",
        bio: "Expert in optimization and scalable architecture",
        image: "/api/placeholder/120/120"
    }
];

// Populate Speakers
const speakersGrid = document.getElementById('speakersGrid');
speakers.forEach(speaker => {
    const speakerCard = document.createElement('div');
    speakerCard.className = 'speaker-card';
    speakerCard.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
        <div class="speaker-info">
            <h3>${speaker.name}</h3>
            <p class="speaker-title">${speaker.title}</p>
            <p>${speaker.bio}</p>
        </div>
    `;
    speakersGrid.appendChild(speakerCard);
});

// Mobile Menu
// Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav a');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});