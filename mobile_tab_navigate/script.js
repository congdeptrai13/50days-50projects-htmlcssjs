const navigateEle = document.querySelectorAll('.navigation div');
const imgEle = document.querySelectorAll('.infoTab img');
console.log(imgEle);
navigateEle.forEach((ele, index) => {
    ele.addEventListener('click', function () {
        ele.classList.add('active');
        imgEle[index].classList.add('active');
        navigateEle.forEach((val, ind) => {
            if (ind !== index) {
                val.classList.remove('active');
                imgEle[ind].classList.remove('active');
            }
        })
    })
})