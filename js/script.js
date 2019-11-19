var pokemonList = document.getElementById("pokemon-list");

//Get Modal
var modal = document.getElementById("pokeModal");

//Get the button that opens the modal
var btn = document.getElementById("pokemonBtn");

//Get the <span></span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when the button is clicked open modal
btn.onclick = function() {
    modal.style.display = "block";
}

//when <span></span> X is clicke, modal close
span.onclick = function() {
    modal.style.display = "none";
}

//whn the user clicks outside modal, close modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//close on escape key press
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
}

/*get pokemon button click event*/
function loadDetails(url) {
    alert(url);
}

/*append pokemon button*/
function appendPokemonButton(pokemonName, url) {
    pokemonList.insertAdjacentHTML('beforeend',`<li><button class="pokemon-list__item" id="pokemonBtn" onclick="loadDetails('${url}')">${pokemonName}</button></li>`)
}

(async function (){
    let data = await getPokemonList();
    data = data.results;
    for (let i = 0; i < data.legnth; i++) {
        appendPokemonButton(data[i].name, data[i].url)
    }
})()