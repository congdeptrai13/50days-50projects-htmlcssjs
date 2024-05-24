const toggles = document.querySelectorAll('input');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        handleTrick(e.target);
    })
})

function handleTrick(currentCheck) {
    console.log(good);
    if (good.checked && cheap.checked && fast.checked) {
        if(good === currentCheck){
            fast.checked = false;
        }
        if(cheap === currentCheck){
            good.checked = false;
        }
        if(fast === currentCheck){
            cheap.checked = false;
        }
    }
}
