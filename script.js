// 1. First, make sure your HTML has this exact structure:
/*
<section class="speakers" id="speakers">
    <div class="speakers-container">
        <!-- Dynamic content will go here -->
    </div>
</section>
*/

// 2. Updated Speakers Data with exact content from your HTML
const speakers = [
    {
        name: "Andrew Garfield",
        title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        bio: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
        image: "andrew.png"
    },
    {
        name: "Emma Stone",
        title: "Internet Hall of Fame Inductee",
        bio: "Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
        image: "emma.png"
    },
    {
        name: "Dane DeHaan",
        title: "Director of Art Centre Nabi and a board member of CC Korea",
        bio: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.",
        image: "dan.png"
    },
    {
        name: "Jammie Fox",
        title: "President of Young Pirates of Europe",
        bio: "European integration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
        image: "jammie.png"
    },
    {
        name: "Danis Leary",
        title: "Executive Director of the Wikimedia Foundation",
        bio: "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.",
        image: "denis.png"
    },
    {
        name: "Stan lee",
        title: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
        bio: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.",
        image: "stan.png"
    }
];

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