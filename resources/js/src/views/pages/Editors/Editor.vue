<template>
  <div id="page-user-view">
    <vs-alert
      color="danger"
      title="User Not Found"
      :active.sync="user_not_found"
    >
      <span>User record with id: {{ $route.params.slug }} not found. </span>
      <span>
        <span>Check </span
        ><router-link
          :to="{ name: 'page-user-list' }"
          class="text-inherit underline"
          >All Users</router-link
        >
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">
      <vx-card title="Informations d'editeur" class="mb-base">
        <!-- Avatar -->
        <div class="vx-row items-center">

            <div class="img-container mb-4">
              <img :src="user_data.Avatar" class="rounded w-1/2" />
            </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1 " id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold ">Nom d'utilisateur:</td>
                <td>{{ user_data.username }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Nom:</td>
                <td>{{ user_data.Full_Name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email:</td>
                <td>{{ user_data.email }}</td>
              </tr>
              <tr>
                <td class="font-semibold">État:</td>
                <td>{{ user_data.StatusName }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Role:</td>
                <td>{{ user_data.role }}</td>
              </tr>
            </table>
          </div>
          
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button
              icon-pack="feather"
              icon="icon-edit"
              class="mr-4"
              :to="{ name: 'editor-edit', params: { userId: user_data.slug } }"
              >Edit</vs-button
            >
            <vs-button
              v-if="user_not_admin"
              type="border"
              color="danger"
              icon-pack="feather"
              icon="icon-trash"
              @click="handleDelete"
              :disable="isDeleting"
              >Delete</vs-button
            >
          </div>
        </div>
      </vx-card>

      <div class="vx-row">
        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Mobile</td>
                <td>{{ user_data.Details.mobile }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Adresse</td>
                <td>{{ user_data.Details.adresse }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Ville</td>
                <td>{{ user_data.Details.country }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Sexe</td>
                <td>{{ user_data.Details.gender }}</td>
              </tr>
            </table>
          </vx-card>
        </div>

        <div class="vx-col lg:w-1/2 w-full">
          <vx-card title="Réseaux Sociaux" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Twitter</td>
                <td>{{ user_data.Details.twitter }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Facebook</td>
                <td>{{ user_data.Details.facebook }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Instagram</td>
                <td>{{ user_data.Details.instagram }}</td>
              </tr>
             
            </table>
          </vx-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_data: null,
      user_not_found: false,
      user_not_admin: true,
      isDeleting: false,
    };
  },

  mounted() {
    this.$http
      .get(`/api/users/${this.$route.params.slug}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        if (response.data == "User not found") {
          this.$router.push("/editors");
        }

        this.user_data = response.data;

        if (this.user_data.role == "Admin") {
          this.user_not_admin = false;
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  },

  methods: {
    handleDelete(e) {
      e.preventDefault();
      this.isDeleting = true;
      this.$http
        .get(`/api/users/${this.$route.params.slug}/delete`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((response) => {
          $router.push("/editors");
        })
        .catch(function(error) {
          this.$vs.dialog({
            color: "danger",
            title: ``,
            text: "L'utilisateur n'a été pas supprimé!",
          });
          this.isDeleting = false;
        });
    },
  },
};
</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: .8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width:370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }


@media screen and (min-width:1201px) and (max-width:1211px),
only screen and (min-width:636px) and (max-width:991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }

}

</style>
