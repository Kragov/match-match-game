let cardContainer = document.getElementById(['card-container'])
let toggleControl = false
    cardContainer.onclick = function() {
        
        if (toggleControl == false) {
            cardContainer.classList.toggle(['turned-around-card-container'])
            cardContainer.style.animation = "turn-around-card 2s ease-in running"
            cardContainer.style.animationIterationCount = 1
            toggleControl = true
        }
        else {
            cardContainer.classList.toggle(['turned-around-card-container'])
            cardContainer.style.animation = "turn-around-card 2s ease-in reverse running"
            cardContainer.style.animationIterationCount = 1
            toggleControl = false
        }
}