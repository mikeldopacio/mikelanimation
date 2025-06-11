//detectar movil

//inicializar
cambiar("boton_info");

let main_path = "https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/main";
let tree_2d = "";
let tree_3d = "";
let tree_storyboard = "";
// jsons en strings

// cargarArboles(main_path);
//<img class=imagen_portfolio src='imagenes/2D/'>
//<video controls class=video_portfolio><source src='imagenes/2D/' type='video/mp4'>

function cambiar(id){
    document.getElementById("cuerpo").innerHTML = "";
    document.getElementsByClassName("boton_nav_actual")[0].classList.replace("boton_nav_actual","boton_nav");
    document.getElementById(id).classList.replace("boton_nav","boton_nav_actual");
    getCuerpo(id);
    // document.getElementById("cuerpo").innerHTML = getCuerpo(id);
}

function getCuerpo(id){
    if(id=="boton_2d"){
        document.getElementById("cuerpo").innerHTML = `
        <img class=imagen_portfolio src='imagenes/2D/Girl_GetPossesed-ezgif.com-crop.gif'>
        <img class=imagen_portfolio src='imagenes/2D/Girl_HelpCorner-ezgif.com-crop.gif'>
        <img class=imagen_portfolio src='imagenes/2D/Girl_Open_Lotus_In-ezgif.com-crop.gif'>
        <p class=texto_cuerpo>A few examples of my work cleaning up at Nomada Studios, doing Neva.</p>
        `;
        // console.log("tree_2d al inicio de getCuerpo() "+tree_2d);
        // data = JSON.parse(tree_2d);
        // r= "";
        // for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
        //     let ruta = data["tree"][i]["path"];
        //     let extension = ruta.substr(ruta.length - 3);
        //     if(extension == "mp4"){
        //         //video
        //         r = r + "<video controls class=video_portfolio><source src='imagenes/2D/"+ruta+"' type='video/mp4'>";
        //     }
        //     else{
        //         //imagen
        //         r = r + "<img class=imagen_portfolio src='imagenes/2D/"+ruta+"'>";
        //     }
        // }
        // document.getElementById("cuerpo").innerHTML = r;
    }
    else if(id=="boton_3d"){
        document.getElementById("cuerpo").innerHTML = `
        <video controls muted class=video_portfolio><source src='imagenes/3D/KRS_POST_EDIT_v22_1_-_Trim_-_Trim.mp4' type='video/mp4'></video>
        <video controls class=video_portfolio><source src='imagenes/3D/krs_sc060_sh010_v02.mp4'></video>
        <video controls class=video_portfolio><source src='imagenes/3D/krs_sc060_sh040_v06.mp4' type='video/mp4'></video>
        <p class=texto_cuerpo>A part of animating I also enjoy doing layout, so I put an example along some 3D animations, I only
did the animations (and layout) of the previous shots. All done in Maya.</p>
        `;
        // console.log("tree_3d al inicio de getCuerpo() "+tree_3d);
        // data = JSON.parse(tree_3d);    
        // r= "";
        // for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
        //     let ruta = data["tree"][i]["path"];
        //     let extension = ruta.substr(ruta.length - 3);
        //     if(extension == "mp4"){
        //         //video
        //         r = r + "<video controls class=video_portfolio><source src='imagenes/3D/"+ruta+"' type='video/mp4'>";
        //     }
        //     else{
        //         //imagen
        //         r = r + "<img class=imagen_portfolio src='imagenes/3D/"+ruta+"'>";
        //     }
        // }
        // document.getElementById("cuerpo").innerHTML = r;
    }
    else if(id=="boton_reel"){
        document.getElementById("cuerpo").innerHTML = "<iframe class=video_embedido src='https://www.youtube.com/embed/NsCCsxgjxFQ'></iframe>";
    }
    else if(id=="boton_storyboard"){
        document.getElementById("cuerpo").innerHTML = `
            <video controls muted class=video_portfolio><source src='imagenes/Storyboard/sbreel_-_Trim.mp4'></video>
            <video controls muted class=video_portfolio><source src='imagenes/Storyboard/sbreel_-_Trim2.mp4'></video>
            <video controls muted class=video_portfolio><source src='imagenes/Storyboard/sbreel_-_Trim3.mp4'></video>
        `;
        // console.log("tree_storyboard al inicio de getCuerpo() "+tree_storyboard);
        // data = JSON.parse(tree_storyboard);
        // r= "";
        // for(let i = 0; i < Object.keys(data["tree"]).length; i++) {
        //     let ruta = data["tree"][i]["path"];
        //     let extension = ruta.substr(ruta.length - 3);
        //     if(extension == "mp4"){
        //         //video
        //         r = r + "<video controls class=video_portfolio><source src='imagenes/Storyboard/"+ruta+"' type='video/mp4'>";
        //     }
        //     else{
        //         //imagen
        //         r = r + "<img class=imagen_portfolio src='imagenes/Storyboard/"+ruta+"'>";
        //     }
        // }
        // document.getElementById("cuerpo").innerHTML = r;
    }
    else{
        document.getElementById("cuerpo").innerHTML = `
            <p class= titulo>Hey there!</p>
            <p class=texto_cuerpo>I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
            I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
            I strive to keep growing in my animation journey, thank you for your time.</p>
            <p class=titulo>Contact<br></p>
            <p class=texto_cuerpo>+34 618 29 19 12<br></p>
            <p class=texto_cuerpo>mikelanimation@gmail.com<br></p>
        `;
    }
}

function cargarArboles(path){
    //directorio raiz
    $.getJSON(path, function(data) {
    // console.log("Acceso al directorio raíz. Url del directorio imagenes:");
    // console.log(data["tree"][1]["path"]);
    // console.log(data["tree"][1]["url"]);
        //directorio imagenes
        $.getJSON(data["tree"][1]["url"], function(data2) {
            // console.log("Acceso al directorio imagenes. Url del directorio 2D:");
            // console.log(data2["tree"][1]["path"]);
            // console.log(data2["tree"][1]["url"]);
            //directorio 2D
            $.getJSON(data2["tree"][1]["url"], function(tree) {
                // console.log("Acceso al directorio 2D. Primer elemento:");
                // console.log(tree["tree"][0]["path"]);
                // console.log(tree["tree"][0]["url"]);
                tree_2d = JSON.stringify(tree);  
                // console.log("tree_2d al final de cargarArboles() "+tree_2d);
            });
            //directorio 3D
            $.getJSON(data2["tree"][2]["url"], function(tree) {
                // console.log("Acceso al directorio 3D. Primer elemento:");
                // console.log(tree["tree"][0]["path"]);
                // console.log(tree["tree"][0]["url"]);
                tree_3d = JSON.stringify(tree);
                // console.log("tree_3d al final de cargarArboles() "+tree_3d);  
            });
            //directorio storyboard 
            $.getJSON(data2["tree"][4]["url"], function(tree) {
                // console.log("Acceso al directorio storyboard. Primer elemento:");
                // console.log(tree["tree"][0]["path"]);
                // console.log(tree["tree"][0]["url"]);
                tree_storyboard = JSON.stringify(tree);
                // console.log("tree_storyboard al final de cargarArboles() "+tree_storyboard);  
            });         
        });
    });
}