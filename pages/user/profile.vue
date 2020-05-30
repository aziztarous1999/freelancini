<template>
    <mdb-container>


    <mdb-row >

        <mdb-col sm="8" style="padding: 12px;padding-top:87px;">

<div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
   <div class="d-flex grow flex-wrap">
      <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 blue-gradient pa-7" style="max-height: 90px; width: auto;position: relative; bottom: 45px;">
         <i aria-hidden="true" class="v-icon notranslate mdi mdi-account-outline theme--dark" style="font-size: 32px;"></i><!---->
      </div>
      <div class="ml-6">
         <div class="font-weight-light card-title mt-2"> Edit Profile <span class="body-1">— Complete your profile</span></div>
      </div>
      <!---->
   </div>

   <!--form-->




      

    <mdb-container>
    <mdb-row >

      <mdb-col>
        
          <v-form v-model="valid1">
    <v-container>
      <v-row>
        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>








      <mdb-row>
        <v-col
          cols="8"
          md="8"
        >
          <v-text-field
            v-model="streetName"
            :rules="streetNameRules"
            :counter="20"
            label="Street Name*"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="4"
          md="4"
        >
          <v-text-field
            v-model="streetNumber"
            :rules="streetNumberRules"
            :counter="6"
            label="Street Number*"
            required
          ></v-text-field>
        </v-col>
      </mdb-row>


      <mdb-row>
        <v-col
          cols="6"
          md="6"

        >
          <v-text-field
            v-model="city"
            :rules="cityRules"
            :counter="10"
            label="City*"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="6"
          md="6"
        >
          <v-text-field
            v-model="state"
            :rules="stateRules"
            :counter="10"
            label="State*"
            required
          ></v-text-field>
        </v-col>
      </mdb-row>

<mdb-row>
    <v-col>
          <v-select
            v-model="mainDomain"
            :items="domainItems"
            attach
            chips
            label="Main Domain(s)"
            multiple
            required
          ></v-select>
  </v-col>
</mdb-row>

<mdb-row>
    <v-col>
          <v-select
            v-model="languges"
            :items="langugesItems"
            attach
            chips
            label="Languge(s)"
            multiple
            required
          ></v-select>
  </v-col>
</mdb-row>


<mdb-row>
    <v-col>
          <v-select
            v-model="skills"
            :items="skillsItems"
            attach
            chips
            label="Skill(s)"
            multiple
            required
          ></v-select>
  </v-col>
</mdb-row>


<mdb-row>
    <v-container fluid>
      <v-col>
          <v-textarea
      label="About Me"
      :value="aboutMe"
      hint="Give Us Some Details About You!"
      placeholder="Hi, I am Front-end Web Designer and Graphic Designers with over 8 years of experience in the above field. I always try to do my best for my clients. So try my service once! I am pretty sure you'll use my service again."
    ></v-textarea>


      </v-col>
</v-container>
</mdb-row>


<mdb-row>
    <v-col>
      <v-switch style="width:100%;" class="float-right" v-model="switch1" inset :label="switch1 ? 'Freelancer' : 'Client'"></v-switch>
    </v-col>

    <v-col>
        <mdb-btn gradient="blue" class="rounded-pill float-right">Update Profile</mdb-btn>
    </v-col>
</mdb-row>



    </v-container>
  </v-form>

      </mdb-col>






    </mdb-row>
  </mdb-container>

</div>




</mdb-col>






        <mdb-col sm="4" style="padding: 12px;padding-top:87px;">

<!-- Card -->
<div class="card testimonial-card">

  <!-- Background color -->
  <div class="card-up indigo lighten-1"></div>

  <!-- Avatar -->
  <div class="avatar mx-auto white">



    <v-tooltip bottom>
      <template v-slot:activator="{ on }">

    <img dark v-on="on" style="position: relative; bottom: 75px; width: 150px;height: 150px;" src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg" class="z-depth-3 rounded-circle"
      alt="woman avatar">



      </template>
      <span>Update your image</span>
    </v-tooltip>




  </div>

  <!-- Content -->
  <div class="card-body text-center" style="position: relative; bottom: 40px;">
    <!-- Name -->
    <h6 class=" grey-text">CEO / CO-FOUNDER</h6>
    <h4 class="font-weight-light mb-3 black--text card-title">Anna Doe</h4>
    <hr>




    <!-- Quotation -->
    <p class="font-weight-light">
        <i class="fas fa-quote-left"></i>
    <span class="grey--text">
    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
    </span>
        <i class="fas fa-quote-right"></i>
    </p>

<!-- message button -->
<mdb-btn class="rounded-pill" outline="info">Message</mdb-btn>

  </div>

</div>
<!-- Card -->

        </mdb-col>


    </mdb-row>


    </mdb-container>



</template>


<script>
import { mdbBtn,mdbContainer, mdbRow, mdbCol, mdbTooltip, mdbSelect } from 'mdbvue';
  export default {
data: () => ({
      e1: 1,
      switch1: true,
      valid1: false,
      firstname: '',
      lastname: '',
      model: [],
      categories:[
        {name:"DESIGN",url:"https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-ui-ux-design-with-characters-and-png-image_2157891.jpg"},
        {name:"CODE",url:"https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-programmers-at-work-concept-software-development-png-image_2157878.jpg"},
        {name:"DEVELOP",url:"https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-programmers-at-work-concept-software-development-png-image_2157875.jpg"},
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      streetName:'',
      streetNameRules: [
        v => !!v || 'Street name is required',
        v => v.length <= 20 || 'Street name must be less than 20 characters',
      ],
      streetNumber:'',
      streetNumberRules: [
        v => !!v || 'Street Number is required',
        v => v.length <= 6 || 'Street name must be less than 6 numbers',
      ],
      city:'',
      cityRules: [
        v => !!v || 'City is required',
        v => v.length <= 10 || 'City must be less than 10 characters',
      ],
      state:'',
      stateRules: [
        v => !!v || 'State is required',
        v => v.length <= 10 || 'State must be less than 10 characters',
      ],
      domainItems: ['DESIGN','DEVELOP','Code'],
      mainDomain: ['DESIGN'],

      langugesItems: ['Arabic','Frensh','English'],
      languges: ['Arabic'],

      skillsItems: ['JavaScript','HTML','Angular','PHP','CSS'],
      skills: ['HTML'],

      aboutMe:"",

    }),
         components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbBtn,
      mdbTooltip,
      mdbSelect,
    }
  }
</script>



<style>

</style>