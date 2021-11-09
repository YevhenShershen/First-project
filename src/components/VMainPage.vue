<template>
  <VHero></VHero>
  <VAboutSection/>
  <VMission/>
  <VSupported/>
  </template>

<script>
import VHero from './VMainPage/VHero.vue'
import VAboutSection from './VMainPage/VAboutSection.vue'
import VMission from './VMainPage/VMission.vue'
import VSupported from './VMainPage/VSupported.vue'

export default {
components: {
VHero,
VAboutSection,
VMission,
VSupported,
  },
  }
</script>

<style lang="sass" >

</style>