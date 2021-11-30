<template>
  <label for="" class="form-field">
    <span class="form-field__caption">{{ title }}</span>
    <input
      class="comp-form"
      :class="className"
      :type="type"
      :placeholder="placehText"
      :value="inputValue"
      @input="$emit('update.inputValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    inputValue: {
      type: String },
    className: {
      type: String,
    },
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    placehText: {
      type: String,
      default: "Some text",
    },
  },
};
</script>

<style lang="scss">
.comp-form {
  background: #f4f5f7;
  border: 1px solid #d7dadd;
  box-sizing: border-box;
  border-radius: 4px;
  height: 44px;
}
.form-field {
  margin: 0px;
}
</style>
