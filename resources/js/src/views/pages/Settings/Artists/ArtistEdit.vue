<template>
  <div class="my-4">
    <vs-input
      class="w-full my-4"
      label="Nom"
      name="name"
      v-model="name"
      v-validate="'required'"
    />
    <span class="text-danger text-sm" v-show="errors.has('name')">{{
      errors.first("name")
    }}</span>
    <div>
      <div style="max-width: 100%;">
        <v-card-text>
          <v-file-input
            class="my-4"
            v-model="selectedFile"
            accept="image/png, image/jpeg"
            placeholder="Modifier l'image de l'artiste"
            :show-size="1024"
            @change="setupCropper"
          ></v-file-input>
          <div class="flex flex-wrap justify-around" v-if="objectUrl">
            <div class=" text-center">
              <div class="inline-block">
                <img
                  style="max-height: 299px;"
                  class="block max-w-full"
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
              <div class="inline-block ">
                <img
                  style="max-height: 299px;"
                  class="block max-w-full"
                  :src="previewCropped"
                />
              </div>
            </div>
          </div>
        </v-card-text>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            :disable="isSending"
            >Sauvegarder l'artiste</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      name: "",
      avatar: "",
      artistData: null,
      isSending: false,
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
    };
  },
  mounted() {
    this.$http
      .get(`/api/settings/artists/${this.$route.params.slug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        if (response.data == "Artist not found") {
          this.$router.push("/artists");
        }

        this.artistData = response.data;
        this.name = this.artistData.name;
      })
      .catch(function(error) {
        console.error(error);
      });
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
    }
}
}
</script>