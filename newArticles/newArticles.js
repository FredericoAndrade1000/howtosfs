var newArticles = ['<div class="colP"><a href="../../articles/tips01/index.html"><h4>3 dicas para começar bem no Spaceflight Simulator</h4></a></div>']

var insertPosition = document.getElementById("newArticles")
var articlesCount = 1

while (articlesCount <= 10 && newArticles[articlesCount - 1] != undefined){
    insertPosition.insertAdjacentHTML('beforeend', newArticles[articlesCount - 1])
    console.log(insertPosition)
    articlesCount++
}