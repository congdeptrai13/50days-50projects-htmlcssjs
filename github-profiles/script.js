let APPURL = `https://api.github.com/users/`;
const container = document.querySelector('.info__container');
const inputEle = document.querySelector('.form__search--input');
const formSearch = document.querySelector('.form__search');
let cardHTML = '';
const handleSearch = async (username) => {
    try {
        let data = await fetch(`${APPURL + username}`)
        data = await data.json();
        if (data.message === 'Not Found') {
            createErrorCard('not found!');
        } else {
            await createCardHTML(data, username);
        }
    } catch (error) {
        console.log(error);
    }
}

const createErrorCard = (msg) => {
    cardHTML = `
    <div class="info__container">
        <h2>${msg}</h2>
    </div>
    `
    document.querySelector('body').innerHTML += cardHTML;
}



const createCardHTML = async (user, username) => {
    let data = await fetch(`${APPURL + username}/repos`);
    data = await data.json();
    let tagEle = '';

    data = data.slice(0, 5).forEach(tag => {
        tagEle += `<a href="${tag.git_url}">${tag.name}</a>`;
    });

    cardHTML = `
    <div class="info__container">
    <div class="info__container--img">
            <img src="${user.avatar_url}" alt="">
        </div>
        <div class="info__container--text">
            <h2>${user.name ?? user.login}</h2>
            <p>null</p>
            <ul>
                <li>${user.followers} Followers</li>
                <li>${user.following} Following</li>
                <li>${user.public_repos} Repos</li>
            </ul>
            <div class="info__container--text-list">
                ${tagEle}
                
            </div>
        </div>
    </div>

    `
    document.querySelector('body').innerHTML += cardHTML;
}

formSearch.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    handleSearch(inputEle.value);
})