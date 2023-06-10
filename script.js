var count = 0

var title = document.getElementById('title')
var image = document.getElementById('image')
function accepted() {
    title.innerHTML = "te amo mil milhões!!!"
    title.style.borderRadius = "15px"
    title.style.borderStyle = "dashed"
    body.style.backgroundColor = "darksalmon"
    image.src = "hearts-pooh.gif"
    count = 0
}



function runaway() {
    var btnNo = document.getElementById('no')

    var winWidth = window.innerWidth
    var winHeight = window.innerHeight

    // largura máxima
    var maxX = winWidth - btnNo.offsetWidth
    // altura máxima
    var maxY = winHeight - btnNo.offsetHeight

    // posição aleatória na horizontal
    var randomX = Math.floor(Math.random() * maxX)
    // posição aleatória na vertical
    var randomY = Math.floor(Math.random() * maxY)

    // manipulando css
    btnNo.style.left = randomX - 10 + "px"
    btnNo.style.top = randomY - 10 + "px"

    count++
    rejected()
}



var body = document.getElementById('body')
var rejectionCount = 0
function rejected() {
    if (count == 5) {
        if (rejectionCount != 0) {
            title.innerHTML = "..."
            title.style.borderStyle = "none"
            body.style.backgroundColor = "grey"
            image.src = "sad-eeyore.gif"
            rejectionCount = 0
        } else {
            title.innerHTML = "..."
            title.style.borderStyle = "none"
            body.style.backgroundColor = "grey"
            image.src = "sad-tigger.gif"
            rejectionCount = 1
        }
    }
}



var audio = document.getElementById('audio')
function playAudio() {
    audio.play()
    count--
}
function pauseAudio() {
    audio.pause()
    count--
}