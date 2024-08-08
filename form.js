function getRandomColor(){
    const r = Math.floor(Math.random()*100)+150;
    const g = Math.floor(Math.random()*100)+130;
    const b = Math.floor(Math.random()*100)+150;
    return `rgb(${r},${g},${b})`;
}

function changeBackground(){
    const randomColour = getRandomColor();
    document.body.style.backgroundColor = randomColour;
}
   
setInterval(changeBackground,1000);