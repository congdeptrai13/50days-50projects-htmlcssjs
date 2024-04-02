const tagsEle = document.querySelector(".tags");
const textarea = document.querySelector("#textarea")
textarea.addEventListener("keyup", function (e) {
    console.log(e)
    createTags(e.target.value);
    if (e.key === "Enter") {
        // console.log("asdas");
        handleRandom();
        // handle Random 
    }
})

function createTags(value) {
    tagsEle.innerHTML = "";
    const tagsList = value.split(",").filter(val => val.trim()).map(val => val.trim());
    tagsList.forEach(tag => {
        const newTag = document.createElement("span");
        newTag.classList.add("tag");
        newTag.innerText = tag;
        tagsEle.appendChild(newTag);
    });
}

// handle random 
function handleRandom() {
    const time = 20;
    const interval = setInterval(() => {
        const randomTag = randomTags();
        randomTag.classList.add("highlight");
        setTimeout(() => {
            randomTag.classList.remove("highlight");
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval);
        const randomTag = randomTags();
        randomTag.classList.add("highlight");
    }, time * 100);

}

function randomTags() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}