<template>
  <section class="supported-section section-offse">
    <div class="container">
      <h2 class="title title--center">{{ titleName }}</h2>
      <div class="supported-firms-logos-items">
        <a
          href=""
          class="supported-firms-logo"
          v-for="item in SuportedLogos"
          :key="item"
        >
          <img :src="IconPath(item.path)" :alt="item.logoName" />
        </a>
      </div>
      <div class="supported-firms-clients">

                <div class="clients-saying-box">
                  <div class="clients-saying">
          <h2 class="title title--center">{{ titlClients }}</h2>
          <img :src="IconPath('photo-client.png')" alt="" class="clients-img" />
          <p class="clients-text">
            Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
            eiusmod enim. Consectetur magna cillum consequat minim laboris
            cillum laboris voluptate minim proident exercitation ullamco.
          </p>
          <div class="clients-information">
            <div class="clients-information__item-left">
            <h4 class="client-info">Shawn Edwards</h4>
            <span class="client-position">Position, Company name</span>
            </div>
            <div class="clients-information__item-right">
            <button class="btn-reset  btn-left">
              <img
                :src="IconPath(projects[0].path)"
                alt=""
                class="arr-left selected-icon"
              />
            </button>
            <button class="btn-reset btn-right-brown">
              <img
                :src="IconPath(projects[1].path)"
                alt=""
                class="arr-right selected-icon bac-icon"
              />
            </button>
             </div>
            </div>

            </div>
            <div class="clients-photo">
          <img :src="IconPath('clients-contract.jpg')" alt="" class="clients-photo" />
        </div>
              </div>



        </div>


    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleName: "Supported by 12+ partners",
      titlClients: "What our clients are saying",
      SuportedLogos: [
        {
          logoName: "In Depth Consulting",
          path: "InDepth.png",
        },
        {
          logoName: "Higher Fit",
          path: "HigherFit.png",
        },
        {
          logoName: "Sentinal Consulting",
          path: "SentinalConsulting.png",
        },
        {
          logoName: "Happy Home",
          path: "HappyHome.png",
        },
        {
          logoName: "For Sale",
          path: "ForSale.png",
        },
        {
          logoName: "Sunset Realty",
          path: "SunsetRealty.png",
        },
      ],
      projects: [
        {
          path: "arr-left.svg",
        },
        {
          path: "arr-right-brown.svg",
        },
      ],
    };
  },
  methods: {
    IconPath(path) {
      return require(`@/assets/img/${path}`);
    },
  },
};
</script>

<style lang="sass" scoped></style>
