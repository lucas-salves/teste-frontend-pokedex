<template>
  <div id="app">

    <basesearchbar
    v-on:searchTextFromSearchBar="onSearchBarKeyup"
    ></basesearchbar>
    <pokemon v-for="pokemon in filteredPokemons"
             :key="pokemon.id" 
             :pokemon-name="pokemon.name"
             :pokemonId="pokemon.id"
             :thumbImg="pokemon.spriteUrl" >
    </pokemon>


    

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
<<<<<<< HEAD
    
    this.fetchPokemonsBy('url')
  },
  methods: {
    onSearchBarKeyup(value){
      this.searchBarMessage = value;
      console.log('oi')
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
        this.pokemonsList = result
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

=======
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
      this.pokemonsObjectList.forEach((pokemon) => {
        console.log(pokemon)
      })
     
       return this.pokemonsObjectList.filter(pokemon => pokemon.name.includes(this.search))
      
    }
    
  },
  methods: {
    onSearchBarKeyup(search){
      this.search = search
>>>>>>> searchbar
    }
  }
}
</script>

<style lang="scss">

</style>
