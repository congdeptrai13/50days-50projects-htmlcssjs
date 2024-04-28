const animateBgs = document.querySelectorAll('.animated-bg')

setTimeout(() => animateBgs.forEach((bg) => bg.classList.remove('animated-bg'))
,2500)

