const headerAndNav =  '<header>'+
                '<a class="logo" href="https://howtosfs.ml/index.html"><em>HowToSFS</em>.ml</a>'+
            '</header>'+
            '<nav>'+
                '<ul>'+
                    '<li><a href="https://howtosfs.ml/index.html">HOME</a></li>'+
                    '<li><a href="https://howtosfs.ml/articlesList/html/index.html">ARTIGOS</a></li>'+
                    '<li><a href="https://howtosfs.ml/about/html/index.html">SOBRE</a></li>'+
                    '<li><a href="https://howtosfs.ml/contribute/html/index.html">CONTRIBUA</a></li>'+
                '</ul>'+
            '</nav>'
const insertPositionBody = document.getElementById("body")
add(headerAndNav, insertPositionBody)
function add(object, insertPosition){
    insertPosition.insertAdjacentHTML('afterbegin', object)
}