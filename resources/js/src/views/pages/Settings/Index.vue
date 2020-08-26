<template>
	<div>
			<h1 cla>Parametres Generaux</h1>

		<div class="vx-row my-5">
            <div  @click="activate('facebook')" class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="FacebookIcon"
                  :statistic="statistics.facebook"
                  statisticTitle="Jaime" />
             </div>
             <div data-holder="twitter" @click="activate('twitter')" class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                  <statistics-card-line
                  
                  hideChart
                  class="mb-base"
                  icon="TwitterIcon"
				  :statistic="statistics.twitter"
                  statisticTitle="Abonnés" />
              </div>
              <div data-holder="instagram" @click="activate('instagram')" class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                  <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="InstagramIcon"
                  :statistic="statistics.instagram"
                  statisticTitle="Abonnés" />
               </div>
               <div  data-holder="youtube" @click="activate('youtube')" class="vx-col w-1/2 md:w-1/3 xl:w-1/6">
                  <statistics-card-line
                  hideChart
                  class="mb-base"
                  icon="YoutubeIcon"
                  :statistic="statistics.youtube"
                  statisticTitle="Abonnés" />
              </div>
            </div>
     <vs-prompt
     :title="val.holder"
      @accept="acceptAlert(val)"
      :active.sync="activePrompt">
      <div class="con-exemple-prompt">
        <span>Ajouter le nombre des abonnés</span>
      <vs-input v-model="val.value" class="mt-3 w-full" />
      </div>
    </vs-prompt>
</div>

</template>

<script>
	
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'

	export default {
		components: {
    			StatisticsCardLine
  },
  data(){

  	return {
  	        statistics: [],
  	        activePrompt:false,
  	        selectedVal: "",
  	        val: {value: 0,holder: ""},

  } 
},


		created(){
this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait",
    });
			
this.$http.get("/api/settings/statistics", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        this.statistics = response.data;
         this.$vs.loading.close();

      })
      .catch((error) => {});
  }, 
  methods:{

  	activate(param){

  		this.activePrompt = true;	
  		this.val.holder = param
  		this.val.value = this.statistics[param]


  	},
  	acceptAlert(val){
      	
      	this.$http.post("/api/settings/statistics",
      	{	
      		holder: this.val.holder,
            value: this.val.value,
            },
         {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
    })
      .then((response) => {
        
       		this.statistics = response.data

      })
      .catch((error) => {});
  }, 
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
	}
	
</script>