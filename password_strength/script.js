const passwordEle = document.querySelector('#password');
const backgroundEle = document.querySelector('.background');
console.log(backgroundEle);
passwordEle.addEventListener('input', function (e) {

    backgroundEle.style.filter = `blur(${20 - 2 * passwordEle.value.length}px)`;
    
    console.log(passwordEle.value.length);
})