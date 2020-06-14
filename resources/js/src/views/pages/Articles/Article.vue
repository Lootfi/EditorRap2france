<template>
    <div id="knowledge-base-article">
        <div  >
            <div class="vx-col w-full  mt-12 md:mt-0 ">
                <vx-card>
                    <!-- Title -->
                    <div class="article-title   mb-6 py-4">
                      
                        <h1 class="text-5xl text-center my-2" style="font-family:times new roman">{{articleData.titre}}</h1>
                        <div class="flex items-center">
                        <div class="flex items-center ">
                          <vs-avatar size="large" :src="`/images/admin/users/avatars/${articleData.Creator.Details.picture}`" @click="$router.push(`/editors/${articleData.Creator.slug}`)"/>
                        <div class="ml-2">
                        <p class="font-bold text-teal-600" @click="$router.push(`/editors/${articleData.Creator.slug}`)">{{articleData.Creator.Full_Name}}</p>
                        <p >Last updated on {{articleData.updated_at}}</p>
                      </div>
                      </div>
                      <div v-if="isUserEditor">
                        <div class="dropdown-button-container">
                         <vs-dropdown>
                          <vs-button class="btn-drop" color="rgba(0,0,0,0)" type="gradient" icon="more_horiz"></vs-button>
                          <vs-dropdown-menu>
                          <vs-dropdown-item @click="$router.push(`/articles/${articleData.tag}/edit`)"> Modifier</vs-dropdown-item>
                          <vs-dropdown-item divider @click="handleDelete"> Supprimer </vs-dropdown-item>
                            </vs-dropdown-menu>
                          </vs-dropdown>
                        </div>
                      </div>
                    </div>
                    </div>
                    <p>Category : {{articleData.Category.nom}}</p>
                    <div class="text-center  ">
                    <img class="max-w-full h-auto mx-auto" v-if="articleData.image" :src="`/images/admin/articles/avatars/${articleData.image}`" />
                  </div>
                    <vs-divider> L'article </vs-divider>
                <div v-if="article_raw" >
                    <div v-html="articleData.ContenuFormat.contenu">
                </div>
              </div>
                <div v-else>
                    <div v-html="articleData.ContenuFormat.contenu"></div>
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
      articleData : null,
      article_not_found: false,
      article_raw: false,
      isDeleting :false,
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

          this.articleData = response.data
          console.log(this.articleData.ContenuFormat.type)
        if(response.data.ContenuFormat.type == "raw"){

          this.article_raw = true;

        }else{
          this.articleData.ContenuFormat.contenu = this.JsonFormatter(this.articleData)
          console.log(this.articleData.ContenuFormat.contenu)
        }
			 	

			 	}).catch(function (error) {
          
          console.error(error);
                    });
	},
  methods:{

        handleDelete(e){

          e.preventDefault();
          this.$http.get(`/api/articles/${this.$route.params.tag}/delete`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }
       }).then(response => {

              this.$router.push('/articles');

       }).catch(error => {

          console.error(error)
       })
          
        }

      ,isUserEditor(){

          if(this.$store.state.AppActiveUser == this.articleData.Creator){

            return true
          }

          return false

      },

      JsonFormatter(Data){

        var content = Data.ContenuFormat.contenu
        var rawHtml = ""
        content.blocks.map((block) => {

            if(block.type == "paragraph"){
              rawHtml = `${rawHtml}<div class="my-4"><p>${block.data.text}</p></div>`
            }
            if(block.type == "list"){

              if(block.data.style =="ordered"){

                var listItems = "";
                block.data.items.map(item => {

                    listItems = `${listItems}<li>${item}</li>`

                })

               rawHtml = `${rawHtml}<div class="m-4"><ol style="list-style-type:decimal;" >${listItems}</ol></div>`
               console.log(rawHtml)

              }
              if(block.data.style =="unordered"){

                var listItems = "";
                block.data.items.map(item => {

                    listItems = `${listItems}<li>${item}</li>`

                })

               rawHtml = `${rawHtml}<div class="m-4"><ul style="list-style-type:disc;">${listItems}</ul></div>`

              }
            }

            if(block.type =="header"){
              rawHtml = `${rawHtml}<div class="my-4"><h${block.data.level}>${block.data.text}</h${block.data.level}></div>`
            }
            if(block.type =="quote"){
              rawHtml = `${rawHtml}<div class="my-4">
                <blockquote class="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                       <div style="font-size: 5rem; right: 100%;" class="mr-2 font-dank-mono text-neutral-500 absolute top-0 leading-none;" aria-hidden="true">
                         &ldquo;
                      </div>
                              <p class="mb-4 text-3xl italic">${block.data.text}</p>
                              <cite class="flex items-center">
                              <div class="flex flex-col items-start">
                                <span class="mb-1 text-sm italic font-bold">
                                Said By 
                                  ${block.data.caption}
                                </span>
                              </div>
                              </cite>
                      </blockquote></div>`
            }
             if(block.type == "image"){
              if(block.data.file){
              rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.file.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`
              }
              if(block.data.url){
                rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`
              }
              
            }

            if(block.type=="embed"){
              if(block.data.service == "instagram"){

                const embedInstagram = `<iframe width="${block.data.width}" height="${block.data.height}" src="${block.data.embed}" frameborder="0"></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`
                  rawHtml = `${rawHtml}<div class="my-4 text-center">${embedInstagram}</div>`
             
              }
              if(block.data.service == "youtube"){

                const embedYoutube = `<iframe width="${block.data.width}" height="${block.data.height}" src="${block.data.embed}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="text-center font-bold">${block.data.caption}</p>`
                 rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedYoutube}</div>`

              }

              if(block.data.service == "twitter"){

                  const embedTwitter=`<iframe border=0 frameborder=0 height=${block.data.height} width=${block.data.width}
                    src=${block.data.embed}></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`
                 rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedTwitter}</div>`

              }
            }
        })

        return rawHtml;
      }
  }
}

</script>