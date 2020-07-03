<template>
  <div class="my-4">
    <vs-input
      class="w-full my-4"
      label="Titre"
      name="title"
      v-model="title"
      v-validate="'required'"
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

    <vs-collapse>
    <vs-collapse-item>
    <div slot="header">
      Réglages avancés 
    </div>
      <div class="flex items-center ">
      <div class="col-md-4">
        <label class="vs-input--label">Programmer La publication</label>
        <vs-switch v-model="Scheduled" />
      </div>
      <div class="ml-5 col-md-6">
        <label class="vs-input--label">Date de publication</label>
        <flat-pickr class="block w-full" :disabled="!Scheduled" :config="configdateTimePickerPublish" v-model="publishTime" placeholder="Date de publication" />
      </div>
      </div>
      <div class="flex items-center ">
      <div class="col-md-4">
        <label class="vs-input--label">Publication à la une </label>
        <vs-switch v-model="Featured" />
      </div>
      <div class="ml-5 col-md-6"">
        <label class="vs-input--label">Date de la promotion</label>
        <flat-pickr class="block w-full" :disabled="!Featured" :config="configdateTimePickerfeatured" v-model="featuredRange" placeholder="Date de promotion" />
      </div>
      </div>
      </vs-collapse-item>
  </vs-collapse>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="handleSave"
            :disabled="isSending"
            >Save Article
          </vs-button>
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
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  components: {
    "v-select": vSelect,
    flatPickr


  },
  data() {
    return {
      editor: null,
      title: "",
      avatar: "",
      text: "",
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
      Scheduled:false,
      Featured:false,
      selectedFile: null,
      selected: null,
      options: [],
      formattedJsonContent:null,
      hashtagOptions: [],
      artistOptions: [],
      publishTime: null,
      configdateTimePickerPublish: {
              enableTime: true,
              dateFormat: 'Y-m-d H:i:s',
              minDate: "today",
              minTime: Date.now(),
              enableSeconds: true,
            },
      featuredRange: null,
      configdateTimePickerfeatured: {
              mode:"range",
              enableTime: true,
              dateFormat: 'Y-m-d H:i:s',
              minDate: "today",
              minTime: Date.now(),
              enableSeconds: true,
            },
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
          if(this.articleData.status == 1){

            this.publishTime = this.articleData.dateactu
            this.Scheduled = true
          }
          if(this.articleData.IsFeatured){

            this.featuredRange = `${this.articleData.IsFeatured['date_start']} to ${this.articleData.IsFeatured['date_end']}`
            console.log(this.Featured);
            this.Featured = true

          }

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
     JsonFormatter(Data) {
      var content = Data;
      var rawHtml = "";
      content.blocks.map((block) => {
        if (block.type == "paragraph") {
          rawHtml = `${rawHtml}<div class="my-4"><p>${block.data.text}</p></div>`;
          this.text = `${this.text} ${block.data.text}`

        }
        if (block.type == "list") {
          if (block.data.style == "ordered") {
            var listItems = "";
            block.data.items.map((item) => {
              listItems = `${listItems}<li>${item}</li>`;
            });

            rawHtml = `${rawHtml}<div class="m-4"><ol style="list-style-type:decimal;" >${listItems}</ol></div>`;
            console.log(rawHtml);
          }
          if (block.data.style == "unordered") {
            var listItems = "";
            block.data.items.map((item) => {
              listItems = `${listItems}<li>${item}</li>`;
            });

            rawHtml = `${rawHtml}<div class="m-4"><ul style="list-style-type:disc;">${listItems}</ul></div>`;
          }
        }

        if (block.type == "header") {
          rawHtml = `${rawHtml}<div class="my-4"><h${block.data.level}>${block.data.text}</h${block.data.level}></div>`;
        }
        if (block.type == "quote") {
          rawHtml = `${rawHtml}<div class="my-4">
                <blockquote class="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
                       <div style="font-size: 5rem; right: 100%;" class="mr-2 font-dank-mono text-neutral-500 absolute top-0 leading-none;" aria-hidden="true">
                         &ldquo;
                      </div>
                              <p class="mb-4 text-3xl italic">${block.data.text}</p>
                              <cite class="flex items-center">
                              <div class="flex flex-col items-start">
                                <span class="mb-1 text-sm italic font-bold">
                                Said By 
                                  ${block.data.caption}
                                </span>
                              </div>
                              </cite>
                      </blockquote></div>`;
        }
        if (block.type == "image") {
          if (block.data.file) {
            rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.file.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`;
          }
          if (block.data.url) {
            rawHtml = `${rawHtml}<div class="my-4 "><img style="max-width:100%;" src="${block.data.url}" />
              <p class="text-center mt-2 font-bold">${block.data.caption}</p>
              </div>`;
          }
        }

        if (block.type == "embed") {
          if (block.data.service == "instagram") {
            const embedInstagram = `<iframe src="${block.data.embed}" width="${block.data.width}" height="${block.data.height}" frameborder="0"></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 text-center">${embedInstagram}</div>`;
          }
          if (block.data.service == "youtube") {
            const embedYoutube = `<iframe src="${block.data.embed}" width="${block.data.width}" height="${block.data.height}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="text-center font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedYoutube}</div>`;
          }

          if (block.data.service == "twitter") {
            const embedTwitter = `<iframe border=0 frameborder=0 width="${block.data.width}" height="${block.data.height}"
                    src=${block.data.embed}></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedTwitter}</div>`;
          }
        }
      });

      return rawHtml;
    },
    handleSave(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        this.isSending = true;
        if (result) {
          this.editor.save().then((outputData) => {
            this.$http
              .post(
                `/api/articles/${this.$route.params.tag}/edit`,
                {
                  data: outputData,
                  title: this.title,
                  avatar: this.avatar,
                  category: this.category.value,
                  hashtags: this.hashtags,
                  formattedJsonContent : this.JsonFormatter(outputData),
                  artists: this.artists,
                  text: this.text,
                  dateactu : this.publishTime,
                  featured : this.featuredRange


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