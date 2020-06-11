<template>
    <div id="knowledge-base-article">
        <div >
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vx-card>
                    <!-- Title -->
                    <div class="article-title mb-6">
                        <h1>{{article_data.titre}}</h1>
                        <p class="mt-1">Last updated on <span>{{article_data.updated_at}}</span></p>
                    </div>

                    <div v-html="article_content">
                    </div>
                     
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data () {
    return {
      article_data: null,
      article_not_found: false,
      isDeleting :false,
      article_content : '',
    }
  },
	mounted(){

			 this.$http.get(`/api/articles/${this.$route.params.tag}`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
			 .then(response => {
        if(response.data == "Article not found"){

          this.$router.push('/articles')
        }
			this.article_data = response.data.article
			this.article_content = response.data.contenu

			console.log(this.article_data);
			 	

			 	}).catch(function (error) {
          
          console.error(error);
                    });
	}
}

</script>