//overlay
function off() {
    document.getElementById("overlay").style.display = "none";
    bool = true;
  }
document.getElementById("overlay").style.display = "block";

//slike kupovine
var deonica1slika = document.getElementById("slika1");
var deonica2slika = document.getElementById("slika2");
var deonica3slika = document.getElementById("slika3");
var deonica4slika = document.getElementById("slika4");

//slike prodaje
var pdeonica1slika = document.getElementById("slika11");
var pdeonica2slika = document.getElementById("slika12");
var pdeonica3slika = document.getElementById("slika13");
var pdeonica4slika = document.getElementById("slika14");

//varijable
var bool = false;
var novcanik = 5;
var deonica1 = 0;
var deonica2 = 0;
var deonica3 = 0;
var deonica4 = 0;
var cdeonica1 = 1;
var cdeonica2 = 2;
var cdeonica3 = 3;
var cdeonica4 = 4;
var naplata = document.getElementById("naplataprogress");

//interval popunjavanja
var timeout = setTimeout(function(){
    document.getElementById("cdeonica1").innerHTML = cdeonica1 + "&#128176;";
    document.getElementById("cdeonica2").innerHTML = cdeonica2 + "&#128176;";
    document.getElementById("cdeonica3").innerHTML = cdeonica3 + "&#128176;";
    document.getElementById("cdeonica4").innerHTML = cdeonica4 + "&#128176;";
    document.getElementById("novcanik").innerHTML = novcanik + "&#128176;";
},1);

//interval gubljenja novca
var interval = setInterval(function(){
    if(novcanik>=200 && novcanik<250)
    {
        novcanik-=20;
        document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }

    else if(novcanik>=150 && novcanik<200)
    {
        novcanik-=15;
        document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }

    else if(novcanik>=100 && novcanik<150)
    {
        novcanik-=10;
        document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }

    else if(novcanik >= 50 &&novcanik<100)
    {
        novcanik-=5;
        document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
    else
    {
        novcanik-=2;
        document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
},20000)

var interval = setInterval(function(){

    naplata.value +=2.5;
    if(naplata.value==100)
    {
        naplata.value = 0;
    }

},500)

//interval menjanja cena
var interval = setInterval(function(){
    if(bool==true){
    var random = Math.random();
    random *= Math.round(Math.random()) ? 1 : -1;
    cdeonica1 += random;
    if(cdeonica1<-1)
    {
        cdeonica1 += 4;
    }
    if(cdeonica1>13)
    {
        cdeonica1 -= 6;
    }
    document.getElementById("cdeonica1").innerHTML = cdeonica1.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random1 = Math.random();
    random1 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica2 += random1;
    if(cdeonica2<-1)
    {
        cdeonica2 += 4;
    }
    if(cdeonica2>13)
    {
        cdeonica2 -= 6;
    }
    document.getElementById("cdeonica2").innerHTML = cdeonica2.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random2 = Math.random();
    random2 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica3 += random2;
    if(cdeonica3<-1)
    {
        cdeonica3 += 4;
    }
    if(cdeonica3>13)
    {
        cdeonica3 -= 6;
    }
    document.getElementById("cdeonica3").innerHTML = cdeonica3.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random = Math.random();
    random *= Math.round(Math.random()) ? 1 : -1;
    cdeonica4 += random;
    if(cdeonica4<-1)
    {
        cdeonica4 += 4;
    }
    if(cdeonica4>13)
    {
        cdeonica4 -= 6;
    }
    document.getElementById("cdeonica4").innerHTML = cdeonica4.toFixed(2) + "&#128176;";
}
},5000);

//kupovina deonica
deonica1slika.onclick = function(){
    if(novcanik>=cdeonica1 && cdeonica1>=0){
    deonica1 += 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik -= cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

deonica2slika.onclick = function(){
    if(novcanik>=cdeonica2 && cdeonica2>=0){
    deonica2 += 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik -= cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

deonica3slika.onclick = function(){
    if(novcanik>=cdeonica3 && cdeonica3>=0){
    deonica3 += 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik -= cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

deonica4slika.onclick = function(){
    if(novcanik>=cdeonica4 && cdeonica4>=0){
    deonica4 += 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik -= cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

//prodaja deonica
pdeonica1slika.onclick = function(){
    if(deonica1>0 && cdeonica1>=0){
    deonica1 -= 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik += cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

pdeonica2slika.onclick = function(){
    if(deonica2>0 && cdeonica2>=0){
    deonica2 -= 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik += cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

pdeonica3slika.onclick = function(){
    if(deonica3>0 && cdeonica3>=0){
    deonica3 -= 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}

pdeonica4slika.onclick = function(){
    if(deonica4>0 && cdeonica4>=0){
    deonica4 -= 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik += cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    }
}