/*// main.js

// Load a single HTML file as string
async function loadHTML(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}`);
    return await res.text();
}

// Replace data-component tags with actual component content
async function injectComponents(container) {
    const componentHolders = container.querySelectorAll('[data-component]');

    for (const holder of componentHolders) {
        const path = holder.getAttribute('data-component');
        const html = await loadHTML(path);
        holder.outerHTML = html; // Replace placeholder with actual component
    }
}

// Load page (e.g., home.html) and render its components
async function renderPage(pagePath = './pages/home.html') {
    const app = document.getElementById('app');
    try {
        const pageHTML = await loadHTML(pagePath);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pageHTML;

        await injectComponents(tempDiv); // Inject all components
        app.innerHTML = tempDiv.innerHTML; // Render to the page
    } catch (err) {
        app.innerHTML = `<p>Error: ${err.message}</p>`;
    }
}

renderPage(); // By default, load home.html  */





console.log("main.js loaded");

// Normalize relative paths
function normalizePath(path) {
    const cleanPath = path.replace(/^\.?\//, '').replace(/\.\.\//g, '');
    return `/${cleanPath}`;
}

// Load HTML content from a given path
async function loadHTML(path) {
    const normalizedPath = normalizePath(path);
    console.log(`Loading: ${normalizedPath}`);
    const res = await fetch(normalizedPath);
    if (!res.ok) throw new Error(`Failed to load ${normalizedPath}`);
    return await res.text();
}

// Inject components into the page
async function injectComponents(container) {
    const componentHolders = container.querySelectorAll('[data-component]');
    for (const holder of componentHolders) {
        const path = holder.getAttribute('data-component');
        console.log(`Injecting component: ${path}`);
        try {
            const html = await loadHTML(path);
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Replace placeholder with actual component
            holder.outerHTML = tempDiv.innerHTML;
        } catch (err) {
            console.error(`Failed to inject component ${path}:`, err);
            holder.outerHTML = `<div class="error">Component load error: ${err.message}</div>`;
        }
    }
}

// Initialize components only if they exist on the page
function initComponents() {
    // Current year update
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Sidebar toggle
    const showIcon = document.getElementById('show-icon');
    const closeIcon = document.getElementById('close-icon');
    const sidebar = document.getElementById('sidebar');
    if (showIcon && closeIcon && sidebar) {
        showIcon.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
        });
        closeIcon.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });
    }

    // Image slider
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    if (slides.length > 0 && leftArrow && rightArrow) {
        let current = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('opacity-0', 'z-0');
                    slide.classList.add('opacity-100', 'z-10');
                } else {
                    slide.classList.add('opacity-0', 'z-0');
                    slide.classList.remove('opacity-100', 'z-10');
                }
            });
        }

        rightArrow.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        leftArrow.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });

        showSlide(current);
    }

    // Shop products
    if (document.getElementById('post')) {
        renderShopProductsList();
    }

    // Price range filter
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    if (minSlider && maxSlider) {
        priceRangeFilter();
    }


    //sticky navbar

    function initStickyNavbar() {
        const header = document.getElementById('siteHeader');
        const nav = document.getElementById('mainNav');
        if (!nav || !header) return;

        const navStart = nav.offsetTop;

        function setSticky(isSticky) {
            if (isSticky) {
                nav.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md');
                header.classList.add('-translate-y-full');
            } else {
                nav.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'shadow-md');
                header.classList.remove('-translate-y-full');
            }
        }

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || window.pageYOffset;
            setSticky(scrollY >= navStart);
        });
    }

    // Call it initially
    initStickyNavbar();

    // OPTIONAL: if you're using a router (like in React or vanilla SPA),
    // call `initStickyNavbar()` again after the content loads.
}

