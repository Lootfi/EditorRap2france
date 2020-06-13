<template>
	
<div class="my-4">
	<vs-input class="w-full my-4" label="Titre"  name="title" v-model="title" v-validate="'alpha_spaces|required'" />
	<span class="text-danger text-sm" v-show="errors.has('title')">{{ errors.first('title') }}</span>
	<div id="editorjs" class="bg-white py-4"></div>
	<div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="handleSave" >Save Article</vs-button>
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
export default{

data(){
return{
	editor : null,
	title: '',
}
},
	mounted(){

	this.editor = new EditorJS({

		tools: {
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
	},

	methods: {

			handleSave(e){

				e.preventDefault();
				this.$validator.validateAll().then(result => {
                 if (result) {
				this.editor.save().then((outputData) => {

					this.$http.post(`/api/articles/add-new-article`, {

							data : outputData,
							title : this.title
					},{
						headers:{

						'Authorization': `Bearer ${localStorage.getItem('jwt')}`,

						}
					});
				})
			}
			})

	}

}
}

					 /*var articleImages = [];
					outputData.blocks.map(block => {
					if(block.type =="image"){

						articleImages = [...articleImages,{url : block.data.url , caption : block.data.caption}]
						
						}
					})
					articleImages.map(({url}) => {

					let reader = new FileReader();
					console.log(url)
					reader.readAsDataURL(url);

					})
					return ; */
</script>