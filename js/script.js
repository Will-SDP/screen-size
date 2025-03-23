
function getScreenSize(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    ua = window.navigator.userAgent 
    display = document.getElementById('display')

    display.setAttribute("style","width: " + w / 2 + "px; height: " + h / 2 + "px");
    document.getElementById("user-agent").innerText = w + " X " + h 
}

getScreenSize()
window.addEventListener('resize', getScreenSize);