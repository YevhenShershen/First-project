<template>
<section class="footer">
  <div class="container">
 <div class="footer-top">
   <div class="createx-block">
     <img  :src="IconPath(fdfd)" class="createx-block__logo">
     <ul class="createx-block__social list-reset">
              <li><a href="" class="createx-block__social-item"><img :src="IconPath('Whatsapp.svg')" alt="Messanger"></a></li>
                <li><a href="" class="createx-block__social-item"><img :src="IconPath('Messanger.svg')" alt="Messanger"></a></li>
                  <li><a href="" class="createx-block__social-item" ><img :src="IconPath('Vector.svg')" alt="Messanger"></a></li>
                    <li><a href="" class="createx-block__social-item"><img :src="IconPath('bird.svg')" alt="Messanger"></a></li>
                      <li><a href="" class="createx-block__social-item"><img :src="IconPath('Subtract.svg')" alt="Messanger"></a></li>
     </ul>
     <p class="createx-block__about">Createx Construction Bureau has been successfully operating in the USA construction market since 2000.
       We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>
   </div>
   <div class="subscribe-block">
     <h3 class="subscribe-block__title">Let’s stay in touch</h3>
     <div class="subscribe-block__form">
      <Vform class="checkbox__item"
:type="'email'"
:placehText="'Your email address '"

></Vform>
<MyButton class="btn--fil">subscribe</MyButton>
     </div>
     <p class="subscribe-block__text">*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</p>
   </div>
 </div>
 <div class="footer-middle">
   <div class="footer-middle__about-us">
     <h4 class="about-us__title">HEAD OFFICE</h4>
     <ul class="list-reset">
       <li><span class="footer-middle__text">Address:</span><a href="" class="about-us__phone">&nbsp;&nbsp;8502 Preston Rd. Inglewood, New York</a></li>
       <li><span class="footer-middle__text">Call:</span><a href="" class="about-us__phone">&nbsp;&nbsp;(405) 555-0128</a></li>
       <li><span class="footer-middle__text">Email:</span><a href="" class="about-us__mail">&nbsp;&nbsp;hello@createx.com</a></li>
     </ul>
   </div>
   <div class="footer-middle__about-us">
     <h4 class="about-us__title">WHO WE ARE</h4>
     <ul class="list-reset">
       <li><a href="" class="about-us__phone">About Us</a></li>
       <li><a href="" class="about-us__phone">Available Positions</a></li>
       <li><a href="" class="about-us__mail">Contacts</a></li>
     </ul>
   </div>
      <div class="footer-middle__about-us">
     <h4 class="about-us__title">OUR EXPERIENCE</h4>
     <ul class="list-reset">
       <li><a href="" class="about-us__phone">Services</a></li>
       <li><a href="" class="about-us__phone">Work</a></li>
       <li><a href="" class="about-us__mail">News</a></li>
     </ul>
   </div>
 </div>
 <div class="footer-bottom">
   <span class="footer-bottom__createx">© All rights reserved. Made with by Createx Studio</span>
   <span class="footer-bottom__text">GO TO TOP<button class="footer-bottom__buttom"><img  :src="IconPath('bottom-button.png')" class="createx-block__logo"></button></span>
 </div>
  </div>
</section>
</template>

<script>
import Vform from "./Vform.vue"
import MyButton from "./MyButton.vue"
  export default {
    data(){return{
fdfd:"footer-logo.png"
    }},
 methods: {
    IconPath(path) {
      return require(`@/assets/img/${path}`);
    },
  },
  components:{
      Vform,
  MyButton,
  }
  }
</script>

<style lang="scss" scoped>

</style>