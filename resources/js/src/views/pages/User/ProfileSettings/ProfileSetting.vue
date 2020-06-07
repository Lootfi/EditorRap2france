<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Generale' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <profile-settings-general />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Changer le mot de passe' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <profile-settings-change-password />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-info" :label="!isSmallerScreen ? 'Informations' : ''">
      <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
        <profile-settings-info />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-github" :label="!isSmallerScreen ? 'Reseaux sociaux' : ''">
      <div class="tab-social-links md:ml-4 md:mt-0 mt-4 ml-0">
        <profile-settings-social-links />
      </div>
    </vs-tab>
  </vs-tabs>
</template>

<script>
import ProfileSettingsGeneral from './ProfileSettingsGeneral.vue'
import ProfileSettingsChangePassword from './ProfileSettingsChangePassword.vue'
import ProfileSettingsInfo from './ProfileSettingsInfo.vue'
import ProfileSettingsSocialLinks from './ProfileSettingsSocialLinks.vue'


export default {
  components: {
    ProfileSettingsGeneral,
    ProfileSettingsChangePassword,
    ProfileSettingsInfo,
    ProfileSettingsSocialLinks,
  },
  data () {
    return {

    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
