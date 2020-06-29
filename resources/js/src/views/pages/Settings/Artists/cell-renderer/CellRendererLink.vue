<template>
  <div class="flex items-center">
    <vs-avatar
      :src="photoUrl"
      class="flex-shrink-0 mr-2"
      size="30px"
      @click="$router.push(url)"
    />
  </div>
</template>

<script>
export default {
  name: "CellRendererLink",

  computed: {
    username() {
      return this.params.data.username;
    },
    photoUrl() {
      return this.params.data.Avatar;
    },
    url() {
      return `/artists/${this.params.data.slug}`;

      // Below line will be for actual product
      // Currently it's commented due to demo purpose - Above url is for demo purpose
      // return "/apps/user/user-view/" + this.params.data.id
    },
  },
};
</script>