<template>
  <div id="knowledge-base-article">
    <div>
      <div class="vx-col w-full  mt-12 md:mt-0 ">
        <vx-card>
          <!-- Title -->
          <div class="article-title   mb-6 py-4">
            <h1
              class="text-5xl text-center my-2"
              style="font-family:times new roman"
            >
              {{ articleData.titre }}
            </h1>
            <div class="flex items-center">
              <div class="flex items-center ">
                <vs-avatar
                  size="large"
                  :src="
                    `/images/admin/users/avatars/${articleData.Creator.Details.picture}`
                  "
                  @click="$router.push(`/editors/${articleData.Creator.slug}`)"
                />
                <div class="ml-2">
                  <p
                    class="font-bold text-teal-600"
                    @click="
                      $router.push(`/editors/${articleData.Creator.slug}`)">
                    {{ articleData.Creator.Full_Name}}
                  </p>
                  <p>Dernière Mise à jour le : {{ articleData.updated_at }}</p>
                  <p><span v-if="isPublished">Publié</span><span v-else>À Publier</span> Le : {{articleData.dateactu}} </p>
                </div>
              </div>
              <div v-if="showActions(articleData)">
                <div class="dropdown-button-container">
                  <vs-dropdown>
                    <vs-button
                      class="btn-drop text-black"
                      color="rgba(0,0,0,0)"
                      type="gradient"
                      icon="more_horiz"
                    ></vs-button>
                    <vs-dropdown-menu>
                      <vs-dropdown-item
                        v-if="isJsonArticle(articleData)"
                        @click="
                          $router.push(`/articles/${articleData.tag}/edit`)
                        "
                      >
                        Modifier</vs-dropdown-item
                      >
                      <vs-dropdown-item divider @click="openDelete(articleData.tag)">
                        Supprimer
                      </vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>
            </div>
          </div>
          <p>Categorie : {{ articleData.Category.nom }}</p>
          <div class="flex items-center my-4">
                       <div >Artistes :</div>
                            <ul class="users-liked user-list ml-3 sm:ml-6">
                            <li v-for="(artist, index) in articleData.Artists" :key="index">
                                <vx-tooltip :text="artist.name" position="bottom">
                                <vs-avatar @click="$router.push(`/artists/${artist.slug}`)" :src="artist.Avatar" size="large" class="border-2 border-white border-solid -m-1"></vs-avatar>
                                </vx-tooltip>
                            </li>
                            </ul>
          </div>

          <div class="todo-tags my-4 flex">
            <vs-chip v-for="(tag, index) in articleData.Hashtags" :key="index">
              <span>{{ tag.nom }}</span>
            </vs-chip>
          </div>
          <div class="text-center  ">
            <img
              class="max-w-full h-auto mx-auto"
              v-if="articleData.image"
              :src="`${articleData.Avatar}`"
            />
          </div>
          <vs-divider> L'article </vs-divider>
          <div v-if="article_raw" >
            <div itemprop="articleBody" v-html="articleData.ContenuFormat.contenu"></div>
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
  data() {
    return {
      articleData: null,
      article_not_found: false,
      article_raw: false,
      isDeleting: false,
      isPublished: false,
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  mounted() {
    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait",
    });

    this.$http
      .get(`/api/articles/${this.$route.params.tag}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })

      .then((response) => {
        this.$vs.loading.close();
        if (response.data == "Article not found") {
          this.$router.push("/articles");
        }

        this.articleData = response.data;
        if(this.articleData.status == 1){

          this.isPublished = false;
        }else{
          this.isPublished = true;
        }
        if (response.data.ContenuFormat.type == "raw") {
          this.article_raw = true;
        } else {
          this.articleData.ContenuFormat.contenu = this.JsonFormatter(
            this.articleData
          );
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  methods: {
    showActions(articleData) {
      if (
        (this.activeUserInfo.user.role == "Admin" ||
    this.activeUserInfo.user.email == articleData.Creator.email) && this.activeUserInfo.user.StatusName =="Activé"
      ) {
        return true;
      }

      return false;
    },

    isJsonArticle(row) {
      if (row.ContenuFormat.type == "raw") {
        return false;
      }

      return true;
    },

    openDelete(tag) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Suppression`,
        text: "Etes vous sur de vouloir supprimer le present article",
        accept: this.handleDelete,
        parameters: tag,
      });
    },

    handleDelete(tag) {
      this.$http
        .get(`/api/articles/${tag}/delete`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          this.$router.push("/articles");
        })
        .catch((error) => {
          console.error(error);
        });
    },

    JsonFormatter(Data) {
      var content = JSON.parse(Data.ContenuFormat.contenu);
      var rawHtml = "";
      content.blocks.map((block) => {
        if (block.type == "paragraph") {
          rawHtml = `${rawHtml}<div class="my-4"><p>${block.data.text}</p></div>`;
        }
        if (block.type == "list") {
          if (block.data.style == "ordered") {
            var listItems = "";
            block.data.items.map((item) => {
              listItems = `${listItems}<li>${item}</li>`;
            });

            rawHtml = `${rawHtml}<div class="m-4"><ol style="list-style-type:decimal;" >${listItems}</ol></div>`;
          }
          if (block.data.style == "unordered") {
            var listItems = "";
            block.data.items.map((item) => {
              listItems = `${listItems}<li>${item}</li>`;
            });

            rawHtml = `${rawHtml}<div class="m-4"><ul style="list-style-type:disc;">${listItems}</ul></div>`;
          }
        }

        if (block.type == "header") {
          rawHtml = `${rawHtml}<div class="my-4"><h${block.data.level}>${block.data.text}</h${block.data.level}></div>`;
        }
        if (block.type == "quote") {
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
                      </blockquote></div>`;
        }
        if (block.type == "image") {
          if (block.data.file) {
            rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.file.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`;
          }
          if (block.data.url) {
            rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`;
          }
        }

        if (block.type == "embed") {
          if (block.data.service == "instagram") {
            const embedInstagram = `<iframe width="${block.data.width}" height="${block.data.height}" src="${block.data.embed}" frameborder="0"></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 text-center">${embedInstagram}</div>`;
          }
          if (block.data.service == "youtube") {
            const embedYoutube = `<iframe width="${block.data.width}" height="${block.data.height}" src="${block.data.embed}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="text-center font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedYoutube}</div>`;
          }

          if (block.data.service == "twitter") {
            const embedTwitter = `<iframe border=0 frameborder=0 height=${block.data.height} width=${block.data.width}
                    src=${block.data.embed}></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedTwitter}</div>`;
          }
        }
      });

      return rawHtml;
    },
  },
};
</script>