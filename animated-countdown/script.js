const nums = document.querySelectorAll('.nums span');
const replayEle = document.querySelector('.replay');
const replayBtn = document.querySelector('.btn--replay');
const countEle = document.querySelector('.count');
const lengthNums = nums.length;
runAnimation();
function runAnimation() {
    nums.forEach((num, idx) => {
        console.log(num);
        num.addEventListener('animationend', (e) => {

            if (e.animationName === 'goIn') {
                num.classList.add('out');
            } else if (e.animationName === 'goOut' && num.nextElementSibling !== null) {
                num.nextElementSibling.classList.add('in');
            } else {
                resetDom();
                countEle.classList.add('hide');
                replayEle.classList.add('show');
            }
        })
    })
}

function resetDom() {
    nums.forEach((num, idx) => {
        num.className = "";
    });
}

replayBtn.addEventListener('click', function () {
    nums[0].classList.add('in');
    countEle.classList.remove('hide');
    replayEle.classList.remove('show');
})