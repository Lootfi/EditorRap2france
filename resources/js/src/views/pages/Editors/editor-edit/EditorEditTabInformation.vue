<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">

        <!-- Col Header -->
        <div class="flex items-end">
          <feather-icon icon="UserIcon" class="mr-2" svgClasses="w-5 h-5" />
          <span class="leading-none font-medium">Personal Information</span>
        </div>
        <div>
          <vs-input class="w-full mt-4" label="Mobile" v-model="data_local.Details.mobile" name="mobile" />
          <vs-input class="w-full mt-4" label="Country" v-model="data_local.Details.country" name="country" data-vv-as="field" />
          <vs-input class="w-full mt-4" label="Adresse" v-model="data_local.Details.adresse" name="adresse" data-vv-as="field" />
          <!-- Gender -->
          <div class="mt-4">
            <label class="text-sm">Gender</label>
            <div class="mt-2">
              <vs-radio v-model="data_local.Details.gender" vs-value="Male" class="mr-4">Male</vs-radio>
              <vs-radio v-model="data_local.Details.gender" vs-value="Female" class="mr-4">Female</vs-radio>
            </div>
          </div>
          

        </div>
      </div>
    
  </div>
  <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="handleAccountSubmit">Save Changes</vs-button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
    flatPickr
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      authentificatedUser : this.$store.state.AppActiveUser.user,

    }
  },

  mounted(){
  },

  methods: {
     handleAccountSubmit(e){

          console.log(this.data_local)

                e.preventDefault();
                this.$http.post(`/api/users/${this.data.slug}/edit`, {
                        mobile: this.data_local.Details.mobile,
                        country: this.data_local.Details.country,
                        adresse: this.data_local.Details.adresse,
                        gender: this.data_local.Details.gender,
                    })
                .then(response => {

                    if(this.authentificatedUser.slug == response.data.user.slug){
                      
                      localStorage.setItem('user',JSON.stringify(response.data.user))
                      this.$store.state.AppActiveUser.user = response.data.user;
                    }
                })
      }
      }
}
</script>
