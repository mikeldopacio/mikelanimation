//detectar movil

cambiar("boton_info");

function cambiar(id){
    document.getElementById("cuerpo").innerHTML = "";
    document.getElementsByClassName("boton_nav_actual")[0].classList.replace("boton_nav_actual","boton_nav");
    document.getElementById(id).classList.replace("boton_nav","boton_nav_actual");
    getCuerpo(id);
    // document.getElementById("cuerpo").innerHTML = getCuerpo(id);
}

function getCuerpo(id){
    //main tree https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/6d2d5935d83b695e4982739d02f5fd1010a384cc
    if(id=="boton_2d"){
        $.getJSON('https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/8831ec23e1a8d617a8dd3aedcc8c92935c891a9f', function(data) {
            r= "";
            for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
                let ruta = data["tree"][i]["path"];
                let extension = ruta.substr(ruta.length - 3);
                if(extension == "mp4"){
                    //video
                    r = r + "<video controls class=video_portfolio><source src='imagenes/2D/"+ruta+"' type='video/mp4'>";
                }
                else{
                    //imagen
                    r = r + "<img class=imagen_portfolio src='imagenes/2D/"+ruta+"'>";
                }
            }
            document.getElementById("cuerpo").innerHTML = r;
        });
    }
    else if(id=="boton_3d"){
                $.getJSON('https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/8101248296cedcbd25e729a1a086bae376abf8b3', function(data) {
            r= "";
            for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
                let ruta = data["tree"][i]["path"];
                let extension = ruta.substr(ruta.length - 3);
                if(extension == "mp4"){
                    //video
                    r = r + "<video controls class=video_portfolio><source src='imagenes/3D/"+ruta+"' type='video/mp4'>";
                }
                else{
                    //imagen
                    r = r + "<img class=imagen_portfolio src='imagenes/3D/"+ruta+"'>";
                }
            }
            document.getElementById("cuerpo").innerHTML = r;
        });
    }
    else if(id=="boton_reel"){
        document.getElementById("cuerpo").innerHTML = "<iframe class=video_embedido src='https://www.youtube.com/embed/NsCCsxgjxFQ'></iframe>";
    }
    else if(id=="boton_storyboard"){
                $.getJSON('https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/5967120ca116056da6efc20847bdd5d2ee838e88', function(data) {
            r= "";
            for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
                let ruta = data["tree"][i]["path"];
                let extension = ruta.substr(ruta.length - 3);
                if(extension == "mp4"){
                    //video
                    r = r + "<video controls class=video_portfolio><source src='imagenes/Storyboard/"+ruta+"' type='video/mp4'>";
                }
                else{
                    //imagen
                    r = r + "<img class=imagen_portfolio src='imagenes/Storyboard/"+ruta+"'>";
                }
            }
            document.getElementById("cuerpo").innerHTML = r;
        });
    }
    else{
        document.getElementById("cuerpo").innerHTML = `
            Hey there! I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
            I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
            I strive to keep growing in my animation journey, thank you for your time.
        `;
    }
}