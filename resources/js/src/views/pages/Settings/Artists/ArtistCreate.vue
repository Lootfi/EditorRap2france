<template>
  <div id="page-user-view">
    <!-- Content Row -->
    <vs-card>
      <div slot="header">
        <h3>
          Créer Un Artist
        </h3>
      </div>
      <div class="vx-row">
        <div class="vx-col md:w-1/2 w-full">
          <vs-input
            class="w-full mt-4"
            label="Nom"
            name="name"
            v-model="name"
            v-validate="'alpha_spaces|required'"
          />
          <span class="text-danger text-sm" v-show="errors.has('name')">{{
            errors.first("name")
          }}</span>
        </div>
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
      </div>
    </vs-card>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleAccountSubmit"
            :disable="isSending"
            >Save Changes</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Cropper from "cropperjs";
import debounce from "lodash/debounce";

export default {
  components: {
    Cropper,
    vSelect,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      avatar: "",
      isSending: "",
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
    };
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
      this.avatar = this.previewCropped;
    },

    handleAccountSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          this.$http
            .post(
              `/api/settings/artists/add-new-artist`,
              {
                name: this.name,
                avatar: this.avatar,
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
                text: "Artiste crée ! ",
              });
              this.$router.push("/settings/artists");
            })
            .catch(function(error) {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Erreur lors de la création",
              });
            });
        }
      });
    },
  },
};
</script>