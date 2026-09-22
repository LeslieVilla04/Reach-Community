
// ============================================================
// TRANSLATIONS & DICTIONARIES
// ============================================================

const TRANSLATIONS = {
    en: {
      docTitle: "Reach Community - Find help near you",
      modalTitle: "Quick check-in",
      navCheckin: "Check in",
      navBrowse: "Browse all resources",
      call211: "Call 211",
      heroTitle: "Find help near you, no forms or account needed.",
      heroSub: "Answer a few short questions about what you're dealing with right now. We'll point you to real, local, free or low cost resources.",
      heroBtn: "Start the check-in",
      resultsTitle: "Resources that match what you shared",
      directoryTitle: "Browse everything",
      directorySub: "No quiz required — every resource, grouped by category.",
      footerText: "Reach Community is a student-built demo project and is not affiliated with LA County or 211. In a real emergency, call 911. For any other need, 211 is free, confidential, and available 24/7.",
      stepIndicator: (current, total) => `Question ${current} of ${total}`,
      yes: "Yes",
      no: "No",
      all: "All",
      checkinDone: "Check-in complete.",
      noMatches: "Based on your answers, we didn't find an urgent match — but you can still browse everything below.",
      matchesFound: (labels) => `You mentioned needing help with: ${labels}.`,
      urgentLabel: "Need help right now?",
      searchPlaceholder: "Search resources...",
      noResults: "No resources match your search.",
      navSaved: "Saved",
      savedTitle: "Saved resources",
      savedSub: "Resources you've bookmarked. Saved on this device only.",
      savedEmpty: "You haven't saved anything yet. Tap the star on any resource to save it here."

    },
    es: {
      docTitle: "Reach Community - Encuentra ayuda cerca de ti",
      modalTitle: "Evaluación rápida",
      navCheckin: "Iniciar evaluación",
      navBrowse: "Ver todos los recursos",
      call211: "Llamar al 211",
      heroTitle: "Encuentra ayuda cerca de ti, sin formularios ni cuenta.",
      heroSub: "Responde unas breves preguntas sobre tu situación actual. Te guiaremos hacia recursos locales, gratuitos o de bajo costo.",
      heroBtn: "Comenzar evaluación",
      resultsTitle: "Recursos que coinciden con tus respuestas",
      directoryTitle: "Explorar todo",
      directorySub: "Sin cuestionario — todos los recursos agrupados por categoría.",
      footerText: "Reach Community es un proyecto de demostración estudiantil y no está afiliado al Condado de LA ni al 211. En una emergencia real, llama al 911. Para cualquier otra necesidad, el 211 es gratuito, confidencial y disponible 24/7.",
      stepIndicator: (current, total) => `Pregunta ${current} de ${total}`,
      yes: "Sí",
      no: "No",
      all: "Todos",
      checkinDone: "Evaluación completada.",
      noMatches: "Según tus respuestas, no encontramos una coincidencia urgente, pero aún puedes explorar todo a continuación.",
      matchesFound: (labels) => `Mencionaste que necesitas ayuda con: ${labels}.`,
      urgentLabel: "¿Necesitas ayuda ahora mismo?",
      searchPlaceholder: "Buscar recursos...",
      noResults: "No hay recursos que coincidan con tu búsqueda.",
      navSaved: "Guardados",
      savedTitle: "Recursos guardados",
      savedSub: "Recursos que has guardado. Solo se guardan en este dispositivo.",
      savedEmpty: "Aún no has guardado nada. Toca la estrella en cualquier recurso para guardarlo aquí."

    }
  };



  const CATEGORIES = {
    food:          { label: { en: "Food", es: "Comida" } },
    housing:       { label: { en: "Housing", es: "Vivienda" } },
    jobs:          { label: { en: "Jobs & income", es: "Empleo e ingresos" } },
    childcare:     { label: { en: "Childcare", es: "Cuidado infantil" } },
    health:        { label: { en: "Healthcare", es: "Atención médica" } },
    transportation:{ label: { en: "Transportation", es: "Transporte" } },
    legal:         { label: { en: "Legal aid", es: "Ayuda legal" } },
    utilities:     { label: { en: "Utilities", es: "Servicios públicos" } },
  };

