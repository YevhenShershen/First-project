<template>
  <VHeaderComp></VHeaderComp>
  <VMainPage ></VMainPage>
  <VFooter ></VFooter>
</template>

<script>
import VHeaderComp from './components/VHeaderComp.vue'
import VMainPage from './components/VMainPage.vue'
import VFooter from './components/VFooter.vue'

export default {
    data(){
    return {
      selectedProduct: {}
    }
  },
components: {
VHeaderComp,
VMainPage,
VFooter,
  },
    methods:{

    }

};
</script>

<style lang="scss">

</style>
