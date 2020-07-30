<template>
  <div id="knowledge-base-article">
    <div>
      <div class="vx-col w-full  mt-12 md:mt-0 ">
        <vx-card>
          <!-- Title -->
          <div class="flex justify-between items-center">
          <div>
            <vs-avatar
                  size="150px"
                  :src="
                    `/images/admin/artists/avatars/${artist_data.image}`
                  "
                />
          </div>
          <div class="article-title   mb-6 py-4">
            <h1
              class="text-5xl text-center my-2"
              style="font-family:times new roman">
              {{ artist_data.name }}
            </h1>
          </div>
          <div >
                <div class="dropdown-button-container">
                  <vs-dropdown>
                    <vs-button
                      class="btn-drop"
                      color="rgba(0,0,0,0)"
                      type="gradient"
                      icon="more_horiz"
                    ></vs-button>
                    <vs-dropdown-menu>
                      <vs-dropdown-item
                       @click="$router.push(`/artists/${artist_data.slug}/edit`)">
                        Modifier
                      </vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>
          </div>  
          <h1 class="my-3">Articles sur l'artiste</h1>
            <div v-for="article in artist_data.articles">
            <div class="vx-row flex-start item-details no-gutter">

                <!-- IMG COL -->
                <div class="bg-white col-3 cursor-pointer" style="height:200px;">
                    <img :src="article.Avatar" class="p-4" style="max-width:100%; max-height:100%;" >
                </div>

                <!-- ITEM NAME & DESC COL -->
                <div class="vx-col sm:w-1/2">
                    <div class="p-4 pt-6">
                        <slot name="item-meta">
                            <h6 class="item-name font-semibold mb-1 hover:text-primary cursor-pointer" @click="$router.push(`/articles/${article.tag}`)">{{article.titre}}</h6>
                            <p class="text-sm mb-4">By <span class="font-semibold cursor-pointer">{{article.Creator.Full_Name}}</span></p>
                            <p class="item-description text-sm truncate">{{article.ContenuTextFormat}}</p>
                        </slot>
                    </div>
                </div>
            </div>
          </div>

        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>

  export default{
 
   data() {
    return {
      artist_data: null,
      artist_not_found: false,
      user_not_admin: true,
      isDeleting: false,
    }
  },

  mounted() {
    this.$http
      .get(`/api/settings/artists/${this.$route.params.slug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        if (response.data == "Artist not found") {
          this.$router.push("/artists");
        }

        this.artist_data = response.data;

        if (this.user_data.role == "Admin") {
          this.user_not_admin = false;
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },

}

</script>

<style lang="scss" scoped>
.list-view-item {
    .item-name, .item-description {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .item-name {
        -webkit-line-clamp: 2;
    }

    .item-description {
        -webkit-line-clamp: 5;
    }

    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }
    }
}
</style>
