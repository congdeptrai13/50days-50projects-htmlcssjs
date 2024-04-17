const URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5771f697c6aeb1821d1a124dbe26fbb4&page=1";
const URL_IMAGE = "https://image.tmdb.org/t/p/w500/";
const SEARCH_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5771f697c6aeb1821d1a124dbe26fbb4&query=";
let movies = [];
const main = document.querySelector("#main");
const search = document.querySelector(".search")
const form = document.querySelector("#form");
fetchData(URL);
async function fetchData(url) {
    const response = await fetch(url);
    const res = await response.json();
    movies = res.results;
    showMovies();
}

function showMovies() {
    movies.forEach(movie => {
        const { title, overview, poster_path, vote_average } = movie;
        console.log(movie)
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        const avg = checkAVG(vote_average);
        movieEl.innerHTML = `
            <img src="${URL_IMAGE + poster_path}"
                alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${avg}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}
            </div>
        `

        main.appendChild(movieEl)
    })
}

function checkAVG(total) {
    if (total > 8) {
        return "yellow";
    } else if (total > 5) {
        return "orange";
    } else {
        return "red";
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== "") {
        fetchData(SEARCH_URL + searchTerm);
        search.innerText = "";
    }
})