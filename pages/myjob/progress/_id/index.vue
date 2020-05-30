<template>
<div>
    <center><h1>Progress page,here is the job id : {{$route.params.id}}</h1></center>

<div>
  <mdb-card>

  <mdb-container>
	<mdb-row style="padding:15px">
	  <mdb-col md="12" class="aqua-gradient text-center" ><img :src="job.profilImage" class="prof-img rounded-circle img-fluid"/></mdb-col>
      <mdb-col offsetMd="1" md="8">
		  <h1 style="font-weight:600;padding:0px" >{{job.ownerName}}</h1><br/>
		  <p> Main Skill to this job : <span v-for="skill in job.mainSkill" :key="skill">{{skill + ' '}}</span></p>

		  <mdb-container>
			<mdb-row >
				<mdb-col style="padding:0px">Salairy/hour : <span class="text-success">{{job.salairy}}DT/h</span></mdb-col>
				<mdb-col style="padding:0px">Duration : <span class="text-primary">{{job.duration}}h</span></mdb-col>
		  	</mdb-row>
		  </mdb-container>
		  <br>
		<h5 class="text-muted" style="font-weight:600;">Description:</h5>
		<p>{{job.description}}</p>
		<nuxt-link to="/log/login" class="btn aqua-gradient rounded-pill">Chat</nuxt-link>
		</mdb-col>
    </mdb-row>

	</mdb-container>
  </mdb-card><br>
</div>
</div>
</template>

<script>
	import { mdbContainer, mdbRow, mdbCol,mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
	export default {
		name: 'Job',
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
		data()
		{
			return{
				job:{
						ownerName:"Owner Name",
						profilImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
						mainSkill:["php","react"],
						salairy:91,
						duration:21,
						description:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					}	
			}
		}
	}
</script>
<style>

.prof-img
{
	clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
}



</style>
