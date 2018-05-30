let cardContainer = document.getElementById(['card-container']);
let cardHolder = document.getElementById(['card-container']);

cardContainer.onclick = function() {
    // function collapse() {
    //     cardHolder.style.cssText = "width: 0; \
    //     transition: 2s;\
    //     ";
    // }
    function spread() {
        cardContainer.style.cssText = " width: 0; \
        transition: 2s; \
        background-color: black; \
            width: 300px; \
            transition: 2s;\
            ";
    }
    collapse()
    spread()
}