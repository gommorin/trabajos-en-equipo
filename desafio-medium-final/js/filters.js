let articlesCollection;


function obtainingArticle() {
    $.ajax({
        url: `https://ajaxclass9g.firebaseio.com/ravenclaw/historicCharacters/.json`,
        method: "GET",
        success: (response) => {
            console.log(response);
            articlesCollection = response;
            let personajes = response;

            
            console.log(personajes);

            $("#popular-article-one").empty;
            for (llave in personajes) {
                console.log(personajes[llave]);
                let {bio, birthDate, country, gender, name, picture } = personajes[llave];
                if (personajes[llave].gender ==="male"){

                    
                $("#popular-article-one").append(`
                    <div class="card" style="border: none">
                    <img src= ${picture} class="card-img-top" style="height: 150px;">
                    <div class="card-body" style="margin-left: 50px;"> 
                    <h3 class="article-title">${name}</h3> 
                    <p class="card-text" style="color:#757575;">${bio}</p>
                    <div class= "main-article-footer d-flex justify-content-between">
                            <div>
                                <p class="m-0">${gender}</p>
                                <div class="">
                                    <div>
                                        <p style="color:#757575" data-toggle="tooltip" data-placement="top" title="Updated Ago 21">${birthDate} ${country}
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
                }
            }
        }
    });
}

obtainingArticle()