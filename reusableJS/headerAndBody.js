const headerAndNav =  '<header>'+
                '<a class="logo" href="https://howtosfs.ml/index.html"><em>HowToSFS</em>.ml</a>'+
            '</header>'
const insertPositionBody = document.getElementById("body")
add(headerAndNav, insertPositionBody)
function add(object, insertPosition){
    insertPosition.insertAdjacentHTML('afterbegin', object)
}