/* ============================================
   WORLDFIRM — Main Script
   ============================================ */

let currentLang = "en";

/* ============================================
   TRANSLATIONS
   ============================================ */

const T = {
    en: {
        "nav.about": "About",
        "nav.divisions": "Divisions",
        "nav.presence": "Presence",
        "nav.contact": "Contact",
        "hero.headline": "We stopped having opinions.<br>We state the truth.",
        "hero.cta": "Explore Our Divisions",
        "hero.caption": "Six platforms. 47 countries. One mission.",
        "stats.employees": "Employees Worldwide",
        "stats.countries": "Countries",
        "stats.divisions": "Specialized Divisions",
        "stats.revenue": "Annual Revenue",
        "about.heading": "Shaping the Future of<br><em>Strategic Intelligence</em>",
        "about.p1": "WorldFirm delivers cutting-edge platforms across decision intelligence, narrative systems, strategic simulation, and geopolitical modeling. Our six specialized divisions serve governments, enterprises, and institutions across 47 countries.",
        "about.p2": "Founded in Geneva in 2019, we combine deep domain expertise with advanced technology to build systems that reduce uncertainty and empower decisive action in the world's most complex environments.",
        "divisions.heading": "Six Platforms.<br>One Mission.",
        "divisions.viewCta": "View Division",
        "div.prism.tagline": "Decision Intelligence",
        "div.prism.desc": "Cognitive filtering platform that reduces complex business questions to actionable binary decisions.",
        "div.zord.tagline": "Narrative Intelligence",
        "div.zord.desc": "Enterprise narrative tracking and lifecycle management across all organizational communication channels.",
        "div.hegemony.tagline": "Strategic Operations",
        "div.hegemony.desc": "Urban territory modeling and strategic resource deployment simulation for competitive landscape analysis.",
        "div.vanguard.tagline": "Resource Dynamics",
        "div.vanguard.desc": "Competitive resource allocation and market dominance simulation for supply chain conflict scenarios.",
        "div.entropy.tagline": "Systemic Risk Analysis",
        "div.entropy.desc": "Economic stress-testing and cascading failure modeling to identify systemic vulnerabilities before disruption.",
        "div.meridian.tagline": "Geopolitical Intelligence",
        "div.meridian.desc": "Multinational diplomacy simulation and alliance management across seven major power blocs.",
        "presence.tag": "Global Presence",
        "presence.heading": "Operating Across<br>Every Meridian",
        "presence.geneva": "Global Headquarters",
        "presence.london": "Financial Operations",
        "presence.paris": "European Division Hub",
        "presence.newyork": "North American HQ",
        "presence.saopaulo": "LATAM Operations",
        "presence.singapore": "Asia-Pacific HQ",
        "presence.tokyo": "Japan Operations",
        "presence.dubai": "Middle East Hub",
        "contact.heading": "Ready to remove<br>uncertainty?",
        "contact.desc": "Get in touch with our team to discover how WorldFirm's platforms can transform your strategic capabilities.",
        "contact.cta": "Contact Us",
        "footer.tagline": "Architecting Tomorrow's Certainties",
        "footer.company": "Company",
        "footer.aboutUs": "About Us",
        "footer.careers": "Careers",
        "footer.press": "Press",
        "footer.hq": "Headquarters",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.legal": "Legal Notice",
        "overlay.capabilities": "Key Capabilities",
        "overlay.specs": "Technical Specifications",
        "overlay.accessPlatform": "Access Platform"
    },
    fr: {
        "nav.about": "\u00c0 propos",
        "nav.divisions": "Divisions",
        "nav.presence": "Pr\u00e9sence",
        "nav.contact": "Contact",
        "hero.headline": "Nous avons arr\u00eat\u00e9 d\u2019avoir des opinions.<br>Nous \u00e9non\u00e7ons la v\u00e9rit\u00e9.",
        "hero.cta": "D\u00e9couvrir nos divisions",
        "hero.caption": "Six plateformes. 47 pays. Une mission.",
        "stats.employees": "Collaborateurs dans le monde",
        "stats.countries": "Pays",
        "stats.divisions": "Divisions sp\u00e9cialis\u00e9es",
        "stats.revenue": "Chiffre d\u2019affaires annuel",
        "about.heading": "Fa\u00e7onner l\u2019avenir de<br><em>l\u2019intelligence strat\u00e9gique</em>",
        "about.p1": "WorldFirm d\u00e9ploie des plateformes de pointe en intelligence d\u00e9cisionnelle, syst\u00e8mes narratifs, simulation strat\u00e9gique et mod\u00e9lisation g\u00e9opolitique. Nos six divisions sp\u00e9cialis\u00e9es servent gouvernements, entreprises et institutions dans 47 pays.",
        "about.p2": "Fond\u00e9e \u00e0 Gen\u00e8ve en 2019, nous combinons expertise m\u00e9tier approfondie et technologie avanc\u00e9e pour construire des syst\u00e8mes qui r\u00e9duisent l\u2019incertitude et permettent une action d\u00e9cisive dans les environnements les plus complexes.",
        "divisions.heading": "Six plateformes.<br>Une mission.",
        "divisions.viewCta": "Voir la division",
        "div.prism.tagline": "Intelligence d\u00e9cisionnelle",
        "div.prism.desc": "Plateforme de filtrage cognitif qui r\u00e9duit les questions complexes en d\u00e9cisions binaires actionnables.",
        "div.zord.tagline": "Intelligence narrative",
        "div.zord.desc": "Suivi et gestion du cycle de vie narratif \u00e0 l\u2019\u00e9chelle de l\u2019entreprise, sur tous les canaux de communication.",
        "div.hegemony.tagline": "Op\u00e9rations strat\u00e9giques",
        "div.hegemony.desc": "Mod\u00e9lisation territoriale urbaine et simulation de d\u00e9ploiement strat\u00e9gique de ressources pour l\u2019analyse concurrentielle.",
        "div.vanguard.tagline": "Dynamique des ressources",
        "div.vanguard.desc": "Simulation d\u2019allocation comp\u00e9titive de ressources et de domination de march\u00e9 pour les sc\u00e9narios de conflits logistiques.",
        "div.entropy.tagline": "Analyse des risques syst\u00e9miques",
        "div.entropy.desc": "Stress-tests \u00e9conomiques et mod\u00e9lisation des d\u00e9faillances en cascade pour identifier les vuln\u00e9rabilit\u00e9s syst\u00e9miques.",
        "div.meridian.tagline": "Intelligence g\u00e9opolitique",
        "div.meridian.desc": "Simulation diplomatique multinationale et gestion des alliances entre sept blocs de puissance majeurs.",
        "presence.tag": "Pr\u00e9sence mondiale",
        "presence.heading": "Pr\u00e9sents sur<br>tous les m\u00e9ridiens",
        "presence.geneva": "Si\u00e8ge mondial",
        "presence.london": "Op\u00e9rations financi\u00e8res",
        "presence.paris": "Hub division Europe",
        "presence.newyork": "Si\u00e8ge Am\u00e9rique du Nord",
        "presence.saopaulo": "Op\u00e9rations LATAM",
        "presence.singapore": "Si\u00e8ge Asie-Pacifique",
        "presence.tokyo": "Op\u00e9rations Japon",
        "presence.dubai": "Hub Moyen-Orient",
        "contact.heading": "Pr\u00eat \u00e0 \u00e9liminer<br>l\u2019incertitude ?",
        "contact.desc": "Contactez notre \u00e9quipe pour d\u00e9couvrir comment les plateformes WorldFirm peuvent transformer vos capacit\u00e9s strat\u00e9giques.",
        "contact.cta": "Nous contacter",
        "footer.tagline": "Architectes des certitudes de demain",
        "footer.company": "Entreprise",
        "footer.aboutUs": "\u00c0 propos",
        "footer.careers": "Carri\u00e8res",
        "footer.press": "Presse",
        "footer.hq": "Si\u00e8ge social",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. Tous droits r\u00e9serv\u00e9s.",
        "footer.privacy": "Politique de confidentialit\u00e9",
        "footer.terms": "Conditions g\u00e9n\u00e9rales",
        "footer.legal": "Mentions l\u00e9gales",
        "overlay.capabilities": "Capacit\u00e9s cl\u00e9s",
        "overlay.specs": "Sp\u00e9cifications techniques",
        "overlay.accessPlatform": "Acc\u00e9der \u00e0 la plateforme"
    }
};

