const pokeContainer = document.querySelector('.pokedex-container');

const pokemonNums = 50;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonNums; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `
    https://pokeapi.co/api/v2/pokemon/${id}
    `;
    const response = await fetch(url);
    const pokemon = await response.json();
    console.log(pokemon);
    appendToContainer(pokemon);
}
fetchPokemons();

function appendToContainer(pokemon) {
    const pokemonEle = `
    <div class="pokedex" style="background-color: ${colors[pokemon.types[0].type.name]};">
    <div class="pokedex-img">
        <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="">
    </div>
    <div class="pokedex-text">
        <p class="tags">#${pokemon.id.toString().padStart(3, '0')}</p>
        <p class="name">${pokemon.name}</p>
        <p class="type">type: ${pokemon.types[0].type.name}</p>
    </div>
</div>
    `;
    pokeContainer.innerHTML += pokemonEle;
}