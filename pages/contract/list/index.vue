<template>
  <div>
      <br>
      <h1 class="text-center"><i>Available Contracts</i></h1>
      <br>
    <div v-for="contract in contracts" :key="contract.id">
      <mdb-card v-if="contract.status == null " class="text-center hoverable">
        <mdb-container>
          <mdb-row>
            
            <mdb-col offsetMd="1" md="10" class="text-center" >

            <mdb-row >

                <mdb-col md="3" style="display:flex;align-items: center;">
                    <h5 >
                   Title: {{contract.job.title}}
                   </h5>
                </mdb-col>

                <mdb-col md="3" style="display:flex;align-items: center;">
                    <h5>
                   Duration: {{contract.job.time}}
                   </h5>
                </mdb-col>

                <mdb-col md="3" style="display:flex;align-items: center;">
                    <h5>
                   Salary/hour: {{contract.price}} <sup>DT</sup>
                   </h5>
                </mdb-col>

                <mdb-col md="3" style="display:flex;align-items: center;">
                    <span class="float-left">
                        <nuxt-link :to="'/contract/freelancer/' + contract.id" class="btn aqua-gradient rounded-pill" tag="button">See Contract</nuxt-link>
                    </span>
                </mdb-col>

            </mdb-row>





            </mdb-col>
          </mdb-row>
        </mdb-container> 
        </mdb-card><br />
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
      contracts: [ ],
      logged:false,
    };
  } ,
  methods:{
	  fetch() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
		  this.$axios.get('/api/account/contracts',config).then(
        	response => this.contracts = response.data[0].freelance.contracts
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