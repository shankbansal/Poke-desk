var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=964';

  //other functions

  async function loadList() {
    return await fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    })
}

async function loadDetails(item) {
  var url = item.detailsUrl;
  return await fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    //details of items
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = Object.keys(details.types);
  }).catch(function (e) {
    console.error(e);
  });
}


    /*return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })*/
  //}

/*  return {
    add: add,
    getAll: getAll,
    search: search,
  };
})();

pokemonRepository.loadList().then(function() {
  //data loaded now
  pokemonRepository.getAll().forEach(function(pokemon){
    addListItem(pokemon);
  });
});

var pokemonRepository = (function () {
  //other functions

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //details of items
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    search: search,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();*/

function addListItem(pokemon) {
  var pokemonLink = document.createElement('li')
  var pokemonButton = document.createElement('button')
  pokemonButton.classList.add('pokemon-list__item')
  var pokemonName = document.createTextNode(pokemon.name)
  pokemonButton.appendChild(pokemonName)
  pokemonLink.appendChild(pokemonButton)
  pokemonList.appendChild(pokemonLink)
  //document.getElementsByClassName('pokemon-list')[0].appendChild(pokemonLink)

/*  pokemonButton.addEventListener('click', function() {
    showDetails(pokemon)
  })*/
  var pokemonModal = document.createElement('div')
  pokemonModal.classList.add('modal')
  var modalContent = document.createElement('div')
  modalContent.classList.add('modal-content')
  var modalClose = document.createElement('span')
  modalClose.classList.add('close')
  modalContent.appendChild(modalClose)
  pokemonModal.appendChild(modalContent)

  function showLoadingMessage() //before loadList & loadDetails
  function hideLoadingMessage() //when message appears
  function showLoadingMessage() //after, for loading next message
}

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item); modal.style.display = "block"
    });
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
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails,
  addListItem: addListItem
};
}) ();

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

pokemonRepository.loadList().then(function() {
  //data loaded now
  pokemonRepository.getAll().forEach(function(pokemon){
    //addListItem(pokemon);
    pokemonRepository.addListItem(pokemon);
  });
});
