<template>
  <div id="app">

    <basesearchbar
    v-on:searchTextFromSearchBar="onSearchBarKeyup"
    ></basesearchbar>
    <pokemon v-for="(pokemon, index) in pokemonsList"
             :key="index" 
             :pokemon-name="pokemon.name"
             :pokemonId="pokemon.id"
             :thumbImg="pokemon.sprites['front_default']" >
    </pokemon>


    

  </div>
</template>

<script>







import Pokemon from './components/Pokemon'
import basesearchbar from './components/BaseSearchBar'

import PokemonApi from './services/pokemonsHttpMethods'
import axios from 'axios'


export default {
  data(){
    return {
      pokemonsList: [],
      pokemonsUrl: [],
      pokemonsFilter: [],
      searchBarMessage: ''
    }
  },
  components: {
    Pokemon,
    basesearchbar
  },
  mounted(){
    // PokemonApi.fetchPokemons().then(response => {      
    //   this.pokemonsUrl = response.data.results.map( pokemon => pokemon.url)
    //   this.pokemonsUrl.forEach((pokemonUrl) => {   
    //     axios.get(pokemonUrl)
    //     .then(
    //       response => {
    //         return this.pokemonsList.push(response.data)
    //       }) ; 
          
    //   })
      
    // })
    this.fetchPokemonsBy('url')
  },
  methods: {
    onSearchBarKeyup(value){
      this.searchBarMessage = value;
      let result;
      if(value == ''){
        // let uniquePokemonList = new Set(this.pokemonsList)
       // let uniquePokemonList = new Set(this.pokemonsList)
        result=''
        console.log(this.pokemonsList)
        this.fetchPokemonsBy('url')
      }
      
      this.pokemonsList.forEach((pokemon) => {  
          
        if(pokemon.name.includes(value)){
          
           result = this.pokemonsList.filter( pokemon => pokemon.name.includes( value) )
           
        }else{
          console.log('nenhum resultado encontrado')
          
        }
      })

       //  result = this.pokemonsList.filter( pokemon => pokemon.name == value)
        // console.log(value)
        this.pokemonsList = result
      // console.log(this.pokemonsList)
      // this.pokemonsList.filter(function(el){
      //   return el.name
      // })
      // return result
    },
    fetchPokemonsBy(filter){
      PokemonApi.fetchPokemons().then(response => {        
          this.pokemonsFilter = response.data.results.map(pokemon => pokemon[filter])
        this.pokemonsFilter.forEach((pokemon) => {
          axios.get(pokemon).then(response => {
                
               this.pokemonsList.push(response.data)
          })
        })
      })

    }
  }

 }

</script>

<style lang="scss">

</style>
