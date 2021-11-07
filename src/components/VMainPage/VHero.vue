<template>
  <section class="hero">
    <div class="container">
      <div class="hero-box">
        <div class="hero-box_items">
          <h1 class="hero-item-title">CREATE<span>X</span> CONSTRUCTION</h1>
          <div class="hero-item-text">
            <p>
              Cras ultrices leo vitae non viverra. Fringilla nisi quisque
              consequat, dignissim vitae proin ipsum sed. Pellentesque nec
              turpis purus eget pellentesque integer ipsum elementum felis.
            </p>
          </div>
          <div class="hero-item-button">
            <my-button class="btn--stroke btn--stroke-light">
              Learn more about us
            </my-button>
            <my-button  class="btn--fill">Submit Request</my-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from "../MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>

<style lang="scss"></style>
