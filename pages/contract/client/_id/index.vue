<template>
  <div class="container">
    <mdb-jumbotron class="mb-0 hoverable p-4">
      <h1 class="text-center text-primary" style="font-style:italic">
        Contract
      </h1>

      <div v-if="interview" class="container">
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
                    <v-text-field
                      v-model="title"
                      label="Project Title:"
                      readonly
                      required
                    ></v-text-field>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-text-field
                      v-model="clientUsername"
                      label="Between:"
                      readonly
                    ></v-text-field>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-text-field
                      v-model="freelancerUsername"
                      label="And:"
                      readonly
                    ></v-text-field>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="startDate"
                          label="Start Date*"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        ref="picker"
                        v-model="startDate"
                        :min="new Date().toISOString().substr(0, 10)"
                      ></v-date-picker>
                    </v-menu>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-menu
                      ref="menu2"
                      v-model="menu2"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="endDate"
                          label="End Date*"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        ref="picker"
                        v-model="endDate"
                        :min="new Date().toISOString().substr(0, 10)"
                      ></v-date-picker>
                    </v-menu>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-text-field
                      v-model="rate"
                      label="Price"
                      readonly
                      :rules="rateRules"
                      :counter="5"
                      required
                    ></v-text-field>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-select
                      v-model="skills"
                      :items="skillsItems"
                      attach
                      chips
                      readonly
                      label="Skill(s)*"
                      multiple
                      required
                    ></v-select>
                  </mdbCol>

                  <mdbCol sm="12">
                    <v-textarea
                      label="Description*"
                      readonly
                      :value="description"
                      hint="Descripe Your project"
                    ></v-textarea>
                  </mdbCol>

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

                  <mdbCol sm="12">
                    <mdb-btn @click="makeContract()" class="float-right rounded-pill" outline="info"
                      >Create Contract</mdb-btn
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
    interview: null,
    title: "",
    titleRules: [
      v => !!v || "Title is required",
      v => v.length <= 10 || "Title must be less than 10 characters"
    ],
    clientUsername: "client username",
    freelancerUsername: "Freelancer username",
    startDate: null,
    endDate: null,
    rate: "1500",
    rateRules: [
      v => !!v || "Rate is required",
      v => v.length <= 5 || "Rate must be less than 100000 DT"
    ],
    description: "job description",
    skillsItems: ["JavaScript", "HTML", "Angular", "PHP", "CSS"],
    skills: ["HTML"],
    menu: false,
    config : null
  }),

  components: {
    mdbJumbotron,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
    menu2(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    save2(date) {
      this.$refs.menu2.save(date);
    },
    fetch() {
      this.$axios
        .get("/api/client/interview/" + this.$route.params.id, this.config)
        .then(response => {
          this.interview = response.data[0];
          console.log(this.interview);
          this.title = this.interview.job.title
          this.clientUsername = this.interview.job.client.user.username
          this.freelancerUsername = this.interview.freelancer.user.username
          this.rate = this.interview.price
          this.description = this.interview.job.discription
          this.skills = this.interview.job.skills.split(',')
        })
        .catch(error => console);
    } ,
    makeContract() {
      this.$axios
        .post("/api/client/contract/create" , 
        { interview :  this.$route.params.id , starting_date : this.startDate , ending_date : this.endDate }, this.config)
        .then(response => {
          console.log(response)
        })
        .catch(error => console);
    }
  },
  created() {
    this.config = {
        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
      };
    this.fetch();
  }
};
</script>

<style>
input,
label {
  color: black !important;
}
</style>
