var articleCount = 1
const newTutorialsArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/tips01/index.html"><h4>3 dicas para começar bem no Spaceflight Simulator</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/howtogetorbit/index.html"><h4>Como chegar a órbita no Spaceflight Simulator</h4></a></div>']

const newPartsArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/capsule-part/index.html"><h4>Cápsula</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/hawkEngine-part/index.html"><h4>Motor Hawk</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/probe-part/index.html"><h4>Controlador remoto</h4></a></div>']

const newOthersArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/SFSUpdates/index.html"><h4>Atualizações do SFS</h4></a></div>']

newTutorialsArticles.reverse()
newPartsArticles.reverse()
newOthersArticles.reverse()

const insertPositionTutorials = document.getElementById("newTutorials")
const insertPositionParts = document.getElementById("newParts")
const insertPositionOthers = document.getElementById("newOthers")

show(articleCount, newTutorialsArticles, insertPositionTutorials)
show(articleCount, newPartsArticles, insertPositionParts)
show(articleCount, newOthersArticles, insertPositionOthers)

function show(count, news, insertPosition){
    while (count <= 10 && news[count - 1] != undefined){
        insertPosition.insertAdjacentHTML('beforeend', news[count - 1])
        count++
    }
}