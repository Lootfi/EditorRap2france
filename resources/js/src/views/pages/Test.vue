<template>
	<div>
	<vs-input name="link" v-model="link" type="text" />
	<vs-button  @click="handleSave">Click</vs-button>
</div>
</template>

<script>
	
	export default {

data() {

    return {

      link: "",
  }

  },
  methods : {

  	handleSave(e){

  		this.$http
            .post(
              `/api/TestForm`,
              {
                link: this.link,
                
              })
            .then(response => {

            	console.log(response)
            })
  	}
  }

	}

</script>