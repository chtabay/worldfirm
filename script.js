/* ============================================
   WORLDFIRM — Main Script
   ============================================ */

let currentLang = "en";

const LANG_LABELS = { en:"EN", fr:"FR", de:"DE", es:"ES", pt:"PT", ja:"JA", ar:"AR", zh:"ZH" };

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
    },
    de: {
        "nav.about": "\u00dcber uns",
        "nav.divisions": "Bereiche",
        "nav.presence": "Pr\u00e4senz",
        "nav.contact": "Kontakt",
        "hero.headline": "Wir haben aufgeh\u00f6rt, Meinungen zu haben.<br>Wir sprechen die Wahrheit aus.",
        "hero.cta": "Unsere Bereiche entdecken",
        "hero.caption": "Sechs Plattformen. 47 L\u00e4nder. Eine Mission.",
        "stats.employees": "Mitarbeiter weltweit",
        "stats.countries": "L\u00e4nder",
        "stats.divisions": "Spezialisierte Bereiche",
        "stats.revenue": "Jahresumsatz",
        "about.heading": "Die Zukunft der<br><em>strategischen Intelligenz</em> gestalten",
        "about.p1": "WorldFirm liefert hochmoderne Plattformen f\u00fcr Entscheidungsintelligenz, narrative Systeme, strategische Simulation und geopolitische Modellierung. Unsere sechs spezialisierten Bereiche dienen Regierungen, Unternehmen und Institutionen in 47 L\u00e4ndern.",
        "about.p2": "Gegr\u00fcndet 2019 in Genf, verbinden wir tiefgreifende Fachkompetenz mit fortschrittlicher Technologie, um Systeme zu entwickeln, die Unsicherheit reduzieren und entschlossenes Handeln erm\u00f6glichen.",
        "divisions.heading": "Sechs Plattformen.<br>Eine Mission.",
        "divisions.viewCta": "Bereich ansehen",
        "div.prism.tagline": "Entscheidungsintelligenz",
        "div.prism.desc": "Kognitive Filterplattform, die komplexe Gesch\u00e4ftsfragen auf umsetzbare Bin\u00e4rentscheidungen reduziert.",
        "div.zord.tagline": "Narrative Intelligenz",
        "div.zord.desc": "Unternehmensweites Narrativ-Tracking und Lifecycle-Management \u00fcber alle Kommunikationskan\u00e4le.",
        "div.hegemony.tagline": "Strategische Operationen",
        "div.hegemony.desc": "Urbane Gebietsmodellierung und strategische Ressourceneinsatz-Simulation f\u00fcr Wettbewerbsanalysen.",
        "div.vanguard.tagline": "Ressourcendynamik",
        "div.vanguard.desc": "Wettbewerbsorientierte Ressourcenallokation und Marktdominanz-Simulation f\u00fcr Lieferkettenszenarien.",
        "div.entropy.tagline": "Systemische Risikoanalyse",
        "div.entropy.desc": "\u00d6konomische Stresstests und kaskadierende Fehlermodellierung zur Identifikation systemischer Schwachstellen.",
        "div.meridian.tagline": "Geopolitische Intelligenz",
        "div.meridian.desc": "Multinationale Diplomatiesimulation und Allianzmanagement \u00fcber sieben gro\u00dfe Machtbl\u00f6cke.",
        "presence.tag": "Globale Pr\u00e4senz",
        "presence.heading": "Pr\u00e4sent auf<br>allen Meridianen",
        "presence.geneva": "Globaler Hauptsitz",
        "presence.london": "Finanzoperationen",
        "presence.paris": "Europ\u00e4ischer Bereichs-Hub",
        "presence.newyork": "Nordamerika-Hauptsitz",
        "presence.saopaulo": "LATAM-Operationen",
        "presence.singapore": "Asien-Pazifik-Hauptsitz",
        "presence.tokyo": "Japan-Operationen",
        "presence.dubai": "Nahost-Hub",
        "contact.heading": "Bereit, Unsicherheit<br>zu beseitigen?",
        "contact.desc": "Kontaktieren Sie unser Team, um zu erfahren, wie die Plattformen von WorldFirm Ihre strategischen F\u00e4higkeiten transformieren k\u00f6nnen.",
        "contact.cta": "Kontakt aufnehmen",
        "footer.tagline": "Architekten der Gewissheiten von morgen",
        "footer.company": "Unternehmen",
        "footer.aboutUs": "\u00dcber uns",
        "footer.careers": "Karriere",
        "footer.press": "Presse",
        "footer.hq": "Hauptsitz",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. Alle Rechte vorbehalten.",
        "footer.privacy": "Datenschutzrichtlinie",
        "footer.terms": "Nutzungsbedingungen",
        "footer.legal": "Impressum",
        "overlay.capabilities": "Kernf\u00e4higkeiten",
        "overlay.specs": "Technische Spezifikationen",
        "overlay.accessPlatform": "Plattform aufrufen"
    },
    es: {
        "nav.about": "Nosotros",
        "nav.divisions": "Divisiones",
        "nav.presence": "Presencia",
        "nav.contact": "Contacto",
        "hero.headline": "Dejamos de tener opiniones.<br>Enunciamos la verdad.",
        "hero.cta": "Explorar nuestras divisiones",
        "hero.caption": "Seis plataformas. 47 pa\u00edses. Una misi\u00f3n.",
        "stats.employees": "Empleados en el mundo",
        "stats.countries": "Pa\u00edses",
        "stats.divisions": "Divisiones especializadas",
        "stats.revenue": "Ingresos anuales",
        "about.heading": "Dando forma al futuro de<br><em>la inteligencia estrat\u00e9gica</em>",
        "about.p1": "WorldFirm ofrece plataformas de vanguardia en inteligencia decisional, sistemas narrativos, simulaci\u00f3n estrat\u00e9gica y modelado geopol\u00edtico. Nuestras seis divisiones especializadas sirven a gobiernos, empresas e instituciones en 47 pa\u00edses.",
        "about.p2": "Fundada en Ginebra en 2019, combinamos una profunda experiencia sectorial con tecnolog\u00eda avanzada para construir sistemas que reducen la incertidumbre y permiten una acci\u00f3n decisiva.",
        "divisions.heading": "Seis plataformas.<br>Una misi\u00f3n.",
        "divisions.viewCta": "Ver divisi\u00f3n",
        "div.prism.tagline": "Inteligencia decisional",
        "div.prism.desc": "Plataforma de filtrado cognitivo que reduce preguntas complejas a decisiones binarias accionables.",
        "div.zord.tagline": "Inteligencia narrativa",
        "div.zord.desc": "Seguimiento y gesti\u00f3n del ciclo de vida narrativo empresarial en todos los canales de comunicaci\u00f3n.",
        "div.hegemony.tagline": "Operaciones estrat\u00e9gicas",
        "div.hegemony.desc": "Modelado territorial urbano y simulaci\u00f3n de despliegue estrat\u00e9gico para an\u00e1lisis competitivo.",
        "div.vanguard.tagline": "Din\u00e1mica de recursos",
        "div.vanguard.desc": "Simulaci\u00f3n de asignaci\u00f3n competitiva de recursos y dominio de mercado para escenarios de conflictos log\u00edsticos.",
        "div.entropy.tagline": "An\u00e1lisis de riesgos sist\u00e9micos",
        "div.entropy.desc": "Pruebas de estr\u00e9s econ\u00f3mico y modelado de fallos en cascada para identificar vulnerabilidades sist\u00e9micas.",
        "div.meridian.tagline": "Inteligencia geopol\u00edtica",
        "div.meridian.desc": "Simulaci\u00f3n diplom\u00e1tica multinacional y gesti\u00f3n de alianzas entre siete grandes bloques de poder.",
        "presence.tag": "Presencia global",
        "presence.heading": "Operando en<br>todos los meridianos",
        "presence.geneva": "Sede mundial",
        "presence.london": "Operaciones financieras",
        "presence.paris": "Hub divisi\u00f3n Europa",
        "presence.newyork": "Sede Norteam\u00e9rica",
        "presence.saopaulo": "Operaciones LATAM",
        "presence.singapore": "Sede Asia-Pac\u00edfico",
        "presence.tokyo": "Operaciones Jap\u00f3n",
        "presence.dubai": "Hub Oriente Medio",
        "contact.heading": "\u00bfListo para eliminar<br>la incertidumbre?",
        "contact.desc": "P\u00f3ngase en contacto con nuestro equipo para descubrir c\u00f3mo las plataformas de WorldFirm pueden transformar sus capacidades estrat\u00e9gicas.",
        "contact.cta": "Cont\u00e1ctenos",
        "footer.tagline": "Arquitectos de las certezas del ma\u00f1ana",
        "footer.company": "Empresa",
        "footer.aboutUs": "Nosotros",
        "footer.careers": "Carreras",
        "footer.press": "Prensa",
        "footer.hq": "Sede central",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. Todos los derechos reservados.",
        "footer.privacy": "Pol\u00edtica de privacidad",
        "footer.terms": "T\u00e9rminos de servicio",
        "footer.legal": "Aviso legal",
        "overlay.capabilities": "Capacidades clave",
        "overlay.specs": "Especificaciones t\u00e9cnicas",
        "overlay.accessPlatform": "Acceder a la plataforma"
    },
    pt: {
        "nav.about": "Sobre",
        "nav.divisions": "Divis\u00f5es",
        "nav.presence": "Presen\u00e7a",
        "nav.contact": "Contato",
        "hero.headline": "Paramos de ter opini\u00f5es.<br>Enunciamos a verdade.",
        "hero.cta": "Explorar nossas divis\u00f5es",
        "hero.caption": "Seis plataformas. 47 pa\u00edses. Uma miss\u00e3o.",
        "stats.employees": "Colaboradores no mundo",
        "stats.countries": "Pa\u00edses",
        "stats.divisions": "Divis\u00f5es especializadas",
        "stats.revenue": "Receita anual",
        "about.heading": "Moldando o futuro da<br><em>intelig\u00eancia estrat\u00e9gica</em>",
        "about.p1": "A WorldFirm oferece plataformas de ponta em intelig\u00eancia decisional, sistemas narrativos, simula\u00e7\u00e3o estrat\u00e9gica e modelagem geopol\u00edtica. Nossas seis divis\u00f5es especializadas atendem governos, empresas e institui\u00e7\u00f5es em 47 pa\u00edses.",
        "about.p2": "Fundada em Genebra em 2019, combinamos profunda expertise setorial com tecnologia avan\u00e7ada para construir sistemas que reduzem a incerteza e possibilitam a\u00e7\u00e3o decisiva.",
        "divisions.heading": "Seis plataformas.<br>Uma miss\u00e3o.",
        "divisions.viewCta": "Ver divis\u00e3o",
        "div.prism.tagline": "Intelig\u00eancia decisional",
        "div.prism.desc": "Plataforma de filtragem cognitiva que reduz quest\u00f5es complexas a decis\u00f5es bin\u00e1rias acion\u00e1veis.",
        "div.zord.tagline": "Intelig\u00eancia narrativa",
        "div.zord.desc": "Rastreamento e gest\u00e3o do ciclo narrativo empresarial em todos os canais de comunica\u00e7\u00e3o.",
        "div.hegemony.tagline": "Opera\u00e7\u00f5es estrat\u00e9gicas",
        "div.hegemony.desc": "Modelagem territorial urbana e simula\u00e7\u00e3o de implanta\u00e7\u00e3o estrat\u00e9gica para an\u00e1lise competitiva.",
        "div.vanguard.tagline": "Din\u00e2mica de recursos",
        "div.vanguard.desc": "Simula\u00e7\u00e3o de aloca\u00e7\u00e3o competitiva de recursos e domin\u00e2ncia de mercado para cen\u00e1rios de conflitos log\u00edsticos.",
        "div.entropy.tagline": "An\u00e1lise de riscos sist\u00eamicos",
        "div.entropy.desc": "Testes de estresse econ\u00f4mico e modelagem de falhas em cascata para identificar vulnerabilidades sist\u00eamicas.",
        "div.meridian.tagline": "Intelig\u00eancia geopol\u00edtica",
        "div.meridian.desc": "Simula\u00e7\u00e3o diplom\u00e1tica multinacional e gest\u00e3o de alian\u00e7as entre sete grandes blocos de poder.",
        "presence.tag": "Presen\u00e7a global",
        "presence.heading": "Operando em<br>todos os meridianos",
        "presence.geneva": "Sede mundial",
        "presence.london": "Opera\u00e7\u00f5es financeiras",
        "presence.paris": "Hub divis\u00e3o Europa",
        "presence.newyork": "Sede Am\u00e9rica do Norte",
        "presence.saopaulo": "Opera\u00e7\u00f5es LATAM",
        "presence.singapore": "Sede \u00c1sia-Pac\u00edfico",
        "presence.tokyo": "Opera\u00e7\u00f5es Jap\u00e3o",
        "presence.dubai": "Hub Oriente M\u00e9dio",
        "contact.heading": "Pronto para eliminar<br>a incerteza?",
        "contact.desc": "Entre em contato com nossa equipe para descobrir como as plataformas da WorldFirm podem transformar suas capacidades estrat\u00e9gicas.",
        "contact.cta": "Fale conosco",
        "footer.tagline": "Arquitetos das certezas de amanh\u00e3",
        "footer.company": "Empresa",
        "footer.aboutUs": "Sobre n\u00f3s",
        "footer.careers": "Carreiras",
        "footer.press": "Imprensa",
        "footer.hq": "Sede",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. Todos os direitos reservados.",
        "footer.privacy": "Pol\u00edtica de privacidade",
        "footer.terms": "Termos de servi\u00e7o",
        "footer.legal": "Aviso legal",
        "overlay.capabilities": "Capacidades-chave",
        "overlay.specs": "Especifica\u00e7\u00f5es t\u00e9cnicas",
        "overlay.accessPlatform": "Acessar plataforma"
    },
    ja: {
        "nav.about": "\u6982\u8981",
        "nav.divisions": "\u4e8b\u696d\u90e8\u9580",
        "nav.presence": "\u62e0\u70b9",
        "nav.contact": "\u304a\u554f\u3044\u5408\u308f\u305b",
        "hero.headline": "\u79c1\u305f\u3061\u306f\u610f\u898b\u3092\u6301\u3064\u3053\u3068\u3092\u3084\u3081\u305f\u3002<br>\u79c1\u305f\u3061\u306f\u771f\u5b9f\u3092\u8ff0\u3079\u308b\u3002",
        "hero.cta": "\u4e8b\u696d\u90e8\u9580\u3092\u63a2\u7d22",
        "hero.caption": "6\u3064\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u300247\u30f6\u56fd\u3002\u4e00\u3064\u306e\u4f7f\u547d\u3002",
        "stats.employees": "\u4e16\u754c\u306e\u5f93\u696d\u54e1",
        "stats.countries": "\u30f6\u56fd",
        "stats.divisions": "\u5c02\u9580\u4e8b\u696d\u90e8\u9580",
        "stats.revenue": "\u5e74\u9593\u58f2\u4e0a",
        "about.heading": "<em>\u6226\u7565\u7684\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9</em>\u306e<br>\u672a\u6765\u3092\u5f62\u4f5c\u308b",
        "about.p1": "WorldFirm\u306f\u3001\u610f\u601d\u6c7a\u5b9a\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9\u3001\u30ca\u30e9\u30c6\u30a3\u30d6\u30b7\u30b9\u30c6\u30e0\u3001\u6226\u7565\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3001\u5730\u653f\u5b66\u30e2\u30c7\u30ea\u30f3\u30b0\u306b\u304a\u3051\u308b\u6700\u5148\u7aef\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u300247\u30f6\u56fd\u306e\u653f\u5e9c\u3001\u4f01\u696d\u3001\u6a5f\u95a2\u306b\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",
        "about.p2": "2019\u5e74\u30b8\u30e5\u30cd\u30fc\u30d6\u3067\u8a2d\u7acb\u3002\u6df1\u3044\u5c02\u9580\u77e5\u8b58\u3068\u5148\u9032\u6280\u8853\u3092\u7d44\u307f\u5408\u308f\u305b\u3001\u4e0d\u78ba\u5b9f\u6027\u3092\u6392\u9664\u3057\u65ad\u56fa\u305f\u308b\u884c\u52d5\u3092\u53ef\u80fd\u306b\u3059\u308b\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3057\u3066\u3044\u307e\u3059\u3002",
        "divisions.heading": "6\u3064\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3002<br>\u4e00\u3064\u306e\u4f7f\u547d\u3002",
        "divisions.viewCta": "\u8a73\u7d30\u3092\u898b\u308b",
        "div.prism.tagline": "\u610f\u601d\u6c7a\u5b9a\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9",
        "div.prism.desc": "\u8907\u96d1\u306a\u30d3\u30b8\u30cd\u30b9\u8ab2\u984c\u3092\u5b9f\u884c\u53ef\u80fd\u306a\u4e8c\u9805\u5224\u65ad\u306b\u5909\u63db\u3059\u308b\u8a8d\u77e5\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3002",
        "div.zord.tagline": "\u30ca\u30e9\u30c6\u30a3\u30d6\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9",
        "div.zord.desc": "\u5168\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u30c1\u30e3\u30cd\u30eb\u306b\u304a\u3051\u308b\u4f01\u696d\u30ca\u30e9\u30c6\u30a3\u30d6\u306e\u8ffd\u8de1\u3068\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u7ba1\u7406\u3002",
        "div.hegemony.tagline": "\u6226\u7565\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",
        "div.hegemony.desc": "\u7af6\u4e89\u74b0\u5883\u5206\u6790\u306e\u305f\u3081\u306e\u90fd\u5e02\u9818\u57df\u30e2\u30c7\u30ea\u30f3\u30b0\u3068\u6226\u7565\u7684\u8cc7\u6e90\u5c55\u958b\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3002",
        "div.vanguard.tagline": "\u8cc7\u6e90\u30c0\u30a4\u30ca\u30df\u30af\u30b9",
        "div.vanguard.desc": "\u30b5\u30d7\u30e9\u30a4\u30c1\u30a7\u30fc\u30f3\u7d1b\u4e89\u30b7\u30ca\u30ea\u30aa\u306b\u304a\u3051\u308b\u7af6\u4e89\u7684\u8cc7\u6e90\u914d\u5206\u3068\u5e02\u5834\u652f\u914d\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3002",
        "div.entropy.tagline": "\u30b7\u30b9\u30c6\u30df\u30c3\u30af\u30ea\u30b9\u30af\u5206\u6790",
        "div.entropy.desc": "\u30b7\u30b9\u30c6\u30df\u30c3\u30af\u306a\u8106\u5f31\u6027\u3092\u7279\u5b9a\u3059\u308b\u305f\u3081\u306e\u7d4c\u6e08\u30b9\u30c8\u30ec\u30b9\u30c6\u30b9\u30c8\u3068\u30ab\u30b9\u30b1\u30fc\u30c9\u969c\u5bb3\u30e2\u30c7\u30ea\u30f3\u30b0\u3002",
        "div.meridian.tagline": "\u5730\u653f\u5b66\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30b9",
        "div.meridian.desc": "7\u3064\u306e\u4e3b\u8981\u52e2\u529b\u570f\u306b\u308f\u305f\u308b\u591a\u56fd\u9593\u5916\u4ea4\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3068\u540c\u76df\u7ba1\u7406\u3002",
        "presence.tag": "\u30b0\u30ed\u30fc\u30d0\u30eb\u62e0\u70b9",
        "presence.heading": "\u3059\u3079\u3066\u306e<br>\u5b50\u5348\u7dda\u3092\u8d8a\u3048\u3066",
        "presence.geneva": "\u30b0\u30ed\u30fc\u30d0\u30eb\u672c\u793e",
        "presence.london": "\u91d1\u878d\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",
        "presence.paris": "\u6b27\u5dde\u4e8b\u696d\u30cf\u30d6",
        "presence.newyork": "\u5317\u7c73\u672c\u793e",
        "presence.saopaulo": "LATAM\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",
        "presence.singapore": "\u30a2\u30b8\u30a2\u592a\u5e73\u6d0b\u672c\u793e",
        "presence.tokyo": "\u65e5\u672c\u30aa\u30da\u30ec\u30fc\u30b7\u30e7\u30f3",
        "presence.dubai": "\u4e2d\u6771\u30cf\u30d6",
        "contact.heading": "\u4e0d\u78ba\u5b9f\u6027\u3092<br>\u6392\u9664\u3059\u308b\u6e96\u5099\u306f\uff1f",
        "contact.desc": "WorldFirm\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u3069\u306e\u3088\u3046\u306b\u6226\u7565\u7684\u80fd\u529b\u3092\u5909\u9769\u3067\u304d\u308b\u304b\u3001\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002",
        "contact.cta": "\u304a\u554f\u3044\u5408\u308f\u305b",
        "footer.tagline": "\u660e\u65e5\u306e\u78ba\u5b9f\u6027\u3092\u8a2d\u8a08\u3059\u308b",
        "footer.company": "\u4f1a\u793e\u60c5\u5831",
        "footer.aboutUs": "\u6982\u8981",
        "footer.careers": "\u63a1\u7528\u60c5\u5831",
        "footer.press": "\u30d7\u30ec\u30b9",
        "footer.hq": "\u672c\u793e",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. All rights reserved.",
        "footer.privacy": "\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc",
        "footer.terms": "\u5229\u7528\u898f\u7d04",
        "footer.legal": "\u6cd5\u7684\u4e8b\u9805",
        "overlay.capabilities": "\u4e3b\u8981\u6a5f\u80fd",
        "overlay.specs": "\u6280\u8853\u4ed5\u69d8",
        "overlay.accessPlatform": "\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3078"
    },
    ar: {
        "nav.about": "\u0639\u0646\u0651\u0627",
        "nav.divisions": "\u0627\u0644\u0623\u0642\u0633\u0627\u0645",
        "nav.presence": "\u0627\u0644\u062a\u0648\u0627\u062c\u062f",
        "nav.contact": "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
        "hero.headline": "\u062a\u0648\u0642\u0641\u0646\u0627 \u0639\u0646 \u0627\u0645\u062a\u0644\u0627\u0643 \u0622\u0631\u0627\u0621.<br>\u0646\u062d\u0646 \u0646\u0642\u0631\u0651\u0631 \u0627\u0644\u062d\u0642\u064a\u0642\u0629.",
        "hero.cta": "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0642\u0633\u0627\u0645\u0646\u0627",
        "hero.caption": "\u0633\u062a \u0645\u0646\u0635\u0627\u062a. 47 \u062f\u0648\u0644\u0629. \u0645\u0647\u0645\u0629 \u0648\u0627\u062d\u062f\u0629.",
        "stats.employees": "\u0645\u0648\u0638\u0641 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645",
        "stats.countries": "\u062f\u0648\u0644\u0629",
        "stats.divisions": "\u0623\u0642\u0633\u0627\u0645 \u0645\u062a\u062e\u0635\u0635\u0629",
        "stats.revenue": "\u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a \u0627\u0644\u0633\u0646\u0648\u064a\u0629",
        "about.heading": "\u0631\u0633\u0645 \u0645\u0633\u062a\u0642\u0628\u0644<br><em>\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a</em>",
        "about.p1": "\u062a\u0642\u062f\u0645 WorldFirm \u0645\u0646\u0635\u0627\u062a \u0645\u062a\u0637\u0648\u0631\u0629 \u0641\u064a \u0630\u0643\u0627\u0621 \u0627\u062a\u062e\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u0631\u062f\u064a\u0629 \u0648\u0627\u0644\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629 \u0648\u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u062c\u064a\u0648\u0633\u064a\u0627\u0633\u064a\u0629. \u062a\u062e\u062f\u0645 \u0623\u0642\u0633\u0627\u0645\u0646\u0627 \u0627\u0644\u0633\u062a\u0651\u0629 \u0627\u0644\u062d\u0643\u0648\u0645\u0627\u062a \u0648\u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0648\u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0641\u064a 47 \u062f\u0648\u0644\u0629.",
        "about.p2": "\u062a\u0623\u0633\u0633\u062a \u0641\u064a \u062c\u0646\u064a\u0641 \u0639\u0627\u0645 2019\u060c \u0646\u062c\u0645\u0639 \u0628\u064a\u0646 \u0627\u0644\u062e\u0628\u0631\u0629 \u0627\u0644\u0639\u0645\u064a\u0642\u0629 \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629 \u0644\u0628\u0646\u0627\u0621 \u0623\u0646\u0638\u0645\u0629 \u062a\u0642\u0644\u0644 \u0639\u062f\u0645 \u0627\u0644\u064a\u0642\u064a\u0646 \u0648\u062a\u0645\u0643\u0651\u0646 \u0645\u0646 \u0627\u062a\u062e\u0627\u0630 \u0625\u062c\u0631\u0627\u0621\u0627\u062a \u062d\u0627\u0633\u0645\u0629.",
        "divisions.heading": "\u0633\u062a \u0645\u0646\u0635\u0627\u062a.<br>\u0645\u0647\u0645\u0629 \u0648\u0627\u062d\u062f\u0629.",
        "divisions.viewCta": "\u0639\u0631\u0636 \u0627\u0644\u0642\u0633\u0645",
        "div.prism.tagline": "\u0630\u0643\u0627\u0621 \u0627\u062a\u062e\u0627\u0630 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a",
        "div.prism.desc": "\u0645\u0646\u0635\u0629 \u062a\u0635\u0641\u064a\u0629 \u0645\u0639\u0631\u0641\u064a\u0629 \u062a\u062e\u062a\u0632\u0644 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u0639\u0642\u062f\u0629 \u0625\u0644\u0649 \u0642\u0631\u0627\u0631\u0627\u062a \u062b\u0646\u0627\u0626\u064a\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0646\u0641\u064a\u0630.",
        "div.zord.tagline": "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0633\u0631\u062f\u064a",
        "div.zord.desc": "\u062a\u062a\u0628\u0639 \u0648\u0625\u062f\u0627\u0631\u0629 \u062f\u0648\u0631\u0629 \u062d\u064a\u0627\u0629 \u0627\u0644\u0633\u0631\u062f\u064a\u0627\u062a \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629 \u0639\u0628\u0631 \u062c\u0645\u064a\u0639 \u0642\u0646\u0648\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644.",
        "div.hegemony.tagline": "\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629",
        "div.hegemony.desc": "\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0623\u0631\u0627\u0636\u064a \u0627\u0644\u062d\u0636\u0631\u064a\u0629 \u0648\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u0646\u0634\u0631 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a \u0644\u0644\u0645\u0648\u0627\u0631\u062f \u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u0634\u0647\u062f \u0627\u0644\u062a\u0646\u0627\u0641\u0633\u064a.",
        "div.vanguard.tagline": "\u062f\u064a\u0646\u0627\u0645\u064a\u0643\u064a\u0627\u062a \u0627\u0644\u0645\u0648\u0627\u0631\u062f",
        "div.vanguard.desc": "\u0645\u062d\u0627\u0643\u0627\u0629 \u0627\u0644\u062a\u062e\u0635\u064a\u0635 \u0627\u0644\u062a\u0646\u0627\u0641\u0633\u064a \u0644\u0644\u0645\u0648\u0627\u0631\u062f \u0648\u0627\u0644\u0647\u064a\u0645\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u0633\u0648\u0642 \u0644\u0633\u064a\u0646\u0627\u0631\u064a\u0648\u0647\u0627\u062a \u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0625\u0645\u062f\u0627\u062f.",
        "div.entropy.tagline": "\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u062e\u0627\u0637\u0631 \u0627\u0644\u0646\u0638\u0627\u0645\u064a\u0629",
        "div.entropy.desc": "\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0625\u062c\u0647\u0627\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u064a\u0629 \u0648\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0625\u062e\u0641\u0627\u0642\u0627\u062a \u0627\u0644\u0645\u062a\u062a\u0627\u0644\u064a\u0629 \u0644\u062a\u062d\u062f\u064a\u062f \u0646\u0642\u0627\u0637 \u0627\u0644\u0636\u0639\u0641 \u0627\u0644\u0646\u0638\u0627\u0645\u064a\u0629.",
        "div.meridian.tagline": "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u062c\u064a\u0648\u0633\u064a\u0627\u0633\u064a",
        "div.meridian.desc": "\u0645\u062d\u0627\u0643\u0627\u0629 \u062f\u0628\u0644\u0648\u0645\u0627\u0633\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u062c\u0646\u0633\u064a\u0627\u062a \u0648\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062a\u062d\u0627\u0644\u0641\u0627\u062a \u0639\u0628\u0631 \u0633\u0628\u0639 \u0643\u062a\u0644 \u0642\u0648\u0649 \u0631\u0626\u064a\u0633\u064a\u0629.",
        "presence.tag": "\u0627\u0644\u062a\u0648\u0627\u062c\u062f \u0627\u0644\u0639\u0627\u0644\u0645\u064a",
        "presence.heading": "\u0646\u0639\u0645\u0644 \u0639\u0628\u0631<br>\u0643\u0644 \u062e\u0637\u0648\u0637 \u0627\u0644\u0637\u0648\u0644",
        "presence.geneva": "\u0627\u0644\u0645\u0642\u0631 \u0627\u0644\u0639\u0627\u0644\u0645\u064a",
        "presence.london": "\u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0645\u0627\u0644\u064a\u0629",
        "presence.paris": "\u0645\u0631\u0643\u0632 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
        "presence.newyork": "\u0645\u0642\u0631 \u0623\u0645\u0631\u064a\u0643\u0627 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629",
        "presence.saopaulo": "\u0639\u0645\u0644\u064a\u0627\u062a \u0623\u0645\u0631\u064a\u0643\u0627 \u0627\u0644\u0644\u0627\u062a\u064a\u0646\u064a\u0629",
        "presence.singapore": "\u0645\u0642\u0631 \u0622\u0633\u064a\u0627 \u0648\u0627\u0644\u0645\u062d\u064a\u0637 \u0627\u0644\u0647\u0627\u062f\u0626",
        "presence.tokyo": "\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u064a\u0627\u0628\u0627\u0646",
        "presence.dubai": "\u0645\u0631\u0643\u0632 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637",
        "contact.heading": "\u0645\u0633\u062a\u0639\u062f \u0644\u0625\u0632\u0627\u0644\u0629<br>\u0639\u062f\u0645 \u0627\u0644\u064a\u0642\u064a\u0646\u061f",
        "contact.desc": "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064a\u0642\u0646\u0627 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u0643\u064a\u0641 \u064a\u0645\u0643\u0646 \u0644\u0645\u0646\u0635\u0627\u062a WorldFirm \u062a\u062d\u0648\u064a\u0644 \u0642\u062f\u0631\u0627\u062a\u0643 \u0627\u0644\u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a\u0629.",
        "contact.cta": "\u0627\u062a\u0635\u0644 \u0628\u0646\u0627",
        "footer.tagline": "\u0645\u0647\u0646\u062f\u0633\u0648 \u064a\u0642\u064a\u0646\u064a\u0627\u062a \u0627\u0644\u063a\u062f",
        "footer.company": "\u0627\u0644\u0634\u0631\u0643\u0629",
        "footer.aboutUs": "\u0639\u0646\u0651\u0627",
        "footer.careers": "\u0627\u0644\u0648\u0638\u0627\u0626\u0641",
        "footer.press": "\u0627\u0644\u0635\u062d\u0627\u0641\u0629",
        "footer.hq": "\u0627\u0644\u0645\u0642\u0631 \u0627\u0644\u0631\u0626\u064a\u0633\u064a",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
        "footer.privacy": "\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
        "footer.terms": "\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629",
        "footer.legal": "\u0625\u0634\u0639\u0627\u0631 \u0642\u0627\u0646\u0648\u0646\u064a",
        "overlay.capabilities": "\u0627\u0644\u0642\u062f\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
        "overlay.specs": "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0627\u0644\u062a\u0642\u0646\u064a\u0629",
        "overlay.accessPlatform": "\u0627\u0644\u062f\u062e\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0646\u0635\u0629"
    },
    zh: {
        "nav.about": "\u5173\u4e8e",
        "nav.divisions": "\u4e8b\u4e1a\u90e8",
        "nav.presence": "\u5168\u7403\u5e03\u5c40",
        "nav.contact": "\u8054\u7cfb\u6211\u4eec",
        "hero.headline": "\u6211\u4eec\u4e0d\u518d\u6301\u6709\u89c2\u70b9\u3002<br>\u6211\u4eec\u9610\u8ff0\u771f\u76f8\u3002",
        "hero.cta": "\u63a2\u7d22\u6211\u4eec\u7684\u4e8b\u4e1a\u90e8",
        "hero.caption": "\u516d\u5927\u5e73\u53f0\u300247\u4e2a\u56fd\u5bb6\u3002\u4e00\u4e2a\u4f7f\u547d\u3002",
        "stats.employees": "\u5168\u7403\u5458\u5de5",
        "stats.countries": "\u4e2a\u56fd\u5bb6",
        "stats.divisions": "\u4e13\u4e1a\u4e8b\u4e1a\u90e8",
        "stats.revenue": "\u5e74\u8425\u6536",
        "about.heading": "\u5851\u9020<br><em>\u6218\u7565\u60c5\u62a5</em>\u7684\u672a\u6765",
        "about.p1": "WorldFirm\u63d0\u4f9b\u51b3\u7b56\u667a\u80fd\u3001\u53d9\u4e8b\u7cfb\u7edf\u3001\u6218\u7565\u6a21\u62df\u548c\u5730\u7f18\u653f\u6cbb\u5efa\u6a21\u7b49\u524d\u6cbf\u5e73\u53f0\u3002\u6211\u4eec\u7684\u516d\u4e2a\u4e13\u4e1a\u4e8b\u4e1a\u90e8\u670d\u52a1\u4e8e47\u4e2a\u56fd\u5bb6\u7684\u653f\u5e9c\u3001\u4f01\u4e1a\u548c\u673a\u6784\u3002",
        "about.p2": "\u4e8e2019\u5e74\u5728\u65e5\u5185\u74e6\u6210\u7acb\uff0c\u6211\u4eec\u5c06\u6df1\u539a\u7684\u4e13\u4e1a\u77e5\u8bc6\u4e0e\u5148\u8fdb\u6280\u672f\u76f8\u7ed3\u5408\uff0c\u6784\u5efa\u51cf\u5c11\u4e0d\u786e\u5b9a\u6027\u5e76\u5b9e\u73b0\u679c\u65ad\u884c\u52a8\u7684\u7cfb\u7edf\u3002",
        "divisions.heading": "\u516d\u5927\u5e73\u53f0\u3002<br>\u4e00\u4e2a\u4f7f\u547d\u3002",
        "divisions.viewCta": "\u67e5\u770b\u8be6\u60c5",
        "div.prism.tagline": "\u51b3\u7b56\u667a\u80fd",
        "div.prism.desc": "\u8ba4\u77e5\u8fc7\u6ee4\u5e73\u53f0\uff0c\u5c06\u590d\u6742\u7684\u5546\u4e1a\u95ee\u9898\u7b80\u5316\u4e3a\u53ef\u6267\u884c\u7684\u4e8c\u5143\u51b3\u7b56\u3002",
        "div.zord.tagline": "\u53d9\u4e8b\u667a\u80fd",
        "div.zord.desc": "\u8de8\u6240\u6709\u7ec4\u7ec7\u6c9f\u901a\u6e20\u9053\u7684\u4f01\u4e1a\u53d9\u4e8b\u8ddf\u8e2a\u548c\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002",
        "div.hegemony.tagline": "\u6218\u7565\u8fd0\u8425",
        "div.hegemony.desc": "\u7528\u4e8e\u7ade\u4e89\u683c\u5c40\u5206\u6790\u7684\u57ce\u5e02\u9886\u571f\u5efa\u6a21\u548c\u6218\u7565\u8d44\u6e90\u90e8\u7f72\u6a21\u62df\u3002",
        "div.vanguard.tagline": "\u8d44\u6e90\u52a8\u6001",
        "div.vanguard.desc": "\u9488\u5bf9\u4f9b\u5e94\u94fe\u51b2\u7a81\u573a\u666f\u7684\u7ade\u4e89\u6027\u8d44\u6e90\u5206\u914d\u548c\u5e02\u573a\u4e3b\u5bfc\u6a21\u62df\u3002",
        "div.entropy.tagline": "\u7cfb\u7edf\u6027\u98ce\u9669\u5206\u6790",
        "div.entropy.desc": "\u7ecf\u6d4e\u538b\u529b\u6d4b\u8bd5\u548c\u7ea7\u8054\u6545\u969c\u5efa\u6a21\uff0c\u8bc6\u522b\u7cfb\u7edf\u6027\u8106\u5f31\u6027\u3002",
        "div.meridian.tagline": "\u5730\u7f18\u653f\u6cbb\u667a\u80fd",
        "div.meridian.desc": "\u8de8\u4e03\u5927\u6743\u529b\u96c6\u56e2\u7684\u591a\u56fd\u5916\u4ea4\u6a21\u62df\u548c\u8054\u76df\u7ba1\u7406\u3002",
        "presence.tag": "\u5168\u7403\u5e03\u5c40",
        "presence.heading": "\u8de8\u8d8a\u6bcf\u4e00\u6761<br>\u5b50\u5348\u7ebf\u8fd0\u8425",
        "presence.geneva": "\u5168\u7403\u603b\u90e8",
        "presence.london": "\u91d1\u878d\u8fd0\u8425",
        "presence.paris": "\u6b27\u6d32\u4e8b\u4e1a\u4e2d\u5fc3",
        "presence.newyork": "\u5317\u7f8e\u603b\u90e8",
        "presence.saopaulo": "\u62c9\u7f8e\u8fd0\u8425",
        "presence.singapore": "\u4e9a\u592a\u603b\u90e8",
        "presence.tokyo": "\u65e5\u672c\u8fd0\u8425",
        "presence.dubai": "\u4e2d\u4e1c\u4e2d\u5fc3",
        "contact.heading": "\u51c6\u5907\u597d\u6d88\u9664<br>\u4e0d\u786e\u5b9a\u6027\u4e86\u5417\uff1f",
        "contact.desc": "\u8054\u7cfb\u6211\u4eec\u7684\u56e2\u961f\uff0c\u4e86\u89e3WorldFirm\u7684\u5e73\u53f0\u5982\u4f55\u8f6c\u53d8\u60a8\u7684\u6218\u7565\u80fd\u529b\u3002",
        "contact.cta": "\u8054\u7cfb\u6211\u4eec",
        "footer.tagline": "\u67b6\u6784\u660e\u5929\u7684\u786e\u5b9a\u6027",
        "footer.company": "\u516c\u53f8",
        "footer.aboutUs": "\u5173\u4e8e\u6211\u4eec",
        "footer.careers": "\u62db\u8058",
        "footer.press": "\u65b0\u95fb",
        "footer.hq": "\u603b\u90e8",
        "footer.copy": "\u00a9 2026 WorldFirm Group SA. \u7248\u6743\u6240\u6709\u3002",
        "footer.privacy": "\u9690\u79c1\u653f\u7b56",
        "footer.terms": "\u670d\u52a1\u6761\u6b3e",
        "footer.legal": "\u6cd5\u5f8b\u58f0\u660e",
        "overlay.capabilities": "\u6838\u5fc3\u80fd\u529b",
        "overlay.specs": "\u6280\u672f\u89c4\u683c",
        "overlay.accessPlatform": "\u8fdb\u5165\u5e73\u53f0"
    }
};

