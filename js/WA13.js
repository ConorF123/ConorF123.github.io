var currentVolume = 50; // Set initial volume to 50

function increaseVolume() {
    var change = Math.floor(Math.random() * 15) + 1; // Generate random change
    if (currentVolume + change > 100) {
        currentVolume = 100; // Restrict volume to maximum of 100
    } else {
        currentVolume += change; // Increase volume by random change
    }
    document.getElementById("volume").innerHTML = currentVolume; // Update display
}
      
function decreaseVolume() {
    var change = Math.floor(Math.random() * 15) + 1; // Generate random change
    if (currentVolume - change < 0) {
        currentVolume = 0; // Restrict volume to minimum of 0
    } else {
        currentVolume -= change; // Decrease volume by random change
    }
    document.getElementById("volume").innerHTML = currentVolume; // Update display
}