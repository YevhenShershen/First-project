<template>
<section class="footer">
  <div class="container">
 <div class="footer-top">
   <div class="createx-block">
     <img  :href="IconPath(fdfd)" class="createx-block__logo">
     <ul class="createx-block__social">
              <li><a href="IconPath('Messanger.svg')"></a></li>
     </ul>
     <p class="createx-block__about">Createx Construction Bureau has been successfully operating in the USA construction market since 2000.
       We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>
   </div>
   <div class="subscribe-block">
     <h3 class="subscribe-block__title"></h3>
     <div class="subscribe-block__form"></div>
     <p class="subscribe-block__text"></p>
   </div>
 </div>
 <div class="footer-middle">
   <div class="footer-middle__about-us">
     <h4 class="about-us__title"></h4>
   <address class="about-us__asress"></address>
   <a href="" class="about-us__phone"></a>
  <a href="" class="about-us__mail"></a>
   </div>
    <div class="footer-middle__about-us">
     <h4 class="about-us__title"></h4>
   <address class="about-us__information"></address>
   <a href="" class="about-us__information"></a>
  <a href="" class="about-us__information"></a>
   </div>
    <div class="footer-middle__about-us">
     <h4 class="about-us__title"></h4>
   <address class="about-us__information"></address>
   <a href="" class="about-us__information"></a>
  <a href="" class="about-us__information"></a>
   </div>
 </div>
 <div class="footer-bottom">
   <span class="footer-bottom__createx">© All rights reserved. Made with by Createx Studio</span>
   <button class="footer-bottom__buttom">GO TO TOP</button>
 </div>
  </div>
</section>
</template>

<script>
  export default {
    data(){return{
fdfd:"footer-logo.png"
    }},
 methods: {
    IconPath(path) {
      return require(`@/assets/img/${path}`);
    },
  },
  }
</script>

<style lang="scss" scoped>

</style>