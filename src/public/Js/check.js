var res = document.getElementById("restaurant");
var ent = document.getElementById("entertainment");
var bar = document.getElementById("bar");
var cof = document.getElementById("coffee");

var fres = document.getElementById("fres");
var fent = document.getElementById("fent");
var fbar = document.getElementById("fbar");
var fcof = document.getElementById("fcof");

function check() {
    if (res.checked == true) {
        res.value = "restaurante";
    }
    if(ent.checked == true){
        ent.value = "entretenimiento";
    }
    if(bar.checked == true){
        bar.value = "bar";
    }
    if(cof.checked == true){
        cof.value = "cafe";
    }

}
function check2(){
    
    if (fres.checked == true) {
        fres.value = "restaurante";
    }
    if(fent.checked == true){
        fent.value = "entretenimiento";
    }
    if(fbar.checked == true){
        fbar.value = "bar";
    }
    if(fcof.checked == true){
        fcof.value = "cafe";
    }

}
