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
  }
];

var repository2 = [
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

function printArrayDetails (pokemonList){
for(i = 0; i<pokemonList.length; i++) {
  console.log(pokemonList[i].name);
  document.write('<p id = "title"> My name is:</p><h1>' + pokemonList[i].name + '</h1>' + '<h1 id = "height">'+ 'Height: ' + pokemonList[i].height + '</h1>' )
  if (pokemonList[i].height>5) { document.write('<p>wow! what a big Pokemon!</p>');

} else { document.write('<p>thats cute!</p>');

  }
}
}

printArrayDetails(repository);
printArrayDetails(repository2);
