let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

document.addEventListener("DOMContentLoaded", function() {
    const clickMeButton = document.getElementById("clickMeButton");

    if (clickMeButton) {
        clickMeButton.addEventListener("click", function() {
            window.location.href = "flower.html";
        });
    }
});