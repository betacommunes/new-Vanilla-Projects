   document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.team-slider');
            const members = document.querySelectorAll('.team-member');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.slider-prev');
            const nextBtn = document.querySelector('.slider-next');
            
            let currentIndex = 0;
            const memberWidth = members[0].clientWidth;
            const totalMembers = members.length;
            
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * memberWidth}px)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Next button
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalMembers;
                updateSlider();
            });
            
            // Previous button
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalMembers) % totalMembers;
                updateSlider();
            });
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
            });
            
            // Auto slide (optional)
            let autoSlide = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalMembers;
                updateSlider();
            }, 5000);
            
            // Pause on hover
            slider.addEventListener('mouseenter', () => {
                clearInterval(autoSlide);
            });
            
            slider.addEventListener('mouseleave', () => {
                autoSlide = setInterval(() => {
                    currentIndex = (currentIndex + 1) % totalMembers;
                    updateSlider();
                }, 5000);
            });
            
            // Responsive adjustments
            window.addEventListener('resize', () => {
                const newMemberWidth = members[0].clientWidth;
                slider.style.transform = `translateX(-${currentIndex * newMemberWidth}px)`;
            });
        });