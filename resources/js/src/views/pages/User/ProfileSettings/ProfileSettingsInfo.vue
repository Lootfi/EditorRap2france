<template>
  <vx-card no-shadow>
    <!-- Bio -->
    <vs-textarea
      label="Bio"
      v-validate="'required'"
      name="biography"
      v-model="biography"
      placeholder="Biographie ... "
    />
    <span class="text-danger text-sm" v-show="errors.has('username')">{{
      errors.first("username")
    }}</span>

    <!-- Country -->
    <div class="mt-8">
      <vs-input
        name="country"
        v-model="country"
        type="text"
        label-placeholder="Pays"
      />
    </div>

    <!-- Mobile Number -->
    <vs-input
      class="w-full mt-8"
      name="mobile"
      type="number"
      label-placeholder="Mobile"
      v-model="mobile"
    />
    <vs-input
      class="w-full mt-8"
      name="adresse"
      type="text"
      label-placeholder="Adresse"
      v-model="adresse"
    />

    <!-- Gender -->
    <div class="mt-8 mb-base">
      <label class="text-sm">Gender</label>
      <div class="mt-2">
        <vs-radio v-model="gender" vs-value="Male" class="mr-4">Male</vs-radio>
        <vs-radio v-model="gender" vs-value="Female" class="mr-4"
          >Female</vs-radio
        >
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="handleSubmit" :disable="isSending"
        >Save Changes</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import vSelect from "vue-select";

export default {
  components: {
    flatPickr,
    vSelect,
  },
  data() {
    return {
      biography: this.$store.state.AppActiveUser.user.Details.biography,
      country: this.$store.state.AppActiveUser.user.Details.country,
      adresse: this.$store.state.AppActiveUser.user.Details.adresse,
      gender: this.$store.state.AppActiveUser.user.Details.gender,
      mobile: this.$store.state.AppActiveUser.user.Details.mobile,
      isSending: false,
      // Options
      countryOptions: [
        { label: "Australia", value: "australia" },
        { label: "France", value: "france" },
        { label: "Germany", value: "germany" },
        { label: "India", value: "india" },
        { label: "Jordan", value: "jordan" },
        { label: "Morocco", value: "morocco" },
        { label: "Portuguese", value: "portuguese" },
        { label: "Syria", value: "syria" },
        { label: "USA", value: "usa" },
      ],
    };
  },
  computed: {
    activeUserInfo() {
      return this.$store.state.AppActiveUser;
    },
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSending = true;
          this.$http
            .post(
              `/api/users/${this.$store.state.AppActiveUser.user.slug}/edit`,
              {
                biography: this.biography,
                country: this.country,
                adresse: this.adresse,
                gender: this.gender,
                mobile: this.mobile,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )

            .then((response) => {
              localStorage.setItem("user", JSON.stringify(response.data.user));
              this.$store.state.AppActiveUser.user = response.data.user;
              this.isSending = false;
              this.$vs.dialog({
                color: "primary",
                title: ``,
                text: "Modification complétée",
              });
            })
            .catch(function(error) {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: ``,
                text: "Modification non complétée",
              });
            });
        }
      });
    },
  },
};
</script>