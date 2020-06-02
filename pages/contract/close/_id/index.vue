<template>
<div class="container">

    <mdb-jumbotron class="mb-0 hoverable p-4">
  <v-container >
    <v-row >
      <v-col
        sm="12"
      >
                <h1 class="text-center ">Thanks!</h1>
      </v-col>


        <v-col
        sm="6"
        offset-sm="3"
        >
                <p class="text-center text-grey">
                    Thanks for choosing our website to host your project!
                    We hope that our service will be as your expectations.
                    </p>
                    <p class="text-center">
                    <span class="text-danger">
                    <strong >Note: </strong>
                    Both sides of contract should confirm to close the project!
                    </span>
                    </p>
      </v-col>


      <v-col
        sm="12"
      >
                <hr>
      </v-col>


     <v-col
        sm="6"
      >   
  <v-card
    class="mx-auto elevation-20"
    color="blue"
    dark
    style="max-width: 400px;"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title primary-title>
          <div>
            <div><i>Name:</i></div>
            <div class="headline">{{clientName}}</div>
          </div>
        </v-card-title>
      </v-col>
      <v-img
        class="shrink ma-2"
        contain
        height="125px"
        :src="clientImage"
        style="flex-basis: 125px"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      Rate this Client
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ clientRating }})
      </span>
      <v-rating
        v-model="clientRating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
    <center>
      <button  @click="freelancerAccepte = !freelancerAccepte" :disabled="freelancerAccepte" type="button" style="background:white !important" class=" purple-gradient btn btn-outline-success rounded-pill waves-effect"><i class="fas fa-times-circle"></i> Close</button>
    </center>
  </v-card>
</v-col>


     <v-col
        sm="6"
      >   
  <v-card
    class="mx-auto elevation-20"
    color="red"
    dark
    style="max-width: 400px;"
  >
    <v-row justify="space-between">
      <v-col cols="8">
        <v-card-title primary-title>
          <div>
            <div><i>Name:</i></div>
            <div class="headline">{{freelancerName}}</div>
          </div>
        </v-card-title>
      </v-col>
      <v-img
        class="shrink ma-2"
        contain
        height="125px"
        :src="freelancerImage"
        style="flex-basis: 125px"
      ></v-img>
    </v-row>
    <v-divider dark></v-divider>
    <v-card-actions class="pa-4">
      Rate this Freelancer
      <v-spacer></v-spacer>
      <span class="grey--text text--lighten-2 caption mr-2">
        ({{ freelancerRating }})
      </span>
      <v-rating
        v-model="freelancerRating"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
      ></v-rating>
    </v-card-actions>
    <center>
      <button @click="clientAccepte = !clientAccepte" :disabled="clientAccepte" type="button" style="background:white !important" class=" purple-gradient btn btn-outline-success rounded-pill waves-effect"><i class="fas fa-times-circle"></i> Close</button>
    </center>
  </v-card>
</v-col>



<v-col md="6" offset-md="3" class="text-center text-success" v-if="clientAccepte && freelancerAccepte">
<hr>
<mdb-jumbotron class="mb-0 hoverable p-4">
<i>
<h5>
  The project has closed successfuly!
</h5>
</i>
</mdb-jumbotron>
</v-col>

    </v-row >
    </v-container >
</mdb-jumbotron>
</div>

</template>

<script>
  import { mdbJumbotron, mdbRow, mdbCol, mdbBtn, mdbIcon } from 'mdbvue';
  export default {
      components: {
      mdbJumbotron,
      mdbIcon,
      mdbRow,
      mdbCol,
      mdbBtn,
    },
    data: () => ({
      clientRating: 4.3,
      clientName:"Client Name",
      clientAccepte:false,
      clientImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
      freelancerRating: 2.7,
      freelancerName:"Freelancer Name",
      freelancerImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
      freelancerAccepte:false,
      
    }),
  }
</script>