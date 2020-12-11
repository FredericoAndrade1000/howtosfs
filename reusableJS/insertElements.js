const aside =  '<div class="colP">'+
                            '<h2>Novos Artigos</h2>'+
                            '<h3 id="newTutorials">Tutoriais:</h3>'+
                            '<h3 id="newParts">Partes:</h3>'+
                            '<h3 id="newOthers">Outros:</h3>'+
                        '</div>'

const footer =  '<div class="colP">'+
                    '<h5>Copyright &copy; 2020 - <a href="https://howtosfs.ml/privacyPolicy/index.html">Políticas de Privacidade</a></h5>'+
                '</div>'
                
const header = '<a class="logo" href="https://howtosfs.ml/index.html"><em>HowToSFS</em>.ml</a>'

const bodyId = document.getElementById("body")
const footerId = document.getElementById("footer")
const asideId = document.getElementById("aside")
const headerId = document.getElementById("header")

insert(aside, asideId)
insert(footer, footerId)
insert(header, headerId)

function insert(object, insertPosition){
    insertPosition.insertAdjacentHTML('beforeend', object)
}