<template>
  <vx-card no-shadow>

    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="activeUserInfo.photoURL" size="70px" class="mr-4 mb-4" />
      <div>
        <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        <p class="text-sm mt-2">Accepte JPG, GIF or PNG. la taille maximale est 800kB</p>
      </div>
    </div>

    <!-- Info -->
    <vs-input class="w-full mb-base" label-placeholder="Nom d'utilisateur" v-model="username"></vs-input>
    <vs-input class="w-full mb-base" label-placeholder="Nom" v-model="full_name"></vs-input>
    <vs-input class="w-full" label-placeholder="Email" v-model="email"></vs-input>


    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="handleSubmit">Enregistrer</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data () {

    return {
      username: this.$store.state.AppActiveUser.user.username,
      full_name: this.$store.state.AppActiveUser.user.Full_Name,
      email: this.$store.state.AppActiveUser.user.email,
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },

  methods: {
    handleSubmit(e){
      console.log('hey')
      e.preventDefault();
     this.$http.post(`/api/users/${this.$store.state.AppActiveUser.user.slug}/edit`, {
                        username: this.username,
                        full_name: this.full_name,
                        email: this.email
                    })

                    .then(response => {

                      localStorage.setItem('user',JSON.stringify(response.data.user))

                    }).catch(function (error) {
                        console.error(error.response);
                    });

  }}
}
</script>
