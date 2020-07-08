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
    <div class="my-4">
        <clipper-upload class="inline-block p-2 my-2 bg-primary rounded text-white" v-validate="'required'" v-model="imgURL" name="image">Importer L'image de l'article</clipper-upload>
      <span class="text-danger text-sm" v-show="errors.has('image')">{{errors.first("image") }}</span>
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
      <div class="ml-5 col-md-6"">
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
      Scheduled:false,
      Featured:false,
      category: null,
      text: "",
      hashtags: null,
      artists: null,
      isSending: false,
      imgURL: '',
      rotation:0,
      selected: [],
      options: [],
      artistOptions: [],
      hashtagOptions: [],
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
            }
    };

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

        this.selected = this.options[0];
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

          this.$vs.loading.close();
        });
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
          config: {

            services: {

              html: "<iframe height='900' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
              height: 900,
              width: 600,

              
            }
              

          }
          

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
            const embedInstagram = `<iframe width="${block.data.width}" height="900px" src="${block.data.embed}" frameborder="0"></iframe><p class="text-center mt-2 font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 text-center">${embedInstagram}</div>`;
          }
          if (block.data.service == "youtube") {
            const embedYoutube = `<iframe width="${block.data.width}" height="${block.data.height}" src="${block.data.embed}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p class="text-center font-bold">${block.data.caption}</p>`;
            rawHtml = `${rawHtml}<div class="my-4 mx-auto text-center">${embedYoutube}</div>`;
          }

          if (block.data.service == "twitter") {
            const embedTwitter = `<iframe border=0 frameborder=0 height="${block.data.height}" width="${block.data.width}"
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
        if (result) {
          this.isSending = true;
          this.editor.save().then((outputData) => {
            const canvas = this.$refs.clipper.clip();
            const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
            this.$http
              .post(
                `/api/articles/add-new-article`,
                {
                  data: outputData,
                  avatar: ResultAvatar,
                  title: this.title,
                  category: this.category.value,
                  hashtags: this.hashtags,
                  artists: this.artists,
                  formattedJsonContent: this.JsonFormatter(outputData),
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
                this.$router.push("/articles");
              });
          });
        }
      });
    },
  },
};
</script>