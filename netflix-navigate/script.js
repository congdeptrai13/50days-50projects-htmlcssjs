const openEle = document.querySelector('.open-btn');
const navEle = document.querySelectorAll('.nav');
const closeEle = document.querySelector('.close-btn');
openEle.addEventListener('click', function () {
    navEle.forEach(ele => {
        ele.classList.add('visible');
    })
})

closeEle.addEventListener('click',function(){
    navEle.forEach(ele => {
        ele.classList.remove('visible');
    })
})