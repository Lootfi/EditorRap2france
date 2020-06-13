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
      
        <vs-collapse>
          <vs-collapse-item>
            <div slot="header" class="flex items-center justify-between ">
               <vs-avatar size="150px" :src="avatar"/>
               <p class="px-2">Changer la photo de profile</p>
              </div>
      <div style="max-width: 100%;">
          <v-card-text>
            <v-file-input class="my-4" v-model="selectedFile" accept="image/png, image/jpeg" placeholder="Selectionner une image" :show-size="1024" @change="setupCropper"></v-file-input>
            <div class="flex flex-wrap justify-around" v-if="objectUrl">
              <div  class=" text-center">
                <div class="image-container ">
                  <img style="max-width:100%; max-height:100%;" class="image-preview" ref="source" :src="objectUrl"/>
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
              <div  class=" text-center" >
                <div class="image-container ">
                  <img class="image-preview" style="max-width:100%; max-height:100%;" :src="previewCropped"/>
                </div>
              </div>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <vs-button class="ml-auto mt-2 text-white" :disabled="!objectUrl"  @click="handleAvatarUpload">
              <v-icon left="left">mdi-send</v-icon>
              <span>Changer l'image</span>
            </vs-button>
          </v-card-actions>
        </div>

    </vs-collapse-item>
  </vs-collapse>
        

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
import Cropper from 'cropperjs'
import debounce from 'lodash/debounce'

export default {
  data () {

    return {

      data_local: JSON.parse(JSON.stringify(this.data)),
      avatar : JSON.parse(JSON.stringify(this.data.Avatar)),
      authentificatedUser : this.$store.state.AppActiveUser.user,
      avatarIsSending : false,
      ChangeIsSending : false,
      objectUrl:null,
      previewCropped:null,
      cropper: null,
      selectedFile:null,
      debouncedUpdatePreview: debounce(this.updatePreview, 257),


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
  components: {
    vSelect
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  
  methods: {
  
    resetCropper () {
      this.cropper.reset()
    },
    rotateLeft () {
      console.log(this.cropper)
      this.cropper.rotate(-90)
    },
    rotateRight () {
      this.cropper.rotate(90)
    },

    setupCropper (selectedFile) {
      if (this.cropper) {
        this.cropper.destroy()
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl)
      }
      if (!selectedFile) {
        this.cropper = null
        this.objectUrl = null
        this.previewCropped = null
        return
      }
      this.objectUrl = window.URL.createObjectURL(selectedFile)
      this.$nextTick(this.setupCropperInstance)
    },
    setupCropperInstance () {
      this.cropper = new Cropper(this.$refs.source, {
        aspectRatio: 1,
        crop: this.debouncedUpdatePreview
      })
    },
    updatePreview (event) {
      const canvas = this.cropper.getCroppedCanvas()
      this.previewCropped = canvas.toDataURL('image/png')
    },

      handleAvatarUpload(e){


                  this.avatarIsSending = true;
                 this.$http.post(`/api/users/${this.data.slug}/uploadAvatar`,{avatar : this.previewCropped},{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
                 .then(response => {

                    if(this.authentificatedUser.slug == response.data.user.slug){
                      localStorage.setItem('user',JSON.stringify(response.data.user))
                      this.$store.state.AppActiveUser.user = response.data.user;
                    }
                    this.avatar = response.data.user.Avatar
                    this.objectUrl =null
                    this.previewCropped = null
                    this.cropper = null
                    this.selectedFile = null
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
