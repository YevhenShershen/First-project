<template>
  <section class="about-section section-offset">
  <div class="container">
  <h2 class="title title--center">We are Createx Construction Bureau </h2>
   <p class="descr descr--center">We are rightfully considered to be the best construction company in the USA.</p>
      <div class="video-block">
        <button class="btn-reset video-block__play">
          <img :src="SetSvg('play.svg')" alt="phone" />
        </button>
        <button class="btn-reset video-block__muted">
           <img :src="SetSvg('mute.svg')" alt="phone" />
        </button>
             <video :src="SetVideo('build.mp4')" class="video-block__content" muted loop preload="metadata"></video>
      </div>
  </div>
  </section>
</template>

<script>
  export default {
    methods:{
  SetVideo(VideoName){
  return require(`@/assets/resources/${VideoName}`);
},
SetSvg(SVGname){
  return require(`@/assets/img/${SVGname}`);
}
    },
    }
</script>

<style lang="scss" scoped>

</style>