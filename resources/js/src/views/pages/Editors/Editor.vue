<template>
	
  <div id="page-user-view">
    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.slug }} not found. </span>
      <span>
        <span>Check </span><router-link :to="{name:'page-user-list'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">

      <vx-card title="Account Information" class="mb-base">

        <!-- Avatar -->
        <div class="vx-row items-center">

          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="user_data.Avatar" class="rounded max-w-xs" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1 " id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold ">Username: </td>
                <td>{{ user_data.username }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Name: </td>
                <td>{{ user_data.Full_Name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email: </td>
                <td>{{ user_data.email }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status: </td>
                <td>{{ user_data.StatusName }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Role: </td>
                <td>{{ user_data.role }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button icon-pack="feather" icon="icon-edit" class="mr-4" :to="{name: 'editor-edit', params: { userId: user_data.slug }}">Edit</vs-button>
            <vs-button v-if="user_not_admin" type="border" color="danger" icon-pack="feather" icon="icon-trash" @click="handleDelete" :disable="isDeleting">Delete</vs-button>
          </div>

        </div>

      </vx-card>
  </div>
</div>
</template>

<script>
export default {

data () {
    return {
      user_data: null,
      user_not_found: false,
      user_not_admin: true,
      isDeleting :false,
    }
  },

	mounted(){

			 this.$http.get(`/api/users/${this.$route.params.slug}`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
			 .then(response => {
        if(response.data == "User not found"){

          this.$router.push('/editors')
        }

			 		this.user_data = response.data
          
			 		if(this.user_data.role == 'Admin'){
			 			this.user_not_admin = false;
			 		}
			 	}).catch(function (error) {
          
          console.error(error);
                    });
	},

	methods: {

      handleDelete(e){

        e.preventDefault();
        this.isDeleting = true
        this.$http.get(`/api/users/${this.$route.params.slug}/delete`,{
          headers : {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          }

       })
       .then(response => {

          $router.push('/editors');
        }).catch(function (error) {
          
          this.$vs.dialog({
                          color:'danger',
                          title: ``,
                          text: "L'utilisateur n'a été pas supprimé!",
                        })
          this.isDeleting = false;
                    
                    });

      }

	}
}
</script>