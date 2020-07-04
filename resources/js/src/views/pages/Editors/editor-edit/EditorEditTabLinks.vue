<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <div class="vx-row">

      <!-- Col 1 -->
      <div class="vx-col w-full md:w-1/2">
        <vs-input
          class="w-full"
          v-model="data_local.Details.twitter"
          icon-pack="feather"
          icon="icon-twitter"
          label="Twitter"
          icon-no-border
          v-validate="'url:require_protocol'"
          name="twitter" />
          <span class="text-danger text-sm"  v-show="errors.has('twitter')">{{ errors.first('twitter') }}</span>

        <vs-input
          class="w-full mt-4"
          v-model="data_local.Details.facebook"
          icon-pack="feather"
          icon="icon-facebook"
          label="Facebook"
          icon-no-border
          v-validate="'url:require_protocol'"
          name="facebook" />
          <span class="text-danger text-sm"  v-show="errors.has('facebook')">{{ errors.first('facebook') }}</span>

        <vs-input
          class="w-full mt-4"
          v-model="data_local.Details.instagram"
          icon-pack="feather"
          icon="icon-instagram"
          label="Instagram"
          icon-no-border
          v-validate="'url:require_protocol'"
          name="instagram" />
          <span class="text-danger text-sm"  v-show="errors.has('instagram')">{{ errors.first('instagram') }}</span>

      </div>

      </div>
    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="save_changes" :disabled="!validateForm">Save Changes</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      data_local: JSON.parse(JSON.stringify(this.data))
    }
  },
  computed: {
    validateForm () {
      return !this.errors.any()
    }
  },
  methods: {
    save_changes () {

      if (!this.validateForm) return

          this.IsSending = true;
          this.$http
            .post(
              `/api/users/${this.data.slug}/edit`,
              {
                mobile: this.data_local.Details.mobile,
                country: this.data_local.Details.country,
                adresse: this.data_local.Details.adresse,
                gender: this.data_local.Details.gender,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
            .then((response) => {
              this.isSending = false;
              this.$vs.dialog({
                color: "primary",
                title: ``,
                text: "Modification complétée",
              });
            })
            .catch((error) => {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Modification Non complétée",
              });
            });
        
      
    },
    
  }
}
</script>