const RESOURCES = [
  {
    id: "r1",
    category: "food",
    name: "LA Regional Food Bank",
    description: {
      en: "Find a free food pantry near you through their partner agency locator.",
      es: "Encuentra una despensa de alimentos gratuita cerca de ti a través de su localizador de agencias."
    },
    contact: "lafoodbank.org",
  },
  {
    id: "r2",
    category: "food",
    name: "Food Forward",
    description: {
      en: "Free fresh produce distributed at community sites across LA.",
      es: "Frutas y verduras frescas gratuitas distribuidas en centros comunitarios de Los Ángeles."
    },
    contact: "foodforward.org",
  },
  {
    id: "r3",
    category: "food",
    name: "CalFresh",
    description: {
      en: "Monthly food assistance (California's SNAP program). Apply online or by phone.",
      es: "Asistencia mensual para alimentos (programa SNAP de California). Solicita en línea o por teléfono."
    },
    contact: "1-866-613-3777 · BenefitsCal.com",
  },
  {
    id: "r4",
    category: "housing",
    name: "Stay Housed LA",
    description: {
      en: "Free legal help if you're facing eviction, plus rent/utility assistance referrals.",
      es: "Ayuda legal gratuita si enfrentas un desalojo, además de referencias para asistencia de alquiler y servicios."
    },
    contact: "1-800-477-5977",
  },
  {
    id: "r5",
    category: "housing",
    name: "LA Housing Department",
    description: {
      en: "Search for affordable rental housing across the city.",
      es: "Busca viviendas de alquiler asequibles en toda la ciudad."
    },
    contact: "1-877-428-8844 · housing.lacity.org",
  },
  {
    id: "r6",
    category: "jobs",
    name: "WorkSource Centers (City of LA)",
    description: {
      en: "Free job training, resume help, and computer access. No citizenship requirement. 14+ locations citywide.",
      es: "Capacitación laboral gratuita, ayuda con currículum y acceso a computadoras. Sin requisito de ciudadanía. Más de 14 ubicaciones."
    },
    contact: "wdacs.lacounty.gov",
  },
  {
    id: "r7",
    category: "childcare",
    name: "Child Care Resource Center (CCRC)",
    description: {
      en: "Childcare subsidy program to help cover the cost of care.",
      es: "Programa de subsidio de cuidado infantil para ayudar a cubrir los costos."
    },
    contact: "ccrcca.org",
  },
  {
    id: "r8",
    category: "childcare",
    name: "Connections for Children",
    description: {
      en: "Childcare referrals and financial assistance for Westside/South Bay families.",
      es: "Referencias de cuidado infantil y asistencia financiera para familias de Westside/South Bay."
    },
    contact: "connectionsforchildren.org",
  },
  {
    id: "r9",
    category: "health",
    name: "AltaMed Community Health Centers",
    description: {
      en: "Sliding-scale fees based on income. Uninsured patients welcome.",
      es: "Tarifas según los ingresos del paciente. Se aceptan personas sin seguro médico."
    },
    contact: "1-888-499-9303",
  },
  {
    id: "r10",
    category: "health",
    name: "APLA Health",
    description: {
      en: "Low-cost health clinics open to the community, regardless of insurance status.",
      es: "Clínicas de salud de bajo costo abiertas a la comunidad, independientemente del estado del seguro."
    },
    contact: "aplahealth.org",
  },
  {
    id: "r11",
    category: "transportation",
    name: "Metro LIFE Program",
    description: {
      en: "Free or deeply discounted transit passes for qualifying low-income riders across LA County.",
      es: "Pases de tránsito gratuitos o con gran descuento para personas de bajos ingresos en el condado de LA."
    },
    contact: "1-866-827-8646 · metro.net/life",
  },
  {
    id: "r12",
    category: "legal",
    name: "Legal Aid Foundation of LA (LAFLA)",
    description: {
      en: "Free legal help for low-income residents — housing, immigration, family law, and more.",
      es: "Ayuda legal gratuita para residentes de bajos ingresos — vivienda, inmigración, derecho familiar y más."
    },
    contact: "1-800-399-4529 · lafla.org",
  },
  {
    id: "r13",
    category: "legal",
    name: "Neighborhood Legal Services of LA County",
    description: {
      en: "Free legal assistance with eviction defense, public benefits, and workplace disputes.",
      es: "Asistencia legal gratuita para defensa en desalojos, beneficios públicos y disputas laborales."
    },
    contact: "nlsla.org",
  },
  {
    id: "r14",
    category: "utilities",
    name: "LIHEAP",
    description: {
      en: "Helps pay overdue or current energy bills for income-eligible households.",
      es: "Ayuda a pagar facturas de energía atrasadas o actuales para hogares elegibles por ingresos."
    },
    contact: "1-866-675-6623",
  },
];

