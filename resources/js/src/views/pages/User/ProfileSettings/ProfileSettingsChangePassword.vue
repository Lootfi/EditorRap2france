<template>
  <vx-card no-shadow>
    <vs-alert
      class="absolute "
      :active="alert.valid"
      color="danger"
      icon-pack="feather"
      icon="icon-info"
    >
      <span>{{ alert.message }}</span>
    </vs-alert>
    <vs-input
      class="w-full mb-base"
      v-validate="'required|min:3|max:35'"
      label-placeholder="Mot de passe actuelle"
      v-model="old_password"
      name="old_password"
      type="password"
    />
    <span class="text-danger text-sm" v-show="errors.has('old_password')">{{
      errors.first("old_password")
    }}</span>
    <vs-input
      class="w-full mb-base"
      name="password"
      ref="password"
      v-validate="'required|min:3|max:35'"
      label-placeholder="Nouveau Mot de passe"
      v-model="password"
      type="password"
    />
    <span class="text-danger text-sm" v-show="errors.has('password')">{{
      errors.first("password")
    }}</span>
    <vs-input
      class="w-full mb-base"
      label-placeholder="Confirmation du nouveau mot de passe"
      v-model="confirm_password"
      name="confirm_password"
      v-validate="'required|confirmed:password'"
      type="password"
    />
    <span class="text-danger text-sm" v-show="errors.has('confirm_password')">{{
      errors.first("confirm_password")
    }}</span>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="handleSubmit"
        >Save Changes</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      old_password: "",
      password: "",
      confirm_password: "",
      alert: {
        valid: false,
        message: "",
      },
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$http
            .post(
              `/api/auth/password-reset`,
              {
                old_password: this.old_password,
                password: this.password,
                confirm_password: this.confirm_password,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
            .then((response) => {
              if (response.data.message == "Password Dont match") {
                this.alert.message =
                  "Le mot de passe actuelle n'est pas correcte ! ";
                this.alert.valid = true;
              }
              if (response.data.message == "Password Updated") {
                this.alert.message = "Le mot de passe a été changé ! ";
                this.alert.valid = true;
                this.$router.push("/profile-setting");
              }
            });
        }
      });
    },
  },
};
</script>
