<template>
  <div class="mt-4">
    <vs-input
      v-model="email"
      name="email"
      icon-no-border
      icon="icon icon-user"
      icon-pack="feather"
      label-placeholder="Email"
      class="w-full"
    />
    <vs-input
      v-model="password"
      type="password"
      name="password"
      icon-no-border
      icon="icon icon-lock"
      icon-pack="feather"
      label-placeholder="Password"
      class="w-full mt-6"
    />

    <div class="flex flex-wrap justify-between mb-3">
      <vs-button @click="handleSubmit" :disabled="isSending">Login</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
      isSending: false,
    };
  },
  computed: {},

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.isSending = true;
        this.$http
          .post("/api/auth/login", {
            email: this.email,
            password: this.password,
          })

          .then((response) => {
            this.isSending = false;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.access_token);
            this.$store.state.AppActiveUser.user = response.data.user;
            this.$router.push({ path: "/dashboard" });
          })
          .catch((error) => {
            this.isSending = false;
            console.log("error");
            this.$vs.dialog({
              color: "danger",
              title: ``,
              text: "Email ou mot de passe incorrectes",
            });
          });
      }
    },
  },
};
</script>