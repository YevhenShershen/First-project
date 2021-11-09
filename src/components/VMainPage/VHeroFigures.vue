<template>
<section class="section-figures section-offset">
  <div class="container">
    <h2 class="title title--center">Some facts and figures </h2>
    <div class="section-figures__statistic">
      <div class="section-figures__statistic__item" v-for="item in factsAndFigures" :key="item">
        <img :src=" SetPhoto(item.saticPhoto)" :alt="item.staticDiscr" class="section-figures__statistic-photo">
        <p class="section-figures__statistic-text">{{item.staticDiscr}}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  export default {
    data(){return{
factsAndFigures:[
  {saticPhoto:"Totally.png",
  staticDiscr:"Totally satisfied clients"},
   {saticPhoto:"Years.png",
  staticDiscr:"Years of experience"},
   {saticPhoto:"Working.png",
  staticDiscr:"Working hours spent"},
   {saticPhoto:"Succeeded.png",
  staticDiscr:"Succeeded projects"},
]
    }},
methods:{
  SetPhoto(SVGname){
  return require(`@/assets/img/${SVGname}`);
}
}
  }
</script>

<style lang="scss" scoped>

</style>