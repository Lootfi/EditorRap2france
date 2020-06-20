<template>
  <vx-card no-shadow>
    <vs-collapse>
      <vs-collapse-item>
        <div slot="header" class="flex items-center justify-between ">
          <vs-avatar size="150px" :src="avatar" />
          <p class="px-2">Changer la photo de profile</p>
        </div>
        <div style="max-width: 100%;">
          <v-card-text>
            <v-file-input
              class="my-4"
              v-model="selectedFile"
              accept="image/png, image/jpeg"
              placeholder="Selectionner une image"
              :show-size="1024"
              @change="setupCropper"
            ></v-file-input>
            <div class="flex flex-wrap justify-around" v-if="objectUrl">
              <div class=" text-center">
                <div class="image-container ">
                  <img
                    style="max-width:100%; max-height:100%;"
                    class="image-preview"
                    ref="source"
                    :src="objectUrl"
                  />
                </div>
                <div class="d-flex justify-center">
                  <v-btn icon="icon" small="small" @click="resetCropper">
                    <v-icon small="small">mdi-aspect-ratio</v-icon>
                  </v-btn>
                  <div class="mx-2"></div>
                  <v-btn icon="icon" small="small" @click="rotateLeft">
                    <v-icon small="small">mdi-rotate-left</v-icon>
                  </v-btn>
                  <v-btn icon="icon" small="small" @click="rotateRight">
                    <v-icon small="small">mdi-rotate-right</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class=" text-center">
                <div class="image-container ">
                  <img
                    class="image-preview"
                    style="max-width:100%; max-height:100%;"
                    :src="previewCropped"
                  />
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <vs-button
              class="ml-auto mt-2 text-white"
              :disabled="!objectUrl"
              @click="handleAvatarUpload"
            >
              <v-icon left="left">mdi-send</v-icon>
              <span>Changer l'image</span>
            </vs-button>
          </v-card-actions>
        </div>
      </vs-collapse-item>
    </vs-collapse>

    <!-- Info -->
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
import Cropper from "cropperjs";
import debounce from "lodash/debounce";
export default {
  data() {
    return {
      avatar: this.$store.state.AppActiveUser.user.Avatar,
      username: this.$store.state.AppActiveUser.user.username,
      full_name: this.$store.state.AppActiveUser.user.Full_Name,
      email: this.$store.state.AppActiveUser.user.email,
      isSending: false,
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },

  methods: {
    resetCropper() {
      this.cropper.reset();
    },
    rotateLeft() {
      console.log(this.cropper);
      this.cropper.rotate(-90);
    },
    rotateRight() {
      this.cropper.rotate(90);
    },

    setupCropper(selectedFile) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }
      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        this.previewCropped = null;
        return;
      }
      this.objectUrl = window.URL.createObjectURL(selectedFile);
      this.$nextTick(this.setupCropperInstance);
    },
    setupCropperInstance() {
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 1,
        crop: this.debouncedUpdatePreview,
      });
    },
    updatePreview(event) {
      const canvas = this.cropper.getCroppedCanvas();
      this.previewCropped = canvas.toDataURL("image/png");
    },
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
      this.$http
        .post(
          `api/users/${this.$store.state.AppActiveUser.user.slug}/uploadAvatar`,
          { avatar: this.previewCropped },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
        .then((response) => {
          this.objectUrl = null;
          this.previewCropped = null;
          this.cropper = null;
          this.selectedFile = null;
          this.$vs.dialog({
            color: "success",
            title: ``,
            text: "La photo a été mise à jour",
          });
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.$store.state.AppActiveUser.user = response.data.user;
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },
  },
};
</script>