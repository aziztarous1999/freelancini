<template>
  <div class="container">
    <mdb-jumbotron class="mb-0 hoverable p-4">
      <h1 class="text-center text-primary" style="font-style:italic">
        Contract
      </h1>

      <div class="container">
        <mdbRow>
          <mdbCol sm="8" offsetSm="2">
            <p class="text-muted text-center">
              Here you can give the Freelancer more details about the contract
              that gonna be setted between you both so i hope you complete all
              the required fields so we can guarantee each one right!
            </p>
          </mdbCol>
        </mdbRow>

        <mdbRow>
          <mdbCol sm="10" offsetSm="1">
            <mdb-jumbotron class="mb-0 hoverable p-4">
              <h3 class="text-center text-bold" style="font-style:italic">
                Freelancini Contract
              </h3>

              <div class="container">
                <mdbRow>
                  <mdbCol sm="8" offsetSm="2"><hr /></mdbCol>

                  <mdbCol sm="12">
                    <h4>Project Title: <br />{{ title }}.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>Between: <br />{{ clientUsername }}.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>And: <br />{{ freelancerUsername }}.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>Start Date: <br />{{ startDate }}.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>End Date: <br />{{ endDate }}.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>Rate: <br />{{ rate }} <sup>DT</sup>.</h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4>
                      Rate: <br /><span v-for="skill in skills" :key="skill"
                        >{{ skill
                        }}<span v-if="skill != skills[skills.length - 1]"
                          >,
                        </span></span
                      >.
                    </h4>
                  </mdbCol>

                  <mdbCol sm="12">
                    <h4 style="text-align:justify">
                      Description: <br />{{ description }}.
                    </h4>
                  </mdbCol>

                  <mdbCol sm="10" offsetSm="1"><hr /></mdbCol>

                  <mdbCol sm="12" class="text-muted">
                    <h5 class="text-center" outline="info">
                      TERMS AND CONDITIONS
                    </h5>
                  </mdbCol>

                  <mdbCol sm="10" offsetSm="1" class="text-muted">
                    <ol>
                      <li>
                        Any and all deferred payments are payable to the
                        contractor upon completion of the Project.
                      </li>
                      <li>
                        Contractor services are for a period of three weeks.
                        Partial weeks are pro-rated.There is no guarantee of the
                        period of services.
                      </li>
                      <li>
                        All purchases and rentais <strong>MUST</strong> be
                        Purchase Orders in writing obtained and disclosed to the
                        project.
                      </li>
                    </ol>
                  </mdbCol>
                  <mdbCol sm="12"><hr /></mdbCol>

                  <mdbCol sm="4" class="text-center">
                    <mdb-btn class="rounded-pill" outline="danger" @click="decline()"
                      >Refuse</mdb-btn
                    >
                  </mdbCol>

                  <mdbCol sm="4" class="text-center">
                    <mdb-btn class="rounded-pill" outline="warning"
                      >Ask For Change</mdb-btn
                    >
                  </mdbCol>

                  <mdbCol sm="4" class="text-center">
                    <mdb-btn class="rounded-pill" outline="info" @click="accepte()"
                      >Accepte</mdb-btn
                    >
                  </mdbCol>
                </mdbRow>
              </div>
            </mdb-jumbotron>
          </mdbCol>
        </mdbRow>
      </div>
    </mdb-jumbotron>
  </div>
</template>

<script>
import { mdbJumbotron, mdbRow, mdbCol, mdbBtn, mdbIcon } from "mdbvue";
export default {
  data: () => ({
    title: "Argon Project",
    clientUsername: "client username",
    freelancerUsername: "Freelancer username",
    startDate: "2020-07-03",
    endDate: "2020-08-01",
    rate: "1500",
    config : null ,
    description:
      "description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem enim corporis sequi recusandae rem sed alias nesciunt tempore facere sit, quidem praesentium, aut ducimus cupiditate quae ipsum fugiat esse ut.",
    skills: ["JavaScript", "HTML", "Angular", "PHP", "CSS"]
  }),
  methods: {
    fetch() {
      this.$axios
        .get("/api/freelance/contract/" + this.$route.params.id,this.config)
        .then(response => { let contract = response.data[0]
            this.title = contract.job.title;
        this.clientUsername = contract.client.user.username;
        this.freelancerUsername = contract.freelancer.user.username;
        this.startDate = contract.starting_date
        this.endDate = contract.ending_date
        this.rate = contract.price
        this.description = contract.job.discription
        this.skills = contract.job.skills.split(',')
        })
        .catch(error => console);
    } ,
    accepte(){
         this.$axios
        .get("/api/freelance/contract/accepte/" + this.$route.params.id, this.config).then(
        response => console
      ).catch(error => console)
    } ,
    decline(){
         this.$axios
        .get("/api/freelance/contract/decline/" + this.$route.params.id, this.config).then(
        response => console
      ).catch(error => console)
    }
  },
  created() {
      this.config = {
        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
      };
    this.fetch();
  },

  components: {
    mdbJumbotron,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  }
};
</script>

<style>
input,
label {
  color: black !important;
}
</style>
