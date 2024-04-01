const key = document.querySelector(".container");
const infoKeys = ["key", "keyCode", "code"];
document.addEventListener("keydown", (e) => {
    // const keyName = e.key;
    console.log(e);
    key.innerHTML = "";
    infoKeys.forEach(infoKey => {
        const keyElement = document.createElement("div");
        keyElement.classList.add("key");
        const eventKey = document.createElement("small");
        eventKey.innerHTML = "event." + infoKey;
        keyElement.innerText = e[infoKey];
        keyElement.appendChild(eventKey);
        key.append(keyElement);
    })
})