/* ============================================
   DIVISIONS DATA (multilingual)
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
    if (!T[lang]) lang = "en";
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

    document.querySelectorAll(".lang-option").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const currentBtn = document.querySelector(".lang-current");
    if (currentBtn) currentBtn.textContent = lang.toUpperCase();

    const overlay = document.getElementById("division-overlay");
    if (overlay.classList.contains("open")) {
        const key = overlay.dataset.currentDivision;
        if (key) openDivision(key);
    }
}

function initI18n() {
    const saved = localStorage.getItem("wf-lang");
    const supported = Object.keys(T);
    const browserBase = navigator.language?.split("-")[0];
    const browserLang = supported.includes(browserBase) ? browserBase : "en";
    const lang = saved && supported.includes(saved) ? saved : browserLang;

    const selectEl = document.querySelector(".lang-select");
    const currentBtn = document.querySelector(".lang-current");

    currentBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        selectEl.classList.toggle("open");
        currentBtn.setAttribute("aria-expanded", selectEl.classList.contains("open"));
    });

    document.querySelectorAll(".lang-option").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            setLang(btn.dataset.lang);
            selectEl.classList.remove("open");
            currentBtn.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", () => {
        selectEl?.classList.remove("open");
        currentBtn?.setAttribute("aria-expanded", "false");
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
