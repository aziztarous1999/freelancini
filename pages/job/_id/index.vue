<template>
  <div>
    <center>
      <h1>here is the job id : {{ $route.params.id }}</h1>
    </center>

    <div>
      <mdb-card>
        <mdb-container>
          <mdb-row v-if="job != null" style="padding:15px">
            <mdb-col md="12" class="aqua-gradient text-center"
              ><img
                :src="'/api/' + job.client.user.picture"
                class="prof-img rounded-circle img-fluid"
            /></mdb-col>
            <mdb-col offsetMd="1" md="8">
              <h1 style="font-weight:600;padding:0px">{{ job.title }}</h1>
              <br />
              <p v-if="job.skills">
                Main Skill to this job :
                <span v-for="skill in job.skills.split(',')" :key="skill">{{
                  skill + " "
                }}</span>
              </p>

              <mdb-container>
                <mdb-row>
                  <mdb-col style="padding:0px"
                    >Salairy/hour :
                    <span class="text-success"
                      >{{ job.price }}DT/h</span
                    ></mdb-col
                  >
                  <mdb-col style="padding:0px"
                    >Duration :
                    <span class="text-primary">{{ job.time }}h</span></mdb-col
                  >
                </mdb-row>
              </mdb-container>
              <br />
              <h5 class="text-muted" style="font-weight:600;">Description:</h5>
              <p>{{ job.discription }}</p>
              <div>
                <v-row>
                  <v-col cols="6" md="6">
                    <v-text-field
                      v-model="price"
                      :counter="10"
                      label="Price"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6" md="6">
                    <v-text-field
                      v-model="time"
                      :counter="10"
                      label="Time"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-textarea
                      v-model="lettre"
                      :counter="15"
                      label="Submition Lettre"
                      required
                    ></v-textarea>
                  </v-col>
                </v-row>
              </div>
              <v-button
                @click="submitInterview()"
                class="btn aqua-gradient rounded-pill"
                >Apply</v-button
              >
            </mdb-col>
          </mdb-row>
        </mdb-container> </mdb-card
      ><br />
    </div>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn
} from "mdbvue";
export default {
  name: "Job",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  },
  data() {
    return {
      lettre: "",
      price: 0,
      time: 0,
      job: null
    };
  },
  methods: {
    fetch() {
      this.$axios
        .get("/api/details/job/" + this.$route.params.id)
        .then(response => {
          this.job = response.data[0];
          console.log(this.job.client.user.picture);
        })
        .catch(error => console);
	} ,
	submitInterview(){
		const config =  { headers: { Authorization: `Bearer ${this.$store.state.user.token}` } }
		const body = {
			time : this.time,
			price : this.price ,
			lettre : this.lettre
		}
		this.$axios.post('/api/freelance/submit/'+ this.$route.params.id ,body,config).then( response => {
			console.log(response);
			
		}).catch(
        error => console
      )
	}
  },
  created() {
    this.fetch();
  }
};
</script>
<style>
.prof-img {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
</style>
