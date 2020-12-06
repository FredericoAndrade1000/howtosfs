var articleCount = 1
const allTutorialsArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/tips01/index.html"><h4>3 dicas para começar bem no Spaceflight Simulator</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/howtogetorbit/index.html"><h4>Como chegar a órbita no Spaceflight Simulator</h4></a></div>']

const allPartsArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/capsule-part/index.html"><h4>Cápsula</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/hawkEngine-part/index.html"><h4>Motor Hawk</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/probe-part/index.html"><h4>Controlador remoto</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/valiantEngine-part/index.html"><h4>Motor Valiant</h4></a></div>']

const allOthersArticles = ['<div class="colP"><a href="https://howtosfs.ml/articles/SFSUpdates/index.html"><h4>Atualizações do SFS</h4></a></div>', '<div class="colP"><a href="https://howtosfs.ml/articles/blueprint/index.html"><h4>Conceito de Blueprint</h4></a></div>']

allTutorialsArticles.reverse()
allPartsArticles.reverse()
allOthersArticles.reverse()

const insertPositionAllTutorials = document.getElementById("showTutorials")
const insertPositionAllParts = document.getElementById("showParts")
const insertPositionAllOthers = document.getElementById("showOthers")

show(articleCount, allTutorialsArticles, insertPositionAllTutorials)
show(articleCount, allPartsArticles, insertPositionAllParts)
show(articleCount, allOthersArticles, insertPositionAllOthers)

function show(count, alls, insertPosition){
    while (alls[count - 1] != undefined){
        insertPosition.insertAdjacentHTML('beforeend', alls[count - 1])
        count++
    }
}