const URGENT_RESOURCES = [
    {
      name: "988 Suicide & Crisis Lifeline",
      description: { en: "Call or text. Free, confidential, 24/7.", es: "Llama o envía un mensaje de texto. Gratis, confidencial, 24/7." },
      contact: "988",
    },
    {
      name: "National Domestic Violence Hotline",
      description: { en: "Free, confidential support, 24/7.", es: "Apoyo gratuito y confidencial, 24/7." },
      contact: "1-800-799-7233",
    },
    {
      name: "LAHSA Shelter Hotline",
      description: { en: "Emergency shelter placement, year-round.", es: "Ubicación de refugio de emergencia, todo el año." },
      contact: "1-800-548-6047",
    },
  ];

  // ============================================================
// SAVED RESOURCES
// ============================================================

function loadSavedIds() {
    try {
      const raw = localStorage.getItem("reachcommunity_saved");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }
  
  function persistSavedIds() {
    try {
      localStorage.setItem("reachcommunity_saved", JSON.stringify(savedIds));
    } catch (e) {
      // storage unavailable — fail quietly, saving just won't persist
    }
  }
  
  let savedIds = loadSavedIds();
  
  function toggleSaved(id) {
    if (savedIds.includes(id)) {
      savedIds = savedIds.filter(savedId => savedId !== id);
    } else {
      savedIds.push(id);
    }
    persistSavedIds();
  }

  function bindSaveButtons(container) {
    container.querySelectorAll(".save-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        toggleSaved(btn.dataset.id);
        renderDirectoryList();
        renderSavedList();
        if (currentQuestion >= QUESTIONS.length) {
          updateResultsView();
        }
      });
    });
  }

  // ============================================================
// URGENT BAR
// ============================================================

function telHref(contact) {
    const digits = contact.replace(/[^\d]/g, "");
    return `tel:${digits}`;
  }


  function renderUrgentList() {
    const listEl = document.getElementById("urgentList");
    listEl.innerHTML = URGENT_RESOURCES.map(r => `
      <div class="urgent-item">
        <span class="urgent-name">${r.name}</span>
        <span class="urgent-desc">${r.description[currentLang]}</span>
        <a class="urgent-contact" href="${telHref(r.contact)}">${r.contact}</a>
      </div>
    `).join("");
  }
  
  function toggleUrgent() {
    const listEl = document.getElementById("urgentList");
    const toggleBtn = document.getElementById("urgentToggle");
    const isOpen = !listEl.hidden;
    listEl.hidden = isOpen;
    toggleBtn.classList.toggle("urgent-open", !isOpen);
  }

