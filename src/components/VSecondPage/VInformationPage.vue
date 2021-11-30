<template>
<section class="information">
  <div class="container">
    <div class="information-block">
      <img :src="SetImg('image.jpg')" alt="" class="information__photo">
      <div class="information__discription">
    <h2 class="information__discription-title">Construction</h2>
    <p class="information__discription-text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id&nbsp;sodales ultricies sed ut&nbsp;ut&nbsp;augue. Mattis habitant venenatis, gravida posuere massa ac&nbsp;interdum. Eget aliquam dignissim ut&nbsp;vestibulum.</p>
<MyButton class="btn-border-primary">Learn more</MyButton>
      </div>

      <div class="information__discription">
    <h2 class="information__discription-title">Project Development</h2>
    <p class="information__discription-text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id&nbsp;sodales ultricies sed ut&nbsp;ut&nbsp;augue. Mattis habitant venenatis, gravida posuere massa ac&nbsp;interdum. Eget aliquam dignissim ut&nbsp;vestibulum.</p>
<MyButton class="btn-border-primary">Learn more</MyButton>
      </div>
  <img :src="SetImg('image2.jpg')" alt="" class="information__photo">
   <img :src="SetImg('image3.jpg')" alt="" class="information__photo">
      <div class="information__discription">
    <h2 class="information__discription-title">Interior Design</h2>
    <p class="information__discription-text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id&nbsp;sodales ultricies sed ut&nbsp;ut&nbsp;augue. Mattis habitant venenatis, gravida posuere massa ac&nbsp;interdum. Eget aliquam dignissim ut&nbsp;vestibulum.</p>
<MyButton class="btn-border-primary">Learn more</MyButton>
      </div>
      <div class="information__discription">
    <h2 class="information__discription-title">Repairs</h2>
    <p class="information__discription-text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id&nbsp;sodales ultricies sed ut&nbsp;ut&nbsp;augue. Mattis habitant venenatis, gravida posuere massa ac&nbsp;interdum. Eget aliquam dignissim ut&nbsp;vestibulum.</p>
<MyButton class="btn-border-primary">Learn more</MyButton>
      </div>
       <img :src="SetImg('image4.jpg')" alt="" class="information__photo">
    </div>
  </div>
</section>
</template>

<script>
import MyButton from "../MyButton.vue"
  export default {
components:{
MyButton,
},
methods:{
  SetImg(imageName){
      return require(`@/assets/img/VSecondPage/${imageName}`);
  }
}
  }
</script>

<style lang="scss" scoped>

</style>