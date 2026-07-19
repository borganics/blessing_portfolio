// ============================================
// PROGRESS BAR ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) navLinks.classList.remove('show');
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const typewriterElement = document.getElementById('typewriterText');
const phrases = [
    'Handle Administrative Tasks',
    'Focus on Patient Care',
    'Streamline Your Practice',
    'Reclaim Your Time',
    'Simplify Your Workflow'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeWriterEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
            typewriterTimeout = setTimeout(() => {
                isDeleting = true;
                typeWriterEffect();
            }, 2000);
            return;
        }
        typewriterTimeout = setTimeout(typeWriterEffect, 80);
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typewriterTimeout = setTimeout(typeWriterEffect, 400);
            return;
        }
        typewriterTimeout = setTimeout(typeWriterEffect, 40);
    }
}

setTimeout(typeWriterEffect, 800);

// ============================================
// GLOW TRAIL
// ============================================
const glowTrail = document.getElementById('glowTrail');
let glowTimeout;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 768) return;
    glowTrail.style.left = e.clientX + 'px';
    glowTrail.style.top = e.clientY + 'px';
    glowTrail.classList.add('active');

    clearTimeout(glowTimeout);
    glowTimeout = setTimeout(() => {
        glowTrail.classList.remove('active');
    }, 3000);
});

document.addEventListener('mouseleave', () => {
    glowTrail.classList.remove('active');
});

// ============================================
// CUSTOM CURSOR
// ============================================
const customCursor = document.getElementById('customCursor');
let cursorTimeout;

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
        customCursor.classList.add('active');

        clearTimeout(cursorTimeout);
        cursorTimeout = setTimeout(() => {
            customCursor.classList.remove('active');
        }, 2000);
    });

    document.addEventListener('mouseleave', () => {
        customCursor.classList.remove('active');
    });

    document.querySelectorAll('a, .btn, .work-new, .service-new, .testimonial-carousel-item, .tilt-card, .work-sample-item')
        .forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                customCursor.classList.remove('hover');
            });
        });
}

// ============================================
// GEOMETRIC SHAPES
// ============================================
function createGeometricShapes() {
    const container = document.getElementById('geometricShapes');
    if (!container) return;
    for (let i = 1; i <= 5; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        container.appendChild(shape);
    }
}
createGeometricShapes();

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    if (window.innerWidth < 768) return;

    const particleCount = 35;
    const colors = ['rgba(46,94,142,0.4)', 'rgba(46,94,142,0.2)', 'rgba(5,96,118,0.3)'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 10;
        const drift = (Math.random() - 0.5) * 200;
        const opacity = Math.random() * 0.3 + 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${Math.random() * 100}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --drift: ${drift}px;
            --opacity: ${opacity};
            animation-delay: ${delay}s;
        `;

        container.appendChild(particle);
    }
}

// ============================================
// 3D TILT
// ============================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.setProperty('--rotateX', rotateX + 'deg');
        card.style.setProperty('--rotateY', rotateY + 'deg');
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--rotateX', '0deg');
        card.style.setProperty('--rotateY', '0deg');
    });
});

// ============================================
// BUTTON RIPPLE
// ============================================
document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255,255,255,0.3);
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: width 0.6s ease, height 0.6s ease;
        `;
        this.appendChild(ripple);
        setTimeout(() => {
            ripple.style.width = '300px';
            ripple.style.height = '300px';
        }, 10);
        setTimeout(() => {
            ripple.remove();
        }, 700);
    });
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// STATS COUNTER
// ============================================
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const suffix = entry.target.getAttribute('data-suffix') || '';
            const duration = 2000;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(eased * target);
                entry.target.textContent = current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    entry.target.textContent = target + suffix;
                }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ============================================
