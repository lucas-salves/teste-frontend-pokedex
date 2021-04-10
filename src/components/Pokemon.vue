<template>
  <div class="pokemon-item">
<<<<<<< HEAD
<<<<<<< HEAD
      <div class="vertical-alignment">
          <div class="img-wrapper">
              
              <img :src="thumbImg" alt="" class="pokemon-thumb-img">
=======
      <div class="vertical-alignment">
          <div class="img-wrapper">
<<<<<<< HEAD
              <img src="" alt="" class="pokemon-thumb-img">
>>>>>>> 9907ebc... add: creation of the Pokemon.vue component template
=======
              
              <img :src="thumbImg" alt="" class="pokemon-thumb-img">
>>>>>>> b5e0dfa... add: feeding the Pokemon.vue component by props
          </div>

          <div class="syde-by-syde-alignment">
              <p class="pokemon-name">
<<<<<<< HEAD
<<<<<<< HEAD
                  {{ pokemonName }}
              </p>
              <p class="pokemon-id">
                  {{ pokemonId }}
              </p>
          </div>
      </div>
=======
    
>>>>>>> e5bc2a6... add: creation of the Pokemon.vue component, component which is responsible for displaying each pokemon
=======

=======
                  {{ pokemonName }}
>>>>>>> b5e0dfa... add: feeding the Pokemon.vue component by props
              </p>
              <p class="pokemon-id">
                  {{ pokemonId }}
              </p>
          </div>
      </div>
>>>>>>> 9907ebc... add: creation of the Pokemon.vue component template
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
<<<<<<< HEAD
    props: ['thumbImg', 'pokemonName', 'pokemonId']    
=======
  
>>>>>>> e5bc2a6... add: creation of the Pokemon.vue component, component which is responsible for displaying each pokemon
=======
    props: ['thumbImg', 'pokemonName', 'pokemonId']    
>>>>>>> b5e0dfa... add: feeding the Pokemon.vue component by props
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
