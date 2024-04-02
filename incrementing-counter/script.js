const element = document.querySelectorAll(".counter")

element.forEach(counter => {
    const target = +counter.getAttribute('data-taget');
    function updateIncrement() {
        let c = +counter.innerText;
        let increment = target / 500;
        if (c < target) {
            counter.innerText = c + increment;
            setTimeout(updateIncrement, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateIncrement();
});