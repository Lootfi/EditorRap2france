<template>
  <div class="">
  <div class="flex">
    <div class="search-full-container w-full" :class="{'flex': showFullSearch}" v-show="showFullSearch">
      <vs-input 
        ref="navbarSearch"
        :autoFocus="showFullSearch"
        background-overlay
        class="w-full""
        inputClassses="w-full vs-input-no-border vs-input-no-shdow-focus"
        placeholder="Explore Vuexy..."
        v-model="searchInput"
        @change="searchQuery"
        @blur="showFullSearch = false" />
    </div>
    <feather-icon icon="SearchIcon" @click="showFullSearch = true" class="cursor-pointer navbar-fuzzy-search ml-4" />
  </div>

  <div class="relative pt-2 w-full" style="background:white;" v-if="showFullSearch" @mouseleave="showFullSearch = false">
    <div class="absolute top-0 right-0 " style="width:150%; background:white; overflow: overflow-y">
    <div v-for="result in results" class=" p-4 ">
      <div class="my-2 flex items-center ">
      <div class="img-container">
        <img
                style="width:60px; height:60px; border-radius:20px;"
                :src="result.image"
                @click.stop="$router.push(`/articles/${result.tag}`)"
              /> </div>
         <p class="px-4" @click="$router.push(`/articles/${result.tag}`)">{{result.titre}}</p>
       </div>
      </div>
      <div v-if="noResults" class="p-4">
        Aucun article trouvé      </div>

      <div v-if="searching" class="p-4">
        <i>En cours de recherche</i>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      showFullSearch: false,
      results:[],
      noResults:false,
      searching:false,
      searchInput : "",
      showResultPan: false,
    }
  },
  methods: {
    selected (item) {
      this.showFullSearch = false
    },
        searchQuery(){

      this.searching = true
      this.showFullSearch = true;
      this.$http.get(`/api/articles/index?q=${event.target.value}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }).then((response) => {
        this.searching = false
        this.results = response.data;
        this.noResults = this.results.length === 0;
      })


    }
  }
}

</script>
