<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">

    <!-- Avatar Row -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="flex items-start flex-col sm:flex-row">
          <img :src="avatar" class="mr-8 rounded h-24 w-24" />
          <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
          <div>
            <p class="text-lg font-medium mb-2 mt-4 sm:mt-0">{{ data_local.Full_Name  }}</p>
            <input type="file" class="hidden" ref="update_avatar_input" @change="onFileChange" accept="image/*" name="avatar">
            <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button>
          <vs-button type="border" color="danger" @click="handleAvatarUpload" :disabled="avatarIsSending">Apply</vs-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input class="w-full mt-4" label="Username" v-model="data_local.username" name="username" v-validate="'alpha_num|required'" />
        <span class="text-danger text-sm" v-show="errors.has('username')">{{ errors.first('username') }}</span>
        

        <vs-input class="w-full mt-4" label="Name" v-model="data_local.Full_Name" name="name" v-validate="'alpha_spaces|required'"  />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
        

        <vs-input class="w-full mt-4" label="Email" v-model="data_local.email" type="email"  name="email" v-validate="'email|required'"  />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        
      </div>

      <div class="vx-col md:w-1/2 w-full">

        <div class="mt-4">
          <label class="vs-input--label">Status</label>
          <v-select  v-validate="'required'" v-model="data_local.StatusName" :clearable="false" :options="statusOptions" 
           name="status" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
           <span class="text-danger text-sm" v-show="errors.has('status')">{{ errors.first('status') }}</span>
         
        </div>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select v-validate="'required'" v-model="data_local.role" :clearable="false" :options="roleOptions" name="role" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
          <span class="text-danger text-sm" v-show="errors.has('role')">{{ errors.first('role') }}</span>
          
        </div>

       
      </div>
    </div>

    <!-- Permissions -->
    <vx-card class="mt-base" no-shadow card-border>

    </vx-card>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button class="ml-auto mt-2" @click="handleAccountSubmit" :disabled="ChangeIsSending" >Save Changes</vs-button>
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

      data_local: JSON.parse(JSON.stringify(this.data)),
      avatar : JSON.parse(JSON.stringify(this.data.Avatar)),
      authentificatedUser : this.$store.state.AppActiveUser.user,
      avatarIsSending : false,
      ChangeIsSending : false,


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
  methods: {
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
                    this.avatar = e.target.result;
                };
                reader.readAsDataURL(file);
            },

      handleAvatarUpload(e){


                  this.avatarIsSending = true;
                 this.$http.post(`/api/users/${this.data.slug}/uploadAvatar`,{avatar : this.avatar},{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
                 .then(response => {

                    if(this.authentificatedUser.slug == response.data.user.slug){
                      localStorage.setItem('user',JSON.stringify(response.data.user))
                      this.$store.state.AppActiveUser.user = response.data.user;
                    }
                    this.$vs.dialog({
                          color:'primary',
                          title: ``,
                          text: 'La photo a été mise à jour!',
                        })
                  this.avatarIsSending = false;

                    }).catch(function (error) {
                    
                      this.avatarIsSending = false;
                      this.$vs.dialog({
                          color:'primary',
                          title: ``,
                          text: "La photo n'a pas été mise à jour!",
                        })
                    });
  
              },


      handleAccountSubmit(e){

                e.preventDefault();
                this.$validator.validateAll().then(result => {
                if (result) {
                this.ChangeIsSending = true
                this.$http.post(`/api/users/${this.data.slug}/edit`, {
                        username: this.data_local.username,
                        full_name: this.data_local.Full_Name,
                        email: this.data_local.email,
                        status: this.data_local.StatusName,
                        role : this.data_local.role,
                    },{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
                .then(response => {

                    this.ChangeIsSending = false;
                    this.$vs.dialog({
                          color:'primary',
                          title: ``,
                          text: 'Modification complétée',
                        })

                }).catch(error =>  {

                    this.ChangeIsSending = false;
                    this.$vs.dialog({
                          color:'danger',
                          title: ``,
                          text: 'Modification Non complétée',
                        })
                    });
      }
})
}
}
}

</script>
