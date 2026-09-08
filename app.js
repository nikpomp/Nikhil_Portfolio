// Portfolio Data for Nikhil Yadav
const data = {
    personal: {
        name: "Nikhil Yadav",
        title: "Software Engineer | Full-Stack Development, Data Systems & AI Applications",
        university: "Shri Ramswaroop Memorial University, Lucknow, India",
        degree: "B. Tech in Computer Science (Sep 2022 - July 2026)",
        location: "Lucknow, Uttar Pradesh, India",
        phone: "+91-7518987201",
        email: "nikhil3nika@gmail.com",
        github: "https://github.com/nikpomp",
        githubUsername: "@nikpomp",
        linkedin: "https://linkedin.com/in/unk17",
        linkedinUsername: "in/unk17",
        summary: "Computer Science undergraduate with experience building end-to-end software systems, database-backed applications, and AI-powered solutions. Developed full-stack ERP platforms, recommendation engines, and misinformation detection workflows using Python, JavaScript, SQL, and modern ML frameworks. Strong problem-solving ability with experience translating real-world requirements into scalable technical solutions. Interested in Forward Deployed Engineering, Software Engineering, and AI Platform roles."
    },
    goals: [
        { name: "AI Platforms & Infrastructure", desc: "Building scalable AI verification chatbots and ML pipelines", color: "#00F2FE" },
        { name: "Full-Stack Systems", desc: "Enterprise database schema design and responsive web apps", color: "#4FACFE" },
        { name: "Forward Deployed Engineering", desc: "Translating complex customer needs into production code", color: "#ffe66d" },
        { name: "Data Optimization", desc: "Query performance tuning and clean relational data modeling", color: "#a8e6cf" },
        { name: "Leadership & Collaboration", desc: "Coordinating tech workshops, sports events, and hackathons", color: "#ff8b94" }
    ],
    skillsCategories: [
        {
            category: "Programming",
            icon: "💻",
            skills: ["Python", "JavaScript", "C++", "SQL"]
        },
        {
            category: "Backend & APIs",
            icon: "⚙️",
            skills: ["REST APIs", "Database Design", "Data Modeling", "CRUD Workflows"]
        },
        {
            category: "Databases",
            icon: "🗄️",
            skills: ["MySQL", "SQL Query Optimization", "Relational Schemas"]
        },
        {
            category: "AI & Data",
            icon: "🤖",
            skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "NLP", "TF-IDF", "Cosine Similarity"]
        },
        {
            category: "Tools & Environment",
            icon: "🛠️",
            skills: ["Git", "GitHub", "VS Code", "Linux", "Web Server"]
        }
    ],
    experience: [
        {
            role: "Software Development Intern",
            company: "Hubble Mind",
            duration: "Jun 2023 - Aug 2023",
            location: "Remote / India",
            highlights: [
                "Designed and maintained structured MySQL databases for client project records, improving data organization and query reliability.",
                "Collaborated with engineering teams to improve backend data workflows and reporting performance for internal tools."
            ]
        }
    ],
    projects: [
        {
            id: "erp",
            title: "ERP System Development",
            tagline: "Full-Stack Enterprise Application",
            category: "Full-Stack / Database",
            highlights: [
                "Designed and developed a centralized ERP platform supporting inventory, employee management, and billing workflows.",
                "Built relational MySQL schema supporting 50+ inventory and employee operations with business-critical CRUD flows.",
                "Developed responsive interfaces using HTML, CSS, and JavaScript for cross-module usability."
            ],
            tech: ["HTML", "CSS", "JavaScript", "MySQL", "CRUD APIs", "Database Design"]
        },
        {
            id: "misinfo",
            title: "AI-Based Misinformation Detection Platform",
            tagline: "NLP / Machine Learning / Interactive Chatbot",
            category: "AI / Machine Learning / NLP",
            highlights: [
                "Built an NLP-powered verification system to analyze text content and identify potentially misleading information.",
                "Implemented preprocessing pipelines with tokenization, cleaning, and TF-IDF vectorization.",
                "Designed a real-time plugin workflow for automated verification and user feedback integration.",
                "Built an interactive AI verification chatbot that accepts user-submitted text, returns credibility scores, and explains classification results in natural language."
            ],
            tech: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Machine Learning", "Chatbot UI"]
        },
        {
            id: "recommendation",
            title: "Product Recommendation Engine",
            tagline: "Content-Based ML Recommendation Service",
            category: "Machine Learning / Data Science",
            highlights: [
                "Developed a recommendation service using content-based filtering and cosine similarity.",
                "Processed product metadata with Pandas and Scikit-learn to generate personalized recommendations."
            ],
            tech: ["Python", "Pandas", "Scikit-learn", "Cosine Similarity", "Data Processing"]
        }
    ],
    education: [
        {
            degree: "B. Tech in Computer Science",
            institution: "Shri Ramswaroop Memorial University, Lucknow, India",
            duration: "Sep 2022 - July 2026",
            status: "Graduated / Final Year",
            details: "Core focus on Software Engineering, AI & Database Systems."
        },
        {
            degree: "Secondary & Higher Secondary Education (CBSE)",
            institution: "Lucknow Public School, Lucknow, India",
            duration: "Completed",
            status: "Graduated",
            details: "Focused on Physics, Chemistry, Mathematics, and Computer Science."
        }
    ],
    coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Software Engineering"
    ],
    leadership: [
        "Collaborated with cross-functional teams during internship projects to improve database workflows and reporting systems.",
        "Participated in hackathons, technical workshops, and peer learning communities.",
        "Coordinated college sports events involving planning, scheduling, and team management."
    ],
    planets: [
        {
            name: "Sun (Profile)",
            color: "#ffd700",
            size: 80,
            milestones: [
                { title: "Nikhil Yadav", desc: "Software Engineer | Full-Stack, Data Systems & AI Applications" },
                { title: "Location", desc: "Lucknow, Uttar Pradesh, India" },
                { title: "Target Roles", desc: "Forward Deployed Engineering, Software Engineering, AI Platform Roles" }
            ],
            skills: [{ name: "Full-Stack" }, { name: "Data Systems" }, { name: "AI Platforms" }]
        },
        {
            name: "Mercury (Skills)",
            color: "#8c7853",
            size: 25,
            distance: 100,
            angle: 0,
            speed: 0.005,
            milestones: [
                { title: "Programming", desc: "Python, JavaScript, C++, SQL" },
                { title: "Backend & DB", desc: "REST APIs, MySQL, Database Design, CRUD Workflows" },
                { title: "AI & ML", desc: "Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, NLP" }
            ],
            skills: [{ name: "Python" }, { name: "JavaScript" }, { name: "SQL" }, { name: "MySQL" }, { name: "PyTorch" }],
            moons: [{ name: "Git" }, { name: "VS Code" }]
        },
        {
            name: "Venus (Education)",
            color: "#ffc649",
            size: 30,
            distance: 140,
            angle: 1.5,
            speed: 0.004,
            milestones: [
                { title: "B. Tech CS", desc: "Shri Ramswaroop Memorial University (2022 - 2026)" },
                { title: "High School (CBSE)", desc: "Lucknow Public School, Lucknow" },
                { title: "Coursework", desc: "DSA, DBMS, OS, Networks, ML, Software Engineering" }
            ],
            skills: [{ name: "DSA" }, { name: "DBMS" }, { name: "Operating Systems" }, { name: "Networks" }],
            moons: [{ name: "Problem Solving" }, { name: "Computer Science" }]
        },
        {
            name: "Earth (Internship)",
            color: "#4a90e2",
            size: 35,
            distance: 180,
            angle: 3,
            speed: 0.003,
            milestones: [
                { title: "Hubble Mind", desc: "Software Development Intern (Jun 2023 - Aug 2023)" },
                { title: "MySQL Databases", desc: "Designed structured client record DBs & improved query reliability." },
                { title: "Workflow Tuning", desc: "Collaborated to boost backend reporting performance." }
            ],
            skills: [{ name: "MySQL" }, { name: "Database Design" }, { name: "Query Optimization" }, { name: "Backend" }],
            moons: [{ name: "Teamwork" }, { name: "Reporting" }, { name: "Client Systems" }]
        },
        {
            name: "Mars (ERP System)",
            color: "#cd5c5c",
            size: 28,
            distance: 220,
            angle: 4.5,
            speed: 0.002,
            milestones: [
                { title: "ERP Platform", desc: "Centralized full-stack platform for inventory, billing & employees." },
                { title: "50+ Operations", desc: "Relational MySQL schema supporting business-critical CRUD workflows." },
                { title: "Responsive UI", desc: "Cross-module usability with HTML, CSS, JavaScript." }
            ],
            skills: [{ name: "Full-Stack" }, { name: "MySQL Schema" }, { name: "CRUD Flows" }],
            moons: [{ name: "Inventory" }, { name: "Billing" }]
        },
        {
            name: "Jupiter (AI Misinfo Detector)",
            color: "#d8ca9d",
            size: 55,
            distance: 280,
            angle: 6,
            speed: 0.0015,
            milestones: [
                { title: "NLP Verification", desc: "Built system to detect misleading information using NLP & ML." },
                { title: "TF-IDF Pipeline", desc: "Implemented tokenization, text cleaning, and vectorization." },
                { title: "Interactive Chatbot", desc: "AI chatbot returning credibility scores & explanations in natural language." }
            ],
            skills: [{ name: "NLP" }, { name: "TF-IDF" }, { name: "Scikit-learn" }, { name: "AI Chatbot" }],
            moons: [{ name: "Credibility Scoring" }, { name: "Plugin Workflow" }, { name: "Real-time AI" }]
        },
        {
            name: "Saturn (Recommendation Engine)",
            color: "#fad5a5",
            size: 50,
            distance: 340,
            angle: 7.5,
            speed: 0.001,
            milestones: [
                { title: "Product Recommender", desc: "Content-based filtering model with Cosine Similarity." },
                { title: "Data Processing", desc: "Processed metadata with Pandas & Scikit-learn for personal recommendations." }
            ],
            skills: [{ name: "Cosine Similarity" }, { name: "Pandas" }, { name: "Scikit-Learn" }],
            moons: [{ name: "Metadata Analysis" }, { name: "Content-Based ML" }]
        },
        {
            name: "Uranus (Leadership)",
            color: "#4fd0e7",
            size: 42,
            distance: 400,
            angle: 9,
            speed: 0.0008,
            milestones: [
                { title: "Hackathons", desc: "Active hacker & participant in technical workshops." },
                { title: "Sports Coordination", desc: "Coordinated college sports events (planning, scheduling, management)." }
            ],
            skills: [{ name: "Leadership" }, { name: "Event Planning" }, { name: "Collaboration" }],
            moons: [{ name: "Cross-Functional" }, { name: "Community" }]
        },
        {
            name: "Neptune (Target Roles)",
            color: "#4166f5",
            size: 40,
            distance: 460,
            angle: 10.5,
            speed: 0.0005,
            milestones: [
                { title: "Forward Deployed Eng.", desc: "Integrating core platforms with client environments." },
                { title: "Software & AI Eng.", desc: "Developing production AI systems and scalable backend infrastructure." }
            ],
            skills: [{ name: "Forward Deployed" }, { name: "Software Eng." }, { name: "AI Platforms" }],
            moons: [{ name: "Production ML" }, { name: "High Impact" }]
        }
    ]
};

