/* Jquery boton chat */

$(function () {
    $('#chat').on('click', function () {
        alert('Opción en Construcción');
    })
});



var queryString = document.location.search;
var urlParams = new URLSearchParams(queryString);
var ob =  urlParams.get('val');
var elem = document.getElementById("msjE1");
var elem2 = document.getElementById("msjE2");

if(ob == 1){
    elem2.classList.remove('err');
    elem.classList.remove('err');
    document.getElementById("msjE1").innerHTML = "Usuario o contraseña";
    document.getElementById("msjE2").innerHTML = "Incorrectos";
    setTimeout(function (){
        elem2.classList.add('err');
        elem.classList.add('err');
    }, 1500);

}else if(ob == 2){
    document.getElementById("danger").style.color = "green";
    document.getElementById("msjE1").innerHTML = "Ha cerrado";
    document.getElementById("msjE2").innerHTML = "sesión!";
    elem2.classList.remove('err');
    elem.classList.remove('err');
    setTimeout(function (){
        elem2.classList.add('err');
        elem.classList.add('err');
    }, 1500);
}else if (ob == 3){
    document.getElementById("danger").style.color = "green";
    document.getElementById("msjE1").innerHTML = "Registro modificado";
    document.getElementById("msjE2").innerHTML = "exitosamente!";
    elem2.classList.remove('err');
    elem.classList.remove('err');
    setTimeout(function (){
        elem2.classList.add('err');
        elem.classList.add('err');
    }, 1500);
}else if (ob == 4){
    document.getElementById("danger").style.color = "green";
    document.getElementById("msjE1").innerHTML = "Usuario creado";
    document.getElementById("msjE2").innerHTML = "exitosamente!";
    elem2.classList.remove('err');
    elem.classList.remove('err');
    setTimeout(function (){
        elem2.classList.add('err');
        elem.classList.add('err');
    }, 1500);
}else{
    elem2.classList.add('err');
    elem.classList.add('err');
}
