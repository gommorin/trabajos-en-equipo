let articlesCollection;
let articlesKeyArray = [];
let editorsKeyArray = [];
let allArticleKeyArray = [];
let mostPopularArray =[];

// FUNCIONES PARA HACER EL SCROLLBAR

var buttonL = document.getElementsByClassName('btn btn-left')[0];

buttonL.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft -= 250;
};

buttonR = document.getElementsByClassName('btn btn-right')[0];

buttonR.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft += 250;
};

// FUNCIONES PARA MODAL - REGISTRAR META Y GUARDAR POST

let postObject = {};

const toggleForms = () => {
    $("#postModal form").toggleClass("d-none")
    $("#postModal .btn").toggleClass("d-none")
}
const getMetaData = () => {
    $("#metadata-form input").each( function(){
        let property = $(this).data("apunta-a")
        let value = $(this).val()
        postObject[property] = value;
    })
    console.log(postObject)
    $("#coverPreview").attr("src",postObject.cover)
    $("#cAvatar").attr("src",postObject.avatar)
    $("#cDate").attr("placeholder",postObject.date)
    $("#cTime").attr("placeholder",postObject.time)
    $("#cPopularity").attr("placeholder",postObject.popular)
    toggleForms()
}

const getPostData = () => {
    let content = $("#metadata-content textarea").val()
    postObject = {...postObject, content}
    console.log(postObject)
    $.ajax({
        method:"POST",
        url: "https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json",
        data:JSON.stringify(postObject),
        success:()=> {
            alert("Tu post ha sido guardado")
            $("#postModal").modal("hide")
        }
    })
}

$("#nextButton").click(getMetaData)
$("#saveButton").click(getPostData)


