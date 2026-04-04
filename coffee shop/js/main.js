document.addEventListener('DOMContentLoaded', () => {
    
    /* Sticky Navbar */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    /* Scroll Animations */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));
    
    /* Signature Menu Tab Filter */
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('.product-card');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            tab.classList.add('active');
            
            const category = tab.getAttribute('data-category');
            
            productCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(' ');
                
                if (category === 'all' || cardCategories.includes(category)) {
                    card.style.display = 'block';
                    // Trigger a small reflow to allow opacity animation if we wanted to
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                }
            });
        });
    });
    
    /* Mobile Menu Toggle */
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Quick inline style update for ease of use in mobile
    // Ideally this would be class based, but since the design doc says 'Transforms to icon-only'
    // and 'Hidden on mobile (hamburger instead)' we handle a simple drop-down.
    mobileToggle.addEventListener('click', () => {
        const isExpanded = navLinks.style.display === 'flex';
        
        if (isExpanded) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = window.scrollY > 80 ? 'var(--color-black)' : '#FAFAF8';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid var(--color-beige)';
        }
    });

    // Handle navbar background color update if menu is open and user scrolls
    window.addEventListener('scroll', () => {
        if (navLinks.style.display === 'flex' && window.innerWidth < 768) {
             navLinks.style.backgroundColor = window.scrollY > 80 ? 'var(--color-black)' : '#FAFAF8';
        }
    });

    // Close mobile menu on click link
    const individualLinks = document.querySelectorAll('.nav-link');
    individualLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navLinks.style.display = 'none';
            }
        });
    });
});
