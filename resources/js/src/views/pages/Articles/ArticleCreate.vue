<template>
  <div class="my-4">
    <vs-input
      class="w-full my-4"
      label="Titre"
      name="title"
      v-model="title"
      v-validate="'alpha_spaces|required'"
    />
    <span class="text-danger text-sm" v-show="errors.has('title')">{{
      errors.first("title")
    }}</span>
    <div id="editorjs" class="bg-white py-4"></div>
    <div>
      <div style="max-width: 100%;">
        <v-card-text>
          <v-file-input
            class="my-4"
            v-model="selectedFile"
            accept="image/png, image/jpeg"
            placeholder="Selectionner une image principale de l'article "
            :show-size="1024"
            @change="setupCropper"
          ></v-file-input>
          <div class="flex flex-wrap justify-around" v-if="objectUrl">
            <div class=" text-center">
              <div class="image-container ">
                <img
                  style="max-width:100%; height:auto;"
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
                  style="max-width:100%; height:auto;"
                  :src="previewCropped"
                />
              </div>
            </div>
          </div>
        </v-card-text>
      </div>
      <div class="mt-4">
        <label class="vs-input--label">Categorie</label>
        <v-select v-model="category" :selected="selected" :options="options" />
      </div>
      <div class="mt-4">
        <label class="vs-input--label">Hashtags</label>
        <v-select
          multiple
          taggable
          push-tags
          :dir="$vs.rtl ? 'rtl' : 'ltr'"
          v-model="hashtags"
          :options="hashtagOptions"
        />
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleSave"
            :disable="isSending"
            >Save Article</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import Underline from "@editorjs/underline";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Cropper from "cropperjs";
import debounce from "lodash/debounce";
import vSelect from "vue-select";

export default {
  components: {
    "v-select": vSelect,
  },
  data() {
    return {
      editor: null,
      title: "",
      avatar: "",
      category: null,
      hashtags: null,
      isSending: false,
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      selectedFile: null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
      selected: [],
      options: [],
      hashtagOptions: [],
    };
  },
  mounted() {
    this.$http
      .get(`/api/settings/categories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        response.data.map((category) => {
          this.options = [
            ...this.options,
            { label: category.nom, value: category.id },
          ];
        });

        this.selected = this.options[0];
      })
      .catch((error) => {
        console.error(error);
      });

    this.editor = new EditorJS({
      placeholder: "Start Writing here",
      tools: {
        list: {
          class: List,
          inlineToolbar: true,
        },
        Marker: {
          class: Marker,
          shortcut: "CMD+SHIFT+M",
        },
        underline: Underline,
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          inlineToolbar: ["link"],
        },
        embed: {
          class: Embed,
          inlineToolbar: false,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "/api/articles/uploadImageByFile", // Your backend file uploader endpoint
              byUrl: "", // Your endpoint that provides uploading by Url
            },
            field: "avatar",
            additionalRequestHeaders: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          },
        },
      },
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
    },

    handleSave(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          this.editor.save().then((outputData) => {
            this.$http.post(
              `/api/articles/add-new-article`,
              {
                data: outputData,
                avatar: this.avatar,
                title: this.title,
                category: this.category.value,
                hashtags: this.hashtags.value
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            );
          });
        }
      });
    },
  },
};
</script>