// FUNCIONES PARA RELLENAR CADA SECCIÓN
function obtainingArticle() {
    $.ajax({
        url: `https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
        method: "GET",
        success: (response) => {
            console.log(response);
            articlesCollection = response;
            let articlesPosts = response;
            
            console.log(articlesPosts);
            console.log(articlesCollection);
            

            /*Filtrando los popular e Ingresando el key en un nuevo Array de Keys*/
            for (llave in articlesPosts) {
                console.log(articlesPosts[llave].popular)
                if ( articlesPosts[llave].popular == "Si" ){
                articlesKeyArray.push(llave)
                }
            }
            console.log(articlesKeyArray)

            /*Eligiendo un número aleatorio del tamaño del Array de Keys*/ 
            let randomNum = Math.floor(Math.random()* articlesKeyArray.length)
            console.log (randomNum)
            
            /*Obteniendo el key aleatorio*/
            let randomKey = articlesKeyArray[randomNum]
            console.log(randomKey) 

            /* Obteniendo el objeto equivalente al randomKey*/
            let randomObject = articlesPosts[randomKey]
            console.log(randomObject)


            $("#popular-article-one").empty;
            /*console.log(personajes[llave]);*/
            let {cover, title, summary, user, section, date, time, popular, ranking, editorPick, mediumLink } = randomObject    
            $("#popular-article-one").append(`
                <div class="card" style="border: none" data-post-key=${llave}>
                    <img src= ${cover} class="card-img-top" style="height: 180px;">
                    <div class="card-body" id="popular-one-body"> 
                        <h5 class="article-title">${title}</h5> 
                        <p class="card-text" style="color:#757575;">${summary}</p>
                        <div class= "main-article-footer d-flex justify-content-between">
                            <div>
                                <p class="m-0">${user}</p>
                                <div class="">
                                    <div>
                                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${date} ${time}
                                            <span>
                                                <svg
                                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                                            </span>
                                        </p>
                                    </div>    
                                </div>
                            </div>
                            <div>
                                <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            for (let i = 0 ; i < 3; i++) {
                /*Eligiendo un número aleatorio del tamaño del Array de Keys*/ 
                let randomNumDos = Math.floor(Math.random()* articlesKeyArray.length)
                console.log (randomNumDos)
                
                /*Obteniendo el key aleatorio*/
                let randomKeyDos = articlesKeyArray[randomNumDos]
                console.log(randomKeyDos) 

                /* Obteniendo el objeto equivalente al randomKey*/
                let randomObjectDos = articlesPosts[randomKeyDos]
                console.log(randomObjectDos)
                
                $("#popular-article-3").empty;  
                let {cover, title, summary, user, section, date, time, popular, ranking, editorPick, mediumLink } = randomObjectDos

                $("#popular-article-3").append(`
                    <ul class="list-unstyled">
                        <li class="media" style="margin-bottom: inherit;">
                            <img src=${cover} class="mr-3" style="width: 100px; height:100px;">
                            <div class="media-body">
                            <h6 class="mt-0 mb-1 cursor-pointer">${title}</h6>
                                <div>
                                    <p class="m-0">${user}</p>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${date} ${time}
                                                <span>
                                                    <svg
                                                    width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                                                </span>
                                            </p>
                                        </div>  
                                        <div>
                                            <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>  
                `)  
                
            }
            for (llave in articlesPosts) {
                console.log(articlesPosts[llave].editor)
                if ( articlesPosts[llave].editorPick == "Si" ){
                editorsKeyArray.push(llave)
                }
            }
            console.log(articlesKeyArray)
            

            let editorFunction = () => {
                /*Eligiendo un número aleatorio del tamaño del Array de editorKeys*/ 
                let randomNumTres = Math.floor(Math.random()* editorsKeyArray.length)
                console.log (randomNumTres)
                
                /*Obteniendo el key aleatorio*/
                let randomKeyTres = editorsKeyArray[randomNumTres]
                console.log(randomKeyTres) 

                /* Obteniendo el objeto equivalente al randomKey*/
                let randomObjectTres = articlesPosts[randomKeyTres]
                console.log(randomObjectTres)

                $("#editor-article").empty;  
                let {cover, title, summary, user, section, date, time, popular, ranking, editorPick, mediumLink } = randomObjectTres
                $("#editor-article").append(`
                    <div class="card" style="border: none">
                    <img src= ${cover} class="card-img-top" style="height: 180px;">
                    <div class="card-body" style="margin-left: -20px;">
                    <h5>${title}</h5> 
                    <p class="card-text" style="color:#757575;">${summary}</p>
                    <div class= "main-article-footer d-flex justify-content-between">
                            <div>
                                <p class="m-0">${user}e</p>
                                <div class="">
                                    <div>
                                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${date} ${time}
                                            <span>
                                                <svg
                                                width="15" height="15"><path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 00.26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 00-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 00-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 00-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 00.26-.19l1.2-3.52z"></path></svg>
                                            </span>
                                        </p>
                                    </div>    
                                </div>
                            </div>
                            <div>
                                <span class="svgIcon svgIcon--moreFilled svgIcon--25px is-flushRight"><svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg></span>
                            </div>
                        </div> 
                    </div>    
                    </div>
                `)
            }
            editorFunction()
                
            let infiniteArticles = () => {
                 /*Haciendo push de todos los key en AllArticlesKeyArray*/
                for (llave in articlesPosts) {
                    console.log(articlesPosts[llave].popular)
                    allArticleKeyArray.push(llave)
                }
                console.log(allArticleKeyArray)

                for (let i = 0 ; i < 100; i++) {
                    /*Eligiendo un número aleatorio del tamaño del Array de Keys*/ 
                    let randomNumDos = Math.floor(Math.random()* allArticleKeyArray.length)
                    console.log (randomNumDos)
                    
                    /*Obteniendo el key aleatorio*/
                    let randomKeyDos = allArticleKeyArray[randomNumDos]
                    console.log(randomKeyDos) 

                    /* Obteniendo el objeto equivalente al randomKey*/
                    let randomObjectDos = articlesCollection[randomKeyDos]
                    console.log(randomObjectDos)
                    
                    $("#inifinite-article-list").empty;  
                    let {cover, title, summary, user, section, date, time, popular, ranking, editorPick, mediumLink } = randomObjectDos
                    $("#infinite-article-list").append(`
                        <li class="media mb-5">
                            <div class="media-body row d-flex justify-content-between align-items-start">
                                <div class="col-8 pr-1">
                                    <p class="origin-tag text-uppercase light-grey-text" style="font-size:.9em; margin-bottom:.4em">${section}</p>
                                    <h5 class="card-title mt-1 mb-1" id="card-title">${title}</h5>
                                    <p class="card-text" style="color:#757575;">${summary}</p>
                                    <div>
                                        <p class="card-text my-0 mr-2" id="card-user"><a href="http://" style="text-decoration:none; color:black; font-weight:400; font-size:.9em">${user}</a></p>
                                        <div class="d-flex justify-content-between align-items-center mb-1">
                                            <div class="d-flex justify-content-start align-items-center">
                                                <p class="card-text my-0 mr-2" id="card-date" style="color:gray; font-size:.9em">${date}</p>
                                                <p class="card-text my-0 mr-2" id="card-time" style="color:gray; font-size:.9em">${time} min</p>
                                                <div class="my-0" id="popularity" style="font-size:.7em; color:gray"> ★
                                                </div>
                                            </div>
                                            <div class="active-state d-flex justify-content-end align-items-center">
                                                <span class="svgIcon ">
                                                    <svg class="svgIcon-use svg-fill-light-grey" width="25" height="25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 00.706.03L12.5 16.85l5.662 4.126a.508.508 0 00.708-.03.5.5 0 00.118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 00-.676 0z" fill-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                                <span class="svgIcon svg-fill-light-grey">
                                                    <svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>        
                                </div>
                                <div class="article-thumbnail col-4 pl-1 overflow-hidden" style="height:150px">
                                    <img src=${cover} class="img-fluid" alt="">
                                </div>
                            </div>
                        </li>

                    `)

                }
            }
            infiniteArticles()

            let popularsOnMedium = () => {
                console.log(articlesCollection)
                let mostPopular = Object.values(articlesCollection)
                console.log(mostPopular)
                mostPopular.sort(({ranking:a}, {ranking:b}) => b-a)
                console.log(mostPopular)
                let counter = 0
                for (let i=0 ; i < 5; i++){
                    $("#popular-on-medium").empty;  
                    let [cover, title, summary, user, section, date, time, popular, ranking, editorPick, mediumLink ] = mostPopular
                    $("#popular-on-medium").append(`
                        <li class="media mb-4">
                        <div class="media-body row d-flex justify-content-between align-items-start">
                            <div class="col-2 popularity text-right p-0 super-light-grey-text">
                                <h1 class="w-100">0${counter+1}</h1>
                            </div>
                            <div class="col-10 pr-0">
                                <div class="media-body">
                                    <h6 class="card-title mb-1"id="card-title-h6">${title}</h6>
                                    <div class="d-flex justify-content-center" id="card-footer">
                                        <div class="col-12 p-0">
                                            <div class="d-flex m-0" id="who">
                                                <p class="card-text mr-2" id="card-user"><a href="http://" style="text-decoration:none; color:black; font-weight:500">${user}</a></p>
                                            </div>
                                            <div class="d-flex justify-content-start align-items-center">
                                                <p class="card-text my-0 mr-2" id="card-date" style="color:gray; font-size:.9em">${date}</p>
                                                <p class="card-text my-0 mr-2" id="card-time" style="color:gray; font-size:.9em">${time} min</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    `)
                    counter += 1
                }
            }
            popularsOnMedium()
        }   
    })
}

