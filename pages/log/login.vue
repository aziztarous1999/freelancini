<template>
  <mdb-container>


      <mdb-row >



<mdb-col sm="6" offsetSm="3">
  <section class="form-elegant">
    <mdb-row class="rounded">
      <mdb-col  class="rounded" md="12"   style="padding:35px;background:url(https://static.vecteezy.com/system/resources/thumbnails/000/274/527/original/ocean-background.jpg);background-repeat: no-repeat;background-size:100% 100%">
        <mdb-card style="background:transparent">
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="text-white mb-5"><strong>Sign in</strong></h3>
            </div>
            <div class="grey-text">
            <mdb-input icon="envelope" label="Your email" v-model="email" type="email"/>
            <mdb-input icon="lock" label="Your password" v-model="password"  type="password" containerClass="mb-0"/>
            </div>
            <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" class="blue-text ml-1"> Password?</a></p>
            <div class="text-center mb-3">
              <mdb-btn  type="button"  gradient="blue" @click="login()" rounded class=" z-depth-1a rounded-pill">Sign in</mdb-btn>
            </div>
            <p class="font-small text-white text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
            <div class="row my-3 d-flex justify-content-center">
              <mdb-btn  type="button" color="white" rounded class="mr-md-3 round z-depth-1a"><mdb-icon fab icon="facebook" class="blue-text text-center"/></mdb-btn>
              <mdb-btn type="button" color="white" rounded class="mr-md-3 round z-depth-1a"><mdb-icon fab icon="twitter" class="blue-text"/></mdb-btn>
              <mdb-btn type="button" color="white" rounded class="mr-md-3 round z-depth-1a"><mdb-icon fab icon="google-plus" class="blue-text"/></mdb-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small text-white d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1"> Sign Up</a></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>

</mdb-col>
</mdb-row>


</mdb-container>
</template>
<script>
  import { mdbContainer,mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon, mdbModal, mdbModalBody, mdbModalFooter } from 'mdbvue';
  export default {
    name: 'FormsPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon,
      mdbModal,
      mdbModalBody,
      mdbModalFooter
    },
    data() {
      return {
        showModal: false,
        email:'' ,
        password:''
      };
    },
    methods: {
    login() {
      let body = {
        email: this.email ,
        password: this.password,
      }
      this.$axios.post("/api/account/login", body).then( response => {
        if (!response.data.error) {
          console.log(response.data);  
          this.$store.commit('user/login', response.data )
        }  else {

        }
      }).catch(
        error => console
      )
    }
  } 
  }
</script>
<style>
  .form-elegant .font-small {
    font-size: 0.8rem; }

  .form-elegant .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

  .form-elegant .z-depth-1-half,
  .form-elegant .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }

  input,label
  {
    color:white !important;
  }
</style>