<template>
  <div>

<HomeVideo />

<center class="mod-hr">
<p></p>
<hr>
</center>

      <div class="row v-card__text grey--text text--darken-1 row1">

      <div class="col-6 row1-part1">
        </div>

        <div class="col-6 row1-part2">
        <div>
        <h1 class="text-center font-italic font-weight-light text-brown">Our objectivs :</h1>
        <br>
        <ul class="obj-ul">
            <li class="blue-grey-text"><v-icon class="text-brown">mdi-message-arrow-right</v-icon> Make it easy for the freelancer to find job that suits his competence.</li> 
            <li class="blue-grey-text"><v-icon class="text-brown">mdi-message-arrow-right</v-icon> Finding the right person for the wanted job.</li> 
            <li class="blue-grey-text"><v-icon class="text-brown">mdi-message-arrow-right</v-icon> Guarantee the rights of the freelancers and client.</li> 
            <li class="blue-grey-text"><v-icon class="text-brown">mdi-message-arrow-right</v-icon> Solve money transaction problem.</li> 
        </ul>
        </div>
        </div>
    </div>


<center class="mod-hr">
<p></p>
<hr>
</center>

<div class="row1">

  <mdb-container>


      <mdb-row >
      <mdb-col><h1 style="text-align: center;color: #cab184;">How It Works</h1></mdb-col>
    </mdb-row>


    <mdb-row class="h60">
      <mdb-col>
              <mdb-card-title tag="h3" class="pt-2 title-color "><strong><mdb-icon icon="search-dollar" /> Easily find quality matches</strong></mdb-card-title>
              <p class="text-justify">On Freelancini you’ll find a range of top Sales freelancers and agencies,
                 from pure Business Developers to Account manager and Sales outsourcing agencies to marketing and creative agencies,
                 sales software, campaign managers, marketing agencies and marketers, customer support reps, and more. </p>

<ul class="text-justify" style="list-style-type:none;">
  <li><mdb-icon icon="check" /> <strong>Start by posting a job:</strong>
   Tell us about your project and the specific sales skills you have acquired. </li>
  <li><mdb-icon icon="check" /> <strong>Freelancini analyzes your needs:</strong>
  Our search functionality uses data science to highlight the best
   freelancers and agencies based on their skills,
   helping you find talent that’s a good match. </li>
    <li><mdb-icon icon="check" /> <strong>We send you a shortlist of likely candidates:</strong>
   You can also search our site for specialized sales freelancers and professional
   agencies who can view your job and submit proposals too.  </li>
</ul>

</mdb-col>
      <mdb-col class="howWork1"></mdb-col>
    </mdb-row>


<br>

<br>
    <mdb-row class="h60">


      <mdb-col class="howWork2"></mdb-col>


      <mdb-col>
        <br><br><br>
              <mdb-card-title tag="h3" class="pt-2 title-color "><strong><mdb-icon icon="handshake" /> Hire the best</strong></mdb-card-title>
              <p class="text-justify">Invite candidates to submit bids, then review and hire your favorite.</p>

<ul class="text-justify" style="list-style-type:none;">
  <li><mdb-icon icon="check" /> <strong>Browse profiles:</strong>
   View finalists’ Freelancini profiles to see client ratings, portfolios and more. </li>
  <li><mdb-icon icon="check" /> <strong>Review proposals:</strong>
   Evaluate bids, taking into account their qualifications, thought process, timeline, and overall cost. </li>
    <li><mdb-icon icon="check" /> <strong>Chat instantly with sales professionals:</strong>
   Ask specific questions, determine who's the best fit, and contract.  </li>

</ul>

</mdb-col>

</mdb-row>





    <mdb-row class="h60">


      <mdb-col>
<br><br>
    <mdb-card-title tag="h3" class="pt-2 title-color "><strong><mdb-icon icon="eye" /> Work efficiently, effectively.</strong></mdb-card-title>
  <p class="text-justify">Each project includes an online workspace shared by your team and your freelancer or agency, allowing you to:</p>

