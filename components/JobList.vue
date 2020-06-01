<template>
  <div>
    <div v-for="job in Jobs" :key="job.id">
      <mdb-card>
        <mdb-container>
          <mdb-row style="padding:15px">
            <mdb-col md="3" class="aqua-gradient"
              ><img
                :src="job.client.user.picture"
                class="prof-img rounded-circle img-fluid"
            /></mdb-col>
            <mdb-col offsetMd="1" md="8">
              <h1 style="font-weight:600;padding:0px">{{ job.title }}</h1>
              <br />
              <p>
                Main Skill to this job :
                <span v-for="skill in job.mainSkill" :key="skill">{{
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
                    <span class="text-primary"
                      >{{ job.time }}h</span
                    ></mdb-col
                  >
                </mdb-row>
              </mdb-container>
              <br />
              <h5 class="text-muted" style="font-weight:600;">Description:</h5>
              <p>{{ job.discription }}</p>
              <nuxt-link
                :to="'/job/' + job.id"
                class="btn aqua-gradient rounded-pill"
                >Read More!</nuxt-link
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
  name: "JobList",
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
      Jobs: []
    };
  } ,
  methods:{
	  fetch() {
		  this.$axios.get('/api/details/jobs').then(
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
<style>
.prof-img {
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}
</style>
