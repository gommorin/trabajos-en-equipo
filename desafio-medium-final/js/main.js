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