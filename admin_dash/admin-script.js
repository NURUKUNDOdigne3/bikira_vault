// ===== SIDEBAR NAVIGATION =====
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle sidebar on mobile
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
}

// Handle navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to clicked item
        link.closest('.nav-item').classList.add('active');

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
    });
});

// ===== NOTIFICATION PANEL =====
const notificationBtn = document.querySelector('.notification-btn');
const notificationPanel = document.querySelector('.notification-panel');
const closeBtn = document.querySelector('.close-btn');

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        notificationPanel.classList.toggle('active');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        notificationPanel.classList.remove('active');
    });
}

// Close notification panel when clicking outside
document.addEventListener('click', (e) => {
    if (!notificationPanel.contains(e.target) && !notificationBtn.contains(e.target)) {
        notificationPanel.classList.remove('active');
    }
});

// ===== USER DROPDOWN =====
const userBtn = document.querySelector('.user-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (userBtn && dropdownMenu) {
    userBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// ===== THEME TOGGLE =====
const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
    htmlElement.style.setProperty('--bg-primary', '#f5f5f5');
    htmlElement.style.setProperty('--bg-secondary', '#ffffff');
    htmlElement.style.setProperty('--bg-tertiary', '#f9f9f9');
    htmlElement.style.setProperty('--bg-light', '#f0f0f0');
    htmlElement.style.setProperty('--text-primary', '#1a1a1a');
    htmlElement.style.setProperty('--text-secondary', '#555555');
    htmlElement.style.setProperty('--text-tertiary', '#999999');
    htmlElement.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
    htmlElement.style.setProperty('--border-light', 'rgba(0, 0, 0, 0.05)');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = currentTheme === 'light';

        if (isLight) {
            // Switch to dark theme
            htmlElement.style.setProperty('--bg-primary', '#0f0f1e');
            htmlElement.style.setProperty('--bg-secondary', '#1a1a2e');
            htmlElement.style.setProperty('--bg-tertiary', '#16213e');
            htmlElement.style.setProperty('--bg-light', '#0d0d1a');
            htmlElement.style.setProperty('--text-primary', '#ffffff');
            htmlElement.style.setProperty('--text-secondary', '#b0b0c0');
            htmlElement.style.setProperty('--text-tertiary', '#808090');
            htmlElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
            htmlElement.style.setProperty('--border-light', 'rgba(255, 255, 255, 0.05)');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            htmlElement.style.setProperty('--bg-primary', '#f5f5f5');
            htmlElement.style.setProperty('--bg-secondary', '#ffffff');
            htmlElement.style.setProperty('--bg-tertiary', '#f9f9f9');
            htmlElement.style.setProperty('--bg-light', '#f0f0f0');
            htmlElement.style.setProperty('--text-primary', '#1a1a1a');
            htmlElement.style.setProperty('--text-secondary', '#555555');
            htmlElement.style.setProperty('--text-tertiary', '#999999');
            htmlElement.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
            htmlElement.style.setProperty('--border-light', 'rgba(0, 0, 0, 0.05)');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Searching for:', searchTerm);
        // Add your search logic here
    });
}

// ===== ACTION BUTTONS =====
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.textContent.trim();
        console.log('Action triggered:', action);

        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(48, 164, 244, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===== CHART BUTTONS =====
const chartButtons = document.querySelectorAll('.chart-controls .btn-small');
chartButtons.forEach(button => {
    button.addEventListener('click', () => {
        chartButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        console.log('Chart period changed to:', button.textContent);
    });
});

// ===== DROPDOWN MENU LINKS =====
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.classList.contains('logout')) {
            e.preventDefault();
            const action = link.textContent.trim();
            console.log('Dropdown action:', action);
        }
    });
});

// ===== LOGOUT =====
const logoutLink = document.querySelector('.dropdown-menu .logout');
if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            console.log('Logging out...');
            // window.location.href = '/logout';
        }
    });
}

// ===== TABLE INTERACTIONS =====
const tableRows = document.querySelectorAll('.data-table tbody tr');
tableRows.forEach(row => {
    row.addEventListener('click', () => {
        const userName = row.querySelector('.user-cell span').textContent;
        console.log('Row clicked:', userName);
    });
});

// ===== RESPONSIVE HANDLING =====
function handleResize() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
        if (notificationPanel) {
            notificationPanel.classList.remove('active');
        }
    }
}

window.addEventListener('resize', handleResize);

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stat cards
document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// ===== RIPPLE EFFECT CSS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ===== NOTIFICATION ANIMATIONS =====
function addNotificationAnimation() {
    const notifications = document.querySelectorAll('.notification-item');
    notifications.forEach((notification, index) => {
        notification.style.animation = `slideIn 0.4s ease-out ${index * 0.1}s forwards`;
        notification.style.opacity = '0';
    });
}

const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(slideInStyle);

addNotificationAnimation();

// ===== MOCK DATA UPDATES =====
function updateStats() {
    // Update stat cards with random values for demonstration
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach((stat, index) => {
        // Don't update on first load, only on refresh
        const originalValue = stat.textContent;
        
        stat.addEventListener('click', () => {
            // Animate value change
            stat.style.animation = 'none';
            setTimeout(() => {
                stat.style.animation = 'fadeInUp 0.3s ease-out';
            }, 10);
        });
    });
}

updateStats();

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }

    // Esc to close panels
    if (e.key === 'Escape') {
        notificationPanel.classList.remove('active');
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
        sidebar.classList.remove('active');
    }
});

// ===== NOTIFICATION BADGE UPDATE =====
function updateNotificationBadge(count) {
    const badge = document.querySelector('.notification-btn .badge');
    if (badge) {
        badge.textContent = count;
        badge.style.animation = 'pulse 0.3s ease-out';
    }
}

// ===== INITIAL ANIMATIONS =====
window.addEventListener('load', () => {
    // Animate welcome section
    const welcomeSection = document.querySelector('.welcome-section');
    if (welcomeSection) {
        welcomeSection.style.animation = 'fadeInUp 0.6s ease-out';
    }

    // Animate stats grid
    document.querySelectorAll('.stat-card').forEach((card, index) => {
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});

console.log('✅ Admin Dashboard Loaded Successfully');
