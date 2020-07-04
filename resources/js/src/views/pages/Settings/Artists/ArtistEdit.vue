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
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleSave"
            :disabled="isSending"
            >Sauvegarder l'artiste</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cropper from "cropperjs";
import debounce from "lodash/debounce";

export default {
   data() {
    return {
      name: "",
      avatar: "",
      artistData: null,
      isSending: false,
      imgURL: "",
      rotation: 0

    };
  },
  mounted() {
    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait",
    });

    this.$http
      .get(`/api/settings/artists/${this.$route.params.slug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        if (response.data == "Artist not found") {
          this.$router.push("/settings/artists");
        }
        this.$vs.loading.close();

        this.artistData = response.data;
        this.name = this.artistData.name;
      })
      .catch(function(error) {
        console.error(error);
      });
  },
  methods: {
    handleSave(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
            this.isSending = true;
            const canvas = this.$refs.clipper.clip();
            const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
            this.$http
              .post(
                `/api/settings/artists/${this.$route.params.slug}/edit`,
                {
                  name: this.name,
                  avatar: ResultAvatar,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                  },
                }
              )
              .then((response) => {
                this.isSending = false;
                this.$router.push(`/artists/${response.data.slug}`);
              })
              .catch(function(error) {
                this.isSending = false;
                this.$vs.dialog({
                  color: "danger",
                  title: ``,
                  text: "Erreur lors de la modification",
                });
              });
        }
      });
    },
}
}
</script>