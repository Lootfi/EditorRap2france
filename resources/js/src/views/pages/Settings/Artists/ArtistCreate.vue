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
    </vs-card>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleAccountSubmit"
            :disabled="isSending"
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
      isSending: false,
      imgURL: "",
      rotation:0,
    };
  },

  methods: {

    handleAccountSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          const canvas = this.$refs.clipper.clip();
          const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
          this.$http
            .post(
              `/api/settings/artists/add-new-artist`,
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