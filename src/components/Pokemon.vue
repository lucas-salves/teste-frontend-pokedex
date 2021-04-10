<template>
  <div class="pokemon-item">


      
              

      <div class="vertical-alignment">
          <div class="img-wrapper">
              <img :src="thumbImg" alt="" class="pokemon-thumb-img">
          </div>

          <div class="syde-by-syde-alignment">
              <p class="pokemon-name">
                  {{ pokemonName }}
              </p>
              <p class="pokemon-id">
                  {{ pokemonId }}
              </p>
          </div>
      </div>

  </div>
</template>

<script>
export default {

    props: ['thumbImg', 'pokemonName', 'pokemonId']       
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