const QUESTIONS = [
  {
    category: "food",
    q: {
      en: "Are you having trouble affording enough food right now?",
      es: "¿Tienes dificultades para comprar suficientes alimentos en este momento?"
    }
  },
  {
    category: "housing",
    q: {
      en: "Are you worried about rent, eviction, or losing your housing?",
      es: "¿Te preocupa el pago de la renta, un desalojo o perder tu vivienda?"
    }
  },
  {
    category: "jobs",
    q: {
      en: "Do you need help finding a job or income support?",
      es: "¿Necesitas ayuda para encontrar trabajo o apoyo de ingresos?"
    }
  },
  {
    category: "childcare",
    q: {
      en: "Do you need help paying for or finding childcare?",
      es: "¿Necesitas ayuda para pagar o encontrar cuidado infantil?"
    }
  },
  {
    category: "health",
    q: {
      en: "Do you need low-cost or free healthcare access?",
      es: "¿Necesitas acceso a atención médica gratuita o de bajo costo?"
    }
  },
  {
    category: "transportation",
    q: {
      en: "Do you need help affording transportation or transit passes?",
      es: "¿Necesitas ayuda para pagar transporte o pases de tránsito?"
    }
  },
  {
    category: "legal",
    q: {
      en: "Are you dealing with a legal issue — housing, family, immigration, or otherwise?",
      es: "¿Estás lidiando con un problema legal — vivienda, familia, inmigración u otro?"
    }
  },
  {
    category: "utilities",
    q: {
      en: "Do you need help paying for gas, electric, or water bills?",
      es: "¿Necesitas ayuda para pagar las facturas de gas, electricidad o agua?"
    }
  },
];

  // ============================================================
// STATE
// ============================================================

let currentLang = "en";
let currentQuestion = 0;
let neededCategories = []; // categories the person answered "yes" to
let searchTerm = "";

// ============================================================
// QUIZ RENDERING
// ============================================================

function renderQuestion() {
    const card = document.getElementById("checkinCard");
    const indicator = document.getElementById("stepIndicator");
  
    if (currentQuestion >= QUESTIONS.length) {
      showResults();
      return;
    }
  
    const current = QUESTIONS[currentQuestion];
    const strings = TRANSLATIONS[currentLang];
  
    indicator.style.display = "block";
    indicator.textContent = strings.stepIndicator(currentQuestion + 1, QUESTIONS.length);
  
    card.innerHTML = `
      <p class="quiz-question">${current.q[currentLang]}</p>
      <div class="quiz-options">
        <button class="quiz-option" data-answer="yes">${strings.yes}</button>
        <button class="quiz-option" data-answer="no">${strings.no}</button>
      </div>
    `;
  
    const buttons = card.querySelectorAll(".quiz-option");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.answer === "yes") {
          neededCategories.push(current.category);
        }
        currentQuestion++;
        renderQuestion();
      });
    });
  }

//============================================================
// SET LANGUAGE
//============================================================

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
  
        // Update static DOM elements marked with data-i18n (text content)
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.textContent = TRANSLATIONS[lang][key];
        }
    });
    
    // Update inputs marked with data-i18n-placeholder (placeholder attribute)
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        el.placeholder = TRANSLATIONS[lang][key];
        }
    });
    
    // Highlight active language button
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("lang-active", btn.getAttribute("data-lang") === lang);
    });
  
    // Refresh dynamic parts
    renderQuestion();
    renderDirectoryFilters();
    renderDirectoryList();
    renderUrgentList();
    renderSavedList();
  
    if (currentQuestion >= QUESTIONS.length) {
      updateResultsView();
    }
  }

// ============================================================
// RESULTS
// ============================================================

function resourceCardHTML(resource) {
    const categoryLabel = CATEGORIES[resource.category].label[currentLang];
    const description = resource.description[currentLang];
    const isSaved = savedIds.includes(resource.id);
  
    return `
      <div class="resource-card">
        <div class="resource-card-head">
          <span class="resource-tag">${categoryLabel}</span>
          <button class="save-btn ${isSaved ? "save-active" : ""}" data-id="${resource.id}" aria-label="Save">★</button>
        </div>
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-desc">${description}</p>
        <p class="resource-contact">${resource.contact}</p>
      </div>
    `;
  }
  
  function updateResultsView() {
    const strings = TRANSLATIONS[currentLang];
    const matches = RESOURCES.filter(r => neededCategories.includes(r.category));
  
    const summaryEl = document.getElementById("resultsSummary");
    if (matches.length === 0) {
      summaryEl.textContent = strings.noMatches;
    } else {
      const labels = neededCategories.map(c => CATEGORIES[c].label[currentLang]);
      summaryEl.textContent = strings.matchesFound(labels.join(", "));
    }
  
    document.getElementById("resultsList").innerHTML = matches.map(resourceCardHTML).join("");
    bindSaveButtons(document.getElementById("resultsList"));
  }
  
  function showResults() {
    const strings = TRANSLATIONS[currentLang];
    document.getElementById("checkinCard").innerHTML = `<p class="checkin-done">${strings.checkinDone}</p>`;
    document.getElementById("stepIndicator").style.display = "none";
  
    updateResultsView();
  
    const resultsSection = document.getElementById("results");
    resultsSection.hidden = false;
    resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    closeCheckin();
  }


  // ============================================================
