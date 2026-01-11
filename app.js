// Portfolio Data
const data = {
    goals: [
        { name: "Tech Innovation", desc: "Creating groundbreaking solutions", color: "#ff6b6b" },
        { name: "Leadership", desc: "Leading teams to success", color: "#4ecdc4" },
        { name: "Entrepreneurship", desc: "Building successful startups", color: "#ffe66d" },
        { name: "Global Impact", desc: "Making a difference worldwide", color: "#a8e6cf" },
        { name: "Continuous Learning", desc: "Never stop growing", color: "#ff8b94" }
    ],
    planets: [
        {
            name: "Sun",
            color: "#ffd700",
            size: 80,
            milestones: [{ title: "Core Values", desc: "Integrity, Innovation, Excellence" }],
            skills: []
        },
        {
            name: "Mercury",
            color: "#8c7853",
            size: 25,
            distance: 100,
            angle: 0,
            speed: 0.005,
            milestones: [{ title: "First Steps", desc: "Started my journey" }],
            skills: [{ name: "HTML/CSS" }]
        },
        {
            name: "Venus",
            color: "#ffc649",
            size: 30,
            distance: 140,
            angle: 1.5,
            speed: 0.004,
            milestones: [{ title: "Education", desc: "Completed degree" }],
            skills: [{ name: "JavaScript" }, { name: "React" }]
        },
        {
            name: "Earth",
            color: "#4a90e2",
            size: 35,
            distance: 180,
            angle: 3,
            speed: 0.003,
            milestones: [
                { title: "Current Role", desc: "Software Developer" },
                { title: "Projects", desc: "Built multiple apps" }
            ],
            skills: [{ name: "Node.js" }, { name: "Python" }, { name: "Git" }]
        },
        {
            name: "Mars",
            color: "#cd5c5c",
            size: 28,
            distance: 220,
            angle: 4.5,
            speed: 0.002,
            milestones: [{ title: "Next Goal", desc: "Lead major project" }],
            skills: [{ name: "Docker" }, { name: "AWS" }]
        },
        {
            name: "Jupiter",
            color: "#d8ca9d",
            size: 55,
            distance: 280,
            angle: 6,
            speed: 0.0015,
            milestones: [{ title: "Big Achievement", desc: "Scaled to millions" }],
            skills: [{ name: "TypeScript" }, { name: "GraphQL" }, { name: "MongoDB" }, { name: "Redis" }]
        },
        {
            name: "Saturn",
            color: "#fad5a5",
            size: 50,
            distance: 340,
            angle: 7.5,
            speed: 0.001,
            milestones: [{ title: "Recognition", desc: "Industry awards" }],
            skills: [{ name: "CI/CD" }, { name: "Microservices" }]
        },
        {
            name: "Uranus",
            color: "#4fd0e7",
            size: 42,
            distance: 400,
            angle: 9,
            speed: 0.0008,
            milestones: [{ title: "Innovation", desc: "Introduced new tech" }],
            skills: [{ name: "Machine Learning" }, { name: "Data Science" }]
        },
        {
            name: "Neptune",
            color: "#4166f5",
            size: 40,
            distance: 460,
            angle: 10.5,
            speed: 0.0005,
            milestones: [{ title: "Future Vision", desc: "Next big thing" }],
            skills: [{ name: "Blockchain" }, { name: "Web3" }]
        }
    ]
};

// State
let currentScreen = 'landing';
let galaxyScene, galaxyCamera, galaxyRenderer;
let solarScene, solarCamera, solarRenderer;
let detailedScene, detailedCamera, detailedRenderer;
let animationId;
let meteors = [];
let meteorInterval;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    initGalaxy();
    initLandingStars();
});

