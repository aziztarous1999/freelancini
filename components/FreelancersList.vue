<template>
  <v-timeline>
    <v-timeline-item
      v-for="interview in interviews"
      :key="interview.id"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img :src="'/api' + interview.freelancer.user.picture ">
        </v-avatar>
      </template>

      <template v-slot:opposite>
        <span>Looking For Me?</span>
      </template>

      <v-card  class="elevation-2">
        <v-card-title class="text-primary headline">{{interview.freelancer.user.username}}</v-card-title>
        <v-card-text><h5>Why Me ?</h5>{{interview.lettre}}</v-card-text>
        <center>
        <nuxt-link :to="'/contract/client/' + interview.id" class="btn aqua-gradient rounded-pill" tag="button">Hire!</nuxt-link>
        </center>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    name:'FreelancersList',
    props: { interviews : Array } ,
    data: () => ({
      Freelancers: [
          {
              id:1,
              name:"Freelancer 1",
              img:"http://i.pravatar.cc/61",
              motivation:"Lorem 1 ipsum, dolor sit amet consectetur adipisicing elit. Illum sed repellendus, recusandae distinctio ipsa sunt, reiciendis saepe tenetur laudantium delectus dolorum. Perspiciatis recusandae nesciunt sit quis pariatur blanditiis itaque rem!"
          },
          {
              id:2,
              name:"Freelancer 2",
              img:"http://i.pravatar.cc/62",
              motivation:"Lorem 2 ipsum, dolor sit amet consectetur adipisicing elit. Illum sed repellendus, recusandae distinctio ipsa sunt, reiciendis saepe tenetur laudantium delectus dolorum. Perspiciatis recusandae nesciunt sit quis pariatur blanditiis itaque rem!"
          },
          {
              id:3,
              name:"Freelancer 3",
              img:"http://i.pravatar.cc/63",
              motivation:"Lorem 3 ipsum, dolor sit amet consectetur adipisicing elit. Illum sed repellendus, recusandae distinctio ipsa sunt, reiciendis saepe tenetur laudantium delectus dolorum. Perspiciatis recusandae nesciunt sit quis pariatur blanditiis itaque rem!"
          },
          {
              id:4,
              name:"Freelancer 4",
              img:"http://i.pravatar.cc/64",
              motivation:"Lorem 4 ipsum, dolor sit amet consectetur adipisicing elit. Illum sed repellendus, recusandae distinctio ipsa sunt, reiciendis saepe tenetur laudantium delectus dolorum. Perspiciatis recusandae nesciunt sit quis pariatur blanditiis itaque rem!"
          },

      ],
    }),
  }
</script>