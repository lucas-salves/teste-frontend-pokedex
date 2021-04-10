<template>
  <div id="app">

<<<<<<< HEAD
    <pokemon v-for="pokemon in pokemonsList"
             :key="pokemon.id" 
             :pokemon-name="pokemon.name"
             :pokemonId="pokemon.id"
             :thumbImg="pokemon.sprites['front_default']" >
    </pokemon>

=======
    
>>>>>>> dc62332... add: fetching the API data in App.vue component
  </div>
</template>

<script>

<<<<<<< HEAD
import Pokemon from './components/Pokemon'
=======

>>>>>>> dc62332... add: fetching the API data in App.vue component
import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {
<<<<<<< HEAD
  components: {
    Pokemon
  },
=======

>>>>>>> dc62332... add: fetching the API data in App.vue component
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
