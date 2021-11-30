<template>
  <VHeaderComp></VHeaderComp>
  <router-view></router-view>
  <!-- <VMainPage ></VMainPage> -->
    <!-- <VSecondPage ></VSecondPage> -->
  <VFooter ></VFooter>
</template>

<script>
import VHeaderComp from './components/VHeaderComp.vue'
// import VMainPage from './components/VMainPage.vue'
import VFooter from './components/VFooter.vue'
// import VSecondPage from './components/VSecondPage.vue'
export default {
    data(){
    return {
      selectedProduct: {}
    }
  },
components: {
VHeaderComp,
// VMainPage,
VFooter,
// VSecondPage,
  },
    methods:{

    }

};
</script>

<style lang="scss">

</style>
