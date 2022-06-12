//global

if(localStorage.getItem("novcanik") == null)
{
   localStorage.setItem("novcanik",8);
}

var x = parseFloat(localStorage.getItem("novcanik")).toFixed(2);
document.getElementById("novcanik").innerHTML = x + "&#128176;";

//off
function off() {
    document.getElementById("overlay").style.display = "none";
  };

function off1() {
   document.getElementById("novcanikgrid").style.display = "none";
   bool = true;
 };

//promena pozadine
var pozadinaid = 0;

var restart = document.getElementById("restart");
restart.onclick = function() {
    localStorage.setItem("novcanik", 8);
    document.getElementById("novcanik").innerHTML = parseFloat(localStorage.getItem("novcanik")).toFixed(2) + "&#128176;";
}

function promenapozadine() {
    pozadinaid++;
    if(pozadinaid==1)
    {
       document.body.style.backgroundImage = "url('img/pozadina2.jpg')";
    }
  
    else if(pozadinaid==2)
    {
       document.body.style.backgroundImage = "url('img/pozadina3.jpg')";
    }
  
    else if(pozadinaid==3)
    {
       document.body.style.backgroundImage = "url('img/pozadina4.jpg')";
    }
  
    else if(pozadinaid==4)
    {
       document.body.style.backgroundImage = "url('img/pozadina5.jpg')";
    }
  
    else
    {
        pozadinaid = 0;
       document.body.style.backgroundImage = "url('img/pozadina1.jpg')";
    }
  };

//pokazi novcanik
var novcanikiko = document.getElementById("novcanikiko");
novcanikiko.onclick = function(){
   document.getElementById("novcanikgrid").style.display = "block";
}

//provera fullscreen-a
/*
if(window.innerWidth == screen.width && window.innerHeight == screen.height) {
    
}
else{
    alert('Browser is in fullscreen');
}
*/
