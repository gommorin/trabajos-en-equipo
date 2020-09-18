let postObject = {};
$("#formModal").modal("show")

const toggleForms = () => {
    $("#formModal form").toggleClass("d-none")
    $("#formModal .btn").toggleClass("d-none")
}
const getMetaData = () => {
    $("#metadata-form input").each( function(){
        let property = $(this).data("points-to")
        let value = $(this).val()
        postObject[property] = value;
    })
    console.log(postObject)
    $("#preview-img").attr("src",postObject.imgUrl)
    toggleForms()
}

const getPostData = () => {
    let content = $("#data-form textarea").val()
    postObject = {...postObject, content}
    console.log(postObject)
    $.ajax({
        method:"POST",
        url: "https://ajaxclass9g.firebaseio.com/ravenclaw/medium/posts/.json",
        data:JSON.stringify(postObject),
        success:()=> {
            alert("post guardado")
            $("#formModal").modal("hide")
        }
    })
}

$("#next-button").click(getMetaData)
$("#save-button").click(getPostData)