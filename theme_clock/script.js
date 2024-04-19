const btnMode = document.querySelector(".btn");
const hourEle = document.querySelector('.hour');
const minuteEle = document.querySelector('.minute');
const secondEle = document.querySelector('.second');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');
const arrDays = ['MONDAY', 'TUESDAY', 'WESNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
const arrMonths = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SET', 'OCT', 'NOV', 'DEC'];
btnMode.addEventListener('click', e => {
    const htmlEle = document.querySelector('html');
    if (htmlEle.classList.contains('dark')) {
        htmlEle.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        htmlEle.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

// xử lý clock

const setTime = () => {
    let time = new Date();
    let hour = time.getHours() % 12;
    let AMPM = hour >= 12 ? "PM" : "AM";
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    // console.log(day);
    hourEle.style.transform = `
    translate(-50%, -100%) rotate(${scaleNum(hour, 0, 11, 0, 360)}deg)
    `;
    minuteEle.style.transform = `
    translate(-50%, -100%) rotate(${scaleNum(minute, 0, 59, 0, 360)}deg)
    `;
    secondEle.style.transform = `
    translate(-50%, -100%) rotate(${scaleNum(second, 0, 59, 0, 360)}deg)
    `;
    timeEle.innerHTML = `
    ${hour}:${minute} ${AMPM}
    `

    dateEle.innerHTML = `
    ${arrDays[day - 2]}, ${arrMonths[month]} <span class="day">${date}</span>
    `



    // console.log(second);
}

const scaleNum = (OldValue, OldMin, OldMax, NewMin, NewMax) => {
    NewValue = (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
    return NewValue;
}
setInterval(setTime, 1000);
