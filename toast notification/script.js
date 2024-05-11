const toastsEle = document.querySelector(".toasts");

const buttonEle = document.querySelector(".btn");


buttonEle.addEventListener("click", function () {
    const newToast = document.createElement("div");
    newToast.classList.add("toast");
    newToast.innerHTML = "Message 1";
    toastsEle.appendChild(newToast);
    setInterval(function () {
        toastsEle.removeChild(newToast)
    }, 2000);
})