const headerAndNav ='<a class="logo" href="https://howtosfs.ml/index.html"><em>HowToSFS</em>.ml</a>'

const insertPositionHeader = document.getElementById("header")

add(headerAndNav, insertPositionHeader)
function add(object, insertPosition){
    insertPosition.insertAdjacentHTML('afterbegin', object)
}