// Render student list
function renderShopProductsList() {
    const postData = [{
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/tunic-dress-scaled-540x540.jpg',
            title: "tunic dress",
            category: "dresses",
            price: "40"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/skinny-jeans-scaled-540x540.jpg',
            title: "kinny jeans",
            category: "fashion",
            price: "70"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/denim-bag-540x540.jpg',
            title: "Denim Bag",
            category: "accessiries",
            price: "54"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/wood-heel-540x540.jpg',
            title: "wood heel",
            category: "accessories",
            price: "58"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/belted-dress-scaled-540x540.jpg',
            title: "related dress",
            category: "dress",
            price: "50"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/isabelle-skirt-scaled-540x540.jpg',
            title: "isabelle skirt",
            category: "pants & jeans",
            price: "150"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/curzon-culotte-scaled-540x540.jpg',
            title: "CURZON CULOTTE",
            category: "dresses",
            price: "32"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/florence-point-2-scaled-540x540.jpg',
            title: "florence point",
            category: "sccerrories",
            price: "49"
        },
        {
            imgLink: 'https://cheerup2.theme-sphere.com/wp-content/uploads/2016/05/tilly-bag-scaled-540x540.jpg',
            title: "tilly bag",
            category: "accessories",
            price: 42
        },
    ];

    const postDiv = document.getElementById("post");
    if (!postDiv) return;

    const html = postData.map(data => {
        return `
            <div class="flex flex-col space-y-1 items-center justify-center">
                <div class="relative z-10 group overflow-hidden">
                    <a href="#" class="w-full">
                        <img src="${data.imgLink}" alt="${data.title}">
                        <span class="absolute group-hover:opacity-100 group-active:bg-shopBgClr opacity-0 transition duration-300 ease-in-out z-20 bg-shopBgClr text-white bottom-[0%] text-center w-full py-3 font-semibold tracking-[1px] text-[12px] uppercase">add to cart</span>
                    </a>
                </div>
                <a href="#" class="pt-3 text-md font-bold uppercase tracking-[1px]">${data.title}</a>
                <a href="#" class="text-[10px] tracking-[1px] uppercase text-gray-300">${data.category}</a>
                <p class="text-shopClr font-semibold">$${data.price}</p> 
            </div>
        `;
    }).join("");

    postDiv.innerHTML = html;
    console.log("Shop products rendered successfully");
}

// Price range filter
function priceRangeFilter() {
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const progress = document.getElementById('progress');
    const filterBtn = document.getElementById('filter-btn');

    // Set initial progress bar
    updateProgress();

    minSlider.addEventListener('input', function() {
        if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
            minSlider.value = maxSlider.value;
        }
        updateProgress();
    });

    maxSlider.addEventListener('input', function() {
        if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
            maxSlider.value = minSlider.value;
        }
        updateProgress();
    });

    function updateProgress() {
        minPrice.textContent = minSlider.value;
        maxPrice.textContent = maxSlider.value;

        progress.style.left = minSlider.value + '%';
        progress.style.width = (maxSlider.value - minSlider.value) + '%';
    }

    filterBtn.addEventListener('click', function() {
        filterBtn.classList.add('bg-shopBgClr', 'scale-95');

        alert(`Filter applied: $${minSlider.value} - $${maxSlider.value}`);
    });
}

// Add router navigation to links
function addRouterLinks() {
    document.querySelectorAll('[data-link]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const path = this.getAttribute('href');
            window.history.pushState({}, '', path);
            router();
        });
    });
}

// Routing logic
function router() {
    const path = window.location.pathname;
    const routes = {
        '/': '/pages/home.html',
        '/index.html': '/pages/home.html',
        '/pages/home.html': '/pages/home.html',
        '/pages/feature.html': '/pages/feature.html',
        '/pages/shop.html': '/pages/shop.html',
        '/pages/travel.html': '/pages/travel.html'
    };
    renderPage(routes[path] || routes['/']);
}

// Render a page and initialize everything
async function renderPage(pagePath = '/pages/home.html') {
    const app = document.getElementById('app');
    if (!app) return;

    try {
        const normalizedPagePath = normalizePath(pagePath);
        const pageHTML = await loadHTML(normalizedPagePath);

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = pageHTML;

        // Inject all components recursively
        await injectComponents(tempDiv);

        // Render to DOM
        app.innerHTML = tempDiv.innerHTML;

        // Initialize components and router
        initComponents();
        addRouterLinks();

        console.log(`Page rendered: ${normalizedPagePath}`);
    } catch (err) {
        console.error('Render error:', err);
        app.innerHTML = `<div class="p-4 text-red-500">Error: ${err.message}</div>`;
    }
}

// Browser navigation handler
window.addEventListener('popstate', router);

// DOM ready entry point
document.addEventListener('DOMContentLoaded', function() {
    router();
});