var weatherDivNode = document.querySelector(".box")
function showWeather() {
    weatherDivNode.classList.remove("hiddenDiv");
}

function hideWeather() {
    weatherDivNode.classList.add("hiddenDiv");

}