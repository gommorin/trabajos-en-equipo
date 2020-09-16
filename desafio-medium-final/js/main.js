var buttonL = document.getElementsByClassName('btn btn-left')[0];

buttonL.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft -= 250;
};

buttonR = document.getElementsByClassName('btn btn-right')[0];

buttonR.onclick = function () {
    document.getElementById('box-wrapper').scrollLeft += 250;
};