// CASE STUDY MODAL
// ============================================
const caseStudies = {
    webinar: {
        title: "Webinar Launch – Skincare Formulation 101",
        subtitle: "Complete Trello-based launch system for a multi-team webinar",
        problem: "A webinar launch involved dozens of moving parts across multiple teams covering assets, marketing, tech setup, live day execution, and post-event follow-up, with no central system to track or coordinate any of it.",
        process: "Built a 5-column Trello board covering every phase of the launch from pre-launch assets to post-webinar follow-up. Created cards for every task, added checklists, assigned responsibilities, and attached key assets including speaker bio and headshots. Structured the board so the team could execute the entire launch without missing a single step.",
        result: "✅ A complete, ready-to-execute webinar launch system with all tasks visible, assigned, and trackable in one place.",
        tools: ["Trello", "Project Management", "Task Coordination"]
    },
    slack: {
        title: "Borganicskincare Team Workspace Setup",
        subtitle: "Full Slack workspace with communication guide",
        problem: "A growing team had no centralized communication system. Messages were scattered, updates were missed, and there was no structure for how the team should communicate or stay accountable.",
        process: "Built and organized a full Slack workspace with 6 dedicated channels covering HQ, client onboarding, formulation, marketing, logistics, and private team communication. Wrote and pinned a team communication guide covering threading rules, status updates, acknowledgement protocols, and daily check-in format. Set up a Canvas with a New Team Member Checklist for smooth onboarding. Ran daily team syncs via structured threaded check-ins.",
        result: "✅ A professional, fully organized communication system that keeps every team member on the same page.",
        tools: ["Slack", "Team Communication", "Onboarding"]
    },
    tracker: {
        title: "Project Tracking System",
        subtitle: "20-task tracker with colour coding and progress bars",
        problem: "A team managing 20 active tasks across multiple departments had no clear way to track progress, ownership, priorities, or deadlines. There was no visibility into what was done, overdue, or still pending.",
        process: "Built a 20-task project tracker from scratch with columns for Project ID, Task Name, Owner, Priority, Status, Due Date, and Days Remaining. Applied color-coded dropdown validation for task status: Completed, In Progress, Review, Not Started. Added conditional formatting to automatically highlight overdue tasks in red. Built an Overall Completion percentage column and visual progress bars for instant status reading.",
        result: "✅ A clean, fully functional project tracker that gives the entire team instant visibility into every task, owner, priority, and deadline, all in one sheet.",
        tools: ["Google Sheets", "Project Tracking", "Data Management"]
    }
};

