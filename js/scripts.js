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
  pokemonList.appendChild(pokemonLink)
  //document.getElementsByClassName('pokemon-list')[0].appendChild(pokemonLink)

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

var linkDiv = document.createElement('div')
linkDiv.classList.add('pokedesk')
document.body.appendChild(linkDiv)
//document.write('<div class="pokedesk"></div>')
var pokemonList = document.createElement('ul')
pokemonList.classList.add('pokemon-list')
//var linkDiv = document.getElementsByClassName('pokedesk')
linkDiv.appendChild(pokemonList)
document.body.appendChild(linkDiv)
//linkDiv[0].appendChild(pokemonList)

var footer = document.createElement('footer')
footer.classList.add('page-footer')
var footerTitle = document.createElement('p')
var footerText = document.createTextNode('Find me on')
footerTitle.appendChild(footerText)
footer.appendChild(footerTitle)
var footerDiv = document.createElement('div')
footerDiv.classList.add('social-media')

var twiTter = document.createElement('img')
twiTter.src = "img/iconfinder_twitter_313075.svg"
twiTter.setAttribute('alt','Twitter')

var linkedIn = document.createElement('img')
linkedIn.src = "img/iconfinder_linkedin_252090.svg"
linkedIn.setAttribute('alt','LinkendIn')

var gitHub = document.createElement('img')
gitHub.src = "img/iconfinder_github_395321.svg"
gitHub.setAttribute('alt','GitHub')

footerDiv.appendChild(gitHub)
footerDiv.appendChild(twiTter)
footerDiv.appendChild(linkedIn)

footer.appendChild(footerDiv)
document.body.appendChild(footer)

/*document.write('<footer class="page-footer">'+
'<p>Find me on</p><div class="social-media">'+
'<img src="img/iconfinder_github_395321.svg" alt="Github">'+
'<img src="img/iconfinder_twitter_313075.svg" alt="Twitter">'+
'<img src="img/iconfinder_linkedin_252090.svg" alt="LinkedIn"></div></footer>')*/

pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon)
});
