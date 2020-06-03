<template>
  <v-card>
      <br>
      <h1 class="text-center">Projects</h1>
    <v-card-title>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      >
      </v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
  export default {
      name:'JobProgressTable',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'PROJECT',
            align: 'start',
            filterable: true,
            value: 'job.title',
          },
          { text: 'BUDGET (DT)', value: 'price' },
          { text: 'ENDED', value: 'ended'  },
          { text: 'OWNER', value: 'job.client.user.username' },
        ],
        desserts: [
        ],
      }
    },
    created() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
		  this.$axios.get('/api/account/contracts/accepted',config).then(
          response => {this.desserts = response.data
            this.desserts.map(item => item.ended = item.ended == 0 ? 'No' : 'Yes' )
          }
      ).catch(
        error => console
      )
  }
  }
</script>

<style>

</style>