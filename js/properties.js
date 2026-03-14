// NOVVI Properties - JavaScript Interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Scroll behavior - hide search bar on scroll down, show on scroll up
  let lastScrollY = window.scrollY;
  let ticking = false;
  const searchBarWrapper = document.getElementById('searchBarWrapper');
  const scrollThreshold = 80;
  const scrollDeltaThreshold = 10; // Min pixels to avoid blink on small scroll jitters

  window.addEventListener('scroll', function() {
    if (!searchBarWrapper) return;
    if (!ticking) {
      requestAnimationFrame(function() {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;
        
        if (currentScrollY > scrollThreshold) {
          if (scrollDelta > scrollDeltaThreshold) {
            // Scrolling down - hide search bar
            searchBarWrapper.classList.add('search-bar-hidden');
            lastScrollY = currentScrollY;
          } else if (scrollDelta < -scrollDeltaThreshold) {
            // Scrolling up - show search bar
            searchBarWrapper.classList.remove('search-bar-hidden');
            lastScrollY = currentScrollY;
          }
        } else {
          // Near top - always show search bar
          searchBarWrapper.classList.remove('search-bar-hidden');
          lastScrollY = currentScrollY;
        }
        
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      }
    });
  }

  // Cookie banner - Accept All
  const acceptCookiesBtn = document.getElementById('acceptCookies');
  const cookieBanner = document.getElementById('cookieBanner');
  
  if (acceptCookiesBtn && cookieBanner) {
    acceptCookiesBtn.addEventListener('click', function() {
      cookieBanner.classList.add('hidden');
      document.body.style.paddingBottom = '0';
      document.body.classList.add('cookies-accepted');
      localStorage.setItem('cookiesAccepted', 'true');
    });
    
    // Don't show if already accepted
    if (localStorage.getItem('cookiesAccepted')) {
      cookieBanner.classList.add('hidden');
      document.body.classList.add('cookies-accepted');
    } else {
      document.body.style.paddingBottom = '80px';
    }
  }

  // Filter tabs
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      filterTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // View toggle (grid/list)
  const viewToggles = document.querySelectorAll('.view-toggle');
  const propertyGrid = document.getElementById('propertyGrid');
  
  viewToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      viewToggles.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      if (this.querySelector('.fa-list')) {
        propertyGrid.classList.add('list-view');
      } else {
        propertyGrid.classList.remove('list-view');
      }
    });
  });

  // Favorite heart toggle
  document.querySelectorAll('.action-icon').forEach(btn => {
    if (btn.querySelector('.fa-heart')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('text-red-500');
      });
    }
  });

  // Pagination buttons
  document.querySelectorAll('.pagination-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      if (!this.classList.contains('active')) {
        document.querySelectorAll('.pagination-btn').forEach(b => {
          b.classList.remove('active');
          b.classList.remove('bg-novvi-dark');
          b.classList.remove('text-white');
        });
        if (!this.querySelector('i')) {
          this.classList.add('active', 'bg-novvi-dark', 'text-white');
        }
      }
    });
  });
});
