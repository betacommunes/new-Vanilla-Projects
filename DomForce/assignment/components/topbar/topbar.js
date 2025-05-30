
        document.addEventListener('DOMContentLoaded', function() {
            // Get all dropdown elements
            const dropdowns = document.querySelectorAll('.dropdown');
            
            // Add click event listeners to each dropdown toggle
            dropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.dropdown-toggle');
                
                toggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Close all other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                        }
                    });
                    
                    // Toggle the current dropdown
                    dropdown.classList.toggle('active');
                });
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        });
 