<template>
<div>
<div  v-for="job in Jobs" :key="job.description">
  <mdb-card>

  <mdb-container>
	<mdb-row style="padding:15px">
	  <mdb-col md="3" class="aqua-gradient"><img :src="job.profilImage" class="prof-img rounded-circle img-fluid"/></mdb-col>
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
		<nuxt-link :to="'/job/' + job.id" class="btn aqua-gradient rounded-pill">Read More!</nuxt-link>
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
		name: 'JobList',
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
				Jobs:[
					{
						id:1,
						ownerName:"Owner Name",
						profilImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
						mainSkill:["php","react"],
						salairy:91,
						duration:21,
						description:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					},
						{
						id:2,
						ownerName:"Owner Name",
						profilImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
						mainSkill:["php","react"],
						salairy:92,
						duration:22,
						description:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					},
						{
						id:3,
						ownerName:"Owner Name",
						profilImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(11).jpg",
						mainSkill:["php","react"],
						salairy:93,
						duration:23,
						description:"3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					}
				]
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