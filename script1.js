//overlay
function off() {
    document.getElementById("overlay").style.display = "none";
    bool = true;
  };

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

var deonica1 = parseFloat(localStorage.getItem("brdeonice1"));
var deonica2 = parseFloat(localStorage.getItem("brdeonice2"));
var deonica3 = parseFloat(localStorage.getItem("brdeonice3"));
var deonica4 = parseFloat(localStorage.getItem("brdeonice4"));

var deonica5 = parseFloat(localStorage.getItem("brdeonice5"));
var deonica6 = parseFloat(localStorage.getItem("brdeonice6"));
var deonica7 = parseFloat(localStorage.getItem("brdeonice7"));
var deonica8 = parseFloat(localStorage.getItem("brdeonice8"));

var cdeonica1 = parseFloat(localStorage.getItem("cenadeonice1")).toFixed(2);
var cdeonica2 = parseFloat(localStorage.getItem("cenadeonice2")).toFixed(2);
var cdeonica3 = parseFloat(localStorage.getItem("cenadeonice3")).toFixed(2);
var cdeonica4 = parseFloat(localStorage.getItem("cenadeonice4")).toFixed(2);

var cdeonica5 = parseFloat(localStorage.getItem("cenadeonice5")).toFixed(2);
var cdeonica6 = parseFloat(localStorage.getItem("cenadeonice6")).toFixed(2);
var cdeonica7 = parseFloat(localStorage.getItem("cenadeonice7")).toFixed(2);
var cdeonica8 = parseFloat(localStorage.getItem("cenadeonice8")).toFixed(2);

var naplata = document.getElementById("naplataprogress");
var promena = document.getElementById("naplataprogress1");

//interval popunjavanja
var timeout = setTimeout(function(){
    document.getElementById("brdeonica1").innerHTML = deonica1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    document.getElementById("brdeonica4").innerHTML = deonica4;

    document.getElementById("brdeonica5").innerHTML = deonica5;
    document.getElementById("brdeonica6").innerHTML = deonica6;
    document.getElementById("brdeonica7").innerHTML = deonica7;
    document.getElementById("brdeonica8").innerHTML = deonica8;


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
    
        else if(novcanik >= 50 && novcanik<100)
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
    var x = parseFloat(cdeonica1);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica1 = x;
    document.getElementById("cdeonica1").innerHTML = parseFloat(cdeonica1).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice1", cdeonica1);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica2);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica2 = x;
    document.getElementById("cdeonica2").innerHTML = parseFloat(cdeonica2).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice2", cdeonica2);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica3);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica3 = x;
    document.getElementById("cdeonica3").innerHTML = parseFloat(cdeonica3).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice3", cdeonica3);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica4);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica4 = x;
    document.getElementById("cdeonica4").innerHTML = parseFloat(cdeonica4).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice4", cdeonica4);
}
},5000);


var interval = setInterval(function(){
    var x = parseFloat(cdeonica5);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica5 = x;
    document.getElementById("cdeonica5").innerHTML = parseFloat(cdeonica5).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice5", cdeonica5);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica6);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica6 = x;
    document.getElementById("cdeonica6").innerHTML = parseFloat(cdeonica6).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice6", cdeonica6);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica7);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica7 = x;
    document.getElementById("cdeonica7").innerHTML = parseFloat(cdeonica7).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice7", cdeonica7);
}
},5000);

var interval = setInterval(function(){
    var x = parseFloat(cdeonica8);
    if(bool==true){
        var random = Math.random();
        random *= Math.round(Math.random()) ? 1 : -1;
        x += random;
        if(x<-1)
        {
            x += 4;
        }
        if(x>13)
        {
            x -= 6;
        }
    cdeonica8 = x;
    document.getElementById("cdeonica8").innerHTML = parseFloat(cdeonica8).toFixed(2) + "&#128176;";
    localStorage.setItem("cenadeonice8", cdeonica8);
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
    localStorage.setItem("brdeonice1", deonica1);
    }
}

deonica2slika.onclick = function(){
    if(novcanik>=cdeonica2 && cdeonica2>=0){
    deonica2 += 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik -= cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice2", deonica2);
    }
}

deonica3slika.onclick = function(){
    if(novcanik>=cdeonica3 && cdeonica3>=0){
    deonica3 += 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik -= cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice3", deonica3);
    }
}

deonica4slika.onclick = function(){
    if(novcanik>=cdeonica4 && cdeonica4>=0){
    deonica4 += 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik -= cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice4", deonica4);
    }
}


deonica5slika.onclick = function(){
    if(novcanik>=cdeonica5 && cdeonica5>=0){
    deonica5 += 1;
    document.getElementById("brdeonica5").innerHTML = deonica5;
    novcanik -= cdeonica5;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice5", deonica5);
    }
}

deonica6slika.onclick = function(){
    if(novcanik>=cdeonica6 && cdeonica6>=0){
    deonica6 += 1;
    document.getElementById("brdeonica6").innerHTML = deonica6;
    novcanik -= cdeonica6;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice6", deonica6);
    }
}

deonica7slika.onclick = function(){
    if(novcanik>=cdeonica7 && cdeonica7>=0){
    deonica7 += 1;
    document.getElementById("brdeonica7").innerHTML = deonica7;
    novcanik -= cdeonica7;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice7", deonica7);
    }
}

deonica8slika.onclick = function(){
    if(novcanik>=cdeonica8 && cdeonica8>=0){
    deonica8 += 1;
    document.getElementById("brdeonica8").innerHTML = deonica8;
    novcanik -= cdeonica8;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice8", deonica8);
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
    localStorage.setItem("brdeonice1", deonica1);
    }
}

pdeonica2slika.onclick = function(){
    if(deonica2>0 && cdeonica2>=0){
    deonica2 -= 1;
    document.getElementById("brdeonica2").innerHTML = deonica2;
    novcanik += cdeonica2;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice2", deonica2);
    }
}

pdeonica3slika.onclick = function(){
    if(deonica3>0 && cdeonica3>=0){
    deonica3 -= 1;
    document.getElementById("brdeonica3").innerHTML = deonica3;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice3", deonica3);
    }
}

pdeonica4slika.onclick = function(){
    if(deonica4>0 && cdeonica4>=0){
    deonica4 -= 1;
    document.getElementById("brdeonica4").innerHTML = deonica4;
    novcanik += cdeonica4;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice4", deonica4);
    }
}


pdeonica5slika.onclick = function(){
    if(deonica5>0 && cdeonica5>=0){
    deonica5 -= 1;
    document.getElementById("brdeonica5").innerHTML = deonica5;
    novcanik += cdeonica5;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice5", deonica5);
    }
}

pdeonica6slika.onclick = function(){
    if(deonica6>0 && cdeonica6>=0){
    deonica6 -= 1;
    document.getElementById("brdeonica6").innerHTML = deonica6;
    novcanik += cdeonica6;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice6", deonica6);
    }
}

pdeonica7slika.onclick = function(){
    if(deonica7>0 && cdeonica7>=0){
    deonica7 -= 1;
    document.getElementById("brdeonica7").innerHTML = deonica7;
    novcanik += cdeonica3;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice7", deonica7);
    }
}

pdeonica8slika.onclick = function(){
    if(deonica8>0 && cdeonica8>=0){
    deonica8 -= 1;
    document.getElementById("brdeonica8").innerHTML = deonica8;
    novcanik += cdeonica8;
    document.getElementById("novcanik").innerHTML = novcanik.toFixed(2) + "&#128176;";
    localStorage.setItem("novcanik", novcanik);
    localStorage.setItem("brdeonice8", deonica8);
    }
}