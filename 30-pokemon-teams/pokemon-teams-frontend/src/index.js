const BASE_URL = 'http://localhost:3000';
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

/*
pokemons POST   /pokemons(.:format)     pokemons#create
         DELETE /pokemons/:id(.:format) pokemons#destroy
trainers GET    /trainers(.:format)     trainers#index
*/

// helper methods
const ce = (tag) => document.createElement(tag);
const qs = (selector) => document.querySelector(selector);

// grab main
const main = qs('main');

const getTrainers = () => {
  fetch(TRAINERS_URL)
    .then((res) => res.json())
    .then((trainersData) => {
      trainersData.forEach(slapTrainerOnDOM);
    });
};

const slapTrainerOnDOM = ({ id, name, pokemons }) => {
  // debugger;
  // create the card
  const card = ce('div');
  main.appendChild(card);
  card.classList.add('card');
  card.dataset.id = id;

  // p tag with name
  const p = ce('p');
  card.appendChild(p);
  p.innerText = name;

  // button
  const addBtn = ce('button');
  card.appendChild(addBtn);
  addBtn.dataset.trainerId = id;
  addBtn.classList.add('add');
  addBtn.innerText = 'Add Pokemon';

  // ul
  const ul = ce('ul');
  card.appendChild(ul);

  // handle pokemons
  pokemons.forEach((pokeData) => slapPokemonOnDOM(ul, pokeData));
};

const slapPokemonOnDOM = (ul, pokeData) => {
  const { id, nickname, species, trainer_id } = pokeData;
  // create the li
  const li = ce('li');
  ul.appendChild(li);
  li.innerText = `${nickname} (${species})`;

  // create that button
  const releaseBtn = ce('button');
  li.appendChild(releaseBtn);
  releaseBtn.classList.add('release');
  releaseBtn.dataset.pokemonId = id;
  releaseBtn.innerText = 'Release';
};

main.addEventListener('click', (event) => {
  const btnClass = event.target.classList.value;
  switch (btnClass) {
    case 'add':
      const ul = event.target.nextElementSibling;
      if (ul.childElementCount === 6)
        return alert('This trainer already has 6 pokemon!!');
      createPoke(event.target);
      break;
    case 'release':
      deletePoke(event.target);
      break;

    default:
      break;
  }
});

// create pokemon
const createPoke = (tgt) => {
    const ul = tgt.nextElementSibling;
    const { trainerId: trainer_id } = event.target.dataset;
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ trainer_id }),
  };

  fetch(POKEMONS_URL, config)
    .then((res) => res.json())
    .then((newPokeData) => slapPokemonOnDOM(ul, newPokeData));
};

// delete pokemon
const deletePoke = (tgt) => {
    // debugger;
    const config = { 
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }

    const { pokemonId } = tgt.dataset
    fetch(POKEMONS_URL + '/' + pokemonId, config)
        .then(res => res.json())
        .then(deletedPoke => {
            if(deletedPoke.id == pokemonId) tgt.parentElement.remove();
        })
}

getTrainers();

/*
<div class="card" data-id="1">
  <p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
*/