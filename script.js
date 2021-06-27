let likesCollection = document.querySelectorAll(".article-button");

for (let like of likesCollection) {
    like.addEventListener("click", function() {
        like.classList.toggle("article-button-chosen");
    })
}