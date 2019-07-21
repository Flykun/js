function init() {
    var planet = document.getElementById("greenPlanet")
    planet.setAttribute('class', 'redtext')
    planet.innerHTML = "Red Alert: hit by phaser fire!"
}
window.onload = init
