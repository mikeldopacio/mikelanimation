//detectar movil

cambiar("boton_info");

function cambiar(id){
    let cuerpo = document.getElementById("cuerpo");
    document.getElementsByClassName("boton_nav_actual")[0].classList.replace("boton_nav_actual","boton_nav");
    document.getElementById(id).classList.replace("boton_nav","boton_nav_actual");
    cuerpo.innerHTML = getCuerpo(id);
}

function getCuerpo(id){
    if(id=="boton_2d"){
        var ruta = "imagenes/2D/";
        var result = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", ruta, false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
            result = xmlhttp.responseText;
        }
        return result;
    }
    else if(id=="boton_3d"){
        var ruta = "imagenes/3D/";

    }
    else if(id=="boton_reel"){
        var ruta = "imagenes/Reel/";

    }
    else{
        return `
            Hey there! I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
            I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
            I strive to keep growing in my animation journey, thank you for your time.
        `;
    }
}
