document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const cursorGlow = document.getElementById('cursorGlow');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    themeToggle?.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    hamburger?.addEventListener('click', () => {
        if (!navLinks) {
            return;
        }

        const isOpen = navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks?.classList.remove('open');
            hamburger?.setAttribute('aria-expanded', 'false');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const selector = anchor.getAttribute('href');

            if (!selector || selector === '#') {
                return;
            }

            const target = document.querySelector(selector);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if (!prefersReducedMotion) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('[data-reveal]').forEach((element) => {
            revealObserver.observe(element);
        });
    } else {
        document.querySelectorAll('[data-reveal]').forEach((element) => {
            element.classList.add('is-visible');
        });
    }

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const counter = entry.target;
            const targetValue = Number(counter.getAttribute('data-target')) || 0;
            const duration = 1400;
            const startTime = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.floor(targetValue * eased);
                counter.textContent = value.toString();

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            };

            requestAnimationFrame(tick);
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.45 });

    document.querySelectorAll('.counter').forEach((counter) => {
        counterObserver.observe(counter);
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            filterButtons.forEach((btn) => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            projectCards.forEach((card) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || filter === category;
                card.classList.toggle('hidden', !shouldShow);
            });
        });
    });

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            const sectionId = entry.target.getAttribute('id');
            if (!sectionId) {
                return;
            }

            document.querySelectorAll('.nav-link').forEach((link) => {
                const isActive = link.getAttribute('href') === `#${sectionId}`;
                link.classList.toggle('active', isActive);
            });
        });
    }, { threshold: 0.55 });

    document.querySelectorAll('main section[id]').forEach((section) => {
        sectionObserver.observe(section);
    });

    if (!prefersReducedMotion && supportsFinePointer) {
        const tiltElements = Array.from(document.querySelectorAll('[data-tilt]')).filter((element) => !element.hasAttribute('data-parallax'));

        tiltElements.forEach((element) => {
            element.addEventListener('mousemove', (event) => {
                const rect = element.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width;
                const y = (event.clientY - rect.top) / rect.height;
                const rotateX = (0.5 - y) * 7;
                const rotateY = (x - 0.5) * 9;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = '';
            });
        });
    }

    const motionState = {
        targetX: window.innerWidth / 2,
        targetY: window.innerHeight / 2,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };

    if (!prefersReducedMotion && supportsFinePointer) {
        const parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'));
        let motionFrameId = null;

        const updateMotionTargets = (event) => {
            motionState.targetX = event.clientX;
            motionState.targetY = event.clientY;
        };

        const animateMotion = () => {
            motionState.x += (motionState.targetX - motionState.x) * 0.12;
            motionState.y += (motionState.targetY - motionState.y) * 0.12;

            root.style.setProperty('--pointer-x', `${motionState.x}px`);
            root.style.setProperty('--pointer-y', `${motionState.y}px`);

            if (cursorGlow) {
                const glowOffset = 180;
                cursorGlow.style.transform = `translate3d(${motionState.x - glowOffset}px, ${motionState.y - glowOffset}px, 0)`;
            }

            const normalizedX = (motionState.x / window.innerWidth - 0.5) * 2;
            const normalizedY = (motionState.y / window.innerHeight - 0.5) * 2;

            parallaxElements.forEach((element) => {
                const depth = Number(element.getAttribute('data-depth')) || 16;
                const rotation = Number(element.getAttribute('data-rotation')) || 0;
                const moveX = normalizedX * depth;
                const moveY = normalizedY * depth;
                const transform = rotation
                    ? `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotation}deg)`
                    : `translate3d(${moveX}px, ${moveY}px, 0)`;

                element.style.transform = transform;
            });

            motionFrameId = requestAnimationFrame(animateMotion);
        };

        window.addEventListener('pointermove', updateMotionTargets, { passive: true });
        window.addEventListener('pointerleave', () => {
            motionState.targetX = window.innerWidth / 2;
            motionState.targetY = window.innerHeight / 2;
        });
        window.addEventListener('blur', () => {
            motionState.targetX = window.innerWidth / 2;
            motionState.targetY = window.innerHeight / 2;
        });
        window.addEventListener('resize', () => {
            motionState.targetX = window.innerWidth / 2;
            motionState.targetY = window.innerHeight / 2;
        });

        animateMotion();

        window.addEventListener('beforeunload', () => {
            if (motionFrameId) {
                cancelAnimationFrame(motionFrameId);
            }
        });
    } else if (cursorGlow) {
        cursorGlow.style.display = 'none';
    }


    const canvas = document.getElementById('bgParticles');
    if (canvas && !prefersReducedMotion) {
        const context = canvas.getContext('2d');
        if (context) {
            const particles = [];
            const particleCount = window.innerWidth < 860 ? 28 : 52;
            let animationFrameId = null;

            const resizeCanvas = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };

            const createParticles = () => {
                particles.length = 0;

                for (let i = 0; i < particleCount; i += 1) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 2 + 0.8,
                        speedX: (Math.random() - 0.5) * 0.32,
                        speedY: (Math.random() - 0.5) * 0.32
                    });
                }
            };

            const draw = () => {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.fillStyle = root.getAttribute('data-theme') === 'light'
                    ? 'rgba(47, 100, 244, 0.22)'
                    : 'rgba(109, 168, 255, 0.34)';

                particles.forEach((particle) => {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.speedX *= -1;
                    }
                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.speedY *= -1;
                    }

                    context.beginPath();
                    context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    context.fill();
                });

                animationFrameId = requestAnimationFrame(draw);
            };

            resizeCanvas();
            createParticles();
            draw();

            window.addEventListener('resize', () => {
                resizeCanvas();
                createParticles();
            });

            window.addEventListener('beforeunload', () => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }
    }

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear().toString();
    }
});
