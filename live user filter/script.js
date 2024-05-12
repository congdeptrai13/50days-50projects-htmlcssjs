// const data = await fetch(`https://randomuser.me/api?results=50`);

// testApi();
// async function testApi() {
//     const response = await fetch(`https://randomuser.me/api?results=50`);
//     // console.log(response);
//     // const res = await response.json();
//     console.log(response);
// }
const listUserEle = document.querySelector(".listUser");
const searchEle = document.querySelector(".search");
const arrUser = [];
async function fetchApi() {
    const res = await fetch(`https://randomuser.me/api?results=50`);
    const { results } = await res.json();

    results.forEach(element => {
        const userEle = document.createElement("div");
        userEle.classList.add("user");
        userEle.innerHTML = `
                <div class="avatar">
                    <img src="${element.picture.thumbnail}" alt="">
                </div>
                <div class="info">
                    <p class="name">${element.name.first + " " + element.name.last}
                    </p>
                    <small class="location">${element.location.city}, ${element.location.country
            }
                    </small>
                </div>
        `;
        arrUser.push(userEle);
        listUserEle.appendChild(userEle)
    });

}
fetchApi();

searchEle.addEventListener('input', function (e) {
    const searchKey = e.target.value;
    arrUser.forEach(user => {
        if (user.innerText.toLowerCase().includes(searchKey.toLowerCase())) {
            user.classList.remove('hide');
        } else {
            user.classList.add('hide');
        }
    });
})

