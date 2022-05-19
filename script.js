//slike - prebaciti u mapping sto pre!!
var deonica1slika = document.getElementById("slika1");
var deonica2slika = document.getElementById("slika2");
var deonica3slika = document.getElementById("slika3");

//slike - prebaciti u mapping sto pre!!
var pdeonica1slika = document.getElementById("slika11");
var pdeonica2slika = document.getElementById("slika12");
var pdeonica3slika = document.getElementById("slika13");

//varijable
var novcanik = 10;
var deonica1 = 0;
var deonica2 = 0;
var deonica3 = 0;
var cdeonica1 = 1;
var cdeonica2 = 2;
var cdeonica3 = 3;

//interval popunjavanja
var timeout = setTimeout(function(){
    document.getElementById("cdeonica1").innerHTML = cdeonica1;
    document.getElementById("cdeonica2").innerHTML = cdeonica2;
    document.getElementById("cdeonica3").innerHTML = cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik;
},1);

//interval menjanja cena
var interval = setInterval(function(){
    var random = Math.random();
    random *= Math.round(Math.random()) ? 1 : -1;
    cdeonica1 += random;
    if(cdeonica1<-1)
    {
        cdeonica1 += 4;
    }
    document.getElementById("cdeonica1").innerHTML = cdeonica1.toFixed(2);
},5000);

var interval = setInterval(function(){
    var random1 = Math.random();
    random1 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica2 += random1;
    if(cdeonica2<-1)
    {
        cdeonica2 += 5;
    }
    document.getElementById("cdeonica2").innerHTML = cdeonica2.toFixed(2);
},5000);

var interval = setInterval(function(){
    var random2 = Math.random();
    random2 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica3 += random2;
    if(cdeonica3<-1)
    {
        cdeonica3 += 6;
    }
    document.getElementById("cdeonica3").innerHTML = cdeonica3.toFixed(2);
},5000);

//kupovina deonica
deonica1slika.onclick = function(){
    if(novcanik>=cdeonica1 && cdeonica1>=0){
    deonica1 += 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik -= cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}

deonica2slika.onclick = function(){
    if(novcanik>=cdeonica2 && cdeonica2>=0){
    deonica2 += 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik -= cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}

deonica3slika.onclick = function(){
    if(novcanik>=cdeonica3 && cdeonica3>=0){
    deonica3 += 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik -= cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}

//prodaja deonica
pdeonica1slika.onclick = function(){
    if(deonica1>0 && cdeonica1>=0){
    deonica1 -= 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik += cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}

pdeonica2slika.onclick = function(){
    if(deonica2>0 && cdeonica2>=0){
    deonica2 -= 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik += cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}

pdeonica3slika.onclick = function(){
    if(deonica3>0 && cdeonica3>=0){
    deonica3 -= 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2);
    }
}
