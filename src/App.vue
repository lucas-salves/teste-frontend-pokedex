<template>
  <div id="app">

    
  </div>
</template>

<script>


import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {

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
