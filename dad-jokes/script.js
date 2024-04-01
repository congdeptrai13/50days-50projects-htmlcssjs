const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");
fetchDadJokes = async () => {
    const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    const response = await fetch("https://icanhazdadjoke.com/", config);
    const res = await response.json();
    joke.innerHTML = res.joke;
}
btn.addEventListener("click", fetchDadJokes)
fetchDadJokes();
