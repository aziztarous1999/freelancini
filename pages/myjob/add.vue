<template>
    <mdb-container>


    <mdb-row >

        <mdb-col offsetSm="2" sm="8" style="padding: 12px;padding-top:87px;">

<div class="v-card--material pa-3 v-card v-sheet theme--light v-card--material--has-heading">
   <div class="d-flex grow flex-wrap">
      <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 blue-gradient pa-7" style="max-height: 90px; width: auto;position: relative; bottom: 45px;">
         <i aria-hidden="true" class="v-icon notranslate mdi mdi-bag-checked theme--dark" style="font-size: 32px;"></i><!---->
      </div>
      <div class="ml-6">
         <div class="font-weight-light card-title mt-2"> Create A New Job <span class="body-1">— Complete The Form Please</span></div>
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
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :counter="20"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="slots"
            :rules="slotsRules"
            :counter="3"
            label="Deland Slots "
            required
          ></v-text-field>
        </v-col>

 
      </v-row>


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
      label="About Project"
      :value="aboutProject"
      hint="Give Us Some Details About You!"
      placeholder="We are a small music studio/library that writes and records music for NPR/Podcasts and Films. We’ve recently built a new website that hosts our library and are looking to find someone to work with to support frontend development."
    ></v-textarea>


      </v-col>
</v-container>
</mdb-row>


<mdb-row>
    <v-col>
        <mdb-btn gradient="blue" class="rounded-pill float-right">Create Job Offer!</mdb-btn>
    </v-col>
</mdb-row>



    </v-container>
  </v-form>

      </mdb-col>






    </mdb-row>
  </mdb-container>

</div>




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
      title: '',
      slots:'',
      titleRules: [
        v => !!v || 'Title is required',
        v => v.length <= 20 || 'Title must be less than 20 characters',
      ],
      slotsRules: [
        v => !!v || 'Slots is required',
        v => v.length <= 3 || 'Slots must be less than 1000 characters',
      ],
      skillsItems: ['JavaScript','HTML','Angular','PHP','CSS'],
      skills: ['HTML'],

      aboutProject:"",

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