/* ============================================
   DIVISIONS DATA (bilingual)
   ============================================ */

const DIVISIONS = {
    prism: {
        index: "01",
        name: "PRISM",
        url: "https://chtabay.github.io/demeurrer.com/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><polygon points="24,4 44,36 4,36" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="24" y1="4" x2="24" y2="36" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="14" y1="20" x2="34" y2="20" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg>',
        en: {
            tagline: "Decision Intelligence",
            description: "PRISM is WorldFirm\u2019s proprietary cognitive filtering platform. It transforms complex, multi-variable business questions into clear, actionable binary decisions through advanced algorithmic reduction. Deployed across 23 enterprise environments worldwide, PRISM eliminates analytical noise to deliver decisive clarity when it matters most.",
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
            ]
        },
        fr: {
            tagline: "Intelligence d\u00e9cisionnelle",
            description: "PRISM est la plateforme propri\u00e9taire de filtrage cognitif de WorldFirm. Elle transforme des questions complexes et multivari\u00e9es en d\u00e9cisions binaires claires et actionnables gr\u00e2ce \u00e0 une r\u00e9duction algorithmique avanc\u00e9e. D\u00e9ploy\u00e9e dans 23 environnements d\u2019entreprise, PRISM \u00e9limine le bruit analytique pour d\u00e9livrer une clart\u00e9 d\u00e9cisive.",
            capabilities: [
                "Filtrage cognitif par IA avec rendu artistique multidirectionnel",
                "Optimisation d\u00e9cisionnelle binaire pour choix strat\u00e9giques critiques",
                "Analytique d\u00e9cisionnelle temps r\u00e9el avec score de confiance",
                "Cadres analytiques personnalisables sur 16 paradigmes"
            ],
            specs: [
                { label: "Architecture", value: "Maillage cognitif distribu\u00e9" },
                { label: "Latence", value: "< 40ms de r\u00e9ponse" },
                { label: "D\u00e9ploiements", value: "23 instances entreprise" },
                { label: "Pr\u00e9cision", value: "99,4% de filtrage" }
            ]
        }
    },
    zord: {
        index: "02",
        name: "ZORD",
        url: "https://chtabay.github.io/Zord/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="20" y1="8" x2="20" y2="40" stroke="currentColor" stroke-width="1" opacity="0.4"/></svg>',
        en: {
            tagline: "Narrative Intelligence",
            description: "ZORD is an enterprise-grade narrative intelligence platform designed for organizations managing complex, multi-threaded strategic communications. It provides real-time tracking, structuring, and optimization of organizational narratives across every touchpoint.",
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
            ]
        },
        fr: {
            tagline: "Intelligence narrative",
            description: "ZORD est une plateforme d\u2019intelligence narrative de niveau entreprise con\u00e7ue pour les organisations g\u00e9rant des communications strat\u00e9giques complexes et multi-fils. Elle assure le suivi, la structuration et l\u2019optimisation des r\u00e9cits organisationnels en temps r\u00e9el.",
            capabilities: [
                "Moteur narratif multi-fils avec gestion hi\u00e9rarchique",
                "Suivi collaboratif temps r\u00e9el entre \u00e9quipes distribu\u00e9es",
                "Protocoles d\u2019export/import compatibles tous formats",
                "Tableau de bord analytique avec score de coh\u00e9rence narrative"
            ],
            specs: [
                { label: "Architecture", value: "Graphe narratif multi-couches" },
                { label: "Fils", value: "R\u00e9cits simultan\u00e9s illimit\u00e9s" },
                { label: "Collaboration", value: "\u00c9dition multi-utilisateurs temps r\u00e9el" },
                { label: "Formats", value: "Export JSON, XML, PDF, DOCX" }
            ]
        }
    },
    hegemony: {
        index: "03",
        name: "HEGEMONY",
        url: "https://chtabay.github.io/joretapo/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="1.5"/><circle cx="24" cy="24" r="8" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" stroke-width="1" opacity="0.3"/><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>',
        en: {
            tagline: "Strategic Operations",
            description: "HEGEMONY delivers advanced urban territory modeling and strategic resource deployment simulation at metropolitan scale. Designed for operations centers managing competitive landscapes in dense urban environments.",
            capabilities: [
                "Multi-agent urban simulation with up to 5 concurrent operational entities",
                "Turn-based strategic modeling with resource allocation optimization",
                "Real-time territorial control visualization across metropolitan grids",
                "Electoral cycle simulation and influence mapping"
            ],
            specs: [
                { label: "Simulation", value: "Multi-agent turn-based engine" },
                { label: "Map scope", value: "Metropolitan-scale grid systems" },
                { label: "Agents", value: "2\u20135 concurrent strategic entities" },
                { label: "Cycles", value: "7-phase operational turns" }
            ]
        },
        fr: {
            tagline: "Op\u00e9rations strat\u00e9giques",
            description: "HEGEMONY fournit une mod\u00e9lisation territoriale urbaine avanc\u00e9e et une simulation de d\u00e9ploiement strat\u00e9gique \u00e0 l\u2019\u00e9chelle m\u00e9tropolitaine. Con\u00e7u pour les centres d\u2019op\u00e9rations g\u00e9rant des paysages concurrentiels en milieu urbain dense.",
            capabilities: [
                "Simulation urbaine multi-agents avec jusqu\u2019\u00e0 5 entit\u00e9s concurrentes",
                "Mod\u00e9lisation strat\u00e9gique au tour par tour avec optimisation des ressources",
                "Visualisation du contr\u00f4le territorial en temps r\u00e9el",
                "Simulation de cycles \u00e9lectoraux et cartographie d\u2019influence"
            ],
            specs: [
                { label: "Simulation", value: "Moteur multi-agents au tour par tour" },
                { label: "Carte", value: "Syst\u00e8mes de grille m\u00e9tropolitaine" },
                { label: "Agents", value: "2\u20135 entit\u00e9s strat\u00e9giques" },
                { label: "Cycles", value: "Tours op\u00e9rationnels en 7 phases" }
            ]
        }
    },
    vanguard: {
        index: "04",
        name: "VANGUARD",
        url: "https://chtabay.github.io/Battlejuice/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><path d="M24 6L6 42h36L24 6z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M24 18L14 38h20L24 18z" stroke="currentColor" stroke-width="1" opacity="0.4" fill="none"/></svg>',
        en: {
            tagline: "Resource Dynamics",
            description: "VANGUARD is WorldFirm\u2019s competitive resource dynamics platform. It models high-intensity market capture scenarios, supply chain conflicts, and resource warfare between competing entities in real-time competitive environments.",
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
            ]
        },
        fr: {
            tagline: "Dynamique des ressources",
            description: "VANGUARD est la plateforme de dynamique comp\u00e9titive des ressources de WorldFirm. Elle mod\u00e9lise des sc\u00e9narios de capture de march\u00e9 haute intensit\u00e9, des conflits de cha\u00eenes d\u2019approvisionnement et des guerres de ressources en temps r\u00e9el.",
            capabilities: [
                "Simulation d\u2019allocation comp\u00e9titive de ressources en temps r\u00e9el",
                "Mod\u00e9lisation de conflits de march\u00e9 multi-entit\u00e9s asym\u00e9triques",
                "Planification de sc\u00e9narios de disruption logistique",
                "Analytique pr\u00e9dictive par simulation Monte Carlo"
            ],
            specs: [
                { label: "Moteur", value: "Simulation de conflit temps r\u00e9el" },
                { label: "Entit\u00e9s", value: "Mod\u00e9lisation N-parties" },
                { label: "Sc\u00e9narios", value: "Branches illimit\u00e9es" },
                { label: "Analyse", value: "Moteur pr\u00e9dictif Monte Carlo" }
            ]
        }
    },
    entropy: {
        index: "05",
        name: "ENTROPY",
        url: "https://chtabay.github.io/Clodopoly-2/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="14" height="14" stroke="currentColor" stroke-width="1.5"/><rect x="28" y="6" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.5"/><rect x="6" y="28" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.5"/><rect x="28" y="28" width="14" height="14" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>',
        en: {
            tagline: "Systemic Risk Analysis",
            description: "ENTROPY is a systemic risk modeling platform built for stress-testing economic scenarios in controlled environments. It identifies cascading failure modes, models systemic vulnerabilities, and quantifies the downstream impact of disruption events \u2014 before they reach your organization.",
            capabilities: [
                "Multi-variable economic simulation with cascading failure detection",
                "Systemic vulnerability assessment across interconnected entities",
                "Scenario stress-testing with probabilistic outcome distribution",
                "Real-time risk dashboard with automated alert thresholds"
            ],
            specs: [
                { label: "Models", value: "Multi-variable cascading systems" },
                { label: "Players", value: "2\u20134 entity stress-testing" },
                { label: "Risk engine", value: "Probabilistic failure propagation" },
                { label: "Outputs", value: "Real-time risk scoring dashboard" }
            ]
        },
        fr: {
            tagline: "Analyse des risques syst\u00e9miques",
            description: "ENTROPY est une plateforme de mod\u00e9lisation des risques syst\u00e9miques con\u00e7ue pour les stress-tests \u00e9conomiques en environnement contr\u00f4l\u00e9. Elle identifie les modes de d\u00e9faillance en cascade et quantifie l\u2019impact en aval des \u00e9v\u00e9nements disruptifs \u2014 avant qu\u2019ils n\u2019atteignent votre organisation.",
            capabilities: [
                "Simulation \u00e9conomique multivari\u00e9e avec d\u00e9tection de d\u00e9faillances en cascade",
                "\u00c9valuation des vuln\u00e9rabilit\u00e9s syst\u00e9miques entre entit\u00e9s interconnect\u00e9es",
                "Stress-tests de sc\u00e9narios avec distribution probabiliste",
                "Tableau de bord de risque temps r\u00e9el avec seuils d\u2019alerte"
            ],
            specs: [
                { label: "Mod\u00e8les", value: "Syst\u00e8mes en cascade multivari\u00e9s" },
                { label: "Joueurs", value: "Stress-test 2\u20134 entit\u00e9s" },
                { label: "Moteur risque", value: "Propagation probabiliste" },
                { label: "Sorties", value: "Tableau de bord de scoring temps r\u00e9el" }
            ]
        }
    },
    meridian: {
        index: "06",
        name: "MERIDIAN",
        url: "https://chtabay.github.io/diplomatie/",
        iconSvg: '<svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="1.5"/><ellipse cx="24" cy="24" rx="10" ry="18" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>',
        en: {
            tagline: "Geopolitical Intelligence",
            description: "MERIDIAN is WorldFirm\u2019s multinational diplomacy simulation and alliance management system. It models complex geopolitical scenarios across seven major power blocs with historical accuracy, enabling strategy teams to anticipate alliance shifts and diplomatic leverage points.",
            capabilities: [
                "7-power diplomatic engine with full alliance and conflict modeling",
                "Multi-phase turn resolution: movement, negotiation, and adjustment",
                "Historical scenario library covering 1901\u2013present geopolitical configurations",
                "Convoy and logistics modeling across land and maritime domains"
            ],
            specs: [
                { label: "Powers", value: "7 concurrent geopolitical blocs" },
                { label: "Phases", value: "Spring / Autumn / Winter cycles" },
                { label: "Map scope", value: "Continental-scale theater" },
                { label: "Resolution", value: "Force-based conflict algorithm" }
            ]
        },
        fr: {
            tagline: "Intelligence g\u00e9opolitique",
            description: "MERIDIAN est le syst\u00e8me de simulation diplomatique multinationale et de gestion des alliances de WorldFirm. Il mod\u00e9lise des sc\u00e9narios g\u00e9opolitiques complexes entre sept blocs de puissance majeurs avec une pr\u00e9cision historique.",
            capabilities: [
                "Moteur diplomatique 7 puissances avec mod\u00e9lisation compl\u00e8te",
                "R\u00e9solution multi-phases : mouvement, n\u00e9gociation, ajustement",
                "Biblioth\u00e8que de sc\u00e9narios historiques de 1901 \u00e0 aujourd\u2019hui",
                "Mod\u00e9lisation de convois et logistique terre/mer"
            ],
            specs: [
                { label: "Puissances", value: "7 blocs g\u00e9opolitiques" },
                { label: "Phases", value: "Cycles Printemps / Automne / Hiver" },
                { label: "Carte", value: "Th\u00e9\u00e2tre \u00e0 \u00e9chelle continentale" },
                { label: "R\u00e9solution", value: "Algorithme de conflit par la force" }
            ]
        }
    }
};

