const containerEle = document.querySelector('.container');

let target = 15;
let index = 0;
generateImg();
function generateImg() {
    let imgSource = `https://source.unsplash.com/random/300x${300 + index}`;
    let imgEle = document.createElement('img');
    imgEle.setAttribute('src', imgSource);
    let divEle = document.createElement('div');
    divEle.classList.add = 'item';
    divEle.appendChild(imgEle);
    containerEle.appendChild(divEle);
    index++;
    if (index > target) {
        return;
    } else {
        setTimeout(() => {
            generateImg()
        }, 1000);
    }
}