<template>
  <vx-card no-shadow>

    <!-- Bio -->
    <vs-textarea label="Bio" v-model="bio" placeholder="Your bio..." />

    <!-- Country -->
    <div class="mt-8">
      <label class="text-sm">Country</label>
      <v-select v-model="country" :options="countryOptions" :dir="$vs.rtl ? 'rtl' : 'ltr'" />
    </div>

  

    <!-- Mobile Number -->
    <vs-input class="w-full mt-8" type="number" label-placeholder="Mobile" v-model="mobile" />
    <!-- Gender -->
    <div class="mt-8 mb-base">
      <label class="text-sm">Gender</label>
      <div class="mt-2">
        <vs-radio v-model="gender" vs-value="male" class="mr-4">Male</vs-radio>
        <vs-radio v-model="gender" vs-value="female" class="mr-4">Female</vs-radio>
        <vs-radio v-model="gender" vs-value="other">Other</vs-radio>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2">Save Changes</vs-button>
      <vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
    </div>
  </vx-card>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import vSelect from 'vue-select'

export default {
  components: {
    flatPickr,
    vSelect
  },
  data () {
    return {
      bio: this.$store.state.AppActiveUser.user.Details.biography,
      country: this.$store.state.AppActiveUser.user.Details.country,
      gender: this.$store.state.AppActiveUser.user.Details.gender,
      mobile: this.$store.state.AppActiveUser.user.Details.mobile,
      // Options
      countryOptions: [
        { label: 'Australia',  value: 'australia'  },
        { label: 'France',     value: 'france'     },
        { label: 'Germany',    value: 'germany'    },
        { label: 'India',      value: 'india'      },
        { label: 'Jordan',     value: 'jordan'     },
        { label: 'Morocco',    value: 'morocco'    },
        { label: 'Portuguese', value: 'portuguese' },
        { label: 'Syria',      value: 'syria'      },
        { label: 'USA',        value: 'usa'        }
      ]
    }
  },
  computed: {
    activeUserInfo () {
      return this.$store.state.AppActiveUser
    }
  }
}
</script>
