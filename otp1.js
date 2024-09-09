let x;
let y;
let z;
let k;
let colorX;
let colorY;
let colorZ;
let colorK;


document.getElementById("rollbutton").onclick = function(){

    x = Math.floor(Math.random() * 9) + 1;
    y = Math.floor(Math.random() * 9) + 1;
    z = Math.floor(Math.random() * 9) + 1;
    k = Math.floor(Math.random() * 9) + 1;

    // Generate random colors
    colorX = getRandomColor();
    colorY = getRandomColor();
    colorZ = getRandomColor();
    colorK = getRandomColor();
    

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("xlabel").style.color = colorX;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("ylabel").style.color = colorY;
    document.getElementById("zlabel").innerHTML = z;
    document.getElementById("zlabel").style.color = colorZ;
    document.getElementById("klabel").innerHTML = k;
    document.getElementById("klabel").style.color = colorK;

}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}