// Event Listeners
function initEventListeners() {
    // Landing Entrances
    document.getElementById('enterBtn').addEventListener('click', () => {
        showScreen('milkyway');
        animateGalaxy();
    });

    // Milky Way Interactions
    document.getElementById('enterSolarBtn').addEventListener('click', () => {
        showScreen('detailed');
        initDetailedSolarSystem();
    });

    // Back Buttons
    document.getElementById('backBtn').addEventListener('click', () => {
        showScreen('milkyway');
        animateGalaxy();
    });

    document.getElementById('backToLandingBtn').addEventListener('click', () => {
        showScreen('landing');
    });

    // Planet Info Close
    document.getElementById('closeInfo').addEventListener('click', () => {
        document.getElementById('planetInfo').classList.remove('active');
    });

    // Sidebar Menu
    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('contentSidebar').classList.add('active');
    });

    document.getElementById('closeSidebar').addEventListener('click', () => {
        document.getElementById('contentSidebar').classList.remove('active');
    });

    populateSidebar();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const centerX = 32;
    const centerY = 32;

    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.moveTo(10, 32);
    ctx.lineTo(54, 32);
    ctx.moveTo(32, 10);
    ctx.lineTo(32, 54);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

function createMilkyWay() {
    const particles = 30000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    const innerColor = new THREE.Color(0xff6083);
    const outerColor = new THREE.Color(0x1a1a2e);

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

    const starTexture = createStarTexture();
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        map: starTexture,
        size: 1.5,
        transparent: true,
        alphaTest: 0.05,
        blending: THREE.AdditiveBlending
    });
    const starsVertices = [];
    for (let i = 0; i < 15000; i++) {
        starsVertices.push(
            (Math.random() - 0.5) * 4000,
            (Math.random() - 0.5) * 4000,
            (Math.random() - 0.5) * 4000
        );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    galaxyScene.add(new THREE.Points(starsGeometry, starsMaterial));

    const container = document.getElementById('goalsContainer');
    container.innerHTML = '';
    data.goals.forEach((goal) => {
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = `<h3>${goal.name}</h3><p>${goal.desc}</p>`;
        card.style.borderColor = goal.color;
        container.appendChild(card);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    galaxyScene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 2000);
    galaxyScene.add(pointLight);

    galaxyCamera.position.set(0, 150, 1000);
    galaxyCamera.lookAt(0, 0, 0);
}

function animateGalaxy() {
    if (currentScreen !== 'milkyway') return;

    animationId = requestAnimationFrame(animateGalaxy);
    galaxyScene.rotation.y += 0.0005;

    galaxyScene.children.forEach(child => {
        if (child instanceof THREE.Points && child !== galaxyScene.children[0]) {
            child.rotation.y -= 0.0002;
        }
    });

    if (galaxyCamera.position.z > 300) {
        galaxyCamera.position.z -= 15;
        galaxyCamera.lookAt(0, 0, 0);
    } else {
        document.getElementById('enterSolarBtn').style.display = 'block';
    }

    galaxyRenderer.render(galaxyScene, galaxyCamera);
}

function showPlanetInfo(planet) {
    const info = document.getElementById('planetInfo');
    document.getElementById('planetName').innerText = planet.name;
    document.getElementById('planetName').style.color = planet.color; // Match dot color

    const milestones = document.getElementById('milestones');
    milestones.innerHTML = '<h3>Milestones</h3>';
    if (planet.milestones) {
        planet.milestones.forEach(m => {
            milestones.innerHTML += `<div class="milestone-item"><h4>${m.title}</h4><p>${m.desc}</p></div>`;
        });
    }

    const skills = document.getElementById('skills');
    skills.innerHTML = '<h3>Skills</h3>';
    if (planet.skills) {
        planet.skills.forEach(s => {
            skills.innerHTML += `<div class="skill-item">${s.name}</div>`;
        });
    }

    info.classList.add('active');
}

function populateSidebar() {
    const container = document.getElementById('sidebarContent');
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
            section.innerHTML = '<h4>Milestones</h4>';
            planet.milestones.forEach(m => {
                const item = document.createElement('div');
                item.style.fontSize = '0.9rem';
                item.style.marginBottom = '5px';
                item.innerHTML = `<strong>${m.title}</strong>: ${m.desc}`;
                section.appendChild(item);
            });
            card.appendChild(section);
        }

        if (planet.skills && planet.skills.length > 0) {
            const section = document.createElement('div');
            section.className = 'sidebar-section';
            section.innerHTML = '<h4>Skills</h4>';
            const skillList = document.createElement('div');
            skillList.style.display = 'flex';
            skillList.style.flexWrap = 'wrap';
            skillList.style.gap = '5px';

            planet.skills.forEach(s => {
                const badge = document.createElement('span');
                badge.style.background = 'rgba(255,255,255,0.15)';
                badge.style.padding = '2px 8px';
                badge.style.borderRadius = '10px';
                badge.style.fontSize = '0.8rem';
                badge.textContent = s.name;
                skillList.appendChild(badge);
            });
            section.appendChild(skillList);
            card.appendChild(section);
        }

        container.appendChild(card);
    });
}

