<template>
  <vx-card no-shadow>

    <vs-input class="w-full mb-base" v-model="facebook" icon-pack="feather" icon="icon-facebook" label="Facebook" icon-no-border name="facebook" />
    <vs-input class="w-full mb-base" v-model="twitter" icon-pack="feather" icon="icon-twitter" label="Twitter" icon-no-border name="twitter" />
    <vs-input class="w-full mb-base" v-model="instagram" icon-pack="feather" icon="icon-instagram" label="Instagram" icon-no-border name="instagram" />

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" :disabled="isSending" @click="handleSubmit">Save Changes</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {

  data () {
    return {
      facebook: this.$store.state.AppActiveUser.user.Details.facebook,
      twitter: this.$store.state.AppActiveUser.user.Details.twitter,
      instagram: this.$store.state.AppActiveUser.user.Details.instagram,
      isSending: false,
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },
   methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          this.$http
            .post(
              `/api/users/${this.$store.state.AppActiveUser.user.slug}/edit`,
              {
                facebook: this.facebook,
                twitter: this.twitter,
                instagram: this.instagram,
                gender: this.gender,
                mobile: this.mobile,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )

            .then((response) => {
              localStorage.setItem("user", JSON.stringify(response.data.user));
              this.$store.state.AppActiveUser.user = response.data.user;
              this.isSending = false;
              this.$vs.dialog({
                color: "primary",
                title: ``,
                text: "Modification complétée",
              });
            })
            .catch(function(error) {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Modification non complétée",
              });
            });
        }
      });
    },
  },
}
</script>