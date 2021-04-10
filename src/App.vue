<template>
  <div id="app">

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 720161d... add: import and implementation of the Pokemon.vue component, passing the following props: pokemon.name, pokemon.id and pokemon.sprites['front_default']
    <pokemon v-for="pokemon in pokemonsList"
             :key="pokemon.id" 
             :pokemon-name="pokemon.name"
             :pokemonId="pokemon.id"
             :thumbImg="pokemon.sprites['front_default']" >
    </pokemon>

<<<<<<< HEAD
=======
    
>>>>>>> dc62332... add: fetching the API data in App.vue component
=======
>>>>>>> 720161d... add: import and implementation of the Pokemon.vue component, passing the following props: pokemon.name, pokemon.id and pokemon.sprites['front_default']
  </div>
</template>

<script>

<<<<<<< HEAD
<<<<<<< HEAD
import Pokemon from './components/Pokemon'
=======

>>>>>>> dc62332... add: fetching the API data in App.vue component
=======
import Pokemon from './components/Pokemon'
>>>>>>> 720161d... add: import and implementation of the Pokemon.vue component, passing the following props: pokemon.name, pokemon.id and pokemon.sprites['front_default']
import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {
<<<<<<< HEAD
<<<<<<< HEAD
  components: {
    Pokemon
  },
=======

>>>>>>> dc62332... add: fetching the API data in App.vue component
=======
  components: {
    Pokemon
  },
>>>>>>> 720161d... add: import and implementation of the Pokemon.vue component, passing the following props: pokemon.name, pokemon.id and pokemon.sprites['front_default']
  data(){
    return {
      pokemonsList: [],
      pokemonsUrl: []
      
    }
  },

  mounted(){
    PokemonApi.fetchPokemons().then(response => {      
      this.pokemonsUrl = response.data.results.map( pokemon => pokemon.url)
      this.pokemonsUrl.forEach((pokemonUrl) => {   
        axios.get(pokemonUrl)
        .then(
          response => {
            return this.pokemonsList.push(response.data)
          }) ; 
          
      })
      
    })
    //  console.log(this.pokemonsObjectList)
  }
}
</script>

<style lang="scss">

</style>
