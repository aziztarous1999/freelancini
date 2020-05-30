<template>
<div id="video-border" >
    
  <mdb-container style="border:5px double rgba(3, 169, 244, 0.7);padding:0px !important">
    <mdb-carousel  :items="videoCarousel" ></mdb-carousel>
  </mdb-container>
</div>
</template>

<script>
import { mdbContainer, mdbCarousel } from 'mdbvue';

export default {
  name: 'VideoPage',
  components: {
    mdbContainer,
    mdbCarousel,

  },
  data() {
    return {
      videoCarousel: [
        {
          video: true,
          src: "/home/homeVideo.mp4",
          loop: true,
          auto: true,
          muted: true,
          mask: 'black-light',
          caption: {
            title: 'Build your own career'
          }
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>






</style>