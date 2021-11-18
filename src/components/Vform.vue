<template>
     <label for="" class="form-field" >
            <span class="form-field__caption">{{title}}</span>
            <input class="comp-form" :class="className" :type="type" :placeholder="placehText">
</label>
</template>

<script>

  export default {
props:{
  className:{
    type: String,
  },
  type:{
    type: String,
  },
title:{
  type: String,
},
placehText:{
  type: String,
  default: "Some text"
}
}
  }
</script>

<style lang="scss">
.comp-form {
background: #F4F5F7;
border: 1px solid #D7DADD;
box-sizing: border-box;
border-radius: 4px;
height: 44px;
}
.form-field{
  margin: 0px;
}
</style>