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
        <div slot="header" class="flex items-center justify-between ">
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
    <!-- Content Row -->
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">

        <vs-input
          class="w-full mt-4"
          label="Name"
          v-model="data_local.Full_Name"
          name="name"
          v-validate="'alpha_spaces|required'"
        />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{
          errors.first("name")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="Email"
          v-model="data_local.email"
          type="email"
          name="email"
          v-validate="'email|required'"
        />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{
          errors.first("email")
        }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <div class="mt-4">
          <label class="vs-input--label">Status</label>
          <v-select
            v-validate="'required'"
            v-model="data_local.StatusName"
            :clearable="false"
            :options="statusOptions"
            name="status"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
          <span class="text-danger text-sm" v-show="errors.has('status')">{{
            errors.first("status")
          }}</span>
        </div>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select
            v-validate="'required'"
            v-model="data_local.role"
            :clearable="false"
            :options="roleOptions"
            name="role"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
          <span class="text-danger text-sm" v-show="errors.has('role')">{{
            errors.first("role")
          }}</span>
          <vs-textarea
            class="w-full mt-4"
            label="Bio"
            name="biography"
            placeholder="Biographie"
            v-model="data_local.Details.biography"
          />
          <span class="text-danger text-sm" v-show="errors.has('biography')">{{
            errors.first("biography")
          }}</span>
        </div>
      </div>
    </div>

    <!-- Permissions -->
    <vx-card class="mt-base" no-shadow card-border> </vx-card>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleAccountSubmit"
            :disabled="ChangeIsSending"
            >Save Changes</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";


export default {
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),
      avatar: JSON.parse(JSON.stringify(this.data.Avatar)),
      authentificatedUser: this.$store.state.AppActiveUser.user,
      avatarIsSending: false,
      ChangeIsSending: false,
      imgURL: '',
      rotation:0,
      activePrompt:false,

      statusOptions: [
        { label: "Activé", value: "1" },
        { label: "Suspendu", value: "2" },
      ],
      roleOptions: [
        { label: "Administrateur", value: "Admin" },
        { label: "Editeur", value: "Editor" },
      ],
    };
  },
  components: {
    vSelect,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    
    handleAvatarUpload(e) {
      this.avatarIsSending = true;
      const canvas = this.$refs.clipper.clip();
      const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
      this.$http
        .post(
          `/api/users/${this.data.slug}/uploadAvatar`,
          { avatar: ResultAvatar },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((response) => {
          if (this.authentificatedUser.slug == response.data.user.slug) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            this.$store.state.AppActiveUser.user = response.data.user;
          }
          this.avatar = response.data.user.Avatar;
          this.objectUrl = null;
          this.previewCropped = null;
          this.cropper = null;
          this.selectedFile = null;
          this.$vs.dialog({
            color: "primary",
            title: ``,
            text: "La photo a été mise à jour!",
          });
          this.avatarIsSending = false;
        })
        .catch(function(error) {
          this.avatarIsSending = false;
          this.$vs.dialog({
            color: "primary",
            title: ``,
            text: "La photo n'a pas été mise à jour!",
          });
        });
    },

    handleAccountSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.ChangeIsSending = true;
          this.$http
            .post(
              `/api/users/${this.data.slug}/edit`,
              {
                full_name: this.data_local.Full_Name,
                email: this.data_local.email,
                status: this.data_local.StatusName,
                role: this.data_local.role,
                biography: this.data_local.Details.biography,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
            .then((response) => {
              this.ChangeIsSending = false;
              this.$vs.dialog({
                color: "primary",
                title: ``,
                text: "Modification complétée",
              });
            })
            .catch((error) => {
              this.ChangeIsSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Modification Non complétée",
              });
            });
        }
      });
    },
  },
};
</script>