// ... existing helper functions (createSunTexture etc) are preserved within initDetailed but let's make sure initDetailed is properly defined

function initDetailedSolarSystem() {
    // ... (existing init code) ...
    // Clear old
    if (detailedRenderer) {
        // ... (existing cleanup) ...
        meteors.forEach(m => detailedScene.remove(m));
        meteors = [];
    }
    // ... (existing setup) ...

    // START METEOR INTERVAL
    if (meteorInterval) clearInterval(meteorInterval);
    meteorInterval = setInterval(spawnMeteorShower, 5000);

    animateDetailedSolarSystem();
}

// Meteor Shower Logic
function spawnMeteorShower() {
    if (currentScreen !== 'detailed') return;

    // Spawn 5-8 meteors
    const count = Math.floor(Math.random() * 4) + 5;

    for (let i = 0; i < count; i++) {
        // Streak Geometry: Bottom radius 0, Top radius 1.5, Height 60
        const geo = new THREE.CylinderGeometry(0, 1.5, 60, 8);
        geo.rotateX(-Math.PI / 2); // Point forward

        const mat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        });

        const mesh = new THREE.Mesh(geo, mat);

        // Random Start Position (High up and varying X/Z)
        const x = (Math.random() - 0.5) * 1500;
        const y = 800 + Math.random() * 200;
        const z = (Math.random() - 0.5) * 1500;

        mesh.position.set(x, y, z);

        // Random Direction (Downward and across)
        const targetX = x + (Math.random() - 0.5) * 500;
        const targetY = -500;
        const targetZ = z + (Math.random() - 0.5) * 500;

        const target = new THREE.Vector3(targetX, targetY, targetZ);
        mesh.lookAt(target);

        const velocity = target.sub(mesh.position).normalize().multiplyScalar(15 + Math.random() * 10); // Speed 15-25

        mesh.userData = { velocity: velocity };

        detailedScene.add(mesh);
        meteors.push(mesh);
    }
}

