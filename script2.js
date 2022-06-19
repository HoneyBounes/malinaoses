var novcanik = parseFloat(localStorage.getItem("novcanik")).toFixed(2);
document.getElementById("novcanik").innerHTML = novcanik + "&#128176;";

var options = ["-10💰","5💰","10💰","Izgubi sve 💰", "20💰","-15💰","50💰","-5💰","-15💰","100💰","-20💰"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 1;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 225;
    var textRadius = 170;
    var insideRadius = 130;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;

    ctx.font = 'bold 12px Helvetica, Arial';
    

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //strelica
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  if(novcanik>=5)
  {
  novcanik-=5;
  localStorage.setItem("novcanik", novcanik);
  document.getElementById("novcanik").innerHTML = parseFloat(novcanik).toFixed(2) + "&#128176;";

  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
  }
  else
  {
    alert("Nemate dovoljno novca!");
  }
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();

  switch(index) {
    case 0:
      novcanik-=10;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 1:
      novcanik+=5;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 2:
      novcanik+=10;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 3:
      novcanik = 0;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 4:
      novcanik+=20;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 5:
      novcanik-=15;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 6:
      novcanik+=50;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;
    
    case 7:
      novcanik-=5;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 8:
      novcanik-=15;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 9:
      novcanik+=100;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;

    case 10:
      novcanik-=20;
      localStorage.setItem("novcanik", novcanik);
      document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
      break;
  }
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();