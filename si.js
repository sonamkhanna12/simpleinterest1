function si(){
                                var p=document.querySelector("#pri").value;
                                var t=document.querySelector("#time").value;
                                var r=document.querySelector("#rate").value;

    var si1=p*r*t/100;
    si1=si1.toFixed(2);
    document.getElementById("total").innerHTML=si1;

}
window.onload =() => {
     document.querySelector("#calculate").onclick=si
    }

