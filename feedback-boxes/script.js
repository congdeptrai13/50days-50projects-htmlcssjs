const listRating = document.querySelectorAll('.rating');

listRating.forEach(rating => {
    rating.classList.remove('active')
    rating.addEventListener('click', function () {
        listRating.forEach(r => {
            r.classList.remove('active');
        }
        )
        rating.classList.add('active');
    })
})


const btnEle = document.querySelector('.btn');

const panelEle = document.querySelector('#panel');

btnEle.addEventListener('click', function () {
    const ratingActive = document.querySelector('.rating.active small');
    panelEle.innerHTML = '';
    let icon = document.createElement('i');
    icon.className = 'fas fa-heart';
    panelEle.appendChild(icon);
    let tksEle = document.createElement('strong');
    tksEle.innerText = 'Thanks You!';
    let fbEle = document.createElement('strong');
    panelEle.appendChild(tksEle);
    fbEle.innerText = `FeedBack: ${ratingActive.innerText}`;
    let paraEle = document.createElement('p');
    paraEle.innerText = "We'll use your feedback to improve our customer support";
    panelEle.appendChild(fbEle);
    panelEle.appendChild(paraEle);


})