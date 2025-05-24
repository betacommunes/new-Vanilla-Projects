// Function to load a component with its CSS
async function loadComponent(componentName, targetId) {
    try {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) {
            console.error(`Target element #${targetId} not found`);
            return;
        }

        // 1. Load HTML
        const htmlResponse = await fetch(`/components/${componentName}/${componentName}.html`);
        if (!htmlResponse.ok) throw new Error('Failed to load HTML');
        const html = await htmlResponse.text();
        
        // 2. Load CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = `/components/${componentName}/${componentName}.css`;
        document.head.appendChild(cssLink);
        
        // 3. Insert HTML
        targetElement.innerHTML = html;
        targetElement.classList.remove('component-loading');
        
    } catch (error) {
        console.error(`Error loading ${componentName}:`, error);
        document.getElementById(targetId).innerHTML = 
            `<div class="component-error">Failed to load ${componentName}</div>`;
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load components in order
    loadComponent('bar', 'bar');
    loadComponent('navbar', 'navbar');
});