<template>
  <section class="mission section-offset">
    <div class="container">
      <h2 class="title title--center">Our core values</h2>
      <p class="descr descr--center">
        Our mission is to set the highest standards for construction sphere.
      </p>
      <ul class="list-reset mission-list">
        <li class="mission-item" v-for="mission in missionItem" :key="mission">
          <img :src="IconPath(mission.pathIcon)" :alt="mission.alt" />
          <h3 class="mission_subtitle">{{ mission.title }}</h3>
          <p class="mission_descr">{{ mission.text }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="ask-section section-offset">
    <div class="container ask-container">
      <h2 class="title title--center">Want to know more? Ask us a question:</h2>
      <div class="ask-form-block">
        <form action="#" class="know-form">
          <!-- <label for="" class="know-form__field form-field" v-for="knowForm in knowForm" :key="knowForm">
            <span class="form-field__caption">{{knowForm.title}}</span>
            <input type="text" :placeholder="knowForm.placeholder"> -->
          <!-- </label> -->
          <Vform
            class="know-form__field "
            v-for="knowForm in knowForm"
            :key="knowForm"
            :title="knowForm.title"
            :placehText="knowForm.placeholder"
          ></Vform>

          <my-button class="know-btn btn--fill">Send</my-button>
        </form>
      </div>
    </div>
  </section>
  <section class="our-services section-offset">
    <div class="container">
      <h2 class="title title--center">Our services</h2>
      <p class="descr descr--center">
        Createx Construction Bureau is a construction giant with a full range of
        construction services.
      </p>
      <div class="our-services-block">
        <a
          href=""
          class="our-services-block_item"
          v-for="item in OurServices"
          :key="item"
        >
          <img :src="IconPath(item.icon)" alt="" class="our-photo" />
          <p class="our-text">{{ item.name }}</p>
        </a>
      </div>
      <div class="our-bottom-content">
        <h3 class="our-title title--center">Learn more about our services</h3>
        <my-button class="btn-primary btn--fil">View services</my-button>
      </div>
    </div>
  </section>
  <section class="selected-project section-offset">
    <div class="container">
      <div class="selected-project-block">
        <h2 class="selected-project-title title">
          Browse our selected projects and learn more about our work
        </h2>
        <div class="arr-navigation">
            <button class="btn-reset  btn-left">
        <img :src="IconPath(projects[0].path)" alt="" class="arr-left selected-icon" />
        </button>
        <button class="btn-reset btn-right">
            <img :src="IconPath(projects[1].path)" alt="" class="arr-right selected-icon" />
        </button>
              </div>
      </div>
      <div class="selected-project-bulding">
        <div class="selected-project-bulding_item">
          <img :src="IconPath('red-building.jpg')" alt="" class="selected-photo " />
          <h3 class="selected-item-title title--center">Red Finger Building</h3>
          <p class="descr descr--center">
            Business Centers
          </p>
        </div>
        <div class="selected-project-bulding_item">
          <img :src="IconPath('cubes-building.jpg')" alt="" class="selected-photo" />
          <h3 class="selected-item-title  title--center">Cubes Building</h3>
          <p class="descr descr--center">
            Business Centers
          </p>
          <my-button class="btn-border-primary">View Project</my-button>
        </div>
        <div class="selected-project-bulding_item">
          <img :src="IconPath('pencil-building.jpg')" alt="" class="selected-photo" />
          <h3 class="selected-item-title  title--center">The Pencil Building</h3>
          <p class="descr descr--center">
            Stores & Malls
          </p>
        </div>
             </div>
              <div class="selected-bottom-content">
        <h3 class="selected-title title--center selected-content-title">Explore all our works</h3>
        <my-button class="btn-primary btn--fil">View portfolio</my-button>
      </div>
    </div>
  </section>
</template>

<script>
import MyButton from "../MyButton.vue";
import Vform from "../Vform.vue";
export default {
  data() {
    return {
      projects: [
        {
          path: "arr-left.svg",
        },
        {
          path: "arr-right.svg",
        },
      ],
      OurServices: [
        { name: "Construction", icon: "construction.svg" },
        { name: "Project Development", icon: "project.svg" },
        { name: "Interior Design", icon: "design.svg" },
        { name: "Repairs", icon: "repairs.svg" },
      ],
      missionItem: [
        {
          alt: "like",
          pathIcon: "mission-like.svg",
          title: "Quality",
          text:
            "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.",
        },

        {
          alt: "hand",
          pathIcon: "mission-hand.svg",
          title: "Safety",
          text:
            "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.",
        },

        {
          alt: "shoes",
          pathIcon: "mission-shoes.svg",
          title: "Comfort",
          text:
            "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.",
        },
      ],
      knowForm: [
        { title: "Name", placeholder: "Youre Name" },
        { title: "Phone", placeholder: "Youre phone" },
        { title: "Message", placeholder: "Youre Message" },
      ],
    };
  },
  methods: {
    IconPath(path) {
      return require(`@/assets/img/${path}`);
    },
  },
  components: {
    MyButton,
    Vform,
  },
};
</script>

<style lang="scss"></style>
