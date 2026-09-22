
const CATEGORIES = {
    food:      { label: "Food" },
    housing:   { label: "Housing" },
    jobs:      { label: "Jobs & income" },
    childcare: { label: "Childcare" },
    health:    { label: "Healthcare" },
  };
  
  const RESOURCES = [
    {
      id: "r1",
      category: "food",
      name: "LA Regional Food Bank",
      description: "Find a free food pantry near you through their partner agency locator.",
      contact: "lafoodbank.org",
    },
    {
      id: "r2",
      category: "food",
      name: "Food Forward",
      description: "Free fresh produce distributed at community sites across LA.",
      contact: "foodforward.org",
    },
    {
      id: "r3",
      category: "food",
      name: "CalFresh",
      description: "Monthly food assistance (California's SNAP program). Apply online or by phone.",
      contact: "1-866-613-3777 · BenefitsCal.com",
    },
    {
      id: "r4",
      category: "housing",
      name: "Stay Housed LA",
      description: "Free legal help if you're facing eviction, plus rent/utility assistance referrals.",
      contact: "1-800-477-5977",
    },
    {
      id: "r5",
      category: "housing",
      name: "LA Housing Department",
      description: "Search for affordable rental housing across the city.",
      contact: "1-877-428-8844 · housing.lacity.org",
    },
    {
      id: "r6",
      category: "jobs",
      name: "WorkSource Centers (City of LA)",
      description: "Free job training, resume help, and computer access. No citizenship requirement. 14+ locations citywide.",
      contact: "Find your nearest center at wdacs.lacounty.gov",
    },
    {
      id: "r7",
      category: "childcare",
      name: "Child Care Resource Center (CCRC)",
      description: "Childcare subsidy program to help cover the cost of care.",
      contact: "ccrcca.org",
    },
    {
      id: "r8",
      category: "childcare",
      name: "Connections for Children",
      description: "Childcare referrals and financial assistance for Westside/South Bay families.",
      contact: "connectionsforchildren.org",
    },
    {
      id: "r9",
      category: "health",
      name: "AltaMed Community Health Centers",
      description: "Sliding-scale fees based on income. Uninsured patients welcome.",
      contact: "1-888-499-9303",
    },
    {
      id: "r10",
      category: "health",
      name: "APLA Health",
      description: "Low-cost health clinics open to the community, regardless of insurance status.",
      contact: "aplahealth.org",
    },
  ];
  
  // The 5-question check-in — one yes/no question per category.
  // We ask about every category rather than forcing someone to pick
  // just one, since it's common to need help in more than one area
  // at the same time.
  const QUESTIONS = [
    { category: "food", q: "Are you having trouble affording enough food right now?" },
    { category: "housing", q: "Are you worried about rent, eviction, or losing your housing?" },
    { category: "jobs", q: "Do you need help finding a job or income support?" },
    { category: "childcare", q: "Do you need help paying for or finding childcare?" },
    { category: "health", q: "Do you need low-cost or free healthcare access?" },
  ];

  // ============================================================
// STATE
// ============================================================

let currentQuestion = 0;
let neededCategories = []; // categories the person answered "yes" to

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
  indicator.textContent = `Question ${currentQuestion + 1} of ${QUESTIONS.length}`;

  card.innerHTML = `
    <p class="quiz-question">${current.q}</p>
    <div class="quiz-options">
      <button class="quiz-option" data-answer="yes">Yes</button>
      <button class="quiz-option" data-answer="no">No</button>
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

// ============================================================
// RESULTS
// ============================================================

function resourceCardHTML(resource) {
    const categoryLabel = CATEGORIES[resource.category].label;
    return `
      <div class="resource-card">
        <span class="resource-tag">${categoryLabel}</span>
        <h3 class="resource-name">${resource.name}</h3>
        <p class="resource-desc">${resource.description}</p>
        <p class="resource-contact">${resource.contact}</p>
      </div>
    `;
  }
  
  function showResults() {
    document.getElementById("checkinCard").innerHTML = `<p class="checkin-done">Check-in complete.</p>`;
    document.getElementById("stepIndicator").style.display = "none";
  
    const matches = RESOURCES.filter(r => neededCategories.includes(r.category));
  
    const summaryEl = document.getElementById("resultsSummary");
    if (matches.length === 0) {
      summaryEl.textContent = "Based on your answers, we didn't find an urgent match — but you can still browse everything below.";
    } else {
      const labels = neededCategories.map(c => CATEGORIES[c].label);
      summaryEl.textContent = `You mentioned needing help with: ${labels.join(", ")}.`;
    }
  
    document.getElementById("resultsList").innerHTML = matches.map(resourceCardHTML).join("");
  
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
    const label = cat === "all" ? "All" : CATEGORIES[cat].label;
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
  const visible = activeFilter === "all"
    ? RESOURCES
    : RESOURCES.filter(r => r.category === activeFilter);

  listEl.innerHTML = visible.map(resourceCardHTML).join("");
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
    renderQuestion();
    renderDirectoryFilters();
    renderDirectoryList();
  
    document.getElementById("openCheckinBtn").addEventListener("click", openCheckin);
    document.getElementById("openCheckinNavBtn").addEventListener("click", openCheckin);
    document.getElementById("checkinClose").addEventListener("click", closeCheckin);
    document.getElementById("checkinScrim").addEventListener("click", closeCheckin);
  }

document.addEventListener("DOMContentLoaded", init);