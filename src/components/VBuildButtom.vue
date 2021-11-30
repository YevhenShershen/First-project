<template>
  <section class="build-bottom ">
    <div class="container">
      <div class="build-bottom__field">
        <div class="build-form build-bottom__field-form">
          <h3 class="field-form__title">A quick way to discuss details</h3>
          <form
            action=""
            class="build-form__field"
            v-on:submit.prevent="formSubmited(dataBase)"
          >
            <Vform
              :value="dataBase.Name"
              :className="'input100'"
              :title="'Name*'"
              :placehText="'Your name'"
            ></Vform>
            <Vform
              :value="dataBase.Phone"
              :className="'input100'"
              :title="'Phone*'"
              :placehText="'Your phone number'"
            ></Vform>
            <Vform
              :value="dataBase.Email"
              :className="'input100'"
              :type="'email'"
              :title="'Email'"
              :placehText="'Your working email'"
            ></Vform>
            <Vform
              :value="dataBase.Massege"
              :className="'input100'"
              :type="'message'"
              :title="'Message*'"
              :placehText="'Your message'"
            ></Vform>

            <label for="" class="form-field checkbox__item">
              <span class="form-field__caption"
                >I agree to receive communications from Createx Construction
                Bureau.</span
              >
              <input class="comp-form checkbox-form" type="checkbox" />
            </label>
            <MyButton class="btn--fil" @click="testFunction(dataBase)"
              >send request</MyButton
            >
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vform from "./Vform.vue";
import MyButton from "./MyButton.vue";
export default {
  data() {
    return {
      Information: [],
      dataBase: {
        Name: "",
        Phone: "",
        Email: "",
        Massege: "",
      },
    };
  },
  components: {
    Vform,
    MyButton,
  },
  methods: {

    formSubmited(items) {
      this.Information = [];
      for (let item in items) {
        this.Information.push(items[item]);
        console.log(this.Information)
      }
    },
    testFunction(obj) {
      for (let item in obj)
        if (typeof obj[item] === "object") {
          for (let i in obj[item]) {
            console.log(`key ${i} --- ${obj[item][i]}`);
          }
        } else {
          console.log(`key ${item} --- ${obj[item]}`);
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  background-color: yellow;
}
</style>
