<template>
  <input
    class="s-input"
    :type="type"
    :placeholder="placeholder"
    :value="input"
    @input="tinput"
  />
</template>

<script>
export default {
  name: "s-input",
  props: {
    input: String,
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  model: {
    prop: "input",
  },
  methods: {
    tinput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
.s-input {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 9px 11px;
  color: #000000bb;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  transition: 0.3s;
  outline: none;
  margin: 5px;
}
.s-input:hover {
  border-color: #ffc000;
}
.s-input:focus {
  border-color: #ffc000;
  box-shadow: 0 0 0 5px #ffc00033;
}
</style>