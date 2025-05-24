document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        mobileMenu.classList.toggle('active');
        
        // Toggle icon animation
        const iconSpans = this.querySelectorAll('.toggle__icon span');
        iconSpans.forEach((span, index) => {
            if (index === 0) {
                span.style.transform = mobileMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
            } else if (index === 1) {
                span.style.opacity = mobileMenu.classList.contains('active') ? '0' : '1';
            } else if (index === 2) {
                span.style.transform = mobileMenu.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
            }
        });
    });
    
    // Categories toggle (mobile only)
    const categoriesToggle = document.querySelector('.categories-toggle');
    if (categoriesToggle) {
        const categoriesDropdown = document.querySelector('.categories-dropdown');
        
        categoriesToggle.addEventListener('click', function() {
            this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
            categoriesDropdown.classList.toggle('active');
            
            // Toggle icon animation
            const iconSpans = this.querySelectorAll('.toggle__icon span');
            iconSpans.forEach((span, index) => {
                if (index === 0) {
                    span.style.transform = categoriesDropdown.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
                } else if (index === 1) {
                    span.style.opacity = categoriesDropdown.classList.contains('active') ? '0' : '1';
                } else if (index === 2) {
                    span.style.transform = categoriesDropdown.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
                }
            });
        });
    }
    
    // Mobile menu item toggle with plus icon
    const mobileMenuItems = document.querySelectorAll('.mobile-menu__list li');
    
    mobileMenuItems.forEach(item => {
        const link = item.querySelector('a');
        const plusIcon = link.querySelector('.menu-item-plus');
        const submenu = item.querySelector('.mobile-submenu');
        
        if (submenu) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                submenu.classList.toggle('active');
                
                // Toggle plus/minus icon
                if (submenu.classList.contains('active')) {
                    plusIcon.classList.remove('fa-plus');
                    plusIcon.classList.add('fa-minus');
                } else {
                    plusIcon.classList.remove('fa-minus');
                    plusIcon.classList.add('fa-plus');
                }
            });
        }
    });
    
    // Submenu toggle for mobile categories
    const dropdownItems = document.querySelectorAll('.dropdown__item.has-children');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        const submenu = item.querySelector('.dropdown__submenu');
        const plusIcon = item.querySelector('.dropdown__plus');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                e.preventDefault();
                submenu.classList.toggle('active');
                
                // Toggle plus/minus icon
                if (submenu.classList.contains('active')) {
                    plusIcon.classList.remove('fa-plus');
                    plusIcon.classList.add('fa-minus');
                } else {
                    plusIcon.classList.remove('fa-minus');
                    plusIcon.classList.add('fa-plus');
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar__left') && document.querySelector('.categories-dropdown')?.classList.contains('active')) {
            document.querySelector('.categories-dropdown').classList.remove('active');
            document.querySelector('.categories-toggle')?.setAttribute('aria-expanded', 'false');
            
            // Reset icon animation
            const iconSpans = document.querySelector('.categories-toggle')?.querySelectorAll('.toggle__icon span');
            if (iconSpans) {
                iconSpans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        }
        
        if (!e.target.closest('.navbar__right') && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            
            // Reset icon animation
            const iconSpans = mobileMenuToggle.querySelectorAll('.toggle__icon span');
            iconSpans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });
});