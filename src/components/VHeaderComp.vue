<template>
  <header class="header header-main">
    <div class="container _header-container">
      <a href="" class="logo"
        ><img
          class="logo-header"
          :src="LogoPath"
          :alt="alternTextLogo"
        />
      </a>
      <nav class="header-navigation">
        <ul class="header-items">
          <li
            class="header-item list-reset"
            v-for="item in headerMenu"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </nav>
      <div class="header-contact">
        <div class="header-contact-phone">
          <img :src="SetSvg('phone.svg')" alt="phone" />
          <a href="tel:4055550128" class="header-phone"
            ><span class="header-phone-text"
              >Call us<br />
              <p>{{ contacts.phoneNumber }}</p></span
            ></a
          >
        </div>
        <div class="header-contact-mail">
          <img :src="SetSvg('Chat.svg')" alt="mail" />
          <a :href="'mailto:' + contacts.mail" class="header-mail"
            ><span class="header-mail-text"
              >Talk to us<br />
              <p>{{ contacts.mail }}</p>
            </span></a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoPath from "@/assets/img/logo.svg";
export default {
  data() {
    return {
      LogoPath,
      alternTextLogo: "CREATEX",
      headerMenu: ["About US", "Services", "Work", "News", "Contacts"],
      contacts: {
        phoneNumber: "(405)555-0128",
        mail: "hello@createx.com",
      },
    };
  },
  components: {},
  methods: {
    SetSvg(imageName) {
      return require(`@/assets/img/${imageName}`);
    },
  },
};
</script>

<style lang="scss"></style>
