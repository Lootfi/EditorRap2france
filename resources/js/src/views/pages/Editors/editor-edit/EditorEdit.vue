<!-- =========================================================================================
  File Name: UserEdit.vue
  Description: User Edit Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-edit">

    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <vx-card v-if="user_data">
      <div v-model="activeTab" slot="no-body" class="tabs-container px-6 pt-6">
        <vs-tabs class="tab-action-btn-fill-conatiner">
          <vs-tab label="Account" icon-pack="feather" icon="icon-user">
            <div class="tab-text">
              <editor-edit-tab-account class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
          <vs-tab label="Information" icon-pack="feather" icon="icon-info">
            <div class="tab-text">
              <editor-edit-tab-information class="mt-4" :data="user_data" />
            </div>
          </vs-tab>
        </vs-tabs>

      </div>

    </vx-card>
  </div>
</template>

<script>
import EditorEditTabAccount     from './EditorEditTabAccount.vue'
import EditorEditTabInformation from './EditorEditTabInformation.vue'

export default {
  components: {
    EditorEditTabAccount,
    EditorEditTabInformation,
  },
  data () {
    return {
      user_data: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 1
    }
  },
  mounted(){

    this.fetch_user_data(this.$route.params.slug);

  }
 ,
  methods: {
    
    fetch_user_data (slug) {
     this.$http.get(`/api/users/${slug}`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
       .then(response => {

          this.user_data = response.data
      
        }).catch(function (error) {
          this.user_not_found = true
                    });
    }
  },

}

</script>
