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
        const randomDelay = Math.floor(Math.random() * 250) + 50; // Random typing speed
        setTimeout(typeBootSequence, randomDelay);
    } else {
        setTimeout(() => {
            bootScreen.classList.add('boot-hidden'); // Fade out
        }, 800);
    }
}

// Start boot only when window loads
window.addEventListener('load', () => {
    typeBootSequence();
});

// --- 2. BUY FUNCTIONALITY ---
function addToCart(productName) {
    console.log(`[TRANSACTION]: Initiating purchase for ${productName}...`);
    alert(`SYSTEM_MESSAGE:\n\nAdding [ ${productName} ] to your neural inventory.\n\nProceeding to encrypted gateway...`);
    // Optional WhatsApp Redirect:
    // window.open(`https://wa.me/967715151560?text=I%20want%20to%20buy%20${encodeURIComponent(productName)}`, '_blank');
}

// --- 3. LIVE TRAFFIC HUD SIMULATION ---
let currentUsers = 8402;
const userElement = document.getElementById('netrunner-count');
const pingElement = document.getElementById('ping-count');

function updateTraffic() {
    // Randomize Users (-5 to +15 variation)
    const change = Math.floor(Math.random() * 20) - 5; 
    currentUsers += change;
    
    // Bounds check
    if (currentUsers < 5000) currentUsers = 5000;
    if (currentUsers > 15000) currentUsers = 9000;

    if(userElement) {
        userElement.innerText = currentUsers.toLocaleString();
    }

    // Randomize Ping (8ms to 45ms)
    const ping = Math.floor(Math.random() * (45 - 8 + 1) + 8);
    
    if(pingElement) {
        pingElement.innerText = ping + "ms";
        if(ping > 30) {
            pingElement.style.color = "red";
        } else {
            pingElement.style.color = "var(--neon-primary)";
        }
    }
}

setInterval(updateTraffic, 2000);
updateTraffic(); // Run once immediately

// --- 4. DECRYPTION SCRAMBLE EFFECT ON BUTTONS ---
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

document.querySelectorAll('.cyber-btn, .cyber-btn-secondary').forEach(button => {
    button.addEventListener('mouseover', event => {
        let iterations = 0;
        const originalText = button.innerText;
        
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if(iterations >= originalText.length) { 
                clearInterval(interval);
                event.target.innerText = originalText;
            }
            
            iterations += 1 / 2; // Scramble speed
        }, 30);
    });
});