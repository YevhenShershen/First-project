<template>
  <section class="section-news section-offset">
    <div class="container">
      <h2 class="title title--center recent-news">Recent news</h2>
      <div class="build-block section-news__building-news">
          <div class="building-news">
          <img
            :src="SetSvg('building-news1.jpg')"
            alt=""
            class="building-news__img"
          />
          <h4 class="building-news__title ">
            How to Build Climate Change-Resilient Infrastructure
          </h4>
          <span class="building-news__information "
            >Industry News &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />&nbsp; June
            24, 2020 &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />
            &nbsp;<img :src="SetSvg(svgName[1].path)" alt="" />&nbsp; comments</span
          >
          <p class="building-news__discr">
            Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
            faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer
            bibendum turpis convallis enim, nibh convallis...
          </p>
           </div>


              <div class="building-news  ">
          <img
            :src="SetSvg('building-news2.jpg')"
            alt=""
            class="building-news__img"
          />
          <h4 class="building-news__title building-news__title_right">
            How Construction Can Help Itself
          </h4>
           <span class="building-news__information building-news__information_right"
            >Industry News &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />&nbsp; June
            24, 2020 &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />
            &nbsp;<img :src="SetSvg(svgName[1].path)" alt="" />&nbsp; comments</span
          >
                  </div>
            <div class="building-news  ">
          <img
            :src="SetSvg('building-news3.jpg')"
            alt=""
            class="building-news__img"
          />
          <h4 class="building-news__title">
            Types of Flooring Materials
          </h4>
           <span class="building-news__information"
            >Industry News &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />&nbsp; June
            24, 2020 &nbsp;<img :src="SetSvg(svgName[0].path)" alt="" />
            &nbsp;<img :src="SetSvg(svgName[1].path)" alt="" />&nbsp; comments</span
          >
              </div>

      </div>
      <div class="news-buttom">
      <h3 class="news-buttom_title">Explore all our news posts</h3>
<MyButton class="btn--fil" @click="clickFunction">View all news</MyButton>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from "../MyButton.vue"
export default {
    data() {
    return {
      svgName: [
        {
          path: "stick.png",
        },
        {
          path: "chat.png",
        },
      ],
    };
  },
  methods: {
    SetSvg(path) {
      return require(`@/assets/img/${path}`);
    },
    clickFunction(){
      console.log("click")
    }
  },
  components:{
    MyButton,
  }
};
</script>

<style lang="scss" scoped></style>