function animateDetailedSolarSystem() {
    if (currentScreen !== 'detailed') return;
    requestAnimationFrame(animateDetailedSolarSystem);

    const time = Date.now();

    // 0. Rotate Sun
    const sun = detailedScene.children.find(c => c.userData.isSun);
    if (sun) sun.rotation.y -= 0.002;

    // 1. Animate Shooting Stars (Background)
    detailedScene.children.forEach(obj => {
        if (obj.userData.isStarSystem) {
            // ... existing star logic ...
            const positions = obj.geometry.attributes.position.array;
            for (let i = 2; i < positions.length; i += 3) {
                positions[i] += 2;
                if (positions[i] > 2000) positions[i] = -2000;
            }
            obj.geometry.attributes.position.needsUpdate = true;
        }
    });

    // 2. Animate Meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.position.add(m.userData.velocity);

        // Fade out
        if (m.material.opacity > 0) m.material.opacity -= 0.005;

        // Remove if too far
        if (m.position.y < -1000 || m.material.opacity <= 0) {
            detailedScene.remove(m);
            meteors.splice(i, 1);
        }
    }

    // 3. Animate Groups (Wobble) & Planets (Revolve)
    detailedScene.children.forEach(group => {
        if (group.userData.isSystemGroup) {
            // ... existing wobble logic ...
            group.rotation.x = Math.sin(time * group.userData.wobbleSpeed) * 0.1 + group.userData.baseTiltX;
            group.rotation.z = Math.cos(time * group.userData.wobbleSpeed) * 0.1 + group.userData.baseTiltZ;

            group.children.forEach(child => {
                if (child.userData.planetData) {
                    // ... existing orbit logic ...
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


function initLandingStars() {
    const container = document.querySelector('.stars');
    if (!container) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    // Resize
    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Star class for warp effect
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width - canvas.width / 2;
            this.y = Math.random() * canvas.height - canvas.height / 2;
            this.z = Math.random() * 1000; // Depth
            this.pz = this.z; // Previous z for trails if wanted, or just for movement
        }

        update() {
            this.z -= 2; // Speed decreased from 10
            if (this.z < 1) {
                this.x = Math.random() * canvas.width - canvas.width / 2;
                this.y = Math.random() * canvas.height - canvas.height / 2;
                this.z = 1000;
                this.pz = 1000;
            }
        }

        draw() {
            const x = (this.x / this.z) * 100 + canvas.width / 2;
            const y = (this.y / this.z) * 100 + canvas.height / 2;

            // Size based on depth
            const s = (1 - this.z / 1000) * 2.5;

            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(x, y, s > 0 ? s : 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create stars
    const stars = Array(400).fill().map(() => new Star());

    function animate() {
        if (currentScreen !== 'landing') return; // Pause when not viewing

        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'; // Tails/Blur effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.update();
            star.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Modify showScreen to restart animation if needed
    const oldShowScreen = window.showScreen;
    // We already defined showScreen below, but let's hook into it naturally in the loop above or just let it run.
    // The animate loop checks currentScreen.
}

function initEventListeners() {
    document.getElementById('enterBtn').addEventListener('click', () => {
        showScreen('milkyway');
        animateGalaxy();
    });

    document.getElementById('enterSolarBtn').addEventListener('click', () => {
        showScreen('detailed');
        initDetailedSolarSystem();
    });

    // exploreBtn removed

    document.getElementById('backBtn').addEventListener('click', () => {
        showScreen('milkyway');
        animateGalaxy();
    });

    document.getElementById('backToLandingBtn').addEventListener('click', () => {
        showScreen('landing');
    });

    document.getElementById('closeInfo').addEventListener('click', () => {
        document.getElementById('planetInfo').classList.remove('active');
    });

    // Sidebar Menu
    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('contentSidebar').classList.add('active');
    });

    document.getElementById('closeSidebar').addEventListener('click', () => {
        document.getElementById('contentSidebar').classList.remove('active');
    });

    populateSidebar();
}

function populateSidebar() {
    const container = document.getElementById('sidebarContent');
    container.innerHTML = '';

    data.planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = 'sidebar-planet-card';

        // Header
        const header = document.createElement('h3');
        const dot = document.createElement('span');
        dot.className = 'planet-dot';
        dot.style.backgroundColor = planet.color;
        header.appendChild(dot);
        header.appendChild(document.createTextNode(planet.name));
        card.appendChild(header);

        // Milestones
        if (planet.milestones && planet.milestones.length > 0) {
            const section = document.createElement('div');
            section.className = 'sidebar-section';
            section.innerHTML = '<h4>Milestones</h4>';
            planet.milestones.forEach(m => {
                const item = document.createElement('div');
                item.style.fontSize = '0.9rem';
                item.style.marginBottom = '5px';
                item.innerHTML = `<strong>${m.title}</strong>: ${m.desc}`;
                section.appendChild(item);
            });
            card.appendChild(section);
        }

        // Skills
        if (planet.skills && planet.skills.length > 0) {
            const section = document.createElement('div');
            section.className = 'sidebar-section';
            section.innerHTML = '<h4>Skills</h4>';
            const skillList = document.createElement('div');
            skillList.style.display = 'flex';
            skillList.style.flexWrap = 'wrap';
            skillList.style.gap = '5px';

            planet.skills.forEach(s => {
                const badge = document.createElement('span');
                badge.style.background = 'rgba(255,255,255,0.15)';
                badge.style.padding = '2px 8px';
                badge.style.borderRadius = '10px';
                badge.style.fontSize = '0.8rem';
                badge.textContent = s.name;
                skillList.appendChild(badge);
            });
            section.appendChild(skillList);
            card.appendChild(section);
        }

        container.appendChild(card);
    });
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
}

// Create star texture for Three.js points
// Create star texture for Three.js points
function createStarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    // Draw soft glowing star (radial gradient)
    const centerX = 32;
    const centerY = 32;

    // Main glow
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    // Core sparkle cross
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    // Horizontal
    ctx.moveTo(10, 32);
    ctx.lineTo(54, 32);
    // Vertical
    ctx.moveTo(32, 10);
    ctx.lineTo(32, 54);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
}

// Create Milky Way Galaxy
// Create Milky Way Galaxy
function createMilkyWay() {
    const particles = 30000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);

    const innerColor = new THREE.Color(0xff6083);
    const outerColor = new THREE.Color(0x1a1a2e);

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

    // Use Star Texture
    const starTexture = createStarTexture();
    const material = new THREE.PointsMaterial({
        size: 3.5, // slightly larger for visibility
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

    // Create Milky Way
    const milkyWay = createMilkyWay();
    galaxyScene.add(milkyWay);

    // Background stars with star shape texture
    const starTexture = createStarTexture();
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        map: starTexture,
        size: 1.5,
        transparent: true,
        alphaTest: 0.05,
        blending: THREE.AdditiveBlending
    });
    const starsVertices = [];
    for (let i = 0; i < 15000; i++) {
        starsVertices.push(
            (Math.random() - 0.5) * 4000,
            (Math.random() - 0.5) * 4000,
            (Math.random() - 0.5) * 4000
        );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    galaxyScene.add(new THREE.Points(starsGeometry, starsMaterial));

    // Create goal solar systems
    data.goals.forEach((goal, i) => {
        const angle = (i / data.goals.length) * Math.PI * 2;
        const radius = 350 + Math.random() * 250;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * 100;

        const geometry = new THREE.SphereGeometry(18, 32, 32);
        const material = new THREE.MeshPhongMaterial({
            color: goal.color,
            emissive: goal.color,
            emissiveIntensity: 0.7
        });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(x, y, z);
        sphere.userData = { goal };
        galaxyScene.add(sphere);

        // Glow
        for (let j = 1; j <= 2; j++) {
            const glowGeo = new THREE.SphereGeometry(18 + j * 4, 16, 16);
            const glowMat = new THREE.MeshBasicMaterial({
                color: goal.color,
                transparent: true,
                opacity: 0.2 / j
            });
            const glow = new THREE.Mesh(glowGeo, glowMat);
            glow.position.set(x, y, z);
            galaxyScene.add(glow);
        }
    });

    // Create goal cards
    const container = document.getElementById('goalsContainer');
    data.goals.forEach((goal, i) => {
        const card = document.createElement('div');
        card.className = 'goal-card';
        card.innerHTML = `<h3>${goal.name}</h3><p>${goal.desc}</p>`;
        card.style.borderColor = goal.color;
        container.appendChild(card);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    galaxyScene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1, 2000);
    galaxyScene.add(pointLight);

    galaxyCamera.position.set(0, 150, 1000);
    galaxyCamera.lookAt(0, 0, 0);
}

function animateGalaxy() {
    if (currentScreen !== 'milkyway') return;

    animationId = requestAnimationFrame(animateGalaxy);
    // Rotate galaxy and stars differently for parallax
    galaxyScene.rotation.y += 0.0005;

    // Find background stars (the second Points object usually)
    galaxyScene.children.forEach(child => {
        if (child instanceof THREE.Points && child !== galaxyScene.children[0]) {
            child.rotation.y -= 0.0002; // Counter-rotate stars slightly
        }
    });

    // Zoom animation
    if (galaxyCamera.position.z > 300) {
        galaxyCamera.position.z -= 15;
        galaxyCamera.lookAt(0, 0, 0);
    } else {
        document.getElementById('enterSolarBtn').style.display = 'block';
    }

    galaxyRenderer.render(galaxyScene, galaxyCamera);
}




function initDetailedSolarSystem() {
    const canvas = document.getElementById('detailedCanvas');
    if (!canvas) return;

    if (detailedRenderer) {
        detailedRenderer.dispose();
        const newCanvas = canvas.cloneNode(true);
        canvas.parentNode.replaceChild(newCanvas, canvas);
        return initDetailedSolarSystem();
    }

    detailedScene = new THREE.Scene();

    // Camera
    detailedCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000);
    detailedCamera.position.set(0, 900, 1200);
    detailedCamera.lookAt(0, 0, 0);

    detailedRenderer = new THREE.WebGLRenderer({ canvas: document.getElementById('detailedCanvas'), antialias: true, alpha: true });
    detailedRenderer.setSize(window.innerWidth, window.innerHeight);
    detailedRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    detailedScene.add(ambientLight);
    const sunLight = new THREE.PointLight(0xffd700, 2.5, 3000);
    detailedScene.add(sunLight);

    // Shooting Stars
    const starGeo = new THREE.BufferGeometry();
    const starCount = 6000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
        starPos[i] = (Math.random() - 0.5) * 4000;     // x
        starPos[i + 1] = (Math.random() - 0.5) * 2000;   // y
        starPos[i + 2] = (Math.random() - 0.5) * 4000;   // z
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2, transparent: true, opacity: 0.8 });
    const starSystem = new THREE.Points(starGeo, starMat);
    starSystem.userData = { isStarSystem: true };
    detailedScene.add(starSystem);

    // Sun Texture
    const sunTexture = createSunTexture();

    // 4. Sun Mesh
    const sunGeo = new THREE.SphereGeometry(60, 64, 64);
    const sunMat = new THREE.MeshBasicMaterial({
        map: sunTexture,
        color: 0xffdd00
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.userData = { isSun: true };
    detailedScene.add(sunMesh);

    // Sun Glow
    const glowGeo = new THREE.SphereGeometry(72, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffaa00, transparent: true, opacity: 0.25 });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    glowMesh.userData = { isGlow: true };
    detailedScene.add(glowMesh);

    // 5. Planets & Orbits Groups
    data.planets.forEach((planet, index) => {
        if (planet.name === 'Sun') return;

        const distance = planet.distance * 2.0; // Reduced from 2.5
        const size = planet.size;
        const ovalRatio = 0.8; // Make it oval

        // Create a Group for the whole orbit system of this planet
        // This allows us to rotate/wobble the entire plane (orbit + planet) together
        const systemGroup = new THREE.Group();
        systemGroup.userData = {
            isSystemGroup: true,
            baseTiltX: Math.random() * 0.2, // Initial random tilt
            baseTiltZ: Math.random() * 0.2,
            wobbleSpeed: 0.0005 + Math.random() * 0.001
        };
        detailedScene.add(systemGroup);

        // Orbit Ring
        const orbitGeo = new THREE.RingGeometry(distance - 2, distance + 2, 128);
        const orbitMat = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.6
        });
        const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
        orbitMesh.rotation.x = -Math.PI / 2; // Lie flat within the group
        orbitMesh.scale.y = ovalRatio; // Make it oval (Y in local space is Z in world after rotation)
        systemGroup.add(orbitMesh);

        // Planet
        const planetGeo = new THREE.SphereGeometry(size, 64, 64);
        const planetMat = new THREE.MeshStandardMaterial({
            color: planet.color,
            roughness: 0.7,
        });
        const planetMesh = new THREE.Mesh(planetGeo, planetMat);

        // Planet state
        planetMesh.userData = {
            angle: Math.random() * Math.PI * 2,
            distance: distance,
            ovalRatio: ovalRatio,
            speed: planet.speed * 0.5,
            planetData: planet
        };

        systemGroup.add(planetMesh);
    });

    // Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onInteract(event) {
        if (currentScreen !== 'detailed') return;

        const rect = detailedRenderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, detailedCamera);
        // Recursive true to hit planets inside groups
        const intersects = raycaster.intersectObjects(detailedScene.children, true);

        let hovered = false;
        for (let hit of intersects) {
            if (hit.object.geometry && hit.object.geometry.type === 'SphereGeometry' && hit.object.userData.planetData) {
                hovered = true;
                if (event.type === 'click') {
                    showPlanetInfo(hit.object.userData.planetData);
                }
                break;
            }
        }
        document.body.style.cursor = hovered ? 'pointer' : 'default';
    }

    window.addEventListener('mousemove', onInteract);
    window.addEventListener('click', onInteract);

    animateDetailedSolarSystem();
}

