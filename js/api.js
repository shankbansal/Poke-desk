const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';

/*Get Pokemon List*/
async function getPokemonList() {
    let response = await fetch(apiUrl);
    response = response.json();
    return response
}

/*Get Pokemon Details*/
async function getPokemonDetails(url) {
    let response = await fetch(url);
    response = response.json();
    return response
}