const activeSearch = document.querySelector(".search");
console.log(activeSearch)

activeSearch.addEventListener("click", function () {
    if (activeSearch.classList.contains('active')) {
        activeSearch.classList.remove("active");
    } else {
        activeSearch.classList.add("active");
    }
})