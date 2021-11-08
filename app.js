//Pokédex Project

const pokeContainer = document.querySelector(`#container`);
//Variable is the number of Pokémon (AKA objects in the PokeAPI...loops 150x)
// Using the first 150 Pokemon (AKA Objects) in the PokeAPI

const numOfPokémon = 150;

//// The createPokeCard function creates a new card (AKA Section element) and adds the new card to the webpage/document inside of the div with the id of "container"
//argument for the parameter

// NOTE: The value/argument that will be passed in for the "pokemon" parameter will be the response received from an Axios request to the PokeAPI

function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokémon`);
    pokeContainer.append(pokeCard);
    // in API can put in id vs name/number..take into Postman using "1" in GET: for the id name key: Bulbasaur use Axios to obtain data 
    //Below is the value for the src in index.html
     
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using the toUpperCase method on the pokemon name so it will display in UPPERCASE text.

    pokeCard.innerHTML = `
    <div class="img-container"
    img src="${pokemon.data.sprites.front_shiny}" 
    alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `;
}