/* ============================================
   I18N ENGINE
   ============================================ */

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("wf-lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (T[lang]?.[key]) el.textContent = T[lang][key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.dataset.i18nHtml;
        if (T[lang]?.[key]) el.innerHTML = T[lang][key];
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const overlay = document.getElementById("division-overlay");
    if (overlay.classList.contains("open")) {
        const key = overlay.dataset.currentDivision;
        if (key) openDivision(key);
    }
}

function initI18n() {
    const saved = localStorage.getItem("wf-lang");
    const browserLang = navigator.language?.startsWith("fr") ? "fr" : "en";
    const lang = saved || browserLang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });

    setLang(lang);
}

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

    window.addEventListener("resize", () => { resize(); createParticles(); });
    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        MOUSE.x = e.clientX - rect.left;
        MOUSE.y = e.clientY - rect.top;
    });
    canvas.addEventListener("mouseleave", () => { MOUSE.x = -1000; MOUSE.y = -1000; });
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

function openDivision(key) {
    const d = DIVISIONS[key];
    if (!d) return;
    const loc = d[currentLang] || d.en;
    const overlay = document.getElementById("division-overlay");

    overlay.dataset.currentDivision = key;
    overlay.querySelector(".overlay-index").textContent = `Division ${d.index}`;
    overlay.querySelector(".overlay-icon").innerHTML = d.iconSvg;
    overlay.querySelector(".overlay-title").textContent = d.name;
    overlay.querySelector(".overlay-tagline").textContent = loc.tagline;
    overlay.querySelector(".overlay-description").textContent = loc.description;

    overlay.querySelector(".overlay-caps-list").innerHTML =
        loc.capabilities.map((c) => `<li>${c}</li>`).join("");

    overlay.querySelector(".overlay-specs-grid").innerHTML =
        loc.specs.map((s) => `
            <div class="spec-item">
                <span class="spec-label">${s.label}</span>
                <span class="spec-value">${s.value}</span>
            </div>`).join("");

    overlay.querySelector(".overlay-cta").href = d.url;

    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function initDivisionOverlay() {
    const overlay = document.getElementById("division-overlay");
    const closeBtn = overlay.querySelector(".overlay-close");

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
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeDivision(); });
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
        setTimeout(() => preloader.classList.add("done"), 1800);
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
    initI18n();
});
