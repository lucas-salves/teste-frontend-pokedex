<template>
  <div id="app">

    <SearchBar></SearchBar>
    <pokemon v-for="pokemon in pokemonsList"
             :key="pokemon.id" 
             :pokemon-name="pokemon.name"
             :pokemonId="pokemon.id"
             :thumbImg="pokemon.sprites['front_default']" >
    </pokemon>


    

  </div>
</template>

<script>







import Pokemon from './components/Pokemon'
import SearchBar from './components/SearchBar'

import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {
  components: {
    Pokemon,
    SearchBar
  },

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