// DIRECTORY (browse everything, no quiz required)
// ============================================================

let activeFilter = "all";

function renderDirectoryFilters() {
    const filtersEl = document.getElementById("directoryFilters");
  
    const allCategories = ["all", ...Object.keys(CATEGORIES)];
  
    filtersEl.innerHTML = allCategories.map(cat => {
      const label = cat === "all" 
        ? TRANSLATIONS[currentLang].all 
        : CATEGORIES[cat].label[currentLang];
        
      const activeClass = cat === activeFilter ? "filter-active" : "";
      return `<button class="filter-btn ${activeClass}" data-category="${cat}">${label}</button>`;
    }).join("");
  
    filtersEl.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.category;
        renderDirectoryFilters();
        renderDirectoryList();
      });
    });
  }

  function renderDirectoryList() {
    const listEl = document.getElementById("directoryList");
  
    let visible = activeFilter === "all"
      ? RESOURCES
      : RESOURCES.filter(r => r.category === activeFilter);
  
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      visible = visible.filter(r =>
        r.name.toLowerCase().includes(term) ||
        r.description[currentLang].toLowerCase().includes(term)
      );
    }
  
    listEl.innerHTML = visible.length > 0
      ? visible.map(resourceCardHTML).join("")
      : `<p class="no-results">${TRANSLATIONS[currentLang].noResults}</p>`;

      listEl.innerHTML = visible.length > 0
      ? visible.map(resourceCardHTML).join("")
      : `<p class="no-results">${TRANSLATIONS[currentLang].noResults}</p>`;

      bindSaveButtons(listEl);
  }

  function renderSavedList() {
    const listEl = document.getElementById("savedList");
    const saved = RESOURCES.filter(r => savedIds.includes(r.id));
  
    listEl.innerHTML = saved.length > 0
      ? saved.map(resourceCardHTML).join("")
      : `<p class="no-results">${TRANSLATIONS[currentLang].savedEmpty}</p>`;
  
    bindSaveButtons(listEl);
  }



// ============================================================
// MODAL (check-in popup)
// ============================================================

function openCheckin() {
    document.getElementById("checkinModal").classList.add("open");
    document.getElementById("checkinScrim").classList.add("open");
  }
  
  function closeCheckin() {
    document.getElementById("checkinModal").classList.remove("open");
    document.getElementById("checkinScrim").classList.remove("open");
  }


// ============================================================
// INIT
// ============================================================

function init() {
    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
      langToggle.addEventListener("click", (e) => {
        const btn = e.target.closest(".lang-btn");
        if (btn && btn.dataset.lang && btn.dataset.lang !== currentLang) {
          setLanguage(btn.dataset.lang);
        }
      });
    }
  
    renderQuestion();
    renderDirectoryFilters();
    renderDirectoryList();
    renderUrgentList();
    renderSavedList();
  
    document.getElementById("openCheckinBtn").addEventListener("click", openCheckin);
    document.getElementById("openCheckinNavBtn").addEventListener("click", openCheckin);
    document.getElementById("checkinClose").addEventListener("click", closeCheckin);
    document.getElementById("checkinScrim").addEventListener("click", closeCheckin);
    document.getElementById("urgentToggle").addEventListener("click", toggleUrgent);

    document.getElementById("searchInput").addEventListener("input", (e) => {
        searchTerm = e.target.value;
        renderDirectoryList();
      });
    
  }



document.addEventListener("DOMContentLoaded", init);