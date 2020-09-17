// FUNCIONES PARA HACER EL SCROLLBAR

var buttonL = document.getElementsByClassName('btn btn-left')[0];

buttonL.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft -= 250;
};

buttonR = document.getElementsByClassName('btn btn-right')[0];

buttonR.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft += 250;
};


// FUNCIONES PARA GUARDAR AUTORES E INICIAR UN POST

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
    let author = { title, summary, avatar, user, section, date, time, popular, ranking, editor }
    $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
            method:"POST",
            data: JSON.stringify(author),
            success: ( response ) => {
                console.log("autor guardado");
                obtenerAutor();
            },
            error: ( error ) => {
                console.log("autor no guardado")
            }
        })
}

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
            console.log(response)
            console.log(Object.keys(response))
            $("#modalForm").hide();
            for( key in response ){
                posts = response
                let { title } = response[key]
                $("body").append(`
                    <button type="button" id="postButton" class="btn btn-dark post-modal-btn" data-post-key=${key} style="line-height:1.15; font-size:14px;font-family: source sans pro, sans-serif;font-weight: 400" height="65px" data-toggle="modal" data-target="#modalPost" data-whatever-again="modalPost">Continuar</button>
                `)
            }
            $(".post-modal-btn").on("click", modalButtonListener)
        },
        async:false
    })
}

getPosts()

const createPost = () => {
    $.ajax({
        url:'https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json',
        method:"POST",
        data:JSON.stringify({title, summary, avatar, user, date, time }),
        success: getPosts,
        async:false
    })
}



/* FUNCIÓN PARA BORRAR VARIOS KEYS A LA MISMA VEZ */

const deletePosts = () => {
    let postToDelete = ["-MHOUPHz2vRno-N23RGC", "-MHOUQMSpllqMVWnv_qF", "-MHOUQ_bOMUzU3r9mc-V", "-MHOUQm1xITLO_qrpqqP", "-MHOUXME-GQfHe9wts37", "-MHOUXaILvwthdHUHleJ", "-MHOUXpOBE6len5xkR1k"]
    postToDelete.forEach( post => {
        $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/${post}.json`,
            method:"DELETE",
        })
    })
}

/* FUNCIÓN PARA BORRAR TODOS LOS KEYS A LA MISMA VEZ */

const deletePostsAll = () => {
        $.ajax({
            url:`https://ajaxclass9g.firebaseio.com/bell/.json`,
            method:"DELETE",
        })
}

 
// ---------------------------------------

/*

// ESTA ES LA SOLUCION QUE LUCHO HIZO

const obtenerAutor = () => {
    $.ajax({ 
        url:`https://ajaxclass9g.firebaseio.com/bell/medium/posts/.json`,
        method:"GET",
        success: ( response ) => {
            console.log( response )
            let authors = response;
            $("#modalPost").empty();
            console.log("se borró el contenido del modal para empezar un post")
            for( postKey in authors ) {
                let { title, summary, avatar, user, date, time } = authors[postKey]
                $("#modalForm").hide();
                $("#modalPost").append(`
                
                `)
                $(".btn-delete").click(( event )=>{
                    let llave = $(event.target).data("llave-personaje")
                    $.ajax({
                        url: `https://ajaxclass9g.firebaseio.com/bell/characters/${llave}.json`,
                        method:"DELETE", 
                        success: ( response )=>{
                            obtenerAutor();
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

$('#postButton').click(guardarAutor)
obtenerAutor()

*/
