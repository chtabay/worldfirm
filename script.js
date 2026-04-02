/* ============================================
   WORLDFIRM — Main Script
   ============================================ */

const DIVISIONS = {
    prism: {
        index: "01",
        name: "PRISM",
        tagline: "Decision Intelligence",
        url: "https://chtabay.github.io/demeurrer.com/",
        description: "PRISM is WorldFirm's proprietary cognitive filtering platform. It transforms complex, multi-variable business questions into clear, actionable binary decisions through advanced algorithmic reduction. Deployed across 23 enterprise environments worldwide, PRISM eliminates analytical noise to deliver decisive clarity when it matters most.",
        capabilities: [
            "AI-powered cognitive filtering with multi-directional artistic rendering",
            "Binary decision optimization for high-stakes strategic choices",
            "Real-time decisional analytics with confidence scoring",
            "Customizable analytical direction frameworks across 16 paradigms"
        ],
        specs: [
            { label: "Architecture", value: "Distributed cognitive mesh" },
            { label: "Latency", value: "< 40ms decisional response" },
            { label: "Deployments", value: "23 enterprise instances" },
            { label: "Accuracy", value: "99.4% filtering precision" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><polygon points="24,4 44,36 4,36" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="24" y1="4" x2="24" y2="36" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="14" y1="20" x2="34" y2="20" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg>'
    },
    zord: {
        index: "02",
        name: "ZORD",
        tagline: "Narrative Intelligence",
        url: "https://chtabay.github.io/Zord/",
        description: "ZORD is an enterprise-grade narrative intelligence platform designed for organizations managing complex, multi-threaded strategic communications. It provides real-time tracking, structuring, and optimization of organizational narratives across every touchpoint — from internal communications to public-facing positioning.",
        capabilities: [
            "Multi-thread narrative engine with hierarchical storyline management",
            "Real-time collaborative tracking across distributed teams",
            "Export/import protocols compatible with all major enterprise formats",
            "Dashboard analytics with narrative coherence scoring"
        ],
        specs: [
            { label: "Architecture", value: "Multi-layer narrative graph" },
            { label: "Threads", value: "Unlimited concurrent storylines" },
            { label: "Collaboration", value: "Real-time multi-user editing" },
            { label: "Formats", value: "JSON, XML, PDF, DOCX export" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="20" y1="8" x2="20" y2="40" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg>'
    },
    hegemony: {
        index: "03",
        name: "HEGEMONY",
        tagline: "Strategic Operations",
        url: "https://chtabay.github.io/joretapo/",
        description: "HEGEMONY delivers advanced urban territory modeling and strategic resource deployment simulation at metropolitan scale. Designed for operations centers managing competitive landscapes in dense urban environments, it models multi-agent interactions, resource flows, and territorial control dynamics across complex operational theaters.",
        capabilities: [
            "Multi-agent urban simulation with up to 5 concurrent operational entities",
            "Turn-based strategic modeling with resource allocation optimization",
            "Real-time territorial control visualization across metropolitan grids",
            "Electoral cycle simulation and influence mapping"
        ],
        specs: [
            { label: "Simulation", value: "Multi-agent turn-based engine" },
            { label: "Map scope", value: "Metropolitan-scale grid systems" },
            { label: "Agents", value: "2–5 concurrent strategic entities" },
            { label: "Cycles", value: "7-phase operational turns" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="1.5"/><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" stroke-width="1" opacity="0.3"/><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>'
    },
    vanguard: {
        index: "04",
        name: "VANGUARD",
        tagline: "Resource Dynamics",
        url: "https://chtabay.github.io/Battlejuice/",
        description: "VANGUARD is WorldFirm's competitive resource dynamics platform. It models high-intensity market capture scenarios, supply chain conflicts, and resource warfare between competing entities. Used by strategy teams to simulate market entry, defensive positioning, and aggressive expansion campaigns in real-time competitive environments.",
        capabilities: [
            "Real-time competitive resource allocation simulation",
            "Multi-entity market conflict modeling with asymmetric capabilities",
            "Supply chain disruption and capture scenario planning",
            "Predictive outcome analytics with Monte Carlo simulation"
        ],
        specs: [
            { label: "Engine", value: "Real-time conflict simulation" },
            { label: "Entities", value: "N-party competitive modeling" },
            { label: "Scenarios", value: "Unlimited branching paths" },
            { label: "Analysis", value: "Monte Carlo prediction engine" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6L6 42h36L24 6z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M24 18L14 38h20L24 18z" stroke="currentColor" stroke-width="1" opacity="0.4" fill="none"/></svg>'
    },
    entropy: {
        index: "05",
        name: "ENTROPY",
        tagline: "Systemic Risk Analysis",
        url: "https://chtabay.github.io/Clodopoly-2/",
        description: "ENTROPY is a systemic risk modeling platform built for stress-testing economic scenarios in controlled environments. It identifies cascading failure modes, models systemic vulnerabilities, and quantifies the downstream impact of disruption events — before they reach your organization. Used by risk committees and scenario planning teams worldwide.",
        capabilities: [
            "Multi-variable economic simulation with cascading failure detection",
            "Systemic vulnerability assessment across interconnected entities",
            "Scenario stress-testing with probabilistic outcome distribution",
            "Real-time risk dashboard with automated alert thresholds"
        ],
        specs: [
            { label: "Models", value: "Multi-variable cascading systems" },
            { label: "Players", value: "2–4 entity stress-testing" },
            { label: "Risk engine", value: "Probabilistic failure propagation" },
            { label: "Outputs", value: "Real-time risk scoring dashboard" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="14" height="14" stroke="currentColor" stroke-width="1.5"/><rect x="28" y="6" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.5"/><rect x="6" y="28" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.5"/><rect x="28" y="28" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>'
    },
    meridian: {
        index: "06",
        name: "MERIDIAN",
        tagline: "Geopolitical Intelligence",
        url: "https://chtabay.github.io/diplomatie/",
        description: "MERIDIAN is WorldFirm's multinational diplomacy simulation and alliance management system. It models complex geopolitical scenarios across seven major power blocs with historical accuracy, enabling strategy teams to anticipate alliance shifts, conflict escalation, and diplomatic leverage points in multi-polar environments.",
        capabilities: [
            "7-power diplomatic engine with full alliance and conflict modeling",
            "Multi-phase turn resolution: movement, negotiation, and adjustment",
            "Historical scenario library covering 1901–present geopolitical configurations",
            "Convoy and logistics modeling across land and maritime domains"
        ],
        specs: [
            { label: "Powers", value: "7 concurrent geopolitical blocs" },
            { label: "Phases", value: "Spring / Autumn / Winter cycles" },
            { label: "Map scope", value: "Continental-scale theater" },
            { label: "Resolution", value: "Force-based conflict algorithm" }
        ],
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="1.5"/><ellipse cx="24" cy="24" rx="10" ry="18" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>'
    }
};

/* ============================================
   CONSTELLATION BACKGROUND
   ============================================ */

function initConstellation() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles;
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 150;
    const MOUSE = { x: -1000, y: -1000 };

    function resize() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
        particles = Array.from({ length: PARTICLE_COUNT }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.5 + 0.5
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(74, 158, 255, 0.5)";
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x;
                const dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(74, 158, 255, ${0.08 * (1 - dist / CONNECTION_DIST)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            const mdx = p.x - MOUSE.x;
            const mdy = p.y - MOUSE.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 200) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(MOUSE.x, MOUSE.y);
                ctx.strokeStyle = `rgba(74, 158, 255, ${0.15 * (1 - mdist / 200)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }

        requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
        resize();
        createParticles();
    });

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        MOUSE.x = e.clientX - rect.left;
        MOUSE.y = e.clientY - rect.top;
    });

    canvas.addEventListener("mouseleave", () => {
        MOUSE.x = -1000;
        MOUSE.y = -1000;
    });
}

/* ============================================
   SCROLL REVEAL
   ============================================ */

function initScrollReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ============================================
   COUNTER ANIMATION
   ============================================ */

function initCounters() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const prefix = el.dataset.prefix || "";
                const suffix = el.dataset.suffix || "";
                const duration = 1800;
                const start = performance.now();

                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = prefix + Math.round(target * eased).toLocaleString() + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                }

                requestAnimationFrame(tick);
                observer.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );

    document.querySelectorAll(".stat-number").forEach((el) => observer.observe(el));
}

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
    const navbar = document.getElementById("navbar");
    const burger = document.querySelector(".nav-burger");
    const mobileMenu = document.getElementById("mobile-menu");

    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 60);
    });

    burger?.addEventListener("click", () => {
        burger.classList.toggle("open");
        mobileMenu.classList.toggle("open");
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
    });

    mobileMenu?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            burger.classList.remove("open");
            mobileMenu.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            if (anchor.dataset.division) return;
            const href = anchor.getAttribute("href");
            if (!href || href === "#" || href.length < 2) return;
            try {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            } catch { /* invalid selector */ }
        });
    });
}

/* ============================================
   DIVISION OVERLAY
   ============================================ */

function initDivisionOverlay() {
    const overlay = document.getElementById("division-overlay");
    const closeBtn = overlay.querySelector(".overlay-close");

    function openDivision(key) {
        const d = DIVISIONS[key];
        if (!d) return;

        overlay.querySelector(".overlay-index").textContent = `Division ${d.index}`;
        overlay.querySelector(".overlay-icon").innerHTML = d.iconSvg;
        overlay.querySelector(".overlay-title").textContent = d.name;
        overlay.querySelector(".overlay-tagline").textContent = d.tagline;
        overlay.querySelector(".overlay-description").textContent = d.description;

        const capsList = overlay.querySelector(".overlay-caps-list");
        capsList.innerHTML = d.capabilities.map((c) => `<li>${c}</li>`).join("");

        const specsGrid = overlay.querySelector(".overlay-specs-grid");
        specsGrid.innerHTML = d.specs
            .map(
                (s) => `
            <div class="spec-item">
                <span class="spec-label">${s.label}</span>
                <span class="spec-value">${s.value}</span>
            </div>`
            )
            .join("");

        overlay.querySelector(".overlay-cta").href = d.url;

        overlay.classList.add("open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeDivision() {
        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-division]").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            openDivision(el.dataset.division);
        });
    });

    closeBtn.addEventListener("click", closeDivision);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeDivision();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay.classList.contains("open")) closeDivision();
    });
}

/* ============================================
   PRELOADER
   ============================================ */

function initPreloader() {
    const preloader = document.getElementById("preloader");
    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.classList.add("done");
        }, 1800);
    });
}

/* ============================================
   INIT
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initConstellation();
    initNavigation();
    initScrollReveal();
    initCounters();
    initDivisionOverlay();
});
