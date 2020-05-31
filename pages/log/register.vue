<template>
  <div>
    <br />
    <div class="z-depth-3">
      <br />
      <p style="font-weight:300;font-size: 1.5625rem;text-align:center">
        Build your profile
      </p>
      <p
        class="text-muted"
        style="line-height: 1.4em;text-align:center;font-size: 1.125rem!"
      >
        This information will let us know more about you.
      </p>
      <br />
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">ABOUT</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">ACCOUNT</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">ADDRESS</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <br />
            <h5 class="text-center" style="font-weight: 300!important;">
              Let's start with basic information (with validation)
            </h5>
            <mdb-container>
              <mdb-row>
                <mdb-col style="text-align:center" md="3" offsetMd="2">
                  <br />
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                    class="rounded-circle z-depth-1-half avatar-pic"
                    alt="example placeholder avatar"
                  />
                  <form class="md-form">
                    <div class="file-field">
                      <div class="d-flex justify-content-center">
                        <center>
                          <label
                            for="imageUpload"
                            style="position: static !important;"
                            class="text-center text-white btn btn-mdb-color btn-rounded"
                            >Add photo</label
                          >
                          <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            style="display: none"
                          />
                        </center>
                      </div>
                    </div>
                  </form>
                </mdb-col>

                <mdb-col md="5" offsetMd="1">
                  <v-form v-model="valid1">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="firstname"
                            :rules="nameRules"
                            :counter="10"
                            label="First name"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
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
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            type="password"
                            :counter="15"
                            label="password"
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </mdb-col>
              </mdb-row>
            </mdb-container>

            <mdb-row>
              <mdb-col>
                <v-btn color="error" disabled>Previous</v-btn>
              </mdb-col>

              <mdb-col>
                <v-btn
                  :disabled="!valid1"
                  color="primary"
                  style="float:right"
                  @click="e1 = 2"
                  >Next</v-btn
                >
              </mdb-col>
            </mdb-row>
          </v-stepper-content>

          <v-stepper-content step="2">
            <mdb-row>
              <mdb-col>
                <center>
                  <h3 class="text-muted">What are you doing? (checkboxes)</h3>
                </center>
              </mdb-col>
            </mdb-row>

            <br />

            <v-sheet class="mx-auto" elevation="3" max-width="900">
              <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
                <v-slide-item
                  v-for="n in categories"
                  :key="n.name"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    class="ma-4"
                    height="250"
                    width="255"
                    @click="toggle"
                    :style="{
                      'background-image': `url(${n.url})`,
                      'background-size': '100% 100%',
                      padding: '25px'
                    }"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="secondary"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                    <center style="margin-bottom:15px">
                      <h1>{{ n.name }}</h1>
                    </center>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>

            <br />

            <mdb-row>
              <mdb-col>
                <v-btn color="error" @click="e1 = 1">Previous</v-btn>
              </mdb-col>

              <mdb-col>
                <v-btn
                  :disabled="model.length == 0"
                  color="primary"
                  style="float:right"
                  @click="e1 = 3"
                  >Next</v-btn
                >
              </mdb-col>
            </mdb-row>
          </v-stepper-content>

          <v-stepper-content step="3">
            <mdb-row>
              <mdb-col>
                <center>
                  <h3 class="text-muted">Are you living in a nice area?</h3>
                </center>
              </mdb-col>
            </mdb-row>

            <mdb-row>

              <v-col cols="10" md="10" offsetMd="2">
                <v-text-field
                  v-model="username"
                  :rules="usernameeRules"
                  :counter="15"
                  label="UserName*"
                  required
                ></v-text-field>
              </v-col>        

              <v-col cols="6" md="6" offsetMd="2">
                <v-text-field
                  v-model="streetName"
                  :rules="streetNameRules"
                  :counter="20"
                  label="Street Name*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="2" md="2">
                <v-text-field
                  v-model="streetNumber"
                  :rules="streetNumberRules"
                  :counter="6"
                  label="City*"
                  required
                ></v-text-field>
              </v-col>
            </mdb-row>

            <mdb-row>
              <v-col cols="4" md="4" offsetMd="2">
                <v-text-field
                  v-model="city"
                  :rules="cityRules"
                  :counter="10"
                  label="Country*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="4" md="4">
                <v-text-field
                  v-model="state"
                  :rules="stateRules"
                  :counter="10"
                  label="State*"
                  required
                ></v-text-field>
              </v-col>
            </mdb-row>

            <br />

            <mdb-row>
              <mdb-col>
                <v-btn color="error" @click="e1 = 2">Previous</v-btn>
              </mdb-col>

              <mdb-col>
                <v-btn
                  :disabled="
                    streetName == '' ||
                      streetName.length > 20 ||
                      streetNumber == '' ||
                      streetNumber.length > 6 ||
                      city == '' ||
                      city.length > 20 ||
                      state == '' ||
                      state.length > 10
                  "
                  color="primary"
                  style="float:right"
                  @click="register()"
                  >Finish</v-btn
                >
              </mdb-col>
            </mdb-row>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
    <br />
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import axios from "@nuxtjs/axios";

export default {
  data: () => ({
    e1: 1,
    valid1: false,
    firstname: "",
    lastname: "",
    //username : "" ,
    model: [],
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
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    usernameeRules: [
      v => !!v || "Username is required",
      v => v.length <= 15 || "Username must be less than 15 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "password is required",
      v => v.length <= 10 || "password must be less than 15 characters"
    ],
    streetName: "",
    streetNameRules: [
      v => !!v || "Street name is required",
      v => v.length <= 20 || "Street name must be less than 20 characters"
    ],
    streetNumber: "",
    streetNumberRules: [
      v => !!v || "City is required",
      v => v.length <= 6 || "City must be less than 6 numbers"
    ],
    city: "",
    cityRules: [
      v => !!v || "Country is required",
      v => v.length <= 10 || "County must be less than 10 characters"
    ],
    state: "",
    stateRules: [
      v => !!v || "State is required",
      v => v.length <= 10 || "State must be less than 10 characters"
    ]
  }),
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  },
  methods: {
    register() {
      let body = {
        email: this.email,
        firstname: this.firstname,
        username: this.username ,
        lastname: this.lastname,
        password: this.password,
        street: this.streetName,
        city: this.streetNumber,
        country: this.city
        //profile_pic : 'required'
      }
      this.$axios.post("/api/account/create", body).then(data => {
        console.log(data);
      }).catch(
        error => console
      )
    }
  } ,
  computed: {
     username : { get() {
      return this.firstname+" "+this.lastname
    } ,
    set( x ) {
      return x 
    }
    }
  }
};
</script>

<style scoped>
.avatar-pic {
  width: 150px;
}
</style>
