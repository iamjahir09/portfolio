document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        html.setAttribute('data-bs-theme', 'light');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            html.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Projects Filter
    const filterItems = document.querySelectorAll('.filter-item');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all filter items
            filterItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked filter item
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectItems.forEach(project => {
                if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    if (window.innerWidth > 992) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Cursor hover effect
        const hoverElements = document.querySelectorAll('a, button, .project-card, .nav-link, .form-control, .social-icon, .filter-item, .tech-item');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', function() {
                cursor.classList.add('hovered');
            });
            
            el.addEventListener('mouseleave', function() {
                cursor.classList.remove('hovered');
            });
        });
    } else {
        cursor.style.display = 'none';
    }

    // Current Year in Footer
    

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Section Animation
    gsap.from('.hero-content h4', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5
    });
    
    gsap.from('.hero-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.7
    });
    
    gsap.from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.9
    });
    
    gsap.from('.hero-description', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1.1
    });
    
    gsap.from('.hero-buttons', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1.3
    });
    
    gsap.from('.social-icons', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 1.5
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        delay: 0.8
    });
    
    gsap.from('.shape-1', {
        duration: 2,
        x: -50,
        y: -50,
        opacity: 0,
        delay: 0.5
    });
    
    gsap.from('.shape-2', {
        duration: 2,
        x: 50,
        y: 50,
        opacity: 0,
        delay: 0.7
    });
    
    gsap.from('.shape-3', {
        duration: 2,
        x: 50,
        opacity: 0,
        delay: 0.9
    });
    
    // Scroll Trigger Animations
    gsap.utils.toArray('.section-header').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1
        });
    });
    
    // Animate progress bars
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        ScrollTrigger.create({
            trigger: bar,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(bar, {
                    width: width,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
    
    // Animate circle charts
    document.querySelectorAll('.chart-circle').forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const color = circle.getAttribute('data-color');
        
        ScrollTrigger.create({
            trigger: circle,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(circle, {
                    '--percent': percent,
                    duration: 1.5,
                    ease: 'power3.out'
                });
            }
        });
    });
});