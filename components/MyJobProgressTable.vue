<template>
  <v-card>
      <br>
      <h1 class="text-center">My Projects</h1>
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
      name:'MyJobProgressTable',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'PROJECT',
            align: 'start',
            filterable: true,
            value: 'title',
          },
          { text: 'BUDGET (DT)', value: 'contract.price' },
          { text: 'STATUS', value: 'status' },
          { text: 'Freelancer', value: 'contract.freelancer.user.username' },
          { text: 'ENDED', value: 'contract.ended' },
        ],
        desserts: [
         
        ],
      }
    },
    created() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
		  this.$axios.get('/api/client/jobs',config).then(
          response => {this.desserts = response.data
            this.desserts.map(item => {
              item.contract.ended = item.contract.ended == 0 ? 'No' : 'Yes'
              if ( item.status == null )
                item.status = 'On Hold'
              else if ( item.status == 1 )
                item.status = 'Strated'
              else 
                item.status = 'Refused'
              
              })
          }
      ).catch(
        error => console
      )
  }
  }
</script>

<style>

</style>