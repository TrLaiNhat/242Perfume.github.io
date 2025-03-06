document.addEventListener('DOMContentLoaded', function() {
// Select all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Add click event listener to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Find the link within the clicked menu item
        const link = this.querySelector('a');
        
        // Check if link exists before navigating
        if (link && link.href) {
            // Navigate to the link's href
            window.location.href = link.href;
        }
    });

    // Optional: Add hover and active state styling
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f0f0f0';
        this.style.cursor = 'pointer';
    });

    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});

// Highlight active menu item based on current page
const currentPage = window.location.pathname.split('/').pop();
menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    }
});
});