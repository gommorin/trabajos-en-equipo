// FUNCIONES PARA HACER EL SCROLLBAR

var buttonL = document.getElementsByClassName('btn btn-left')[0];

buttonL.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft -= 250;
};

buttonR = document.getElementsByClassName('btn btn-right')[0];

buttonR.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft += 250;
};

let authorsArray = []


// FUNCIONES PARA GUARDAR AUTORES Y CONTINUAR

const guardarAutor = () => {
    let title = $('#mediumTitle').val()
    let summary = $('#mediumSummary').val()
    let avatar = $('#mediumAvatar').val()
    let user = $('#mediumUser').val()
    let section = $('#mediumSection').val()
    let date = $('#mediumDate').val()
    let time = $('#mediumTime').val()
    let popular = $('#mediumPopular').val()
    let ranking = $('#mediumRanking').val()
    let editor  = $('#mediumEditor').val()
    let cover  = $('#mediumCover').val()
    let category = $('mediumCategory').val()
    let author = { title, summary, avatar, user, section, date, time, popular, ranking, editor, cover, category }
    $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
            method:"POST",
            data: JSON.stringify(author),
            success: ( response ) => {
                console.log(response);
                console.log("autor guardado");
                authorsArray.push(author);
                crearPost();
            },
            error: ( error ) => {
                console.log(error);
                console.log("autor no guardado")
            }
        })
}

// ESTA ES LA SOLUCION QUE LUCHO HIZO

const crearPost = () => {
    $.ajax({ 
        url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
        method:"GET",
        success: ( response ) => {
            console.log( response )
            let authors = response;
            $("#modalPost").empty();
            $("#modalForm").hide();
            for( postKey in authors ) {
                let { title, summary, avatar, user, date, time, cover } = authors[postKey]
                $("#modalPost").append(`
                <div class="modal-dialog modal-xl">
                    <div class="modal-content" id="postContent">
                        <div class="card">
                            <div class="card-body">
                                <div class="col-12">
                                    <h1 class="card-title" id="card-title" id="postModalLabel">${title}</h1>
                                    <h4 class="card-subtitle mb-2 text-muted"id="card-summary">${summary}</h4>
                                    <img src="${cover}" class="img-fluid max-width: 100% my-2" alt="Responsive image">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img id="card-avatar" src="${avatar}" class="rounded-circle dropdown-toggle mr-3" height="35px" type="button" alt="profile-avatar" id="dropdownAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p class="card-text my-0 mr-2" id="card-user"><a href="http://" style="text-decoration:none; color:black; font-weight:500">${user}</a></p>
                                            <p class="card-text my-0 mr-3" id="card-date" style="color:gray">${date}</p>
                                            <p class="card-text my-0 mr-3" id="card-time" style="color:gray">${time} min</p>
                                            <div class="my-0" id="popularity" style="color:gray"> ★
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-around align-items-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="svgIcon-use" id="post-share-icon" viewBox="0 0 50 50" enable-background="new 0 0 50 50" height="25px" width="25px"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"/><path d="M24 7h2v21h-2z"/><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="svgIcon-use" id="post-bookmark-icon" height="25px" width="25px"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 00.706.03L12.5 16.85l5.662 4.126a.508.508 0 00.708-.03.5.5 0 00.118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 00-.676 0z" fill-rule="evenodd"></path></svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="svgIcon-use" id="post-more-icon" height="25px" width="25px"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        <textarea class="form-control" rows="15" id="writeContent" placeholder="Empiece a escribir su artículo"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary btn-delete" style="line-height:1.15; font-size:14px;font-family: source sans pro, sans-serif;font-weight: 400" height="65px" data-dismiss="modal" data-post-key=${llave}>Cancelar</button>
                                <button type="button" id="post-modal-btn" class="btn btn-dark" style="line-height:1.15; font-size:14px;font-family: source sans pro, sans-serif;font-weight: 400" height="65px" data-toggle="modal" data-target="#modalPost" data-whatever-again="modalPost">Publica</button>
                            </div>
                        </div>
                    </div>
                </div>
                `)
                $(".btn-delete").click(( event )=>{
                    let llave = $(event.target).data("post-key")
                    $.ajax({
                        url: `https://ajaxclass9g.firebaseio.com/bell/characters/${llave}.json`,
                        method:"DELETE", 
                        success: ( response ) => {
                            console.log(response)
                            crearPost();
                        },
                        error: ( error ) => {
                            console.log(error)
                        } 
                    })
                })
            }
        }
    })
}

$('#postButton').on("click", guardarAutor)
crearPost()

// ---------------------------------------


/*
let posts;

const modalButtonListener = (event) => {
    let postKey = $(event.target).data("post-key")
    console.log(postKey)
    let { title, summary, avatar, user, date, time } = posts[postKey]
    console.log(title, summary, avatar, user, date, time)
    $("#post-detail").find(".card-title").text(title)
    $("#post-detail").find(".card-summary").text(summary)
    $("#post-detail").find(".card-avatar").text(avatar)
    $("#post-detail").find(".card-user").text(user)
    $("#post-detail").find(".card-date").text(date)
    $("#post-detail").find(".card-time").text(time)
    $("#post-detail").modal("show")
}

const getPosts = () => {
    $.ajax({
        url:'https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json',
        method:"GET",
        success: response => {
            for( key in response ){
            $(".post-modal-btn").on("click", modalButtonListener)
            }
        async:false
        }
    })
}

const createPost = () => {
    $.ajax({
        url:'https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json',
        method:"POST",
        data:JSON.stringify({title, summary, avatar, user, date, time }),
        success: getPosts,
        async:false
    })
}
*/

/* FUNCIÓN PARA BORRAR VARIOS KEYS A LA MISMA VEZ */
/*
const deletePosts = () => {
    let postToDelete = [""]
    postToDelete.forEach( post => {
        $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/${post}.json`,
            method:"DELETE",
        })
    })
}
*/

/* FUNCIÓN PARA BORRAR TODOS LOS KEYS A LA MISMA VEZ

const deleteAllPosts = () => {
    $.ajax({
        url:`https://ajaxclass9g.firebaseio.com/bell/.json`,
        method:"DELETE",
    })
}

*/
