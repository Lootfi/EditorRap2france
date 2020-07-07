<template>
  <vx-card no-shadow>
        <div  style="margin-bottom:4rem;" class=" flex items-center justify-between ">
          <vs-avatar size="150px" :src="avatar" />
          <vs-button @click="activePrompt = true" >Changer la photo de profile</vs-button>
        </div>
        <vs-prompt
            title="Changer La photo"
            @cancel="val=''"
            @accept="handleAvatarUpload"
            @close="close"
            :active.sync="activePrompt">
            <div class="con-exemple-prompt">
             <div class="my-4">
              <clipper-upload class="inline-block p-2 my-2 bg-primary rounded text-white" v-model="imgURL">Importer La photo de l'éditeur</clipper-upload>
              <div class="flex" style="max-width: 100%;">
              <clipper-basic 
              class=" flex-grow-3"
              ref="clipper" 
              :src="imgURL" 
              preview="my-preview"
              :rotate="rotation">
              </clipper-basic>
              <clipper-preview name="my-preview" class="flex-grow-2 ml-2 my-clipper" >
              </clipper-preview>
            </div>
             <div class="centerx" v-if="imgURL">
       <vs-input-number min="0" max="360" step="90" v-model="rotation" label="Rotation"/>
      </div>
            </div>
            </div>
        </vs-prompt>

    <vs-input
      class="w-full "
      name="username"
      v-validate="'alpha_num|required'"
      label-placeholder="Nom d'utilisateur"
      v-model="username"
    />
    <span class="text-danger text-sm" v-show="errors.has('username')">{{
      errors.first("username")
    }}</span>

    <vs-input
      class="w-full mt-base"
      name="name"
      v-validate="'alpha_spaces|required'"
      label-placeholder="Nom"
      v-model="full_name"
    />

    
    <span class="text-danger text-sm" v-show="errors.has('name')">{{
      errors.first("name")
    }}</span>

    <vs-input
      class="w-full mt-base"
      v-validate="'required|email'"
      label-placeholder="Email"
      v-model="email"
      name="email"
    />
    <span class="text-danger text-sm" v-show="errors.has('email')">{{
      errors.first("email")
    }}</span>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button
        class="ml-auto mt-2"
        @click="handleSubmit"
        :disabled="isSending"
        >Enregistrer</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      avatar: this.$store.state.AppActiveUser.user.Avatar,
      username: this.$store.state.AppActiveUser.user.username,
      full_name: this.$store.state.AppActiveUser.user.Full_Name,
      email: this.$store.state.AppActiveUser.user.email,
      isSending: false,
      imgURL: '',
      activePrompt:false,
      rotation:0,
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
          this.isSending = true;
          this.$http
            .post(
              `/api/users/${this.$store.state.AppActiveUser.user.slug}/edit`,
              {
                username: this.username,
                full_name: this.full_name,
                email: this.email,
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
    handleAvatarUpload(e) {
      const canvas = this.$refs.clipper.clip();
      const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
      this.$http
        .post(
          `api/users/${this.$store.state.AppActiveUser.user.slug}/uploadAvatar`,
          { avatar: ResultAvatar
           },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((response) => {
        
          this.$vs.dialog({
            color: "success",
            title: ``,
            text: "La photo a été mise à jour",
          });
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.$store.state.AppActiveUser.user = response.data.user;
          this.avatar = response.data.user.Avatar
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },
  },
};
</script>