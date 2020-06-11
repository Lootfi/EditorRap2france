<template>
  <vx-card no-shadow>

    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="avatar" size="70px" class="mr-4 mb-4" />
      <div>
        <input type="file" class="hidden"  ref="update_avatar_input" name="avatar" @change="onFileChange" />
        <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button>
        <vs-button type="border" color="danger" @click="handleAvatarUpload">Apply</vs-button>
        <p class="text-sm mt-2">Accepte JPG, GIF or PNG. la taille maximale est 800kB</p>

      </div>
      <div>
      </div>
    </div>

    <!-- Info -->
    <vs-input class="w-full "  name="username" v-validate="'alpha_num|required'"  label-placeholder="Nom d'utilisateur" v-model="username" />  
      <span class="text-danger text-sm" v-show="errors.has('username')">{{ errors.first('username') }}</span>

    <vs-input class="w-full mt-base" name="name" v-validate="'alpha_spaces|required'" label-placeholder="Nom" v-model="full_name" />
    <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>

    <vs-input class="w-full mt-base" v-validate="'required|email'" label-placeholder="Email" v-model="email" name="email"/>
    <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>


    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="handleSubmit" :disabled="isSending">Enregistrer</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data () {

    return {
      avatar : this.$store.state.AppActiveUser.user.Avatar,
      username: this.$store.state.AppActiveUser.user.username,
      full_name: this.$store.state.AppActiveUser.user.Full_Name,
      email: this.$store.state.AppActiveUser.user.email,
      isSending : false,
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  },

  methods: {
    handleSubmit(e){
      e.preventDefault();
      this.$validator.validateAll().then(result => {
      if (result) {
      this.isSending = true
     this.$http.post(`/api/users/${this.$store.state.AppActiveUser.user.slug}/edit`, {
                        username: this.username,
                        full_name: this.full_name,
                        email: this.email
                    },{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })

                    .then(response => {

                      localStorage.setItem('user',JSON.stringify(response.data.user))
                      this.$store.state.AppActiveUser.user = response.data.user;
                      this.isSending = false;
                    this.$vs.dialog({
                          color:'primary',
                          title: ``,
                          text: 'Modification complétée',
                        })

                    }).catch(function (error) {
                      this.isSending = false;
                    this.$vs.dialog({
                          color:'danger',
                          title: ``,
                          text: 'Modification non complétée',
                        })
                    });
                  }

                })

  },
        onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.avatar = e.target.result;
                };
                reader.readAsDataURL(file);
            },
      handleAvatarUpload(e){

                  
                 this.$http.post(`api/users/${this.$store.state.AppActiveUser.user.slug}/uploadAvatar`,{avatar : this.avatar})
                 .then(response => {
                      localStorage.setItem('user',JSON.stringify(response.data.user))
                      this.$store.state.AppActiveUser.user = response.data.user;

                    }).catch(function (error) {
                        console.error(error.response);
                    });
  
              }
}
}
</script>