// Global State
let currentScreen = 'showcase';
let galaxyScene, galaxyCamera, galaxyRenderer;
let detailedScene, detailedCamera, detailedRenderer;
let animationId;
let meteors = [];
let meteorInterval;
let audioCtx = null;
let isAudioPlaying = false;
let osc1, osc2, gainNode;

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
    populateShowcaseData();
    initEventListeners();
    initLandingStars();
    showErpModule('inventory');
    runRecommendation();
});

// Web Audio API Cosmic Ambience Generator
function toggleAudioAmbience() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const label = document.getElementById('soundLabel');

    if (isAudioPlaying) {
        if (gainNode) gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
        setTimeout(() => {
            if (osc1) osc1.stop();
            if (osc2) osc2.stop();
            isAudioPlaying = false;
        }, 500);
        if (label) label.textContent = 'Sound Off';
    } else {
        audioCtx.resume();
        osc1 = audioCtx.createOscillator();
        osc2 = audioCtx.createOscillator();
        gainNode = audioCtx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, audioCtx.currentTime); // A2 chord
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, audioCtx.currentTime); // E3 fifth interval

        // Slow subtle LFO frequency modulation
        osc1.frequency.exponentialRampToValueAtTime(108, audioCtx.currentTime + 4);
        
        gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 2); // Soft volume

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.start();
        osc2.start();
        isAudioPlaying = true;
        if (label) label.textContent = 'Cosmic Synth On 🎶';
    }
}

