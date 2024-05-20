const inputEles = document.querySelectorAll('input');

inputEles[0].focus();
inputEles.forEach((input, index) => {
    input.addEventListener('keydown', function (e) {
        if (e.key >= 0 && e.key <= 9) {
            inputEles[index].value = "";
            setTimeout(() => {
                inputEles[index + 1].focus();
            }, 10);
        }else if(e.key === 'Backspace'){
            inputEles[index].value = "";
            inputEles[index - 1].focus();
        }
    })
})