/*https://ajaxclass9g.firebaseio.com/ravenclaw/characters/.json*/
let coleccionDePersonajes;
const reqListener = () => {
    console.log(this.responseText)
}
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
    }
 };
 xhttp.open("GET", "ajax_info.txt", true);
 xhttp.send();
*/
//$.ajax({ /*método de jquery para peticiones AJAX*/
    //url: url, /*URL a la que haremos la petición*/
    //method:method, /*Tipo de petición que vamos a realizar ( GET, POST, PUT, PATCH, DELETE )*/
    //data: data, /*Los datos que enviaremos con la petición ( en caso de que aplique - POST, PUT, PATCH - )*/
    //success: ( response )=>{} /* callback cuando mi petición se cumpla*/
    //error: ( error ) => {} /*callback para cuando exista un error
//});
const guardarPersonaje = () => {
    let name = $("#name").val();
    let country = $("#country").val();
    let gender = $("input[type='radio']:checked").val()
    let birthDate = $("#birth-date").val();
    let picture = $("#picture").val();
    let bio = $("#bio").val()
    let personaje = { name, country, gender, birthDate, picture, bio }
    $.ajax({
        url:`https://ajaxclass9g.firebaseio.com/ravenclaw/historicCharacters/.json`,
        method:"POST",
        data: JSON.stringify(personaje),
        success: ( response ) => {
            console.log("personaje guardado")
            obtenerPersonajes();
        },
        error: ( error ) => {
            console.log("personaje no guardado")
        }
    })
}
const obtenerPersonajes = () => {
    $.ajax({ 
        url: `https://ajaxclass9g.firebaseio.com/ravenclaw/historicCharacters/.json`, 
        method:"GET",
        success: ( response ) => {
            console.log( response )
            coleccionDePersonajes = response
            let personajes = response;
            console.log(personajes)
            $("#characters-row").empty();
            for( llave in personajes ){
                console.log( personajes[llave])
                let { bio, birthDate, country, gender, name, picture } = personajes[llave]
                $("#characters-row").append(`
                    <div class="col-12 col-md-4 mb-3 ${gender}">
                        <div class="card">
                            <img src=${picture} class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${bio}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">${birthDate}</li>
                            <li class="list-group-item">${country}</li>
                            <li class="list-group-item">${gender}</li>
                            </ul>
                        </div>
                    </div>
                `)
            }
            $(".btn-delete").click(( event )=>{
                /*let llave = event.target.dataset.llavePersonaje*/
                /*Recordatorio: event es un objeto que contiene todos los datdos del evento que estamos escuchando
                event.target indica el elemento específico al que le sucedio el evento*/
                /*event: cayo un árbol sobre un auto gris*/
                /*event.target: un auto gris*/
                /*event.target.color: gris*/
                let llave = $(event.target).data("llave-personaje")
                $.ajax({
                    url: `https://ajaxclass9g.firebaseio.com/ravenclaw/characters/${llave}.json`,
                    method:"DELETE", 
                    success: ( response )=>{
                        obtenerPersonajes();
                    },
                    error: ( error ) => {
                        console.log(error)
                    } 
                });
            })
        }  
    });
}
const filterByGender = event => {
    console.log($(event.target).val())
    let gender = $(event.target).val()
    /*all || male || female */
    /*cuando seleccione male, me de debe mostrar todas las cartas que tengan la clase male*/
    //$(".card").filter(":first-of-type")
    switch( gender ){
        case 'male':
            console.log("masculino")
           // $(".card").filter(":first-of-type")
            break;
        case 'female':
            console.log("femenino")
            break;
        case 'all':
            console.log("todos")
            break;
    }
} 
$("#gender-select").change(filterByGender)
$("#save-button").click(guardarPersonaje)
console.log(coleccionDePersonajes)
obtenerPersonajes()