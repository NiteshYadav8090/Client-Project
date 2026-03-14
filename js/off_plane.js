// NOVVI Properties - Interactive Scripts

// Property data
const properties = [
  {
    name: "Mercedes-Benz Places - Binghatti City",
    location: "Business Bay, Dubai",
    price: "AED 5.10M",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1512453979798-5ea266f6440e?w=600&h=400&fit=crop"]
  },
  {
    name: "Emaar Residence By Imtiaz",
    location: "Al Sufouh 2, Dubai",
    price: "AED 4.5M",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"]
  },
  {
    name: "Sana Grande",
    location: "Sana Island 2",
    price: "AED 3.8M",
    images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"]
  },
  {
    name: "Grove",
    location: "Dubai Hills Estate",
    price: "AED 2.9M",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"]
  },
  {
    name: "Sams The Legacy",
    location: "Downtown Dubai",
    price: "AED 6.2M",
    images: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop"]
  },
  {
    name: "Elara View",
    location: "Dubai Marina",
    price: "AED 4.1M",
    images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"]
  },
  {
    name: "Marina Heights",
    location: "Dubai Marina",
    price: "AED 3.5M",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop"]
  },
  {
    name: "Palm Residence",
    location: "Palm Jumeirah",
    price: "AED 8.9M",
    images: ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop"]
  },
  {
    name: "Creek Vista",
    location: "Dubai Creek Harbour",
    price: "AED 5.7M",
    images: ["https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"]
  }
];

// Generate property cards
function renderPropertyCards() {
  const grid = document.getElementById('propertyGrid');
  if (!grid) return;

  grid.innerHTML = properties.map((prop, index) => `
    <article class="property-card bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer" data-index="${index}">
      <div class="property-image-wrapper relative aspect-[4/3]">
        <img src="${prop.images[0]}" alt="${prop.name}" class="w-full h-full object-cover" data-current="0">
        <button class="carousel-arrow absolute left-2 top-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 z-10" data-index="${index}" data-dir="prev" aria-label="Previous image">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button class="carousel-arrow absolute right-2 top-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 z-10" data-index="${index}" data-dir="next" aria-label="Next image">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
        <div class="absolute top-3 right-3 flex gap-2 z-10">
          <button class="card-action-icon heart-btn w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-600" data-index="${index}" aria-label="Add to favorites">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
          <button class="card-action-icon w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-gray-600 hover:text-novvi-beige" aria-label="Share">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
          </button>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-center">
        <h3 class="font-semibold text-gray-800 text-lg mb-1">${prop.name}</h3>
        <p class="text-gray-500 text-sm mb-2">${prop.location}</p>
        <p class="font-semibold text-novvi-beige text-lg">${prop.price}</p>
      </div>
    </article>
  `).join('');

  // Attach event listeners
  attachCardListeners();
}

// Carousel navigation
function attachCardListeners() {
  // Carousel arrows
  document.querySelectorAll('.carousel-arrow').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.dataset.index);
      const dir = btn.dataset.dir;
      const card = document.querySelector(`.property-card[data-index="${index}"]`);
      const img = card.querySelector('.property-image-wrapper img');
      const current = parseInt(img.dataset.current) || 0;
      const total = properties[index].images.length;
      let next = dir === 'next' ? (current + 1) % total : (current - 1 + total) % total;
      img.src = properties[index].images[next];
      img.dataset.current = next;
    });
  });

  // Heart/favorite toggle
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('heart-active');
      const svg = btn.querySelector('svg');
      if (btn.classList.contains('heart-active')) {
        svg.setAttribute('fill', 'currentColor');
      } else {
        svg.removeAttribute('fill');
      }
    });
  });
}

// Language dropdown
document.querySelector('.language-dropdown')?.addEventListener('click', (e) => {
  e.stopPropagation();
  document.querySelector('.language-menu')?.classList.toggle('hidden');
});

document.addEventListener('click', () => {
  document.querySelector('.language-menu')?.classList.add('hidden');
});

// Bedroom tags - toggle active
document.querySelectorAll('.bedroom-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.bedroom-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
  });
});

// View toggle (grid/list)
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const grid = document.getElementById('propertyGrid');
    const cards = grid?.querySelectorAll('.property-card');
    if (btn.getAttribute('aria-label') === 'List view') {
      grid?.classList.add('list-view', 'flex', 'flex-col', 'gap-6');
      grid?.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
      cards?.forEach(card => card.classList.add('flex', 'flex-row', 'max-w-full'));
    } else {
      grid?.classList.remove('list-view', 'flex', 'flex-col', 'gap-6');
      grid?.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3');
      cards?.forEach(card => card.classList.remove('flex', 'flex-row', 'max-w-full'));
    }
  });
});

// Pagination
document.querySelectorAll('.pagination-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.classList.contains('active')) return;
    if (btn.querySelector('svg')) return; // Skip arrow buttons for now
    document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active', 'bg-novvi-beige', 'text-white'));
    document.querySelectorAll('.pagination-btn').forEach(b => b.classList.add('hover:bg-gray-100'));
    btn.classList.add('active', 'bg-novvi-beige', 'text-white');
    btn.classList.remove('hover:bg-gray-100');
  });
});

// Cookie banner
function acceptCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}

function declineCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'false');
}

if (localStorage.getItem('cookiesAccepted')) {
  document.getElementById('cookieBanner').style.display = 'none';
}

// Mobile menu toggle
document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu?.classList.toggle('hidden');
});

// Close mobile menu when clicking overlay
document.getElementById('mobileMenu')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.add('hidden');
  }
});

// Initialize
document.addEventListener('DOMContentLoaded', renderPropertyCards);
