<template>
  <div class="s-line" :class="['s-line-' + position, 's-line-' + direction]">
    <div class="s-line-content" v-if="direction != 'vertical'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: "center",
    },
    direction: {
      type: String,
      default: "horizontal",
    },
  },
};
</script>

<style>
.s-line {
  position: relative;
}
.s-line-horizontal {
  height: 1px;
  margin: 15px 0;
  width: 100%;
  background: #d6d4d2;
}
.s-line-vertical {
  width: 1px;
  margin: 0 10px;
  background: #d6d4d2;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
}
.s-line-horizontal .s-line-content {
  position: absolute;
  top: -0.75em;
  left: 0;
  background: #ffffff;
  padding: 0 10px;
}
.s-line-left .s-line-content {
  left: 10px;
}
.s-line-right .s-line-content {
  right: 10px;
}
.s-line-center .s-line-content {
  left: 50%;
  transform: translateX(-50%);
}
</style>