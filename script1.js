//overlay
function off() {
    document.getElementById("overlay").style.display = "none";
    bool = true;
  };
document.getElementById("overlay").style.display = "block";

//slike kupovine
var deonica1slika = document.getElementById("slika1");
var deonica2slika = document.getElementById("slika2");
var deonica3slika = document.getElementById("slika3");
var deonica4slika = document.getElementById("slika4");

var deonica5slika = document.getElementById("slika5");
var deonica6slika = document.getElementById("slika6");
var deonica7slika = document.getElementById("slika7");
var deonica8slika = document.getElementById("slika8");

//slike prodaje
var pdeonica1slika = document.getElementById("slika11");
var pdeonica2slika = document.getElementById("slika12");
var pdeonica3slika = document.getElementById("slika13");
var pdeonica4slika = document.getElementById("slika14");

var pdeonica5slika = document.getElementById("slika15");
var pdeonica6slika = document.getElementById("slika16");
var pdeonica7slika = document.getElementById("slika17");
var pdeonica8slika = document.getElementById("slika18");

//varijable
var bool = false;
var novcanik = parseFloat(localStorage.getItem("novcanik")).toFixed(2);

var deonica1 = 0;
var deonica2 = 0;
var deonica3 = 0;
var deonica4 = 0;

var deonica5 = 0;
var deonica6 = 0;
var deonica7 = 0;
var deonica8 = 0;

var cdeonica1 = 1;
var cdeonica2 = 2;
var cdeonica3 = 3;
var cdeonica4 = 4;

var cdeonica5 = 5;
var cdeonica6 = 6;
var cdeonica7 = 7;
var cdeonica8 = 8;

var naplata = document.getElementById("naplataprogress");
var promena = document.getElementById("naplataprogress1");

//interval popunjavanja
var timeout = setTimeout(function(){
    document.getElementById("cdeonica1").innerHTML = cdeonica1 + "&#128176;";
    document.getElementById("cdeonica2").innerHTML = cdeonica2 + "&#128176;";
    document.getElementById("cdeonica3").innerHTML = cdeonica3 + "&#128176;";
    document.getElementById("cdeonica4").innerHTML = cdeonica4 + "&#128176;";

    document.getElementById("cdeonica5").innerHTML = cdeonica5 + "&#128176;";
    document.getElementById("cdeonica6").innerHTML = cdeonica6 + "&#128176;";
    document.getElementById("cdeonica7").innerHTML = cdeonica7 + "&#128176;";
    document.getElementById("cdeonica8").innerHTML = cdeonica8 + "&#128176;";

    document.getElementById("novcanik").innerHTML = novcanik + "&#128176;";
},1);

//interval gubljenja novca
var interval = setInterval(function(){
    if(bool==true){
    naplata.value +=1
    if(naplata.value==100)
    {
        if(novcanik>=250)
        {
            novcanik-=40;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }

        else if(novcanik>=200 && novcanik<250)
        {
            novcanik-=20;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }
    
        else if(novcanik>=150 && novcanik<200)
        {
            novcanik-=15;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }
    
        else if(novcanik>=100 && novcanik<150)
        {
            novcanik-=10;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }
    
        else if(novcanik >= 50 &&novcanik<100)
        {
            novcanik-=5;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }
        else
        {
            novcanik-=2;
            document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
            localStorage.setItem("novcanik", novcanik);
        }
        naplata.value = 0;
         }
    }  
},1000)

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


var interval = setInterval(function(){
    if(bool==true){
    var random = Math.random();
    random *= Math.round(Math.random()) ? 1 : -1;
    cdeonica5 += random;
    if(cdeonica5<-1)
    {
        cdeonica5 += 4;
    }
    if(cdeonica5>13)
    {
        cdeonica5 -= 6;
    }
    document.getElementById("cdeonica5").innerHTML = cdeonica5.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random1 = Math.random();
    random1 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica6 += random1;
    if(cdeonica6<-1)
    {
        cdeonica6 += 4;
    }
    if(cdeonica6>13)
    {
        cdeonica6 -= 6;
    }
    document.getElementById("cdeonica6").innerHTML = cdeonica6.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random2 = Math.random();
    random2 *= Math.round(Math.random()) ? 1 : -1;
    cdeonica7 += random2;
    if(cdeonica7<-1)
    {
        cdeonica7 += 4;
    }
    if(cdeonica7>13)
    {
        cdeonica7 -= 6;
    }
    document.getElementById("cdeonica7").innerHTML = cdeonica7.toFixed(2) + "&#128176;";
}
},5000);

