<template>
  <mdb-container>
    <mdb-row>
      <mdb-col sm="8" style="padding: 12px;padding-top:87px;">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <div
              class="v-card--material pa-3 v-card v-sheet v-card--material--has-heading"
            >
              <div class="d-flex grow flex-wrap">
                <div
                  class="text-start v-card--material__heading mb-n6 v-sheet  elevation-6 blue-gradient pa-7"
                  style="max-height: 90px; width: auto;position: relative; bottom: 45px;"
                >
                  <i
                    aria-hidden="true"
                    class="v-icon notranslate mdi mdi-account-outline text-white"
                    style="font-size: 32px;"
                  ></i
                  ><!---->
                </div>
                <div class="ml-6">
                  <div class="font-weight-light card-title mt-2">
                    Edit Profile
                    <span class="body-1">— Complete your profile</span>
                  </div>
                </div>
                <!---->
              </div>

              <!--form-->

              <mdb-container class="text-primary">
                <mdb-row>
                  <mdb-col>
                    <v-form v-model="valid1">
                      <v-container>
                        <v-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="firstname"
                              :rules="nameRules"
                              :counter="10"
                              label="First name"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="lastname"
                              :rules="nameRules"
                              :counter="10"
                              label="Last name"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="12">
                            <v-text-field
                              color="primary"
                              v-model="email"
                              :rules="emailRules"
                              label="E-mail"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <mdb-row>
                          <v-col cols="12" md="12">
                            <v-text-field
                              v-model="streetName"
                              :rules="streetNameRules"
                              :counter="20"
                              label="Street Name*"
                              required
                            ></v-text-field>
                          </v-col>
                        </mdb-row>

                        <mdb-row>
                          <v-col cols="6" md="6">
                            <v-text-field
                              v-model="state"
                              :rules="stateRules"
                              :counter="10"
                              label="City*"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6">
                            <v-select
                              :items="countries"
                              item-text="name"
                              item-value="id"
                              label="Country"
                              v-model="city"
                              required
                            ></v-select>
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
                                v-model="aboutMe"
                                hint="Give Us Some Details About You!"
                                placeholder="Hi, I am Front-end Web Designer and Graphic Designers with over 8 years of experience in the above field. I always try to do my best for my clients. So try my service once! I am pretty sure you'll use my service again."
                              ></v-textarea>
                            </v-col>
                          </v-container>
                        </mdb-row>

                        <mdb-row>
                          <v-col>
                            <v-btn
                              class="btn btn-lg btn-danger rounded-pill text-white"
                              style="padding-top:23px; padding-bottom:23px;"
                              tag="button"
                              v-on="on"
                              ><i class="fas fa-trash-alt"></i> Delete
                              profile</v-btn
                            >
                            <mdb-btn
                              gradient="blue"
                              class="rounded-pill float-right"
                              @click="updateProfile()"
                        
                            >
                              <i class="fas fa-sync-alt"></i> Update
                              Profile</mdb-btn
                            >
                          </v-col>
                        </mdb-row>
                      </v-container>
                    </v-form>
                  </mdb-col>
                </mdb-row>
              </mdb-container>
            </div>
          </template>
          <v-card>
            <v-card-title class="headline text-center"
              >Are you sure you want to delete your account ?</v-card-title
            >
            <v-card-text></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false"
                >Disagree</v-btn
              >
              <v-btn
                color="green darken-1"
                text
                @click="
                  dialog = false;
                  deleteProfile();
                "
                >Agree</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </mdb-col>

      <mdb-col sm="4" style="padding: 12px;padding-top:87px;">
        <!-- Card -->
        <div class="card testimonial-card">
          <!-- Background color -->
          <div class="card-up indigo lighten-1"></div>

          <!-- Avatar -->
          <div class="avatar mx-auto white">
              <div class="file-field" style="position: relative; bottom: 75px; width: 150px;height: 150px;">
                <div class="d-flex justify-content-center">
                  <center>
                    <label
                      for="imageUpload"
                      class="rounded-circle"
                      style="cursor: pointer;"
                    >
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <img
                            dark
                            v-on="on"
                            style=" width: 150px;height: 150px;"
                            :src="img"
                            class="z-depth-3 rounded-circle"
                            alt="woman avatar"
                          />
                        </template>
                        <span>Update your image</span>
                      </v-tooltip>
                    </label>
                    <input
                      type="file"
                      id="imageUpload"
                      @change="processFile($event)"
                      required
                      accept="image/*"
                      style="display: none"
                    />
                  </center>
                </div>
              </div>
          </div>

          <!-- Content -->
          <div
            class="card-body text-center"
            style="position: relative; bottom: 40px;"
          >
            <!-- Name -->
            <h6 class=" grey-text">CEO / CO-FOUNDER</h6>
            <h4 class="font-weight-light mb-3 black--text card-title">
              {{ username }}
            </h4>
            <h6 class=" grey-text">
              <img
                  style="width: 30px;height: 30px;"
                  :src="flag"
                  class="z-depth-2 rounded-circle"
                />
              {{ country  }}</h6>
            <hr />

            <!-- Quotation -->
            <p class="font-weight-light">
              <i class="fas fa-quote-left"></i>
              <span class="grey--text">
                Don't be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </span>
              <i class="fas fa-quote-right"></i>
            </p>

            <!-- message button -->
            <mdb-btn class="rounded-pill" outline="info">Message</mdb-btn>
          </div>
        </div>
        <!-- Card -->

        <br />

        <!-- Card -->
        <div class="card testimonial-card">
          <!-- Background color -->
          <div class="card-up indigo lighten-1"></div>

          <!-- Avatar -->

          <!-- Content -->
          <div class="card-body">
            <!-- Name -->
            <h4
              class="font-weight-light mb-3 black--text card-title text-center"
            >
              Financial Exchanges
            </h4>
            <hr />

            <!-- solde input -->
            <div class="input-group">
              <div class="input-group-prepend ">
                <span class="input-group-text" id="basic-addon">
                  <i class="text-success fas fa-money-bill-wave"></i>
                </span>
              </div>
              <input
                v-model="solde"
                readonly
                type="text"
                style="background:transparent"
                class="form-control"
              />
            </div>

            <br />

            <!-- bitcoins input -->
            <div class="input-group">
              <div class="input-group-prepend ">
                <span class="input-group-text" id="basic-addon">
                  <i class="text-warning fab fa-bitcoin"></i>
                </span>
              </div>
              <input
                v-model="bitcoins"
                readonly
                type="text"
                style="background:transparent"
                class="form-control"
              />
            </div>

            <br />

            <div class="container">
              <h6 class=" grey-text text-center">Buy</h6>
              <div class="row">
                <div class="col-4 text-center">
                  <button
                    :disabled="solde < 100"
                    @click="buy(1)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-success waves-effect px-3"
                  >
                    <i class="text-success fab fa-bitcoin"></i><br />X1
                  </button>
                </div>

                <div class="col-4 text-center">
                  <button
                    :disabled="solde < 1000"
                    @click="buy(10)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-success waves-effect px-3"
                  >
                    <i
                      class="text-success fab fa-bitcoin"
                      aria-hidden="true"
                    ></i
                    ><br />X10
                  </button>
                </div>

                <div class="col-4 text-center">
                  <button
                    :disabled="solde < 10000"
                    @click="buy(100)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-success waves-effect px-3"
                  >
                    <i
                      class="text-success fab fa-bitcoin"
                      aria-hidden="true"
                    ></i>
                    X100
                  </button>
                </div>
              </div>
            </div>

            <div class="container">
              <h6 class=" grey-text text-center">Sell</h6>
              <div class="row">
                <div class="col-4 text-center">
                  <button
                    :disabled="bitcoins < 1"
                    @click="sell(1)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-danger waves-effect px-3"
                  >
                    <i class="text-danger fab fa-bitcoin"></i><br />X1
                  </button>
                </div>

                <div class="col-4 text-center">
                  <button
                    :disabled="bitcoins < 10"
                    @click="sell(10)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-danger waves-effect px-3"
                  >
                    <i class="text-danger fab fa-bitcoin" aria-hidden="true"></i
                    ><br />X10
                  </button>
                </div>

                <div class="col-4 text-center">
                  <button
                    :disabled="bitcoins < 100"
                    @click="sell(100)"
                    type="button"
                    style="width:70px;height:70px"
                    class="rounded-circle btn btn-outline-danger waves-effect px-3"
                  >
                    <i
                      class="text-danger fab fa-bitcoin"
                      aria-hidden="true"
                    ></i>
                    X100
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Card -->
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {
  mdbBtn,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbTooltip,
  mdbSelect,
  mdbInput
} from "mdbvue";
export default {
  data: () => ({
    e1: 1,
    switch1: true,
    valid1: false,
    firstname: "",
    lastname: "",
    username :  "",
    model: [],
    dialog: null,
    categories: [
      {
        name: "DESIGN",
        url:
          "https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-ui-ux-design-with-characters-and-png-image_2157891.jpg"
      },
      {
        name: "CODE",
        url:
          "https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-programmers-at-work-concept-software-development-png-image_2157878.jpg"
      },
      {
        name: "DEVELOP",
        url:
          "https://png.pngtree.com/png-vector/20200312/ourlarge/pngtree-modern-flat-design-concept-of-programmers-at-work-concept-software-development-png-image_2157875.jpg"
      }
    ],
    countries: [],
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "nvnvb",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    streetName: "",
    streetNameRules: [
      v => !!v || "Street name is required",
      v => v.length <= 20 || "Street name must be less than 20 characters"
    ],
    streetNumber: "",
    streetNumberRules: [
      v => !!v || "Street Number is required",
      v => v.length <= 6 || "Street name must be less than 6 numbers"
    ],
    city: 0,
    cityRules: [
      v => !!v || "City is required",
      v => v.length <= 10 || "City must be less than 10 characters"
    ],
    state: "",
    stateRules: [
      v => !!v || "State is required",
      v => v.length <= 10 || "State must be less than 10 characters"
    ],
    domainItems: ["DESIGN", "DEVELOP", "CODE"],
    mainDomain: [],

    langugesItems: ["Arabic", "Frensh", "English"],
    languges: [],

    skillsItems: ["JavaScript", "HTML", "Angular", "PHP", "CSS"],
    skills: [],
    image: "",
    aboutMe: "",
    country :  "" ,
    solde: 5000,
    bitcoins: 30,
    config : null ,
    img:
      "https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png"
  }),
  methods: {
    buy(a) {
      this.bitcoins += a;
      //console.log(this.bitcoins);
      this.solde -= a * 100;
      //console.log(this.solde);
    },
    fetchProfile() {
      this.$axios
        .get("/api/account/informations", this.config)
        .then(response => {
          const profile = response.data[0];
          this.firstname = profile.firstname;
          this.lastname = profile.lastname;
          this.username = profile.username;
          this.email = profile.email;
          this.mainDomain = profile.domain.split(",");
          this.skills = profile.skills.split(",");
          this.streetName = profile.address.street;
          this.state = profile.address.city;
          this.city = profile.address.country.id;
          this.img = "/api" + profile.picture;
          this.languges= profile.lang.split(",");
          this.aboutMe = profile.about
          this.flag = profile.address.country.flag
          this.country = profile.address.country.name
        })
        .catch(error => console);
    },
    sell(a) {
      this.bitcoins -= a;
      // console.log(this.bitcoins);
      this.solde += a * 100;
      //console.log(this.solde);
    },
     processFile(event) {
      this.picture = event.target.files[0]
      let data = new FormData()
      data.append('picture',this.picture)
      this.$axios.put('/api/account/update/picture', data , this.config).then( response => {
        if (response.data.code == 200) {
          this.img = "/api" + response.data.image
        }
      }).catch( error => console )
    },
    updateProfile() {
      const data = {
        email : this.email ,
        lastname : this.lastname,
        firstname : this.firstname ,
        about : this.aboutMe ,
        domain : this.mainDomain.toString() ,
        skills : this.skills.toString() ,
        lang : this.languges.toString() ,
        street : this.streetName ,
        city :   this.state ,
        country: this.city
      }
      this.$axios.put('/api/account/update',data,this.config).then(response => {
          console.log(response);    
      }).catch(
        error => console
      )
    },
    deleteProfile() {
      this.$axios
        .delete("/api/account/delete", config)
        .then(response => {
          this.$store.commit("user/logout");
          this.$nuxt.$router.replace({ path: "/freelancer/dashboard" });
        })
        .catch(error => console);
    }
  },
  created() {
    this.config =  {
        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
      }
    this.fetchProfile();
    this.$axios
      .get("/api/details/countries")
      .then(response => {
        this.countries = response.data;
      })
      .catch(error => console);
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbTooltip,
    mdbSelect,
    mdbInput
  }
};
</script>

<style>
/*.v-input__slot .v-label{
color: black!important
}*/
input , label , .v-label , .v-input {
  color: black !important;
}
.theme--light.v-input input, .theme--light.v-input textarea {
    color: rgba(0, 0, 0, 0.87) !important;
}
</style>
