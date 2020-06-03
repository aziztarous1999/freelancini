<template>
  <div class="container">
    <mdb-jumbotron class="mb-0 hoverable p-4">
      <h1 class="text-center">
        <span class="text-primary">Project:</span> {{ job.title }}
      </h1>
      <p class="text-center text-muted">Date : {{ job.created_at }}</p>
      <div class="container">
        <mdbRow>
          <mdb-row class="text-center">
            <mdb-col
              >Salairy/hour :
              <span class="text-success">{{ job.price }}DT/h</span></mdb-col
            >
            <mdb-col
              >Duration :
              <span class="text-primary">{{ job.time }}h</span></mdb-col
            >
          </mdb-row>
        </mdbRow>

        <mdbRow>
          <mdbCol offsetSm="1" sm="10">
            <p><strong>Description: </strong>{{ job.discription }}</p>
          </mdbCol>
        </mdbRow>

        <mdbRow>
          <mdbCol v-if="job.skills" class="text-center" offsetSm="2" sm="8">
            <span v-for="skill in job.skills.split(',')" :key="skill">
              <v-chip class="ma-2" color="aqua-gradient" text-color="white">
                <v-avatar left>
                  <v-icon>mdi-brain</v-icon>
                </v-avatar>
                {{ skill }}
              </v-chip>
            </span>
          </mdbCol>
        </mdbRow>

        <mdbRow>
          <mdbCol offsetSm="3" sm="6">
            <hr />
          </mdbCol>
        </mdbRow>

        <mdbRow>
          <mdbCol sm="12">
            <h3 class="text-center">
              <i class="text-info fas fa-user-circle"></i> Candidates
              <i class="text-info fas fa-user-circle"></i>
            </h3>
          </mdbCol>
        </mdbRow>

        <mdbRow>
          <mdbCol sm="12">
            <FreelancersList  :interviews="interviews"/>
          </mdbCol>
        </mdbRow>
      </div>
    </mdb-jumbotron>
    <br />
  </div>
</template>

<script>
import FreelancersList from "../../../../components/FreelancersList";
import { mdbJumbotron, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";
export default {
  components: {
    mdbJumbotron,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn,
    FreelancersList
  },
  data() {
    return {
      interviews : [] ,
      job: {
        title: "my project Title",
        date: "03/07/2019",
        mainSkill: [
          "php",
          "react",
          "node js",
          "html",
          "angular",
          "vue js",
          "mySql"
        ],
        salairy: 91,
        duration: 21,
        description:
          "description Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"
      }
    };
  },
  methods: {
    fetch() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
      this.$axios
        .get("/api/details/job/" + this.$route.params.id)
        .then(response => {
          this.job = response.data[0];
        })
        .catch(error => console);
      this.$axios
        .get("/api/client/interviews/" + this.$route.params.id , config )
        .then(response => {
          this.interviews = response.data;
          console.log(this.interviews);
          
        })
        .catch(error => console);
	} 
  },
  created() {
    this.fetch();
    
  }
};
</script>

<style></style>
