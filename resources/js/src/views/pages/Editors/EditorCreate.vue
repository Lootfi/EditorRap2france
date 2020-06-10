<template>
	

  <div id="page-user-view">

  	<!-- Content Row -->
  	<vs-card>
  	<div slot="header">
        <h3>
          Créer Un editeur
        </h3>
     </div>
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" label="Nom d'utilisateur"  name="username" v-model="username" />
        <vs-input class="w-full mt-4" label="Nom"  name="name" v-model="name" />
        <vs-input class="w-full mt-4" label="Email" type="email"  name="email" v-model="email" />
        <vs-input class="w-full mt-4" label="Mot de passe" type="password"  name="password" v-model="password" />
        <vs-input class="w-full mt-4" label="Confirmation du mot de passe" type="password" v-model="confirmPassword"  name="confirmPassword" />
        <vs-textarea  class="w-full mt-4" label="Bio" placeholder="Your bio..." v-model="biography"/>
      </div>

      <div class="vx-col md:w-1/2 w-full">
		<vs-input class="w-full mt-4" label="Adresse" v-model="adresse"  name="adresse" />
        <vs-input class="w-full mt-4" label="Pays" v-model="country" name="country" />
        <vs-input class="w-full mt-4" label="Mobile" v-model="mobile"  name="mobile" />
        <div class="mt-4">
          <label class="vs-input--label">Etat</label>
          <v-select :clearable="false" :options="statusOptions" 
           name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="status" />
         
        </div>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select :clearable="false" :options="roleOptions" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" v-model="role"/>
          
        </div>
        <div class="mt-4">
            <label class="text-sm">Sexe</label>
            <div class="mt-2">
              <vs-radio vs-value="Male" v-model="gender" class="mr-4">Male</vs-radio>
              <vs-radio vs-value="Female" v-model="gender" class="mr-4">Female</vs-radio>
            </div>
          </div>
       
       
      </div>
    </div>

    <!-- Avatar Row -->
    <div class="vx-row my-4">
      <div class="vx-col w-full">
        <div class="flex items-start items-center flex-col sm:flex-row">
          <vs-avatar :src="avatar" size="80px" class="mr-4" />
            <input type="file" class="hidden" ref="update_avatar_input" @change="onFileChange" accept="image/*" name="avatar">
            <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()" >Add Avatar</vs-button>
        </div>
      </div>
    </div>
</vs-card>
<div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="handleAccountSubmit" >Save Changes</vs-button>
        </div>
      </div>
    </div>
</div>


</template>

<script>
	import vSelect from 'vue-select'

export default {
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      username : '',
      name :'',
      email: '',
      password: '',
      confirmPassword: '',
      biography:'',
      status: '',
      role:'',
      country :'',
      mobile:'',
      adresse:'',
      gender:'',
      avatar:'',
      statusOptions: [
        { label: 'Activé', value: '1' },
        { label: 'Suspendu', value: '2' }
      ],
      roleOptions: [
        { label: 'Administrateur', value: 'Admin' },
        { label: 'Editeur', value: 'Editor' },
      ]
    }
  },

  methods :{

  	 onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                	console.log(this.avatar);
                    this.avatar = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            handleAccountSubmit(e){
            	console.log('hey');
                e.preventDefault();
                this.$http.post(`/api/users/add-new-user`, {
                        username: this.username,
                        full_name: this.name,
                        email: this.email,
                        status: this.status,
                        role : this.role,
					    password: this.password,
					    biography:this.biography,
					    country :this.country,
					    mobile:this.mobile,
					    adresse:this.adresse,
					    gender:this.gender,
					    avatar:this.avatar,
                    })
                .then(response => {

                    console.log(response.data)
                })
      }

  }
}
</script>