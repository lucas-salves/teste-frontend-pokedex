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