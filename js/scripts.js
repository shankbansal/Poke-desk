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
function add(pokemon) {
  repository.push(pokemon);
}
function getAll() {
  return repository;
}
return {
  add: add,
  getAll: getAll
};
})();

pokemonRepository.getAll().forEach(function (pokemon){
  
  document.write('<p id = "title"> My name is:</p><h1>' + pokemon.name + '</h1>' + '<h1 id = "height">'+ 'Height: ' + pokemon.height + '</h1>' )
  if (pokemon.height>5) { document.write('<p>wow! what a big Pokemon!</p>');
} else { document.write('<p>thats cute!</p>');
  }
});
