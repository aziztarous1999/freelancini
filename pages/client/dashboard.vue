<template>
<div class="container">
    <div class="row">

        <div class="col-sm-6 col-lg-3 col-12">
        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading">
            <div class="d-flex grow flex-wrap">
                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 pa-7" style="background: #33b5e5;max-height: 90px; width: auto;bottom: 30px; position: relative;">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-bag-checked theme--dark" style="font-size: 32px;"></i><!---->
                </div>
                <div class="col-7">
                    <div class="ml-auto text-right" >
                    <div class="body-3 grey--text font-weight-light">Project</div>
                    <h4 class="font-weight-light text--primary"> {{ projects }}<small></small></h4>
                    </div>
                </div>
                <!---->
            </div>
            <div class="px-0 col col-12">
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
            </div>
           <center> <i aria-hidden="true" class="v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light" style="font-size: 16px;"></i><span class="caption grey--text font-weight-light">Just Updated</span></center><!---->
        </div>
        </div>


        <div class="col-sm-6 col-lg-3 col-12">
        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading">
            <div class="d-flex grow flex-wrap">
                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 pa-7" style="background: #00C851;max-height: 90px; width: auto;bottom: 30px; position: relative;">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-cash-multiple theme--dark" style="font-size: 32px;"></i><!---->
                </div>
                <div class="col-7">
                    <div class="ml-auto text-right">
                    <div class="body-3 grey--text font-weight-light">Revenue</div>
                    <h4 class="font-weight-light text--primary">34.325 <sup style="font-size:12px">DT</sup><small></small></h4>
                    </div>
                </div>
                <!---->
            </div>
            <div class="px-0 col col-12">
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
            </div>
            <center class="caption grey--text font-weight-light"><span class="text-success mr-2" style="font-size: 21px;"><i class="fa fa-arrow-up"></i> 3.48%</span> <span class="text-nowrap">Since last month</span></center>
        </div>
        </div>


        <div class="col-sm-6 col-lg-3 col-12">
        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading">
            <div class="d-flex grow flex-wrap">
                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 pa-7" style="background: #ff4444;max-height: 90px; width: auto;bottom: 30px; position: relative;">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-currency-usd-circle-outline theme--dark" style="font-size: 32px;"></i><!---->
                </div>
                <div class="col-7">
                    <div class="ml-auto text-right">
                    <div class="body-3 grey--text font-weight-light">spendings</div>
                    <h4 class="font-weight-light text--primary">4,52 <sup style="font-size:12px">DT</sup><small></small></h4>
                    </div>
                </div>
                <!---->
            </div>
            <div class="px-0 col col-12">
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
            </div>
            <center class="caption grey--text font-weight-light"><span class="text-danger mr-2" style="font-size: 21px;"><i class="fa fa-arrow-down"></i> 5.72%</span> <span class="text-nowrap">Since last month</span></center>
        </div>
        </div>


        <div class="col-sm-6 col-lg-3 col-12">
        <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading">
            <div class="d-flex grow flex-wrap">
                <div class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 pa-7" style="background: #ffd600;max-height: 90px; width: auto;bottom: 30px; position: relative;">
                    <i aria-hidden="true" class="v-icon notranslate mdi mdi-star theme--dark" style="font-size: 32px;"></i><!---->
                </div>
                <div class="col-7">
                    <div class="ml-auto text-right">
                    <div class="body-3 grey--text font-weight-light">Review</div>
                    <h4 class="font-weight-light text--primary">4.6/5<small></small></h4>
                    </div>
                </div>
                <!---->
            </div>
            <div class="px-0 col col-12">
                <hr role="separator" aria-orientation="horizontal" class="v-divider theme--light">
            </div>
            <center class="caption grey--text font-weight-light"><span class="text-success mr-2" style="font-size: 21px;"><i class="fa fa-arrow-up"></i> 12.18%</span> <span class="text-nowrap">Since last month</span></center>
        </div>
        </div>






        

    </div>
    <div class="row">
        <div class="col-12">
        <MyJobProgressTable />
        </div>
    </div>

</div>
</template>

<script>
import MyJobProgressTable from '../../components/MyJobProgressTable';
export default {
  components: {
      MyJobProgressTable,
  }, data() {
      return  {
          projects : 0
      }
    },
   created() {
      const config = {headers: { Authorization: `Bearer ${this.$store.state.user.token}` } };
		  this.$axios.get('/api/account/contracts/accepted',config).then(
          response => { let desserts = response.data
            this.projects  = desserts.length 
          }
      ).catch(
        error => console
      )
  }
}
</script>

<style>

</style>