const modalOverlay = document.getElementById('caseModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.work-new').forEach(card => {
    card.addEventListener('click', function () {
        const caseKey = this.dataset.case;
        const study = caseStudies[caseKey];
        if (!study) return;

        modalContent.innerHTML = `
            <h2>${study.title}</h2>
            <p class="modal-subtitle">${study.subtitle}</p>

            <div class="modal-section">
                <h3><i class="fas fa-exclamation-triangle" style="color:var(--primary);"></i> The Challenge</h3>
                <p>${study.problem}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-cogs" style="color:var(--primary);"></i> What I Did</h3>
                <p>${study.process}</p>
            </div>

            <div class="modal-section">
                <h3><i class="fas fa-chart-line" style="color:var(--primary);"></i> The Outcome</h3>
                <div class="modal-result">
                    <p>${study.result.replace(/\n/g, '<br>')}</p>
                </div>
            </div>

            <div class="modal-section" style="margin-bottom:0;">
                <h3><i class="fas fa-tools" style="color:var(--primary);"></i> Tools Used</h3>
                <div class="modal-tags">
                    ${study.tools.map(tool => `<span>${tool}</span>`).join('')}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// WORK SAMPLES AUTO CAROUSEL
// ============================================
const workSamplesTrack = document.getElementById('workSamplesTrack');
let workSamplesItems = workSamplesTrack.querySelectorAll('.work-sample-item');
let workSamplesIndex = 0;
let workSamplesInterval;
let workSamplesItemsPerView = 3;

function getWorkSamplesPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateWorkSamplesCarousel() {
    workSamplesItemsPerView = getWorkSamplesPerView();
    const total = workSamplesItems.length;
    const maxIndex = total - workSamplesItemsPerView;
    if (workSamplesIndex > maxIndex) workSamplesIndex = 0;
    if (workSamplesIndex < 0) workSamplesIndex = maxIndex;

    const gap = 24;
    const itemWidth = workSamplesItems[0]?.offsetWidth || 300;
    const offset = workSamplesIndex * (itemWidth + gap);
    workSamplesTrack.style.transform = `translateX(-${offset}px)`;
}

function nextWorkSamples() {
    workSamplesItemsPerView = getWorkSamplesPerView();
    const total = workSamplesItems.length;
    const maxIndex = total - workSamplesItemsPerView;
    if (workSamplesIndex + workSamplesItemsPerView >= maxIndex) {
        workSamplesIndex = 0;
    } else {
        workSamplesIndex += workSamplesItemsPerView;
    }
    updateWorkSamplesCarousel();
}

function startWorkSamplesAuto() {
    if (workSamplesInterval) clearInterval(workSamplesInterval);
    workSamplesInterval = setInterval(nextWorkSamples, 3500);
}

setTimeout(() => {
    updateWorkSamplesCarousel();
    startWorkSamplesAuto();
}, 100);

let workSamplesResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(workSamplesResizeTimeout);
    workSamplesResizeTimeout = setTimeout(() => {
        workSamplesItems = workSamplesTrack.querySelectorAll('.work-sample-item');
        updateWorkSamplesCarousel();
    }, 300);
});

const workSamplesWrapper = document.querySelector('.work-samples-carousel-wrapper');
workSamplesWrapper.addEventListener('mouseenter', () => {
    clearInterval(workSamplesInterval);
});
workSamplesWrapper.addEventListener('mouseleave', () => {
    startWorkSamplesAuto();
});

// ============================================
// TESTIMONIALS AUTO CAROUSEL
// ============================================
const track = document.getElementById('testimonialCarouselTrack');
const dotsContainer = document.getElementById('testimonialDots');
const items = track.querySelectorAll('.testimonial-carousel-item');
const totalItems = items.length;
let currentIndex = 0;
let autoSlideInterval;
let isTransitioning = false;

function getItemsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function createDots() {
    const itemsPerView = getItemsPerView();
    const totalDots = 3;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(i * itemsPerView);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }
}

function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    const itemsPerView = getItemsPerView();
    const maxIndex = totalItems - itemsPerView;
    currentIndex = Math.min(index, maxIndex);
    if (currentIndex < 0) currentIndex = 0;

    const gap = 30;
    const itemWidth = items[0].offsetWidth || 300;
    const offset = currentIndex * (itemWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    const dots = dotsContainer.querySelectorAll('.dot');
    const activeDotIndex = Math.floor(currentIndex / itemsPerView);
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === activeDotIndex);
    });

    setTimeout(() => {
        isTransitioning = false;
    }, 800);
}

function nextSlide() {
    const itemsPerView = getItemsPerView();
    const maxIndex = totalItems - itemsPerView;
    if (currentIndex + itemsPerView >= maxIndex) {
        goToSlide(0);
    } else {
        goToSlide(currentIndex + itemsPerView);
    }
}

function startAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
}

createDots();
startAutoSlide();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        createDots();
        goToSlide(currentIndex);
        resetAutoSlide();
    }, 300);
});

const carouselWrapper = document.querySelector('.testimonial-carousel-wrapper');
carouselWrapper.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});
carouselWrapper.addEventListener('mouseleave', () => {
    startAutoSlide();
});

// ============================================
// CONTACT FORM
// ============================================
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        const btn = this.querySelector('.btn');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
    });
}

// ============================================
// BACK TO TOP
// ============================================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// INITIALIZE PARTICLES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    let particleTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            const container = document.getElementById('particlesContainer');
            if (container) container.innerHTML = '';
            createParticles();
        }, 500);
    });
});

console.log('🏥 Ibeh Blessing · Medical Virtual Assistant Portfolio ready!');