<template>
<div>
<div  v-for="job in Jobs" :key="job.description">
  <mdb-jumbotron class="mb-0 text-center hoverable p-4">
    <mdb-row>
      <mdb-col md="4" offsetMd="1" class="m-3">
          <center>
              <h1>Freelancer:</h1>

    <img v-if="job.freelancerName == '' " dark v-on="on" style="width: 150px;height: 150px;" src="https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png" class="z-depth-3 rounded-circle"
      alt="woman avatar">
    <img v-else dark v-on="on" style="width: 150px;height: 150px;" :src="job.freelancerImage" class="z-depth-3 rounded-circle"
      alt="woman avatar">
      <br><br>
      <p v-if="job.freelancerName != ''">
        <strong>Name:</strong> {{job.freelancerName}}</p>

      </center>
      </mdb-col>
      <mdb-col md="7" class="text-md-left ml-3 mt-3">
        <a href="#!" class="green-text">
          <h6 class="h6 pb-1"><mdb-icon icon="desktop" class="pr-1"/> Work</h6>
        </a>
        <h4 class="h4 mb-4">{{job.title}}</h4>
        <p class="font-weight-normal">{{job.description}}</p>
        <p class="font-weight-normal">Salairy/hour : <span class="text-success">{{job.salairy}}DT/h</span></p>
        <p class="font-weight-normal">Duration : <span class="text-primary">{{job.duration}}h</span></p>
        <p class="font-weight-normal">proposed at <a><strong>{{job.date}}</strong></a> </p>
        <nuxt-link :to="'myjob/interview/' + job.id" class="btn aqua-gradient rounded-pill" tag="button" v-if="!job.started">Interview</nuxt-link>
        <nuxt-link :to="'/myjob/' + job.id" class="btn aqua-gradient rounded-pill" tag="button" v-else :disabled="job.completed">{{job.completed ? 'Over':'See Progression' }}</nuxt-link>
        <nuxt-link :to="'/myjob/' + job.id" class="btn aqua-gradient rounded-pill float-right" tag="button" v-if="!job.completed">Close Project</nuxt-link>
      </mdb-col>
    </mdb-row>
  </mdb-jumbotron>
    <br>
</div>
</div>


</template>

<script>
  import { mdbJumbotron, mdbRow, mdbCol, mdbView, mdbBtn, mdbIcon, mdbMask } from 'mdbvue';
  export default {
    name: 'MyJobList',
    components: {
      mdbJumbotron,
      mdbView,
      mdbMask,
      mdbIcon,
      mdbRow,
      mdbCol,
      mdbBtn
    },
		data()
		{
			return{
				Jobs:[
					{
            id:1,
            title:"job title 1",
            completed:true,
            started:true,
            date:"19/08/2016",
            freelancerName:"Freelancer Name 1",
						freelancerImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg",
            mainSkill:["php","react"],
						salairy:91,
						duration:21,
						description:"1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					},
						{
            id:2,
            title:"job title 2",
            completed:false,
            started:true,
            date:"19/08/2017",
						freelancerName:"Freelancer Name 2",
						freelancerImage:"https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg",
						mainSkill:["php","react"],
						salairy:92,
						duration:22,
						description:"2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias et reprehenderit nisi voluptate saepe impedit molestias eos. Et a rerum quam repellat recusandae velit repellendus veritatis accusantium voluptates ab?"

					},
						{
            id:3,
            title:"job title 3",
            completed:true,
            started:false,
            date:"19/08/2018",
						freelancerName:"",
						freelancerImage:"https://www.nicepng.com/png/detail/413-4138963_unknown-person-unknown-person-png.png",
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