<ul class="text-justify" style="list-style-type:none;">
  <li><mdb-icon icon="check" /> <strong>Send and receive files:</strong>
   Deliver digital assets in a secure environment. </li>
  <li><mdb-icon icon="check" /> <strong>Share feedback in real time:</strong>
   Use Freelancini Messages system to communicate via text, chat, or video. </li>
    <li><mdb-icon icon="check" /> <strong>Use our mobile app:</strong>
    Many features can be accessed on your mobile phone when on the go.  </li>
  <br>
  <br>
  <br>
</ul>

</mdb-col>
  <mdb-col class="howWork3"></mdb-col>
    </mdb-row>




<br>

<br>
    <mdb-row class="h60">


      <mdb-col class="howWork4"></mdb-col>


      <mdb-col>
        <br><br><br>
              <mdb-card-title tag="h3" class="pt-2 title-color "><strong><mdb-icon icon="credit-card" /> Pay easily, with peace of mind</strong></mdb-card-title>
              <p class="text-justify">Pay daily, monthly, by package, fixed price or a custom price for the entire project.</p>

<ul class="text-justify" style="list-style-type:none;">
  <li><mdb-icon icon="check" /> <strong>Simplified global payments:</strong>
   We deliver payments to freelancers and agencies in over 170 countries. </li>
  <li><mdb-icon icon="check" /> <strong>Includes Freelancini Payment Protection:</strong>
   Only pay for work you authorize. </li>
    <li><mdb-icon icon="check" /> <strong>Invoicing and reporting:</strong>
   Access your invoices and transaction history on Freelancini.  </li>

</ul>

</mdb-col>

</mdb-row>


  </mdb-container>


</div>









<center class="mod-hr">
<p></p>
<hr>
</center>

<br>
<HomeCategorie />
<br>

<center class="mod-hr">
<p style="border-top: 1px solid#cab184;border-left: 1px solid#cab184;border-bottom: none !important;
    border-right: none !important"></p>
<hr>
</center>

<Footer />

  </div>

</template>

<script>
import HomeVideo from '../components/HomeVideo';
import HomeCategorie from '../components/HomeCategorie';
import Footer from '../components/Footer';

import {mdbContainer, mdbRow, mdbCol,mdbIcon ,mdbCardTitle} from 'mdbvue';
export default {
  components: {
      HomeVideo,
      HomeCategorie,
      Footer,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbCardTitle
  }
}
</script>

<style>
.h60
{
  min-height: 65vh;
}


.row1
{
min-height:85vh;
background:white;
}



.row1-part1
{
background: url(/home/objimg.jpg);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;

}



.row1-part2
{
color:white;
display:flex;
align-items:center;
justify-content:center;
background: url(/home/objimg2.png);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;
}

.text-brown
{
color:#0277bd !important;
}


.obj-ul
{
width: 282px;
list-style-type:none;
}

.obj-ul li
{
margin-bottom:10px
}


hr
{
  background: rgba(3, 169, 244, 0.7);
}


.mod-hr p 
{
    border-bottom: 1px solid rgba(3, 169, 244, 0.7);
    border-right: 1px solid rgba(3, 169, 244, 0.7);
    background: white;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    position: relative;
    top: 26px;

}

.mod-hr hr 
{
    background-color: rgba(3, 169, 244, 0.7) !important;
    border: none;
    height: 1px;
}


.title-color
{
  color: rgba(3, 169, 244, 0.7);
}



.howWork1
{
background: url(/home/howWork1.png);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;

}



.howWork2
{
background: url(/home/howWork2.png);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;
}



.howWork3
{
background: url(/home/howWork3.png);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;

}



.howWork4
{
background: url(/home/howWork4.png);
background-size: 95% 95%;
background-position: center;
background-repeat: no-repeat;

}
</style>