var interval = setInterval(function(){
    if(bool==true){
    var random = Math.random();
    random *= Math.round(Math.random()) ? 1 : -1;
    cdeonica8 += random;
    if(cdeonica8<-1)
    {
        cdeonica8 += 4;
    }
    if(cdeonica8>13)
    {
        cdeonica8 -= 6;
    }
    document.getElementById("cdeonica8").innerHTML = cdeonica8.toFixed(2) + "&#128176;";
}
},5000);

//kupovina deonica
deonica1slika.onclick = function(){
    if(novcanik>=cdeonica1 && cdeonica1>=0){
    deonica1 += 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik -= cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica2slika.onclick = function(){
    if(novcanik>=cdeonica2 && cdeonica2>=0){
    deonica2 += 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik -= cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica3slika.onclick = function(){
    if(novcanik>=cdeonica3 && cdeonica3>=0){
    deonica3 += 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik -= cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica4slika.onclick = function(){
    if(novcanik>=cdeonica4 && cdeonica4>=0){
    deonica4 += 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik -= cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}


deonica5slika.onclick = function(){
    if(novcanik>=cdeonica5 && cdeonica5>=0){
    deonica5 += 1;
    document.getElementById("brdeonica5").innerHTML = deonica5;
    novcanik -= cdeonica5;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica6slika.onclick = function(){
    if(novcanik>=cdeonica6 && cdeonica6>=0){
    deonica6 += 1;
    document.getElementById("brdeonica6").innerHTML = deonica6;
    novcanik -= cdeonica6;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica7slika.onclick = function(){
    if(novcanik>=cdeonica7 && cdeonica7>=0){
    deonica7 += 1;
    document.getElementById("brdeonica7").innerHTML = deonica7;
    novcanik -= cdeonica7;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

deonica8slika.onclick = function(){
    if(novcanik>=cdeonica8 && cdeonica8>=0){
    deonica8 += 1;
    document.getElementById("brdeonica8").innerHTML = deonica8;
    novcanik -= cdeonica8;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}
//prodaja deonica
pdeonica1slika.onclick = function(){
    if(deonica1>0 && cdeonica1>=0){
    deonica1 -= 1;
    document.getElementById("brdeonica1").innerHTML = deonica1;
    novcanik += cdeonica1;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica2slika.onclick = function(){
    if(deonica2>0 && cdeonica2>=0){
    deonica2 -= 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik += cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica3slika.onclick = function(){
    if(deonica3>0 && cdeonica3>=0){
    deonica3 -= 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica4slika.onclick = function(){
    if(deonica4>0 && cdeonica4>=0){
    deonica4 -= 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik += cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}


pdeonica5slika.onclick = function(){
    if(deonica5>0 && cdeonica5>=0){
    deonica5 -= 1;
    document.getElementById("brdeonica5").innerHTML = deonica5;
    novcanik += cdeonica5;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica6slika.onclick = function(){
    if(deonica6>0 && cdeonica6>=0){
    deonica6 -= 1;
    document.getElementById("brdeonica6").innerHTML = deonica6;
    novcanik += cdeonica6;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica7slika.onclick = function(){
    if(deonica7>0 && cdeonica7>=0){
    deonica7 -= 1;
    document.getElementById("brdeonica7").innerHTML = deonica7;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}

pdeonica8slika.onclick = function(){
    if(deonica8>0 && cdeonica8>=0){
    deonica8 -= 1;
    document.getElementById("brdeonica8").innerHTML = deonica8;
    novcanik += cdeonica8;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    }
}