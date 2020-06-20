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
            placeholder="Modifier l'image principale de l'article "
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
    </div>
    <div class="mt-4">
      <label class="vs-input--label">Categorie</label>
      <v-select v-model="category" :options="options" />
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
    <div class="mt-4">
      <label class="vs-input--label">Artists</label>
      <v-select
        multiple
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
        v-model="artists"
        :options="artistOptions"
      />
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
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Underline from "@editorjs/underline";
import List from "@editorjs/list";
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
      articleData: null,
      article_not_found: false,
      article_raw: false,
      category: null,
      hashtags: null,
      artists: null,
      isDeleting: false,
      isSending: false,
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      selectedFile: null,
      selected: null,
      options: [],
      hashtagOptions: [],
      artistOptions: [],
      debouncedUpdatePreview: debounce(this.updatePreview, 257),
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  mounted() {
    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait",
    });

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
      })
      .catch((error) => {
        console.error(error);
      });

    this.$http
      .get(`/api/settings/hashtags`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        response.data.map((hashtag) => {
          this.hashtagOptions = [
            ...this.hashtagOptions,
            { label: hashtag.nom, value: hashtag.id },
          ];
        });
      })
      .catch((error) => {
        console.error(error);
      });

    this.$http
      .get(`/api/settings/artists`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        response.data.map((artist) => {
          this.artistOptions = [
            ...this.artistOptions,
            { label: artist.name, value: artist.id },
          ];
        });
      })
      .catch((error) => {
        console.error(error);
      });

    this.$http
      .get(`/api/articles/${this.$route.params.tag}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })

      .then((response) => {
        if (
          response.data == "Article not found" ||
          response.data.Creator.email != this.activeUserInfo.user.email
        ) {
          this.$router.push("/articles");
        }
        this.$vs.loading.close();

        this.articleData = response.data;

        if (response.data.ContenuFormat.type == "raw") {
          this.article_raw = true;
          this.$router.push(`/articles/${this.$route.params.tag}`);
        } else {
          this.title = this.articleData.titre;
          this.options.map((option) => {
            if (option.value === this.articleData.Category.id) {
              this.category = { label: option.label, value: option.value };
            }
          });

          this.articleData.Hashtags.map((hashtag) => {
            if (!this.hashtags) {
              this.hashtags = [{ label: hashtag.nom, value: hashtag.id }];
            } else {
              this.hashtags = [
                ...this.hashtags,
                { label: hashtag.nom, value: hashtag.id },
              ];
            }
          });

          this.articleData.Artists.map((artist) => {
            if (!this.artists) {
              this.artists = [{ label: artist.name, value: artist.id }];
            } else {
              this.artists = [
                ...this.artists,
                { label: artist.name, value: artist.id },
              ];
            }
          });

          this.editor = new EditorJS({
            data: this.articleData.ContenuFormat.contenu,

            tools: {
              Marker: {
                class: Marker,
                shortcut: "CMD+SHIFT+M",
              },
              list: {
                class: List,
                inlineToolbar: true,
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
        }
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
    },

    handleSave(e) {
      e.preventDefault();
      console.log(this.artists);
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          this.editor.save().then((outputData) => {
            console.log(this.hashtags);
            this.$http
              .post(
                `/api/articles/${this.$route.params.tag}/edit`,
                {
                  data: outputData,
                  title: this.title,
                  avatar: this.avatar,
                  category: this.category.value,
                  hashtags: this.hashtags,
                  artists: this.artists,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                  },
                }
              )
              .then((response) => {
                this.isSending = false;
                this.$router.push(`/articles/${this.$route.params.tag}`);
              })
              .catch(function(error) {
                this.isSending = false;
                this.$vs.dialog({
                  color: "danger",
                  title: ``,
                  text: "Erreur lors de la modification",
                });
              });
          });
        }
      });
    },
  },
};
</script>