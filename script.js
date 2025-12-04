/* GLITCH STORE SYSTEM SCRIPT 
    TERMINAL_ID: 8849-XJ
*/

console.log("%c SYSTEM ONLINE ", "background: #CCFF00; color: black; font-weight: bold; padding: 5px;");
console.log("Welcome to Glitch Store // 2077");

// Function to handle "Buy" clicks
function addToCart(productName) {
    // 1. Log the action to console (Cyberpunk style)
    console.log(`[TRANSACTION]: Initiating purchase for ${productName}...`);
    
    // 2. Play a "click" sound logic (Optional placeholder)
    
    // 3. Show confirmation alert
    alert(`SYSTEM_MESSAGE:\n\nAdding [ ${productName} ] to your neural inventory.\n\nProceeding to encrypted gateway...`);
    
    // 4. (Optional) Redirect logic for WhatsApp
    // const phoneNumber = "967715151560";
    // const message = `I want to buy ${productName}`;
    // window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}