<template>
<section class="build-bottom ">
  <div class="container">
  <div class="build-bottom__field">
<div class="build-form build-bottom__field-form">
<h3 class="field-form__title">A quick way to discuss details</h3>
<form action="" class="build-form__field" v-on:submit.prevent="formSubmited(dataBase)">
<Vform
v-model="dataBase.Name"
:forName="Name"
:idName="Name"
:className="'input100'"
:title="'Name*'"
:placehText= "'Your name'"
></Vform>
<Vform
v-model="dataBase.Phone"
:className="'input100'"
:title="'Phone*'"
:placehText= "'Your phone number'"
></Vform>
<Vform
v-model="dataBase.Email"
:className="'input100'"
:type="'email'"
:title="'Email'"
:placehText= "'Your working email'"
></Vform>
<Vform
v-model="dataBase.Massege"
:className="'input100'"
:type="'message'"
:title="'Message*'"
:placehText= "'Your message'"
></Vform>

<label for="" class="form-field checkbox__item" >
            <span class="form-field__caption">I agree to receive communications from Createx Construction Bureau.</span>
            <input class="comp-form checkbox-form" type="checkbox" >
</label>
<MyButton class="btn--fil" @click="testFunction(dataBase2)">send request</MyButton>
</form>
</div>
  </div>
  </div>
</section>
</template>

<script>
import Vform from "./Vform.vue"
import MyButton from "./MyButton.vue"
  export default {
    data(){
      return{
        Information:[],
        Agree:true,
dataBase:{
        Name:"",
        Phone:"",
        Email:"",
        Massege:"",
        },
        dataBase2:{
name:"Vasia",
secondName: "Vasiliewicz",
age: 25,
Family:{ parents:'Father and mother'}
        },
      }
    },
components:{
  Vform,
  MyButton,
},
methods:{
AgreeActive(){
  this.Agree = !this.Agree
  console.log(this.Agree)
},
formSubmited(items){
  this.Information= []
  for(let item in items ){
    this.Information.push(items[item])
  }
},
testFunction(obj){
  for(let item in obj)
  if(typeof(obj[item])==='object'){
    for(let i in obj[item]){
      console.log(`key ${i} --- ${obj[item][i]}`)
    }
  }
  else{
    console.log(`key ${item} --- ${obj[item]}`)
  }
}
}
  }
</script>

<style lang="scss" scoped>
.test{
  background-color: yellow;
}
</style>