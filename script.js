/* GLITCH STORE SYSTEM SCRIPT 
    TERMINAL_ID: 8849-XJ
*/

console.log("%c SYSTEM ONLINE ", "background: #CCFF00; color: black; font-weight: bold; padding: 5px;");
console.log("Welcome to Glitch Store // 2077");

// 1. Function to handle "Buy" clicks
function addToCart(productName) {
    console.log(`[TRANSACTION]: Initiating purchase for ${productName}...`);
    
    // Show confirmation alert
    alert(`SYSTEM_MESSAGE:\n\nAdding [ ${productName} ] to your neural inventory.\n\nProceeding to encrypted gateway...`);
    
    // (Optional) Redirect logic for WhatsApp:
    // const phoneNumber = "967715151560";
    // const message = `I want to buy ${productName}`;
    // window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

/* --- LIVE TRAFFIC SIMULATION (HUD) --- */
let currentUsers = 8402;
const userElement = document.getElementById('netrunner-count');
const pingElement = document.getElementById('ping-count');

function updateTraffic() {
    // A. Randomize Users (Fluctuate by -5 to +15)
    const change = Math.floor(Math.random() * 20) - 5; 
    currentUsers += change;
    
    // Prevent it from dropping too low or going too high
    if (currentUsers < 5000) currentUsers = 5000;
    if (currentUsers > 15000) currentUsers = 9000;

    // Update Text with commas
    if(userElement) {
        userElement.innerText = currentUsers.toLocaleString();
    }

    // B. Randomize Ping (between 8ms and 45ms)
    const ping = Math.floor(Math.random() * (45 - 8 + 1) + 8);
    
    if(pingElement) {
        pingElement.innerText = ping + "ms";
        // Color coding for Ping (Green = Good, Red = Lag)
        if(ping > 30) {
            pingElement.style.color = "red";
        } else {
            pingElement.style.color = "var(--neon-primary)";
        }
    }
}

// Update every 2 seconds
setInterval(updateTraffic, 2000);

// Run immediately on load
updateTraffic();