// Procedural Sun Texture
function createSunTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Base
    ctx.fillStyle = '#ffcc00';
    ctx.fillRect(0, 0, 512, 512);

    // Noise/Spots
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const radius = Math.random() * 40 + 10;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 100 + 50)}, 0, ${Math.random() * 0.2 + 0.1})`;
        ctx.fill();
    }

    // More detail
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        const w = Math.random() * 20;
        const h = Math.random() * 10;
        ctx.fillStyle = `rgba(255, 200, 0, 0.3)`;
        ctx.fillRect(x, y, w, h);
    }

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function animateDetailedSolarSystem() {
    if (currentScreen !== 'detailed') return;
    requestAnimationFrame(animateDetailedSolarSystem);

    const time = Date.now();

    // 0. Rotate Sun
    const sun = detailedScene.children.find(c => c.userData.isSun);
    if (sun) sun.rotation.y -= 0.002;

    // 1. Animate Shooting Stars
    detailedScene.children.forEach(obj => {
        if (obj.userData.isStarSystem) {
            const positions = obj.geometry.attributes.position.array;
            for (let i = 2; i < positions.length; i += 3) {
                positions[i] += 2; // Move speed Z
                if (positions[i] > 2000) {
                    positions[i] = -2000; // Reset to back
                }
            }
            obj.geometry.attributes.position.needsUpdate = true;
        }
    });

    // 2. Animate Groups (Wobble) & Planets (Revolve)
    detailedScene.children.forEach(group => {
        if (group.userData.isSystemGroup) {
            // Wobble the whole orbit plane randomly
            group.rotation.x = Math.sin(time * group.userData.wobbleSpeed) * 0.1 + group.userData.baseTiltX;
            group.rotation.z = Math.cos(time * group.userData.wobbleSpeed) * 0.1 + group.userData.baseTiltZ;

            // Find planet inside group
            group.children.forEach(child => {
                if (child.userData.planetData) {
                    // Revolve planet around logic
                    child.userData.angle += child.userData.speed;
                    // Oval Logic: X is normal radius, Z is scaled radius
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


function showPlanetInfo(planet) {
    const info = document.getElementById('planetInfo');
    document.getElementById('planetName').textContent = planet.name;

    const milestonesDiv = document.getElementById('milestones');
    milestonesDiv.innerHTML = '<h4>Milestones:</h4>';
    planet.milestones.forEach(m => {
        const item = document.createElement('div');
        item.className = 'milestone-item';
        item.innerHTML = `<strong>${m.title}</strong><p>${m.desc}</p>`;
        milestonesDiv.appendChild(item);
    });

    const skillsDiv = document.getElementById('skills');
    skillsDiv.innerHTML = '<h4>Skills (Moons):</h4>';
    planet.skills.forEach(s => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.innerHTML = `<strong>${s.name}</strong>`;
        skillsDiv.appendChild(item);
    });

    info.classList.add('active');
}

// Handle resize
window.addEventListener('resize', () => {
    if (galaxyRenderer) {
        galaxyCamera.aspect = window.innerWidth / window.innerHeight;
        galaxyCamera.updateProjectionMatrix();
        galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    if (solarRenderer) {
        solarCamera.aspect = window.innerWidth / window.innerHeight;
        solarCamera.updateProjectionMatrix();
        solarRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    if (detailedRenderer) {
        detailedCamera.aspect = window.innerWidth / window.innerHeight;
        detailedCamera.updateProjectionMatrix();
        detailedRenderer.setSize(window.innerWidth, window.innerHeight);
    }
});
