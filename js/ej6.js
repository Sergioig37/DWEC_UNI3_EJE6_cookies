window.addEventListener("load",init);


function crearModifCookie(){
    var nombre = prompt("Nombre de la cookie");
    var valor = prompt("Valor de la cookie");
    var fecha = prompt("Dia que expira la cookie");
    setCookie(nombre, valor, fecha);
    verCookies();
}

function setCookie(nombre, valor, fecha){
    var hoy = new Date();
    hoy.setTime(hoy.getTime()+fecha);
    var expiracion = "expires="+hoy.toUTCString();
     document.cookie = nombre +"="+valor+";"+expiracion+";path=/";
}

function verCookies(){
    alert("Cookies actuales:" +"\n"+document.cookie);
}

function getCookie(nomCookie){
    var cook = document.cookie.split(";");

    for(var i=0;i<cook.length;i++){
        var n = cook[i].split("=");
        var nombre = n[0];
        var valor = n[1];
        if(nombre.trim()==nomCookie.trim()){
            return valor;
        }
        
    }
    return null;
}

function leerCookie(){
    var nomCookie = prompt("Nombre de la cookie a leer");
    alert(nomCookie+":"+getCookie(nomCookie));
}
function borrarCookies(){
    var nomCookie = prompt("Nombre de la cookie a borrar");
   deleteCookie(nomCookie);
   verCookies();
   
}
function deleteCookie(nombreCookie){
    setCookie(nombreCookie, "", 0);
}

function init(){
    document.getElementById("verTodas").addEventListener("click",verCookies,false);
    document.getElementById("crearCookie").addEventListener("click",crearModifCookie,false);
    document.getElementById("modificarCookie").addEventListener("click",crearModifCookie,false);
    document.getElementById("leerCookie").addEventListener("click",leerCookie,false);
    document.getElementById("borrarCookie").addEventListener("click",borrarCookies,false);
}

