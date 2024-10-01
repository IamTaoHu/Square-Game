window.onload = pageLoad;

function pageLoad() {
    document.getElementById("start").onclick = startGame;
}

function startGame() {
    alert("Ready");
    clearScreen();  // clear previous game squares if had
    addBox();       // create new squares
    timeStart();    // start the game timer
}

function timeStart() {
    var TIMER_TICK = 1000; // 1 second
    var timer = null;
    var min = 0.5;  // 30 second
    var second = min * 60; // convert minutes to seconds
    var x = document.getElementById('clock');
    
    timer = setInterval(timeCount, TIMER_TICK);
    
    function timeCount() {
        second--;
        x.innerHTML = second;

        var allbox = document.querySelectorAll("#layer div");
        
        if (second > 0 && allbox.length === 0) {
            alert("You win!");
            clearInterval(timer);
        } else if (second <= 0) {
            if (allbox.length > 0) {
                alert("Game over!");
            }
            clearInterval(timer);
            clearScreen();
        }
    }
}

function addBox() {
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("layer");
    var colorDrop = document.getElementById("color").value;

    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square " + colorDrop;
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (900 - 50) + "px";
        tempbox.style.top = Math.random() * (900 - 50) + "px";

        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function () {
        box.parentNode.removeChild(box);
    }
}

function clearScreen() {
    var allbox = document.querySelectorAll("#layer div");
    
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}
