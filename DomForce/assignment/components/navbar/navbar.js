  
        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const categoriesToggle = document.getElementById('categoriesToggle');
            const menuToggle = document.getElementById('menuToggle');
            const categoriesSidebar = document.getElementById('categoriesSidebar');
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            const closeSidebar = document.getElementById('closeSidebar');
            const closeMobileMenu = document.getElementById('closeMobileMenu');
            const barsIcons = document.querySelectorAll('.fa-bars');
            const hasSubmenuItems = document.querySelectorAll('.has-submenu');
            
            // Toggle Categories Sidebar
            categoriesToggle.addEventListener('click', function() {
                categoriesSidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                toggleBarsIcons();
            });

            // Toggle Mobile Menu
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                overlay.classList.toggle('active');
                toggleBarsIcons();
            });

            // Close Sidebar
            closeSidebar.addEventListener('click', function() {
                categoriesSidebar.classList.remove('active');
                overlay.classList.remove('active');
                toggleBarsIcons();
            });

            // Close Mobile Menu
            closeMobileMenu.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                toggleBarsIcons();
            });

            // Close menus when clicking overlay
            overlay.addEventListener('click', function() {
                categoriesSidebar.classList.remove('active');
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                toggleBarsIcons();
            });

            // Toggle bars icons between bars and times
            function toggleBarsIcons() {
                const isAnyMenuOpen = categoriesSidebar.classList.contains('active') || 
                                     mobileMenu.classList.contains('active');
                
                barsIcons.forEach(icon => {
                    if (isAnyMenuOpen) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            }

            // Handle submenu toggle
            hasSubmenuItems.forEach(item => {
                item.addEventListener('click', function() {
                    const submenuId = this.id + 'Submenu';
                    const submenu = document.getElementById(submenuId);
                    submenu.classList.toggle('active');
                    this.classList.toggle('active');
                });
            });

            // Close menus when window is resized to desktop size
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    categoriesSidebar.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    overlay.classList.remove('active');
                    barsIcons.forEach(icon => {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    });
                }
            });
        });
   