//your JS code here. If required.
let angle = 0;

function rotateLine() {
    const line = document.getElementById('line');
    angle = (angle + 2) % 360; 
    line.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
}

rotateLine();