// Interactive Demo Tab Switcher
window.switchDemoTab = function(tabId) {
    document.querySelectorAll('.demo-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.demo-tab-content').forEach(content => content.style.display = 'none');

    const selectedBtn = Array.from(document.querySelectorAll('.demo-tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
    if (selectedBtn) selectedBtn.classList.add('active');

    const targetContent = document.getElementById(tabId);
    if (targetContent) targetContent.style.display = 'block';
};

// Demo 1: AI Misinformation Detector Simulation Logic
const misinfoPresets = [
    {
        text: "NASA rover discovers organic molecules on Mars surface.",
        score: 94,
        keywords: ["nasa", "rover", "organic_molecules", "mars_surface"],
        explanation: "High semantic similarity with verified scientific publications. Token frequency aligns with authentic astronomy reporting."
    },
    {
        text: "Click this link to claim a free $5,000 gift card immediately!",
        score: 12,
        keywords: ["click_link", "claim_free", "gift_card", "urgency_trigger"],
        explanation: "High spam/phishing feature probability. TF-IDF flags excessive promotional triggers and unverified external domain references."
    },
    {
        text: "New study shows drinking 8 glasses of water daily boosts cognitive function.",
        score: 88,
        keywords: ["study", "water_hydration", "cognitive_boost", "health_journal"],
        explanation: "Consistent with standard health science terminology. High credibility score across empirical medical datasets."
    }
];

window.setMisinfoSample = function(idx) {
    const preset = misinfoPresets[idx];
    if (preset) {
        document.getElementById('misinfoInput').value = preset.text;
    }
};

window.runMisinfoAnalysis = function() {
    const inputVal = document.getElementById('misinfoInput').value.trim();
    if (!inputVal) return;

    const resultBox = document.getElementById('misinfoResult');
    resultBox.style.display = 'block';

    let matchedPreset = misinfoPresets.find(p => p.text.toLowerCase() === inputVal.toLowerCase());
    
    if (!matchedPreset) {
        // Dynamic scoring heuristics for custom text
        const isClickbait = /click|free|win|money|secret|urgent|guaranteed/i.test(inputVal);
        const score = isClickbait ? Math.floor(Math.random() * 25) + 10 : Math.floor(Math.random() * 30) + 68;
        const tokens = inputVal.toLowerCase().split(/\s+/).filter(w => w.length > 3).slice(0, 4);
        matchedPreset = {
            score: score,
            keywords: tokens,
            explanation: isClickbait 
                ? "Flagged by TF-IDF model: contains transactional urgency triggers and high risk pattern density." 
                : "Parsed TF-IDF feature vector correlates positively with authentic informative technical prose."
        };
    }

    const titleEl = document.getElementById('misinfoScoreTitle');
    const badgeEl = document.getElementById('misinfoBadge');
    const barEl = document.getElementById('misinfoProgressBar');
    const keywordsEl = document.getElementById('misinfoKeywords');
    const expEl = document.getElementById('misinfoExplanation');

    titleEl.textContent = matchedPreset.score > 60 ? "Authentic / Credible Content" : "Potential Misinformation Risk";
    badgeEl.textContent = `${matchedPreset.score}%`;
    badgeEl.style.background = matchedPreset.score > 60 ? "rgba(0, 242, 254, 0.2)" : "rgba(255, 107, 107, 0.2)";
    badgeEl.style.color = matchedPreset.score > 60 ? "#00f2fe" : "#ff6b6b";

    barEl.style.width = '0%';
    setTimeout(() => {
        barEl.style.width = `${matchedPreset.score}%`;
        barEl.style.background = matchedPreset.score > 60 ? "linear-gradient(90deg, #00f2fe, #4facfe)" : "linear-gradient(90deg, #ff6b6b, #ff4757)";
    }, 100);

    keywordsEl.innerHTML = matchedPreset.keywords.map(k => `<span class="kw-pill">${k}</span>`).join(' ');
    expEl.textContent = matchedPreset.explanation;
};

// Demo 2: ERP Schema Visualizer Logic
const erpData = {
    inventory: {
        title: "Inventory & Stock Schema",
        operations: "24 CRUD Operations",
        schema: [
            "TABLE items (id INT PK, sku VARCHAR(50), item_name VARCHAR(100), stock_qty INT, unit_price DECIMAL(10,2));",
            "TABLE stock_movements (movement_id INT PK, item_id INT FK, qty_change INT, movement_type ENUM, timestamp DATETIME);",
            "INDEX idx_sku (sku), idx_item_stock (item_id, stock_qty);"
        ],
        apis: ["POST /api/v1/inventory/item", "GET /api/v1/inventory/stock-summary", "PUT /api/v1/inventory/reorder-alert"]
    },
    employee: {
        title: "Employee & HR Management Schema",
        operations: "18 CRUD Operations",
        schema: [
            "TABLE employees (emp_id INT PK, full_name VARCHAR(100), dept_id INT FK, role VARCHAR(50), status ENUM);",
            "TABLE payroll_records (record_id INT PK, emp_id INT FK, base_salary DECIMAL, tax_deductions DECIMAL, pay_date DATE);",
            "INDEX idx_emp_dept (dept_id), idx_payroll_date (pay_date);"
        ],
        apis: ["GET /api/v1/hr/employees", "POST /api/v1/hr/payroll/process", "PUT /api/v1/hr/department-transfer"]
    },
    billing: {
        title: "Billing & Invoicing Workflow Schema",
        operations: "16 CRUD Operations",
        schema: [
            "TABLE invoices (invoice_id INT PK, client_id INT FK, total_amount DECIMAL, payment_status ENUM, invoice_date DATE);",
            "TABLE invoice_items (item_id INT PK, invoice_id INT FK, product_id INT, quantity INT, subtotal DECIMAL);",
            "INDEX idx_invoice_status (payment_status), idx_client_inv (client_id);"
        ],
        apis: ["POST /api/v1/billing/invoice/generate", "GET /api/v1/billing/receivables", "PUT /api/v1/billing/payment-status"]
    }
};

window.showErpModule = function(modKey) {
    document.querySelectorAll('.erp-mod-btn').forEach(btn => btn.classList.remove('active'));
    const btn = Array.from(document.querySelectorAll('.erp-mod-btn')).find(b => b.getAttribute('onclick').includes(modKey));
    if (btn) btn.classList.add('active');

    const mod = erpData[modKey];
    const display = document.getElementById('erpModuleDisplay');
    if (!mod || !display) return;

    display.innerHTML = `
        <div class="erp-card-header">
            <h4>${mod.title}</h4>
            <span class="erp-badge">${mod.operations}</span>
        </div>
        <div class="erp-code-block">
            <h5>MySQL Relational Schema:</h5>
            <pre><code>${mod.schema.join('\n')}</code></pre>
        </div>
        <div class="erp-apis-block">
            <h5>Business-Critical REST Endpoints:</h5>
            <div class="api-pills-list">
                ${mod.apis.map(a => `<span class="api-pill">${a}</span>`).join('')}
            </div>
        </div>
    `;
};

// Demo 3: Product Recommendation Engine Logic
const recData = {
    python: [
        { name: "Scikit-Learn ML Suite", score: "0.98 Cosine Similarity", desc: "Primary vectorization & model evaluation toolkit." },
        { name: "Pandas Data Pipeline", score: "0.95 Cosine Similarity", desc: "Metadata transformation & DataFrame processing." },
        { name: "TF-IDF Vectorizer", score: "0.91 Cosine Similarity", desc: "Text feature extraction & n-gram weighting." }
    ],
    javascript: [
        { name: "Three.js 3D Engine", score: "0.97 Cosine Similarity", desc: "WebGL interactive space graphics & particle galaxy." },
        { name: "Vanilla JS Async APIs", score: "0.94 Cosine Similarity", desc: "Zero-dependency client state management & DOM manipulation." },
        { name: "REST API Integration", score: "0.89 Cosine Similarity", desc: "Asynchronous backend payload streaming." }
    ],
    sql: [
        { name: "MySQL Relational Schemas", score: "0.99 Cosine Similarity", desc: "50+ operation normalized table structures & FK index tuning." },
        { name: "SQL Query Optimization", score: "0.96 Cosine Similarity", desc: "B-Tree index utilization & JOIN performance tuning." },
        { name: "CRUD Workflow APIs", score: "0.92 Cosine Similarity", desc: "Transactional data consistency & ACID compliance." }
    ]
};

window.runRecommendation = function() {
    const select = document.getElementById('recSelect');
    const resultsContainer = document.getElementById('recResults');
    if (!select || !resultsContainer) return;

    const val = select.value;
    const items = recData[val] || recData['python'];

    resultsContainer.innerHTML = items.map(item => `
        <div class="rec-card">
            <div class="rec-score">${item.score}</div>
            <h4>${item.name}</h4>
            <p>${item.desc}</p>
        </div>
    `).join('');
};

// Populate Modern Showcase UI
function populateShowcaseData() {
    // 1. Technical Skills Badges
    const skillsGrid = document.getElementById('showcaseSkillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        data.skillsCategories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'glass-card skill-category-card';
            card.innerHTML = `
                <div class="category-header">
                    <span class="category-icon">${cat.icon}</span>
                    <h3>${cat.category}</h3>
                </div>
                <div class="skills-pill-list">
                    ${cat.skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
                </div>
            `;
            skillsGrid.appendChild(card);
        });
    }

    // 2. Experience Timeline
    const expContainer = document.getElementById('showcaseExperience');
    if (expContainer) {
        expContainer.innerHTML = '';
        data.experience.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'glass-card experience-card';
            card.innerHTML = `
                <div class="exp-header">
                    <div>
                        <h3>${exp.role}</h3>
                        <div class="exp-company">${exp.company} • <span class="location">${exp.location}</span></div>
                    </div>
                    <span class="exp-duration">${exp.duration}</span>
                </div>
                <ul class="exp-highlights">
                    ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            `;
            expContainer.appendChild(card);
        });
    }

    // 3. Featured Projects Grid
    const projectsGrid = document.getElementById('showcaseProjectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        data.projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'glass-card project-card';
            card.innerHTML = `
                <div class="project-category-badge">${proj.category}</div>
                <h3>${proj.title}</h3>
                <p class="project-tagline">${proj.tagline}</p>
                <ul class="project-highlights">
                    ${proj.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="project-tech-stack">
                    ${proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // 4. Education Cards
    const eduContainer = document.getElementById('showcaseEducation');
    if (eduContainer) {
        eduContainer.innerHTML = '';
        data.education.forEach(edu => {
            const card = document.createElement('div');
            card.className = 'glass-card edu-card';
            card.innerHTML = `
                <div class="edu-header">
                    <h3>${edu.degree}</h3>
                    <span class="edu-duration">${edu.duration}</span>
                </div>
                <p class="edu-institution">${edu.institution}</p>
                <p class="edu-details">${edu.details}</p>
            `;
            eduContainer.appendChild(card);
        });
    }

    // 5. Coursework Pills
    const courseworkList = document.getElementById('showcaseCoursework');
    if (courseworkList) {
        courseworkList.innerHTML = data.coursework.map(c => `<span class="course-badge">${c}</span>`).join('');
    }

    // 6. Leadership Bullet Points
    const leadershipList = document.getElementById('showcaseLeadership');
    if (leadershipList) {
        leadershipList.innerHTML = data.leadership.map(l => `<li>${l}</li>`).join('');
    }
}

// Navigation Handlers
window.showScreen = function(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
    currentScreen = screenId;

    if (screenId === 'milkyway') {
        if (!galaxyScene) initGalaxy();
        animateGalaxy();
    } else if (screenId === 'detailed') {
        initDetailedSolarSystem();
    }
};

window.navigateToResume = function (fromScreen) {
    window.lastScreen = fromScreen || currentScreen;
    showScreen('resume');
};

window.closeResume = function () {
    if (window.lastScreen) {
        showScreen(window.lastScreen);
    } else {
        showScreen('showcase');
    }
};

function initEventListeners() {
    const enterBtn = document.getElementById('enterBtn');
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            showScreen('milkyway');
        });
    }

    const enterSolarBtn = document.getElementById('enterSolarBtn');
    if (enterSolarBtn) {
        enterSolarBtn.addEventListener('click', () => {
            showScreen('detailed');
        });
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showScreen('milkyway');
        });
    }

    const backToLandingBtn = document.getElementById('backToLandingBtn');
    if (backToLandingBtn) {
        backToLandingBtn.addEventListener('click', () => {
            showScreen('showcase');
        });
    }

    const closeInfo = document.getElementById('closeInfo');
    if (closeInfo) {
        closeInfo.addEventListener('click', () => {
            document.getElementById('planetInfo').classList.remove('active');
        });
    }

    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            document.getElementById('contentSidebar').classList.add('active');
        });
    }

    const closeSidebar = document.getElementById('closeSidebar');
    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            document.getElementById('contentSidebar').classList.remove('active');
        });
    }

    populateSidebar();
}

function populateSidebar() {
    const container = document.getElementById('sidebarContent');
    if (!container) return;
    container.innerHTML = '';

    data.planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'sidebar-planet-card';

        const header = document.createElement('h3');
        const dot = document.createElement('span');
        dot.className = 'planet-dot';
        dot.style.backgroundColor = planet.color;
        header.appendChild(dot);
        header.appendChild(document.createTextNode(planet.name));
        card.appendChild(header);

        if (planet.milestones && planet.milestones.length > 0) {
            const section = document.createElement('div');
            section.className = 'sidebar-section';
            section.innerHTML = '<h4>Highlights & Milestones</h4>';
            planet.milestones.forEach(m => {
                const item = document.createElement('div');
                item.style.fontSize = '0.9rem';
                item.style.marginBottom = '6px';
                item.innerHTML = `<strong style="color:#00F2FE;">${m.title}</strong>: ${m.desc}`;
                section.appendChild(item);
            });
            card.appendChild(section);
        }

        if (planet.skills && planet.skills.length > 0) {
            const section = document.createElement('div');
            section.className = 'sidebar-section';
            section.innerHTML = '<h4>Key Skills & Tech</h4>';
            const skillList = document.createElement('div');
            skillList.style.display = 'flex';
            skillList.style.flexWrap = 'wrap';
            skillList.style.gap = '6px';

            planet.skills.forEach(s => {
                const badge = document.createElement('span');
                badge.style.background = 'rgba(79, 172, 254, 0.2)';
                badge.style.border = '1px solid rgba(79, 172, 254, 0.4)';
                badge.style.padding = '3px 10px';
                badge.style.borderRadius = '12px';
                badge.style.fontSize = '0.8rem';
                badge.style.color = '#fff';
                badge.textContent = s.name;
                skillList.appendChild(badge);
            });
            section.appendChild(skillList);
            card.appendChild(section);
        }

        container.appendChild(card);
    });
}

function showPlanetInfo(planet) {
    const info = document.getElementById('planetInfo');
    if (!info) return;
    document.getElementById('planetName').innerText = planet.name;
    document.getElementById('planetName').style.color = planet.color;

    const milestones = document.getElementById('milestones');
    milestones.innerHTML = '<h3 style="color:#00F2FE; margin-bottom:10px;">Highlights & Milestones</h3>';
    if (planet.milestones) {
        planet.milestones.forEach(m => {
            milestones.innerHTML += `<div class="milestone-item"><h4 style="color:#fff; margin-bottom:4px;">${m.title}</h4><p style="opacity:0.9;">${m.desc}</p></div>`;
        });
    }

    const skills = document.getElementById('skills');
    skills.innerHTML = '<h3 style="color:#4FACFE; margin-top:15px; margin-bottom:10px;">Key Skills & Technologies</h3>';
    if (planet.skills) {
        skills.innerHTML += `<div style="display:flex; flex-wrap:wrap; gap:8px;">${planet.skills.map(s => `<div class="skill-item">${s.name}</div>`).join('')}</div>`;
    }

    info.classList.add('active');
}

// Three.js Background Stars for Landing Screen
function initLandingStars() {
    const container = document.querySelector('.stars');
    if (!container) return;
    container.innerHTML = '';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Star {
        constructor() {
            this.x = Math.random() * canvas.width - canvas.width / 2;
            this.y = Math.random() * canvas.height - canvas.height / 2;
            this.z = Math.random() * 1000;
        }

        update() {
            this.z -= 1.5;
            if (this.z < 1) {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.z = 1000;
            }
        }

        draw() {
            const x = (this.x / this.z) * 100 + canvas.width / 2;
            const y = (this.y / this.z) * 100 + canvas.height / 2;
            const s = (1 - this.z / 1000) * 2;

            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
            ctx.arc(x, y, s > 0 ? s : 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const stars = Array(350).fill().map(() => new Star());

    function animate() {
        if (currentScreen === 'landing' || currentScreen === 'showcase') {
            ctx.fillStyle = 'rgba(11, 15, 25, 0.4)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });
        }
        requestAnimationFrame(animate);
    }
    animate();
}

// Three.js Galaxy Initialization
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(0, 242, 254, 0.8)');
    gradient.addColorStop(0.5, 'rgba(79, 172, 254, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

function createMilkyWay() {
    const particles = 25000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    const innerColor = new THREE.Color(0x00f2fe);
    const outerColor = new THREE.Color(0x4facfe);

    for (let i = 0; i < particles; i++) {
        const i3 = i * 3;
        const radius = Math.random() * 600;
        const spinAngle = radius * 0.3;
        const branchAngle = (i % 4) / 4 * Math.PI * 2;

        const x = Math.cos(branchAngle + spinAngle) * radius;
        const y = (Math.random() - 0.5) * 40;
        const z = Math.sin(branchAngle + spinAngle) * radius;

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = z;

        const mixedColor = innerColor.clone();
        mixedColor.lerp(outerColor, radius / 600);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starTexture = createStarTexture();
    const material = new THREE.PointsMaterial({
        size: 3.5,
        map: starTexture,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.05
    });

    return new THREE.Points(geometry, material);
}

function initGalaxy() {
    const canvas = document.getElementById('galaxyCanvas');
    if (!canvas) return;

    galaxyScene = new THREE.Scene();
    galaxyCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
    galaxyRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
    galaxyRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const milkyWay = createMilkyWay();
    galaxyScene.add(milkyWay);

    const container = document.getElementById('goalsContainer');
    if (container) {
        container.innerHTML = '';
        data.goals.forEach((goal) => {
            const card = document.createElement('div');
            card.className = 'goal-card';
            card.innerHTML = `<h3>${goal.name}</h3><p>${goal.desc}</p>`;
            card.style.borderColor = goal.color;
            container.appendChild(card);
        });
    }

    galaxyCamera.position.set(0, 150, 1000);
    galaxyCamera.lookAt(0, 0, 0);
}

function animateGalaxy() {
    if (currentScreen !== 'milkyway') return;

    animationId = requestAnimationFrame(animateGalaxy);
    if (galaxyScene) galaxyScene.rotation.y += 0.0005;

    if (galaxyCamera && galaxyCamera.position.z > 300) {
        galaxyCamera.position.z -= 15;
        galaxyCamera.lookAt(0, 0, 0);
    } else {
        const btn = document.getElementById('enterSolarBtn');
        if (btn) btn.style.display = 'inline-block';
    }

    if (galaxyRenderer && galaxyScene && galaxyCamera) {
        galaxyRenderer.render(galaxyScene, galaxyCamera);
    }
}

// 3D Solar System View
function initDetailedSolarSystem() {
    const canvas = document.getElementById('detailedCanvas');
    if (!canvas) return;

    detailedScene = new THREE.Scene();
    detailedCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
    detailedCamera.position.set(0, 350, 650);
    detailedCamera.lookAt(0, 0, 0);

    detailedRenderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    detailedRenderer.setSize(window.innerWidth, window.innerHeight);
    detailedRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Sun Mesh
    const sunGeo = new THREE.SphereGeometry(60, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.userData = { isSun: true, planetData: data.planets[0] };
    detailedScene.add(sunMesh);

    // Sun Light
    const sunLight = new THREE.PointLight(0xffffff, 2, 2000);
    detailedScene.add(sunLight);
    detailedScene.add(new THREE.AmbientLight(0x404040, 1.5));

    // System Group for Wobble
    const systemGroup = new THREE.Group();
    systemGroup.userData = { isSystemGroup: true, wobbleSpeed: 0.0005, baseTiltX: 0.2, baseTiltZ: 0.1 };
    detailedScene.add(systemGroup);

    // Raycaster for Planet Clicks
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    canvas.onclick = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, detailedCamera);

        const intersects = raycaster.intersectObjects(systemGroup.children, true);
        if (intersects.length > 0) {
            const hitObj = intersects[0].object;
            if (hitObj.userData.planetData) {
                showPlanetInfo(hitObj.userData.planetData);
            }
        } else {
            const sunIntersect = raycaster.intersectObject(sunMesh);
            if (sunIntersect.length > 0) {
                showPlanetInfo(data.planets[0]);
            }
        }
    };

    // Add Planets
    data.planets.slice(1).forEach(p => {
        const pGeo = new THREE.SphereGeometry(p.size / 2.5, 24, 24);
        const pMat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.4 });
        const pMesh = new THREE.Mesh(pGeo, pMat);

        pMesh.userData = {
            planetData: p,
            distance: p.distance,
            speed: p.speed,
            angle: p.angle,
            ovalRatio: 0.85
        };

        // Orbit Line
        const orbitCurve = new THREE.EllipseCurve(0, 0, p.distance, p.distance * 0.85, 0, 2 * Math.PI, false, 0);
        const points = orbitCurve.getPoints(64);
        const orbitGeo = new THREE.BufferGeometry().setFromPoints(points.map(pt => new THREE.Vector3(pt.x, 0, pt.y)));
        const orbitMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 });
        const orbitLine = new THREE.Line(orbitGeo, orbitMat);
        systemGroup.add(orbitLine);

        systemGroup.add(pMesh);
    });

    if (meteorInterval) clearInterval(meteorInterval);
    meteorInterval = setInterval(spawnMeteorShower, 4000);

    animateDetailedSolarSystem();
}

function spawnMeteorShower() {
    if (currentScreen !== 'detailed' || !detailedScene) return;

    for (let i = 0; i < 4; i++) {
        const geo = new THREE.CylinderGeometry(0, 1.2, 50, 8);
        geo.rotateX(-Math.PI / 2);
        const mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.8 });
        const mesh = new THREE.Mesh(geo, mat);

        const x = (Math.random() - 0.5) * 1200;
        const y = 600 + Math.random() * 200;
        const z = (Math.random() - 0.5) * 1200;

        mesh.position.set(x, y, z);
        const target = new THREE.Vector3(x + (Math.random() - 0.5) * 400, -400, z + (Math.random() - 0.5) * 400);
        mesh.lookAt(target);

        mesh.userData = { velocity: target.sub(mesh.position).normalize().multiplyScalar(18) };
        detailedScene.add(mesh);
        meteors.push(mesh);
    }
}

function animateDetailedSolarSystem() {
    if (currentScreen !== 'detailed' || !detailedRenderer) return;
    requestAnimationFrame(animateDetailedSolarSystem);

    // Animate Meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.position.add(m.userData.velocity);
        m.material.opacity -= 0.008;
        if (m.position.y < -500 || m.material.opacity <= 0) {
            detailedScene.remove(m);
            meteors.splice(i, 1);
        }
    }

    // Revolving Planets
    detailedScene.children.forEach(group => {
        if (group.userData && group.userData.isSystemGroup) {
            group.children.forEach(child => {
                if (child.userData && child.userData.planetData) {
                    child.userData.angle += child.userData.speed;
                    const rX = child.userData.distance;
                    const rZ = child.userData.distance * child.userData.ovalRatio;
                    child.position.x = Math.cos(child.userData.angle) * rX;
                    child.position.z = Math.sin(child.userData.angle) * rZ;
                    child.rotation.y += 0.01;
                }
            });
        }
    });

    detailedRenderer.render(detailedScene, detailedCamera);
}
