/* GLITCH STORE SYSTEM SCRIPT 
   TERMINAL_ID: 8849-XJ
*/

// --- 1. BOOT SEQUENCE (Preloader) ---
const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING NEURAL_DRIVERS... [OK]",
    "BYPASSING REGIONAL FIREWALL... [SUCCESS]",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING ASSETS...",
    "ACCESS GRANTED.",
    "WELCOME, RUNNER."
];

const bootScreen = document.getElementById('boot-screen');
const textContainer = document.getElementById('boot-text');
let lineIndex = 0;

function typeBootSequence() {
    if (lineIndex < bootText.length) {
        const newLine = document.createElement('div');
        newLine.textContent = "> " + bootText[lineIndex];
        textContainer.appendChild(newLine);
        window.scrollTo(0, document.body.scrollHeight);
        lineIndex++;
        const randomDelay = Math.floor(Math.random() * 250) + 50; 
        setTimeout(typeBootSequence, randomDelay);
    } else {
        setTimeout(() => {
            bootScreen.classList.add('boot-hidden'); // Fade out
            initNeuralNetwork(); // Start canvas after boot
        }, 800);
    }
}

// Start boot only when window loads
window.addEventListener('load', () => {
    typeBootSequence();
});

// --- 2. CUSTOM CURSOR & THEME LOGIC ---

const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

document.addEventListener('mousemove', (e) => {
    cursorInner.style.top = e.clientY + 'px';
    cursorInner.style.left = e.clientX + 'px';
    cursorOuter.style.top = e.clientY + 'px';
    cursorOuter.style.left = e.clientX + 'px';
});

const clickableElements = document.querySelectorAll('a, button, .product-card-container');
clickableElements.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

// Theme Switching
function setTheme(color) {
    document.body.classList.remove('theme-red', 'theme-blue');
    if (color === 'red') {
        document.body.classList.add('theme-red');
    } else if (color === 'blue') {
        document.body.classList.add('theme-blue');
    }
}

// --- 3. NEURAL NETWORK BACKGROUND (CANVAS) ---
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-canvas');
    const ctx = canvas.getContext('2d');
    
    // Resize handling
    let width, height;
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();

    // Node configuration
    const nodes = [];
    const maxDistance = 150;
    const numNodes = Math.floor(width / 15); // Density

    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 1; // Velocity
            this.vy = (Math.random() - 0.5) * 1;
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--neon-primary');
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
    }

    // Mouse Interaction
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Get current neon color from CSS variable for drawing
        const neonColor = getComputedStyle(document.body).getPropertyValue('--neon-primary').trim();
        
        nodes.forEach(node => {
            node.update();
            node.draw();

            // Connect lines
            nodes.forEach(otherNode => {
                const dx = node.x - otherNode.x;
                const dy = node.y - otherNode.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = neonColor;
                    ctx.globalAlpha = 1 - (distance / maxDistance);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.stroke();
                }
            });

            // Connect to mouse
            if(mouse.x != null) {
                const dx = node.x - mouse.x;
                const dy = node.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                     ctx.beginPath();
                    ctx.strokeStyle = neonColor;
                    ctx.globalAlpha = 1 - (distance / 200);
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        });
        
        ctx.globalAlpha = 1; // Reset alpha
        requestAnimationFrame(animate);
    }
    animate();
}

// --- 4. SCROLL REVEAL (Intersection Observer) ---
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));


// --- 5. BUY FUNCTIONALITY ---
function addToCart(productName) {
    console.log(`[TRANSACTION]: Initiating purchase for ${productName}...`);
    alert(`SYSTEM_MESSAGE:\n\nAdding [ ${productName} ] to your neural inventory.\n\nProceeding to encrypted gateway...`);
}

// --- 6. LIVE TRAFFIC & EVENT LOG ---
let currentUsers = 8402;
const userElement = document.getElementById('netrunner-count');
const pingElement = document.getElementById('ping-count');
const logElement = document.getElementById('system-log');

const systemEvents = [
    "Scanning ports...",
    "Encrypted packet received.",
    "Firewall spike detected.",
    "Optimizing neural net...",
    "Syncing with satellite...",
    "Malware blocked.",
    "Updating drivers...",
    "Handshake complete."
];

function updateTraffic() {
    // Randomize Users
    const change = Math.floor(Math.random() * 20) - 5; 
    currentUsers += change;
    if (currentUsers < 5000) currentUsers = 5000;
    if (currentUsers > 15000) currentUsers = 9000;
    if(userElement) userElement.innerText = currentUsers.toLocaleString();

    // Randomize Ping
    const ping = Math.floor(Math.random() * (45 - 8 + 1) + 8);
    if(pingElement) {
        pingElement.innerText = ping + "ms";
        pingElement.style.color = ping > 30 ? "red" : "var(--neon-primary)";
    }

    // Random Event Log (10% chance to update text)
    if(Math.random() > 0.9) {
        logElement.innerText = systemEvents[Math.floor(Math.random() * systemEvents.length)];
        logElement.style.color = "#fff";
        setTimeout(() => { logElement.style.color = "#888"; }, 500); // Flash white
    }
}

setInterval(updateTraffic, 1000);
updateTraffic();

// --- 7. DECRYPTION SCRAMBLE EFFECT ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
document.querySelectorAll('.cyber-btn, .cyber-btn-secondary').forEach(button => {
    button.addEventListener('mouseover', event => {
        let iterations = 0;
        const originalText = button.innerText;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iterations) return originalText[index];
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if(iterations >= originalText.length) { 
                clearInterval(interval);
                event.target.innerText = originalText;
            }
            iterations += 1 / 2;
        }, 30);
    });
});