let registroKoders = []

//vamos a comenzar por la funcionalidad del boton guardar
document.getElementById ("botonRegistrar") .addEventListener ("click", () => {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellidos").value
    let generacion = document.getElementById("generacion").value
    let userObject = { nombre, apellido, generacion };
    registroKoders.push(userObject)
    //vamos a insertar la tabla sin nada, solo la tabla
    document.getElementById("tablaKodersBody").innerHTML = "" 
    registroKoders.forEach( koder => {
        let fila = document.createElement("tr")
        let celdanum = document.createElement("th")  
        let celdanombre = document.createElement("td")
        let celdagen = document.createElement("td")
        let borrarcelda = document.createElement("td") 
        //genero el contenido de las celdas
        let numtexto = document.createTextNode(registroKoders.indexOf(koder)+1)
        let textonombre = document.createTextNode(koder.nombre + " " + koder.apellido)
        let textogen = document.createTextNode(koder.generacion)
        let borrar = document.createTextNode("delete") // ("button")
        //Ordeno todo, podemos ver que estoy agregando todo a la fila

        celdanum.appendChild(numtexto)  // inserto la numeración
        celdanombre.appendChild(textonombre) //estoy insertando el nombre
        celdagen.append(textogen) // estoy insertando la gen
        borrarcelda.appendChild(borrar) // esto es para el boton de  borrar
        fila.appendChild(celdanum) 
        fila.appendChild(celdanombre)
        fila.appendChild(celdagen)
        fila.appendChild(borrarcelda)
        document.getElementById("tablaKodersBody").appendChild(fila)
    })
})

let searchNameHTML = `
    <div class="md-form active-cyan active-cyan-2 mb-3" id="botonsearch">
        <div class="form-group mt-2 d-flex align-items-center">
            <input type="text" class="form-control" id="inputBuscaNombre" aria-describedby="searchHelp" placeholder="Escribe el nombre que buscas">
            <button type="button" class="ml-2 btn btn-dark" id="searchNameButton">BUSCAR</button>
        </div>
    </div>
`

let searchGenHTML = `
    <div id="searchBar2">
        <div class="form-group mt-2 d-flex align-items-center w-50">
            <select class="custom-select my-1 mr-sm-2" id="selectGen">
                <option selected>Elige la generación que buscas</option>
                <option value="1" id="1">1</option>
                <option value="2" id="2">2</option>
                <option value="3" id="3">3</option>
                <option value="4" id="4">4</option>
                <option value="5" id="5">5</option>
                <option value="6" id="6">6</option>
                <option value="7" id="7">7</option>
                <option value="8" id="8">8</option>
                <option value="9" id="9">9</option>
            </select>
            <button type="button" class="ml-2 btn btn-dark" id="searchGenButton">BUSCAR</button>
        </div>
    </div>
`

// Para que aparezcan el searchBar y tabla de búsqueda por nombre
document.getElementById("by-name").addEventListener("click", () => {
    // se despliega la búsqueda por nombre
    document.getElementById("search-koders-bar").innerHTML = searchNameHTML;
    findKodersByName();
})

// Para que aparezcan el searchBar y tabla de búsqueda por generación
document.getElementById("by-gen").addEventListener("click", () => {
    // se despliega la búsqueda por generación
    document.getElementById("search-koders-bar").innerHTML = searchGenHTML;
    findKodersByGen();
})


//Para buscar por nombre
let findingName = []

const findKodersByName = () => {
    document.getElementById("searchNameButton").addEventListener("click", () => {
        let buscaName = document.getElementById("inputBuscaNombre").value //valido texto introducido
        findingName = registroKoders.filter( koder => {
            return koder.nombre === buscaName; //Igualamos el valor a buscar 
        })
        document.getElementById("tablaKodersfind").innerHTML=""
        findingName.forEach(koder => {
            let fila = document.createElement("tr") //grande tr
            let celdaNum = document.createElement("td")  
            let celdaNombre = document.createElement("td")
            let celdaGen = document.createElement("td")
            let numTexto = document.createTextNode(registroKoders.indexOf(koder)+1)
            let textoNombre = document.createTextNode(koder.nombre + " " + koder.apellido)
            let textoGen = document.createTextNode(koder.generacion)
            celdaNum.appendChild(numTexto)  // inserto la numeración
            celdaNombre.appendChild(textoNombre) //estoy insertando el nombre
            celdaGen.append(textoGen) // estoy insertando la gen
            fila.appendChild(celdaNum) 
            fila.appendChild(celdaNombre)
            fila.appendChild(celdaGen)
            document.getElementById("tablaKodersfind").appendChild(fila)
        })
    })
}

const findKodersByGen = () => {
    document.getElementById("searchGenButton").addEventListener("click", () => {
        let buscaGen = document.getElementById("selectGen").value //valido texto introducido
        findingName = registroKoders.filter( koder => {
            return koder.generacion === buscaGen; //Igualamos el valor a buscar 
        })
        document.getElementById("tablaKodersfind").innerHTML=""
        findingName.forEach(koder => {
            let fila = document.createElement("tr") //grande tr
            let celdaNum = document.createElement("td")  
            let celdaNombre = document.createElement("td")
            let celdaGen = document.createElement("td")
            let numTexto = document.createTextNode(registroKoders.indexOf(koder)+1)
            let textoNombre = document.createTextNode(koder.nombre + " " + koder.apellido)
            let textoGen = document.createTextNode(koder.generacion)
            celdaNum.appendChild(numTexto)  // inserto la numeración
            celdaNombre.appendChild(textoNombre) //estoy insertando el nombre
            celdaGen.append(textoGen) // estoy insertando la gen
            fila.appendChild(celdaNum) 
            fila.appendChild(celdaNombre)
            fila.appendChild(celdaGen)
            document.getElementById("tablaKodersfind").appendChild(fila)
        })
    })
}