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
            value: 'name',
          },
          { text: 'BUDGET (DT)', value: 'budget' },
          { text: 'STATUS', value: 'status' },
          { text: 'OWNER', value: 'owner' },
        ],
        desserts: [
          {
            name: 'Argon Design System',
            budget: 1159,
            status: "pending",
            owner: "client1",
          },
          {
            name: 'Angular Now UI Kit PRO',
            budget: 1150,
            status: "pending",
            owner: "client2",
          },
                    {
            name: 'Black Dashboard',
            budget: 1149,
            status: "completed",
            owner: "client3",
          },
                    {
            name: 'React Material Dashboard',
            budget: 1189,
            status: "pending",
            owner: "client4",
          },
                    {
            name: 'Vue Paper UI Kit PRO',
            budget: 1109,
            status: "delayed",
            owner: "client1",
          },
                    {
            name: 'Argon Design System',
            budget: 1109,
            status: "pending",
            owner: "client5",
          },
          {
            name: 'Argon Design System',
            budget: 1159,
            status: "pending",
            owner: "client1",
          },
          {
            name: 'Angular Now UI Kit PRO',
            budget: 1150,
            status: "pending",
            owner: "client2",
          },
                    {
            name: 'Black Dashboard',
            budget: 1149,
            status: "completed",
            owner: "client3",
          },
                    {
            name: 'React Material Dashboard',
            budget: 1189,
            status: "pending",
            owner: "client4",
          },
                    {
            name: 'Vue Paper UI Kit PRO',
            budget: 1109,
            status: "delayed",
            owner: "client1",
          },
                    {
            name: 'Argon Design System',
            budget: 1109,
            status: "pending",
            owner: "client5",
          },
                    {
            name: 'Argon Design System',
            budget: 1159,
            status: "pending",
            owner: "client1",
          },
          {
            name: 'Angular Now UI Kit PRO',
            budget: 1150,
            status: "pending",
            owner: "client2",
          },
                    {
            name: 'Black Dashboard',
            budget: 1149,
            status: "completed",
            owner: "client3",
          },
                    {
            name: 'React Material Dashboard',
            budget: 1189,
            status: "pending",
            owner: "client4",
          },
                    {
            name: 'Vue Paper UI Kit PRO',
            budget: 1109,
            status: "delayed",
            owner: "client1",
          },
                    {
            name: 'Argon Design System',
            budget: 1109,
            status: "pending",
            owner: "client5",
          },
                              {
            name: 'Argon Design System',
            budget: 1159,
            status: "pending",
            owner: "client1",
          },
          {
            name: 'Angular Now UI Kit PRO',
            budget: 1150,
            status: "pending",
            owner: "client2",
          },
                    {
            name: 'Black Dashboard',
            budget: 1149,
            status: "completed",
            owner: "client3",
          },
                    {
            name: 'React Material Dashboard',
            budget: 1189,
            status: "pending",
            owner: "client4",
          },
                    {
            name: 'Vue Paper UI Kit PRO',
            budget: 1109,
            status: "delayed",
            owner: "client1",
          },
                    {
            name: 'Argon Design System',
            budget: 1109,
            status: "pending",
            owner: "client5",
          },
                              {
            name: 'Argon Design System',
            budget: 1159,
            status: "pending",
            owner: "client1",
          },
          {
            name: 'Angular Now UI Kit PRO',
            budget: 1150,
            status: "pending",
            owner: "client2",
          },
                    {
            name: 'Black Dashboard',
            budget: 1149,
            status: "completed",
            owner: "client3",
          },
                    {
            name: 'React Material Dashboard',
            budget: 1189,
            status: "pending",
            owner: "client4",
          },
                    {
            name: 'Vue Paper UI Kit PRO',
            budget: 1109,
            status: "delayed",
            owner: "client1",
          },
                    {
            name: 'Argon Design System',
            budget: 1109,
            status: "pending",
            owner: "client5",
          },
        ],
      }
    },
  }
</script>

<style>

</style>