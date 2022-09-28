const fs = require('fs')
const path = require('path')
const nativeImage = require('electron').nativeImage

const text = document.createElement("p");
const textFile = fs.readFileSync(path.join("assets", "txt.txt"), 'utf8');
text.innerHTML = textFile.toString();

const img = document.createElement("img");
img.height = 100;
img.src = nativeImage.createFromPath(path.join("assets", 'png.png')).toDataURL();

var svg = document.createElement('object');
svg.height = 100;
svg.data = path.join("..", "assets", 'svg.svg'); // "../"

document.getElementById('container').appendChild(text);
document.getElementById('container').appendChild(img);
document.getElementById('container').appendChild(svg);
