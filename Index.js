var cvs = document.getElementById('canvas');
var ctx = getContext('2d');

var imageName = new Image();

imageName.src = "Rayman.png";

ctx.drawImage(imageName, 100, 150, 50, 50);

