var articleCount = 1
var newTutorialsArticles = ['<div class="colP"><a href="../../articles/tips01/index.html"><h4>3 dicas para começar bem no Spaceflight Simulator</h4></a></div>', '<div class="colP"><a href="../../articles/howtogetorbit/index.html"><h4>Como chegar a órbita no Spaceflight Simulator</h4></a></div>']

var newPartsArticles = ['<div class="colP"><a href="../../articles/capsule-part/index.html"><h4>Cápsula</h4></a></div>', '<div class="colP"><a href="../../articles/hawkEngine-part/index.html"><h4>Hawk Engine</h4></a></div>']

newTutorialsArticles.reverse()
newPartsArticles.reverse()
var insertPositionTutorials = document.getElementById("newTutorials")
var insertPositionParts = document.getElementById("newParts")

show(articleCount, newTutorialsArticles, insertPositionTutorials)
show(articleCount, newPartsArticles, insertPositionParts)

function show(count, news, insertPosition){
    while (count <= 10 && news[count - 1] != undefined){
        insertPosition.insertAdjacentHTML('beforeend', news[count - 1])
        count++
    }
}