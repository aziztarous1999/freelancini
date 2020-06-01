<template>
  <div>
    <div v-for="job in Jobs" :key="job.description">
      <v-dialog v-model="dialog" persistent max-width="290">
        <template v-slot:activator="{ on }">
          <mdb-jumbotron class="mb-0 text-center hoverable p-4">
            <mdb-row>
              <mdb-col md="4" offsetMd="1" class="m-3">
                <center>
                  <h1>Freelancer:</h1>

                  <img
                    v-if="job.contract == null"
                    dark
                    style="width: 150px;height: 150px;"
                    src="https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png"
                    class="z-depth-3 rounded-circle"
                    alt="woman avatar"
                  />
                  <img
                    v-else
                    dark
                    style="width: 150px;height: 150px;"
                    :src="job.contract.freelancer.user.picture"
                    class="z-depth-3 rounded-circle"
                    alt="woman avatar"
                  />
                  <br /><br />
                  <p v-if="job.contract">
                    <strong>Name:</strong> {{ job.contract.freelancer.user.username }}
                  </p>
                </center>
              </mdb-col>
              <mdb-col md="7" class="text-md-left ml-3 mt-3">
                <a href="#!" class="green-text">
                  <h6 class="h6 pb-1">
                    <mdb-icon icon="desktop" class="pr-1" /> Work
                  </h6>
                </a>
                <h4 class="h4 mb-4">{{ job.title }}</h4>
                <p class="font-weight-normal">{{ job.description }}</p>
                <p class="font-weight-normal">
                  Salairy/hour :
                  <span class="text-success">{{ job.price }}DT/h</span>
                </p>
                <p class="font-weight-normal">
                  Duration :
                  <span class="text-primary">{{ job.time }}h</span>
                </p>
                <p class="font-weight-normal">
                  proposed at
                  <a
                    ><strong>{{ job.date }}</strong></a
                  >
                </p>
                <nuxt-link
                  :to="'myjob/interview/' + job.id"
                  class="btn aqua-gradient rounded-pill"
                  tag="button"
                  v-if="job.contract == null"
                  >Interview</nuxt-link
                >
                <nuxt-link
                  :to="'/myjob/' + job.id"
                  class="btn aqua-gradient rounded-pill"
                  tag="button"
                  v-else
                  :disabled="job.contract"
                  >{{ job.contract.status ? "Over" : "See Progression" }}</nuxt-link
                >
                <v-btn
                  class="btn btn-lg aqua-gradient rounded-pill float-right text-white"
                  style="padding-top:21px; padding-bottom:21px;"
                  tag="button"
                  v-on="on"
                  v-if="job.contract && !job.contract.status"
                  >Close Project</v-btn
                >
              </mdb-col>
            </mdb-row>
          </mdb-jumbotron>
          <br />
        </template>

        <v-card>
          <v-card-title class="headline text-center"
            >Are you sure you want to close this project?</v-card-title
          >
          <v-card-text></v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false"
              >Disagree</v-btn
            >
            <v-btn color="green darken-1" text @click="dialog = false"
              >Agree</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import {
  mdbJumbotron,
  mdbRow,
  mdbCol,
  mdbView,
  mdbBtn,
  mdbIcon,
  mdbMask
} from "mdbvue";
export default {
  name: "MyJobList",
  components: {
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data() {
    return {
      dialog: false,
      Jobs: []
    };
  },
  methods:{
	  fetch() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
		  this.$axios.get('/api/client/jobs',config).then(
        	response => this.Jobs = response.data
      ).catch(
        error => console
      )
	  }
  } ,
  created() {
	  this.fetch();
  }
};
</script>
