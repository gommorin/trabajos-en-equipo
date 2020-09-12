// ENDPOINT: https://ajaxclass9g.firebaseio.com/eddy-lucho/historicCharacters/.json


/* PASOS A SEGUIR:
    1. SE INTRODUCEN LOS DATOS PARA REGISTRAR A UN PERSONAJE
    2. SE GUARDAN LOS DATOS DEL PERSONAJE SEGÚN LOS DATOS INGRESADOS EN EL FORMULARIO
    3. EL PERSONAJE SE GUARDA COMO UN OBJETO EN EL SERVIDOR (POST)
    4. SE OBTIENEN EL OBJETO DEL PERSONAJE PARA IMPRIMIRLO EN UN CARD (GET)
    5. SE IMPRIME EL CARD CON LOS DATOS DEL OBJETO
*/


// 1. SE INTRODUCEN LOS DATOS PARA REGISTRAR A UN PERSONAJE
// SE GUARDAN LOS DATOS DEL PERSONAJE SEGÚN LOS DATOS INGRESADOS EN EL FORMULARIO
// 3. EL PERSONAJE SE GUARDA COMO UN OBJETO EN EL SERVIDOR (POST)

// FUNCIÓN PARA GUARDAR PERSONAJES EN EL FORMULARIO DE REGISTRO

const guardarPersonaje = () => {
    let name = $('#fullName').val()
    let country = $('#country').val()
    let gender = $('#gender').val()
    let dob = $('#dob').val()
    let summary = $('#summary').val()
    let photo = $('#photo').val()
    let personaje = { name, country, gender, dob, summary, photo }
    $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/eddy-lucho/historicCharacters/.json`,
            method:"POST",
            data: JSON.stringify(personaje),
            success: ( response ) => {
                console.log("personaje guardado");
                obtenerPersonajes();
            },
            error: ( error ) => {
                console.log("personaje no guardado")
            }
        })
}

$('#register').click(guardarPersonaje)

const obtenerPersonajes = () => {
    $.ajax({ 
        url: `https://ajaxclass9g.firebaseio.com/eddy-lucho/historicCharacters/.json`, 
        method:"GET",
        success: ( response ) => {
            console.log( response )
            let personajes = response;
            $("#cards").empty();
            for( llave in personajes ){
                console.log( personajes[llave] )
                let { name, country, gender, dob, summary, photo } = personajes[llave]                
                $("#cards").append(`
                    <div class="col mb-4">
                    <!-- Card -->
                        <div class="card">
                            <!--Card image-->
                            <div class="view overlay">
                                <img class="card-img-top img-thumbnail" src=${photo} alt="Card image cap">
                            <!-- Para qué sirve esto? -->
                                <a href="#!"> 
                                    <div class="mask rgba-white-slight"></div>
                                </a>
                            </div>
                    
                            <!--Card content-->
                            <div class="card-body">
                                <!--Title-->
                                <caption class="text-muted" for="card-country"><small>Nombre</small></caption>
                                <h5 class="card-title" id="card-title">
                                    ${name}
                                </h5>
                                <!--Text-->
                                <caption class="text-muted" for="card-country"><small>País</small></caption>
                                <p id="card-country" class="card-text">
                                    ${country}
                                </p>
                                <caption class="text-muted" for="card-gender"><small>Género</small></caption>
                                <p id="card-gender" class="card-text">
                                    ${gender} 
                                </p>
                                <caption class="text-muted" for="card-dob"><small>Fecha de nacimiento</small></caption>
                                <p id="card-dob" class="card-text">
                                    ${dob} 
                                </p>
                                <caption class="text-muted" for="card-summary"><small>Reseña</small></caption>
                                <p id="card-summary" class="card-text" style="line-height:1"><small>
                                    ${summary} 
                                </small></p>
                                <button type="button" class="btn btn-delete btn-danger btn-md w-100">Borrar</button>
                            </div>
                        </div>
                    </div>
                `)
                $(".btn-delete").click(( event )=>{
                    // let llave = event.target.dataset.llavePersonaje
                    // Recordatorio: event es un objeto que contiene todos los datdos del evento que estamos escuchando
                    // event.target indica el elemento específico al que le sucedio el evento
                    // event: cayo un árbol sobre un auto gris
                    // event.target: un auto gris
                    // event.target.color: gris
                    let llave = $(event.target).data("llave-personaje")
                    $.ajax({
                        url: `https://ajaxclass9g.firebaseio.com/eddy-lucho/characters/${llave}.json`,
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
        }
    })
}

obtenerPersonajes()