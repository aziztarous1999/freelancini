<template>
  <mdb-container>

      <mdb-row >

<mdb-col  sm="6" offsetSm="3">
  <section class="form-elegant">
    <mdb-row style="background:linear-gradient(to right, red, purple);padding:4px" class="rounded">
      <mdb-col  class="rounded" md="12"   style="padding:35px;background:url(https://static.vecteezy.com/system/resources/thumbnails/000/274/527/original/ocean-background.jpg);background-repeat: no-repeat;background-size:100% 100%">
        <mdb-card style="background:transparent;padding:20px 0">
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="text-white mb-5"><strong>Sign in</strong></h3>
            </div>
            <div class="grey-text">
            <mdb-input icon="envelope" label="Your email" v-model="email" type="email"/>
            <mdb-input icon="lock" label="Your password" v-model="password"  type="password" containerClass="mb-0"/>
            </div>
            <div class="text-center mb-3">
              <mdb-btn  type="button"  gradient="blue" @click="login()" rounded class=" z-depth-1a rounded-pill">Sign in</mdb-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small text-white d-flex justify-content-end">Not a member?<nuxt-link to="/log/register" class="blue-text ml-1">Sign Up!</nuxt-link></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
<notifications group="foo" position="bottom right"/>
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
        password:'',
        switch1:false
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
          /*this.$notify({
            group: 'foo',
            type: 'success',
            title: '<i class="fas fa-check"></i> Welcome',
            text: 'You logged în successfully!'
          });*/
          this.$nuxt.$router.replace({ path: '/freelancer/dashboard' })
        }  else {

        }
      }).catch(
        error => { console.log(error)
        this.$notify({
          group: 'foo',
          type: 'error',
          title: '<i class="fas fa-exclamation-triangle"></i> Error',
          text: 'An error has occurred, please try again!'
        }); }
      )
  



//redirection          
// 

    }
  } 
  }
</script>
<style scoped>
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