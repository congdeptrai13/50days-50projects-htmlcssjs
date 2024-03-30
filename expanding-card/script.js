const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", function () {
        removeClassActive();
        panel.classList.add("active");
    })
});
function removeClassActive() {
    // for (let i = 0; i < panels.length; i++) {
    //     panels[i].addEventListener("click", function () {
    //         console.log(panels[i]);
    //         panels[i].classList.add("active");
    //     })
    // }
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}
