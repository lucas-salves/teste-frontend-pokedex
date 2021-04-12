<template>
  <div class="pokemon-item">


      
              

      <div class="vertical-alignment">
          <div class="img-wrapper">
              <img :src="thumbImg" alt="" class="pokemon-thumb-img">
          </div>

          <div class="syde-by-syde-alignment">
              <p class="pokemon-name">
                  {{ pokemonName | capitalize}}
              </p>
              <p class="pokemon-id">
                  {{ pokemonId  | preHashId}}
              </p>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'pokemon',
    props: ['thumbImg', 'pokemonName', 'pokemonId'],
    filters: {
        capitalize: function(value){
            if(!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        preHashId: function(value){
            if(!value) return ''
            return `#${value}`
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../scss/style.scss" lang="scss"></style>
