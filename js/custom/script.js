var pokemonList = document.getElementById('pokemon-list');
var loader = document.getElementById('loader');

// Get the modal
var modal = document.getElementById("myModal");
var modalName = document.getElementById("modal-name");
var modalHeight = document.getElementById("modal-height");
var modalWeight = document.getElementById("modal-weight");
var modalImage = document.getElementById("modal-image");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close on escape
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
    }
};

/* 
 * Get pokemon button click event 
 * and update modal view and show
 * */
async function loadDetails(url) {
  showLoader();
  const details = await getPokemonDetail(url);
  modalName.innerText = details.name.charAt(0).toUpperCase() + details.name.slice(1);
  modalHeight.innerText = details.height;
  modalWeight.innerText = details.weight;
  modalImage.src = details.sprites.front_default
  modal.style.display = 'flex';
  showLoader(false);
}

/* Append pokemon button */
function appendPokemonButton(pokemonName, detailUrl) {
    pokemonList.insertAdjacentHTML('beforeend', `<li><button class="pokemon-button" onclick="loadDetails('${detailUrl}')">${pokemonName}</button></li>`)
}

/* Show/Hide loader */
function showLoader(isVisible=true){
  if(!isVisible){
    loader.style.display = 'none';
  }else{
    loader.style.display = 'flex';
  }
}

/* IIFE */
(async function () {
  showLoader()
    let data = await getPokemonList();
    data = data.results;
    for (let i = 0; i < data.length; i++) {
        appendPokemonButton(data[i].name, data[i].url)
    }
  showLoader(false)
})()