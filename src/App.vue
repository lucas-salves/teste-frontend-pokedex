<template>
  <div id="app">

    <basesearchbar
    v-on:searchTextFromSearchBar="onSearchBarKeyup"
    ></basesearchbar>
    <div class="pokemon-container">
      <pokemon v-for="pokemon in filteredPokemons"
              :key="pokemon.id" 
              :pokemon-name="pokemon.name"
              :pokemonId="pokemon.id"
              :thumbImg="pokemon.spriteUrl" >
      </pokemon>
    </div>

    

  </div>
</template>

<script>
import Pokemon from './components/Pokemon'
import basesearchbar from './components/BaseSearchBar'
import PokemonClass from './classes/Pokemon'

import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {
  data(){
    return {
     
      pokemonsList: new Array(),
      pokemonsUrl:[],
      pokemonsObjectList: new Array(),
      search:''
    }
  },
  components: {
    Pokemon,
    basesearchbar
  },
  mounted(){
    PokemonApi.fetchPokemons().then((response) => {
      this.pokemonsUrl = response.data.results.map(pokemon => pokemon.url)
      this.pokemonsUrl.forEach((pokemon) => {
        axios.get(pokemon).then((res) => {          
          this.pokemonsObjectList.push( new PokemonClass(res.data.name, res.data.id,res.data.sprites['front_default'] ))
          
        // console.log(this.pokemonsObjectList)
        })
        
      })
    })
     
  },
  computed: {
    
    filteredPokemons(){
      
     
       return this.pokemonsObjectList.filter(pokemon => pokemon.name.includes(this.search))
      
    }
    
  },
  methods: {
    onSearchBarKeyup(search){
      this.search = search
    }
  }
}
</script>

<style src="./scss/style.scss" lang="scss" >
  
</style>
