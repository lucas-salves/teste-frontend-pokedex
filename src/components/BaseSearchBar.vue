<template>
  <div class="search-bar-container">
    <form>
      <input type="text" v-model="searchText" v-on:keyup="emitSearchText">
    </form>
  </div>
</template>

<script>
export default {
  name: 'basesearchbar',
  data(){
    return {
      searchText: ''
    }
  },
  methods: {
    emitSearchText(){      
      this.$emit('searchTextFromSearchBar', this.searchText)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
