<template>
	
	<div class="my-4">
	<vs-input class="w-full my-4" label="Titre"  name="title" v-model="title" v-validate="'alpha_spaces|required'" />
	<span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title') }}</span>
	<div id="editorjs" class="bg-white py-4"></div>
	<div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="handleSave" :disable="isSending">Save Article</vs-button>
        </div>
      </div>
    </div>


</div>

</template>
<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import Underline from '@editorjs/underline';
import List from '@editorjs/list';

export default {
data () {
    return {
      editor : null,
	  title: '',
      articleData : null,
      article_not_found: false,
      article_raw: false,
      isDeleting :false,
      isSending:false,
    }
  },
	mounted(){

		this.$http.get(`/api/articles/${this.$route.params.tag}`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }
       })

		.then(response => {
        if(response.data == "Article not found"){

          this.$router.push('/articles')
        }
          this.articleData = response.data

          console.log(response.data);
        if(response.data.ContenuFormat.type == "raw"){

          this.article_raw = true;

        }else{

          this.title =this.articleData.titre
		  this.editor = new EditorJS({

          	data: this.articleData.ContenuFormat.contenu,

		tools: {
			list: {
		      class: List,
		      inlineToolbar: true,
		    },
			underline: Underline,
			header: {
				class: Header,
				shortcut: 'CMD+SHIFT+H',
				inlineToolbar:['link'],
			},
			embed:{ 
			class: Embed,
			inlineToolbar:false,
			},
			quote: {
			      class: Quote,
			      inlineToolbar: true,
			  },
			image: {
		      class: ImageTool,
		      config: {
		        endpoints: {
		          byFile: '/api/articles/uploadImageByFile', // Your backend file uploader endpoint
		          byUrl: '', // Your endpoint that provides uploading by Url
        },
        		field: 'avatar',
        		additionalRequestHeaders: {

        		'Authorization': `Bearer ${localStorage.getItem('jwt')}`,

        		}
      }
    }
		},

	});
        }
			 	

			 	}).catch(function (error) {
          
          console.error(error);
                    });
	},
	methods: {

			handleSave(e){

				e.preventDefault();
				this.$validator.validateAll().then(result => {
                 if (result) {
                this.isSending = true
				this.editor.save().then((outputData) => {

					this.$http.post(`/api/articles/${this.$route.params.tag}/edit`, {

							data : outputData,
							title : this.title
					},{
						headers:{

						'Authorization': `Bearer ${localStorage.getItem('jwt')}`,

						}
					}).then(response => {
					this.isSending = false;
                    this.$router.push(`/articles/${this.$route.params.tag}`)
					}).catch(function (error) {
                      this.isSending = false;
                   	  this.$vs.dialog({
                          color:'danger',
                          title: ``,
                          text: 'Erreur lors de la modification',
                        })
                    });
				})
			}
			})

	}

}

}


</script>