document.addEventListener('DOMContentLoaded', function() {
    // Carrossel slide manual
    const carousel = document.querySelector('.portfolio-carousel');
    const cards = document.querySelectorAll('.portfolio-card-dark');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');
    let currentIndex = 0;

    function updateCarousel() {
        if (cards.length === 0) return;
        const gap = parseInt(getComputedStyle(carousel).gap) || 32;
        const cardWidth = cards[0].offsetWidth + gap;
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    if (btnLeft && btnRight && cards.length > 0) {
        btnLeft.addEventListener('click', () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateCarousel();
        });
        btnRight.addEventListener('click', () => {
            currentIndex = Math.min(currentIndex + 1, cards.length - 1);
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

    // WhatsApp e Instagram direcionamento
    const whatsappBtn = document.getElementById('btn-whatsapp');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://wa.me/5547992566217', '_blank');
        });
    }
    const instaBtn = document.getElementById('btn-instagram');
    if (instaBtn) {
        instaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.instagram.com/mundoteknologia?igsh=MWRzdm9tZDJrM25mOQ==', '_blank');
        });
    }

    // Scroll suave para navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animação de scroll para .fade-in
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    elements.forEach(element => {
        observer.observe(element);
    });

    // Efeito de explosão das partículas ao tocar o cabeçalho
    const particles = document.querySelectorAll('.particle');
    const header = document.querySelector('header');
    particles.forEach(particle => {
        particle.addEventListener('animationiteration', () => {
            const rect = particle.getBoundingClientRect();
            const headerRect = header.getBoundingClientRect();
            if (rect.top <= headerRect.bottom) {
                particle.classList.add('explode');
                setTimeout(() => {
                    particle.classList.remove('explode');
                }, 600);
            }
        });
    });

    // Alterna tema claro/escuro
    const themeBtn = document.getElementById('toggle-theme');
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            // Altera cor do botão conforme o tema
            if (document.body.classList.contains('light-mode')) {
                this.textContent = '🌙';
                this.style.background = '#e3e7ee';
                this.style.color = '#0077b6';
            } else {
                this.textContent = '☀️';
                this.style.background = '#23272f';
                this.style.color = '#00b4d8';
            }
        });
    }

    // Exibe botão admin na navegação, mas não mostra painel admin até login
    const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {
        adminBtn.style.display = 'inline-block';
        // O painel admin só será exibido após login, controlado pelo código do index.html
    }

    // Modal de detalhes dos projetos
    const detalhesBtns = document.querySelectorAll('.btn-detalhes');
    const modal = document.getElementById('modal-detalhes');
    const fecharModal = document.getElementById('fechar-modal-detalhes');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalDescricao = document.getElementById('modal-descricao');
    const modalTipo = document.getElementById('modal-tipo');

    // Dados dos projetos
    const projetos = [
        {
            titulo: "Dashboard Web",
            descricao: "Painel administrativo responsivo para gestão de dados em tempo real.",
            tipo: "Projeto Web"
        },
        {
            titulo: "App Delivery Mobile",
            descricao: "Aplicativo mobile para pedidos e entregas, disponível para Android e iOS.",
            tipo: "Projeto Mobile"
        },
        {
            titulo: "E-commerce",
            descricao: "Loja virtual completa, com integração de pagamentos e painel do vendedor.",
            tipo: "Projeto Web/Mobile"
        },
        {
            titulo: "App Educação",
            descricao: "Plataforma de cursos online, videoaulas, quizzes interativos e muito mais.",
            tipo: "Projeto Mobile"
        },
        {
            titulo: "App Instituição Religiosa",
            descricao: "Aplicativo para instituições religiosas: agendas, notícias e comunicação com membros.",
            tipo: "Projeto Web/Mobile"
        }
    ];

    detalhesBtns.forEach((btn, idx) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projeto = projetos[idx];
            modalTitulo.textContent = projeto.titulo;
            modalDescricao.textContent = projeto.descricao;
            modalTipo.textContent = projeto.tipo;
            modal.style.display = 'flex';
        });
    });

    if (fecharModal) {
        fecharModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});