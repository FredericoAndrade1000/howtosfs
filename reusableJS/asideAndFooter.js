const asideAndFooter = '<aside>'+
                        '<div class="colP">'+
                            '<h2>Novos Artigos</h2>'+
                            '<h3 id="newTutorials">Tutoriais:</h3>'+
                            '<h3 id="newParts">Partes:</h3>'+
                            '<h3 id="newOthers">Outros:</h3>'+
                        '</div>'+
                    '</aside>'+
                    '<footer>'+
                        '<div class="colP">'+
                            '<h5>Copyright &copy; 2020 - <a href="https://howtosfs.ml/privacyPolicy/index.html">Políticas de Privacidade</a></h5>'+
                        '</div>'+
                    '</footer>'
const insertPositionBody = document.getElementById("body")
add(asideAndFooter, insertPositionBody)

function add(object, insertPosition){
    insertPosition.insertAdjacentHTML('beforeend', object)
}