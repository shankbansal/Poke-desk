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

for(i = 0; i<repository.length; i++) {
  console.log(repository[i].name);
  document.write('<p id = "title"> My name is:</p><h1>' + repository[i].name + '</h1>' + '<h1 id = "height">'+ 'Height: ' + repository[i].height + '</h1>' )
  if (repository[i].height>5) { document.write('<p>wow! what a big Pokemon!</p>');

} else { document.write('<p>thats cute!</p>');

  }
}