obtainingArticle()

/*const deletePosts = () => {
    let postToDelete = [ "-MHS0Qrsc2Id_NeC5kxl", "-MHS1P47e8h69SfcjD4O", "-MHS655LNP3hfIOC25ZR", "-MHS656oL0LSUno982Qq", "-MHS6589ToAg6-VrKRIH", "-MHS659wxq0p_EBGP4pO", "-MHS65C-7ch0YITyMS8q", "-MHS65DLVfPa4eZaz4ww", "-MHS65EiHfw5Xpl8LaBu", "-MHS65G63x61NjiGTG4i", "-MHS65HRESB03fLK6HbB", "-MHS65Il_zAoNhdNl-B6", "-MHS8eXjeijJiH03Xy1g", "-MHSBp4YUdJTZQsp6Biz", "-MHSCObRl0orrKjkhNKD", "-MHSDU4OTO5wjt2zDLPP", "-MHSSQjDDIMlsHmo_w_7", "-MHSTQLMsSOmUOBZwjav", "-MHTEELO5FpZK3KvNfuG", "-MHTWYrKW8VVidm1HZYd", "-MHTXFig4u7TSZNPPvBF", "-MHTXeMQQdFHxWNp2KnA", "-MHTY1wAm5woccT2UHuH", "-MHTnCb-tP4YE0yTjY7e", "-MHTnyfx6NwQaWJ6Wuu9", "-MHToH8RJsc8xykv2F3l", "-MHTsuIdRWcIlKZQ07rZ" ]
    postToDelete.forEach( post => {
        $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
            method:"DELETE",
        })
    })
}

deletePosts()*/

