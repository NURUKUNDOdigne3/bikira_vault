const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetId = link.getAttribute('href').substring(1);
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        link.closest('.nav-item').classList.add('active');
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
        }
        
        // Scroll to top
        document.querySelector('.dashboard-container').scrollTop = 0;
    });
});

// ===== SIDEBAR TOGGLE =====
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu-toggle');
const sidebarToggle = document.querySelector('.sidebar-toggle');

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

// ===== SETTINGS MODAL =====
const settingsModal = document.getElementById('settingsModal');
const settingsLink = document.querySelector('a[href="#settings"]');
const modalClose = document.querySelector('.modal-close');

if (settingsLink) {
    settingsLink.addEventListener('click', (e) => {
        e.preventDefault();
        settingsModal.classList.add('active');
    });
}

if (modalClose) {
    modalClose.addEventListener('click', () => {
        settingsModal.classList.remove('active');
    });
}

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        settingsModal.classList.remove('active');
    }
});

// ===== ACTION CARDS =====
const actionCards = document.querySelectorAll('.action-card');
actionCards.forEach(card => {
    card.addEventListener('click', () => {
        const actionTitle = card.querySelector('h3').textContent;
        console.log('Action clicked:', actionTitle);
        
        // Show toast notification
        showToast(`${actionTitle} clicked!`);
    });
});

// ===== COLLECTION CARDS =====
const collectionCards = document.querySelectorAll('.collection-card');
collectionCards.forEach(card => {
    card.addEventListener('click', () => {
        const collectionName = card.querySelector('h3').textContent;
        console.log('Collection opened:', collectionName);
        showToast(`Opening ${collectionName}...`);
    });
});

// ===== FILE ITEM INTERACTIONS =====
const fileItems = document.querySelectorAll('.file-item');
fileItems.forEach(item => {
    item.addEventListener('click', () => {
        const fileName = item.querySelector('.file-info h4').textContent;
        console.log('File selected:', fileName);
        item.style.backgroundColor = 'rgba(48, 164, 244, 0.1)';
    });
});

// ===== FILE MENU BUTTONS =====
const fileMenus = document.querySelectorAll('.file-menu');
fileMenus.forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast('File menu opened');
    });
});

// ===== CATEGORY TABS =====
const categoryTabs = document.querySelectorAll('.category-tab');
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        categoryTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        const category = tab.getAttribute('data-category');
        console.log('Filtering by:', category);
        showToast(`Showing ${category}`);
    });
});

// ===== VIEW TOGGLE =====
const viewToggles = document.querySelectorAll('.view-toggle');
viewToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        viewToggles.forEach(t => t.classList.remove('active'));
        toggle.classList.add('active');
        
        const viewType = toggle.getAttribute('title');
        console.log('View changed to:', viewType);
        showToast(`Switched to ${viewType}`);
    });
});

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.querySelector('.search-container input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 0) {
            console.log('Searching for:', searchTerm);
        }
    });

    // Ctrl + K for search focus
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// ===== NOTIFICATIONS =====
const notificationBtn = document.querySelector('.notification-btn');
if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        showToast('You have 3 notifications');
    });
}

// ===== HELP BUTTON =====
const helpBtn = document.querySelector('.icon-btn[title="Help"]');
if (helpBtn) {
    helpBtn.addEventListener('click', () => {
        showToast('Help center coming soon!');
    });
}

// ===== LOGOUT =====
const logoutLink = document.querySelector('.sidebar-link.logout');
if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            console.log('Logging out...');
            showToast('Logging out...');
            // window.location.href = '/logout';
        }
    });
}

// ===== FAVORITE ITEMS =====
const favoriteItems = document.querySelectorAll('.favorite-item');
favoriteItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('h4').textContent;
        console.log('Opening favorite:', itemName);
        showToast(`Opening ${itemName}`);
    });
});

// ===== SHARED ITEMS =====
const sharedItems = document.querySelectorAll('.shared-item .btn');
sharedItems.forEach(btn => {
    btn.addEventListener('click', () => {
        showToast('Managing shared item...');
    });
});

// ===== SECURITY BUTTONS =====
const securityButtons = document.querySelectorAll('.security-card .btn');
securityButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.textContent.trim();
        console.log('Security action:', action);
        showToast(`${action} initiated`);
    });
});

// ===== ACTIVITY ITEMS =====
const activityItems = document.querySelectorAll('.activity-item');
activityItems.forEach(item => {
    item.addEventListener('click', () => {
        const activityTitle = item.querySelector('.activity-info h4').textContent;
        console.log('Activity details:', activityTitle);
        showToast(`Showing details for: ${activityTitle}`);
    });
});

// ===== COLLECTION ITEMS =====
const collectionItems = document.querySelectorAll('.collection-item .view-link');
collectionItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const collectionName = link.closest('.collection-item').querySelector('h3').textContent;
        console.log('Opening collection:', collectionName);
        showToast(`Opening ${collectionName}`);
    });
});

// ===== MANAGE BUTTONS =====
const manageButtons = document.querySelectorAll('.shared-item .btn');
manageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showToast('Opening share management...');
    });
});

// ===== UPGRADE STORAGE BUTTON =====
const upgradeBtn = document.querySelector('.btn-block');
if (upgradeBtn) {
    upgradeBtn.addEventListener('click', () => {
        console.log('Upgrade storage clicked');
        showToast('Redirecting to upgrade page...');
    });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: #333;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== TOAST ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOutDown {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ===== RESPONSIVE HANDLING =====
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// ===== ANIMATION ON LOAD =====
window.addEventListener('load', () => {
    // Animate storage bar
    const storageUsed = document.querySelector('.storage-used');
    if (storageUsed) {
        const width = storageUsed.style.width;
        storageUsed.style.width = '0%';
        setTimeout(() => {
            storageUsed.style.width = width;
        }, 100);
    }

    // Animate stats
    const stats = document.querySelectorAll('.storage-item');
    stats.forEach((stat, index) => {
        stat.style.animation = `fadeIn 0.6s ease ${index * 0.1}s both`;
    });
});

// ===== FAVORITE ICON TOGGLE =====
document.addEventListener('click', (e) => {
    if (e.target.closest('.favorite-item')) {
        console.log('Favorite toggled');
        showToast('Added to favorites!');
    }
});

console.log('✅ User Dashboard Loaded Successfully');
