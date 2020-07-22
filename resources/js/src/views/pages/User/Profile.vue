<template>
	<div id="profile-page">

        <!-- PROFILE HEADER -->
        <div class="profile-header">
            <div class="relative">
                <div class="cover-container rounded-t-lg">
                    <img src="/images/logos/r2f_logo_black_450.png" alt="user-profile-cover" class="responsive block">
                </div>
                <div class="profile-img-container pointer-events-none">
                    <div>
                        <vs-avatar class="user-profile-img" :src="activeUserInfo.user.Avatar" size="85px" />
                    </div>
                    <div class="profile-actions pointer-events-auto flex justify-end">
                        <vs-button @click="$router.push(`/profile-setting`)" icon-pack="feather" radius icon="icon-settings" class="ml-2 lg:ml-4"></vs-button>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end flex-wrap profile-header-nav p-6">
            	<div class="block sm:hidden">
                    <feather-icon @click="isNavOpen = !isNavOpen" icon="AlignJustifyIcon" v-show="!isNavOpen" class="vx-navbar-toggler cursor-pointer" />
                    <feather-icon icon="XIcon" v-show="isNavOpen" @click="isNavOpen = !isNavOpen" class="vx-navbar-toggler cursor-pointer" />
                </div>

                <div :class="isNavOpen ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                    <div class="text-sm sm:flex-grow">
                        <ul class="sm:flex mt-8 w-full justify-center md:mt-0 md:ml-auto md:w-2/4">
                            <li class="p-2 "><a class="cursor-pointer
                            	" href="#">Vue générale</a></li>
                            <li class="p-2 "><a class="cursor-pointer" @click="$router.push('/my-articles')">Articles</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <vx-navbar> -->
            <!-- </vx-navbar> -->
        </div>
         <div class="vx-row">
            <!-- COL 1 -->
            <div class="vx-col w-full lg:w-1/4">

        		<vx-card title="About" class="mt-base">
                   

                    <!-- USER BIO -->
                    <div class="user-bio">
                        <p>{{activeUserInfo.user.Details.biography}}</p>
                    </div>

                    <!-- OTEHR DATA -->
                    <div class="mt-5">
                        <h6>Rédacteur depuis:</h6>
                        <p>{{activeUserInfo.user.created_at}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Ville</h6>
                        <p>{{activeUserInfo.user.Details.country}}</p>
                    </div>

                    <div class="mt-5">
                        <h6>Email:</h6>
                        <p>{{activeUserInfo.user.email}}</p>
                    </div>

                    <div class="social-links flex mt-4">
                    	<a :href="activeUserInfo.user.Details.facebook" target="_blank">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="FacebookIcon" ></feather-icon>
                    </a>
                    <a :href="activeUserInfo.user.Details.twitter" target="_blank">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="TwitterIcon"></feather-icon>
                       </a>
                       <a :href="activeUserInfo.user.Details.instagram" target="_blank">
                        <feather-icon svgClasses="h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded" class="mr-2" icon="InstagramIcon"></feather-icon>
                    </a>
                    </div>
                </vx-card>
            </div>
            <div class="vx-col lg:w-3/4">

       	<vx-card  card-background="transparent" title="Articles Populaires" class="mt-base" :key="index">
        	<div v-for="(article, index) in articles.slice(0,4)" >
        	<vx-card  class="mt-base" :key="index">
        	<div class="lg:flex items-center ">
        		<div class="bg-white  lg:col-3 cursor-pointer" >
                    <img :src="article.Avatar" class="sm:mx-auto p-4" style="max-width:100%; max-height:auto;" >
                </div>
        					<div>
        				<h2>{{article.titre}}</h2>
        				<small>Publié le : {{article.dateactu}}</small>
        				<p>{{article.ContenuTextFormat.substring(0,255)}}...<a  @click="$router.push(`/articles/${article.tag}`)" class="ml-auto cursor-pointer text-primary"> [Continuer]</a>
        			
        				</p>
        					</div>
        				</div>
        			</vx-card>
        			</div>
        		</vx-card>
        	</div>
        </div>
    </div>
</template>
<script >
export default {

	data (){
		return{
		isNavOpen: false,
		articles: null,
		}
	},
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  created() {
    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait",
    });
    this.$http
      .get("/api/user/my-article", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        this.articles = response.data;
                this.$vs.loading.close();
      })
      .catch((error) => {});
  }, 

}


</script>
<style lang="scss">
@import "@sass/vuexy/pages/profile.scss";
</style>
