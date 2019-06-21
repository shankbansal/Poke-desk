var pokemonRepository = (function() {
var repository = [
  {
    name: 'Bulbasaur',
    height:7,
    type: ['grass','poison']
  },
  {
    name: 'Pikachu',
    height:4,
    type: ['electric']
  },
  {
    name: 'Squirtle',
    height:5,
    type: ['water']
  },
  {
    name: 'Charmender',
    height:6,
    type: ['fire']
  },
  {
    name: 'Meowth',
    height:4,
    type: ['Normal']
  },
  {
    name: 'Abra',
    height:9,
    type: ['psychic']
  }
];

function addListItem(pokemon) {
  var pokemonLink = document.createElement('li')
  var pokemonButton = document.createElement('button')
  pokemonButton.classList.add('pokemon-list__item')
  var pokemonName = document.createTextNode(pokemon.name)
  pokemonButton.appendChild(pokemonName)
  pokemonLink.appendChild(pokemonButton)
  document.getElementsByClassName('pokemon-list')[0].appendChild(pokemonLink)
  pokemonButton.addEventListener('click', function() {
    showDetails(pokemon)
  })
}

function showDetails(pokemon) {
  console.log(pokemon)
}
function add(pokemon) {
  repository.push(pokemon);
}

function getAll() {
  return repository;
}
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
};
})();

var header = document.createElement('header')
header.classList.add('page-header')
var titleHeader = document.createElement('h1')
var titleText = document.createTextNode('Poke´desk')
titleHeader.appendChild(titleText)
header.appendChild(titleHeader)
document.body.appendChild(header)
//document.write('<header class="page-header"><h1>Poke´desk</h1></header>')
document.write('<div class="pokedesk"></div>')
var pokemonList = document.createElement('ul')
pokemonList.classList.add('pokemon-list')
var linkDiv = document.getElementsByClassName('pokedesk')

linkDiv[0].appendChild(pokemonList)

document.write('<footer class="page-footer">'+
'<p>Find me on</p><div class="social-media">'+
'<img src="img/iconfinder_github_395321.svg" alt="Github">'+
'<img src="img/iconfinder_twitter_313075.svg" alt="Twitter">'+
'<img src="img/iconfinder_linkedin_252090.svg" alt="LinkedIn"></div></footer>')

pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon)
});
