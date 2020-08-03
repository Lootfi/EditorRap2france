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
          <vs-input
            class="w-full mt-4"
            label="Nom"
            name="name"
            v-model="name"
            v-validate="'alpha_spaces'"
          />
          <span class="text-danger text-sm" v-show="errors.has('name')">{{
            errors.first("name")
          }}</span>

          <vs-input
            class="w-full mt-4"
            v-validate="'email|required'"
            label="Email"
            type="email"
            name="email"
            v-model="email"
          />
          <span class="text-danger text-sm" v-show="errors.has('email')">{{
            errors.first("email")
          }}</span>
          <vs-input
            class="w-full mt-4"
            label="Mot de passe"
            ref="password"
            v-validate="'required|min:3|max:35'"
            type="password"
            name="password"
            v-model="password"
          />
          <span class="text-danger text-sm" v-show="errors.has('password')">{{
            errors.first("password")
          }}</span>
          <vs-input
            class="w-full mt-4"
            label="Confirmation du mot de passe"
            type="password"
            v-model="confirmPassword"
            name="confirmPassword"
            v-validate="'required|confirmed:password'"
          />
          <span
            class="text-danger text-sm"
            v-show="errors.has('confirmPassword')"
            >{{ errors.first("confirmPassword") }}</span
          >
          <vs-textarea
            class="w-full mt-4"
            label="Bio"
            name="biography"
            placeholder="Biographie"
            v-model="biography"
          />
          <span class="text-danger text-sm" v-show="errors.has('biography')">{{
            errors.first("biography")
          }}</span>
        </div>
        <div class="vx-col md:w-1/2 w-full">
          <div class="mt-4">
            <label class="vs-input--label">Etat</label>
            <v-select
              :clearable="false"
              :options="statusOptions"
              name="status"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="status"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-show="errors.has('status')">{{
              errors.first("status")
            }}</span>
          </div>

          <div class="mt-4">
            <label class="vs-input--label">Role</label>
            <v-select
              :clearable="false"
              :options="roleOptions"
              name="role"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="role"
              v-validate="'required'"
            />
            <span class="text-danger text-sm" v-show="errors.has('role')">{{
              errors.first("role")
            }}</span>
          </div>
        </div>
      </div>

     <div class="my-4">
      <clipper-upload class="inline-block p-2 my-2 bg-primary rounded text-white" v-model="imgURL">Importer La photo de l'éditeur</clipper-upload>
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

    </vs-card>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2 pointer"
            @click="handleAccountSubmit"
            :disabled="isSending"
            >Save Changes</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Cropper from "cropperjs";
import debounce from "lodash/debounce";

export default {
  components: {
    Cropper,
    vSelect,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      biography: "",
      status: { label: "Activé", value: "1" },
      role: { label: "Editeur", value: "Editor" },
      imgURL: '',
      rotation:0,
      avatar: "",
      isSending: false,
      statusOptions: [
        { label: "Activé", value: "1" },
        { label: "Suspendu", value: "2" },
      ],
      roleOptions: [
        { label: "Administrateur", value: "Admin" },
        { label: "Editeur", value: "Editor" },
      ],
    };
  },

  methods: {

    handleAccountSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          const canvas = this.$refs.clipper.clip();
          const ResultAvatar = canvas.toDataURL("image/jpeg", 1);
          this.isSending = true;
          this.$http
            .post(
              `/api/users/add-new-user`,
              {
                full_name: this.name,
                email: this.email,
                status: this.status,
                role: this.role,
                password: this.password,
                biography: this.biography,
                avatar: ResultAvatar,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
            .then((response) => {
              this.isSending = false;
              this.$vs.dialog({
                color: "primary",
                title: ``,
                text: "Editeur crée ! ",
              });
              this.$router.push("/editors");
            })
            .catch(function(error) {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Erreur lors de la création",
              });
            });
        }
      });
    },
  },
};
</script>