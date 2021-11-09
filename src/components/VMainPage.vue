<template>
  <VHero></VHero>
  <VAboutSection/>
  <VMission/>
  <VSupported/>
  <VHeroFigures/>
  </template>

<script>
import VHero from './VMainPage/VHero.vue'
import VAboutSection from './VMainPage/VAboutSection.vue'
import VMission from './VMainPage/VMission.vue'
import VSupported from './VMainPage/VSupported.vue'
import VHeroFigures from './VMainPage/VHeroFigures.vue'

export default {
components: {
VHero,
VAboutSection,
VMission,
VSupported,
VHeroFigures
  },
  }
</script>

<style lang="sass" >

</style>