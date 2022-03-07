<template>
  <textarea
    class="s-textarea"
    style="resize: none"
    :cols="cols"
    :rows="rows"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :value="input"
    @input="tinput"
  ></textarea>
</template>

<script>
export default {
  name: "s-textarea",
  props: {
    input: String,
    placeholder: {
      type: String,
      default: null,
    },
    cols: {
      type: String,
      default: "30",
    },
    rows: {
      type: String,
      default: "10",
    },
    maxlength: String,
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
.s-textarea {
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
.s-textarea:hover {
  border-color: #ffc000;
}
.s-textarea:focus {
  border-color: #ffc000;
  box-shadow: 0 0 0 5px #ffc00033;
}
</style>