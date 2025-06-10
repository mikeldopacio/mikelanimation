//detectar movil

//inicializar
cambiar("boton_info");

let main_path = "https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/main";
let tree_2d = "";
let tree_3d = "";
let tree_storyboard = "";
// jsons en strings

cargarArboles(main_path);

function cambiar(id){
    document.getElementById("cuerpo").innerHTML = "";
    document.getElementsByClassName("boton_nav_actual")[0].classList.replace("boton_nav_actual","boton_nav");
    document.getElementById(id).classList.replace("boton_nav","boton_nav_actual");
    getCuerpo(id);
    // document.getElementById("cuerpo").innerHTML = getCuerpo(id);
}

function getCuerpo(id){
    if(id=="boton_2d"){
        console.log("tree_2d al inicio de getCuerpo() "+tree_2d);
        data = JSON.parse(tree_2d);
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
    }
    else if(id=="boton_3d"){
        console.log("tree_3d al inicio de getCuerpo() "+tree_3d);
        data = JSON.parse(tree_3d);    
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
    }
    else if(id=="boton_reel"){
        document.getElementById("cuerpo").innerHTML = "<iframe class=video_embedido src='https://www.youtube.com/embed/NsCCsxgjxFQ'></iframe>";
    }
    else if(id=="boton_storyboard"){
        console.log("tree_storyboard al inicio de getCuerpo() "+tree_storyboard);
        data = JSON.parse(tree_storyboard);
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
    }
    else{
        document.getElementById("cuerpo").innerHTML = `
            Hey there! I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
            I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
            I strive to keep growing in my animation journey, thank you for your time.
        `;
    }
}

function cargarArboles(path){
    //directorio raiz
    $.getJSON(path, function(data) {
    console.log("Acceso al directorio raíz. Url del directorio imagenes:");
    console.log(data["tree"][1]["path"]);
    console.log(data["tree"][1]["url"]);
        //directorio imagenes
        $.getJSON(data["tree"][1]["url"], function(data2) {
            console.log("Acceso al directorio imagenes. Url del directorio 2D:");
            console.log(data2["tree"][1]["path"]);
            console.log(data2["tree"][1]["url"]);
            //directorio 2D
            $.getJSON(data2["tree"][1]["url"], function(tree) {
                console.log("Acceso al directorio 2D. Primer elemento:");
                console.log(tree["tree"][0]["path"]);
                console.log(tree["tree"][0]["url"]);
                tree_2d = JSON.stringify(tree);  
                console.log("tree_2d al final de cargarArboles() "+tree_2d);
            });
            //directorio 3D
            $.getJSON(data2["tree"][2]["url"], function(tree) {
                console.log("Acceso al directorio 3D. Primer elemento:");
                console.log(tree["tree"][0]["path"]);
                console.log(tree["tree"][0]["url"]);
                tree_3d = JSON.stringify(tree);
                console.log("tree_3d al final de cargarArboles() "+tree_3d);  
            });
            //directorio storyboard 
            $.getJSON(data2["tree"][4]["url"], function(tree) {
                console.log("Acceso al directorio storyboard. Primer elemento:");
                console.log(tree["tree"][0]["path"]);
                console.log(tree["tree"][0]["url"]);
                tree_storyboard = JSON.stringify(tree);
                console.log("tree_storyboard al final de cargarArboles() "+tree_storyboard);  
            });         
        });
    });
}




// $.getJSON("https://api.github.com/repos/mikeldopacio/mikelanimation/git/trees/main", function(data) {
// console.log(data["tree"][1]["path"]);
// console.log(data["tree"][1]["url"]);
// $.getJSON(data["tree"][1]["url"], function(data2) {
//     console.log(data2["tree"][1]["path"]);
//     console.log(data2["tree"][1]["url"]);
//         if(id=="boton_2d"){
//             $.getJSON(data2["tree"][1]["url"], function(data3) {
//                 r= "";
//                 for(let i = 0; i < Object.keys(data3["tree"]).length; i++) {
//                     let ruta = data3["tree"][i]["path"];
//                     let extension = ruta.substr(ruta.length - 3);
//                     if(extension == "mp4"){
//                         //video
//                         r = r + "<video controls class=video_portfolio><source src='imagenes/2D/"+ruta+"' type='video/mp4'>";
//                     }
//                     else{
//                         //imagen
//                         r = r + "<img class=imagen_portfolio src='imagenes/2D/"+ruta+"'>";
//                     }
//                 }
//                 document.getElementById("cuerpo").innerHTML = r;
//             });
//         }
//         else if(id=="boton_3d"){
//             $.getJSON(data2["tree"][2]["url"], function(data3) {
//                 r= "";
//                 for(let i = 0; i < Object.keys(data3["tree"]).length; i++) {
//                     let ruta = data3["tree"][i]["path"];
//                     let extension = ruta.substr(ruta.length - 3);
//                     if(extension == "mp4"){
//                         //video
//                         r = r + "<video controls class=video_portfolio><source src='imagenes/3D/"+ruta+"' type='video/mp4'>";
//                     }
//                     else{
//                         //imagen
//                         r = r + "<img class=imagen_portfolio src='imagenes/3D/"+ruta+"'>";
//                     }
//                 }
//             document.getElementById("cuerpo").innerHTML = r;
//             });
//         }
//         else if(id=="boton_reel"){
//             document.getElementById("cuerpo").innerHTML = "<iframe class=video_embedido src='https://www.youtube.com/embed/NsCCsxgjxFQ'></iframe>";
//         }
//         else if(id=="boton_storyboard"){
//             $.getJSON(data2["tree"][3]["url"], function(data3) {
//                 r= "";
//                 for(let i = 0; i < Object.keys(data3["tree"]).length; i++) {
//                     let ruta = data3["tree"][i]["path"];
//                     let extension = ruta.substr(ruta.length - 3);
//                     if(extension == "mp4"){
//                         //video
//                         r = r + "<video controls class=video_portfolio><source src='imagenes/Storyboard/"+ruta+"' type='video/mp4'>";
//                     }
//                     else{
//                         //imagen
//                         r = r + "<img class=imagen_portfolio src='imagenes/Storyboard/"+ruta+"'>";
//                     }
//                 }
//                 document.getElementById("cuerpo").innerHTML = r;
//             });
//         }
//         else{
//             document.getElementById("cuerpo").innerHTML = `
//                 Hey there! I'm Mikel. A 2D and 3D animator from Barcelona, Spain. I've studied for 4 years at La Salle Animation & VFX.
//                 I've worked at Nomada Studio during 6 months, doing clean up of videogame 2D animations. I've also been doing art comissions for 6 years.
//                 I strive to keep growing in my animation journey, thank you for your time.
//             `;
//         }

// });
// });