<template>
  <transition :name="'s-dialog-' + animation">
    <div
      class="s-dialog"
      v-if="visible"
      :style="
        animation == 'fliph' || animation == 'flipv'
          ? 'perspective:1000px'
          : null
      "
    >
      <div class="s-dialog-curtain" @click="close"></div>
      <div class="s-dialog-box">
        <div class="s-dialog-title">
          {{ title }}
        </div>
        <div class="s-dialog-content">
          <slot></slot>
        </div>
        <div class="s-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "s-dialog",
  props: {
    visible: Boolean,
    title: {
      type: String,
      default: "",
    },
    animation: {
      type: String,
      default: "fade",
    },
  },
  model: {
    prop: "visible",
  },
  methods: {
    close() {
      this.$emit("input", false);
    },
  },
};
</script>

<style>
.s-dialog {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s-dialog-curtain {
  background-color: #00000088;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.s-dialog-box {
  position: relative;
  width: 50%;
  max-width: 630px;
  min-width: 320px;
  height: auto;
  background-color: #ffffff;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
  transform-style: preserve-3d;
}
.s-dialog-title {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #ffffff;
  background-color: #ff4c00;
}
.s-dialog-content {
  overflow: auto;
  height: 300px;
  padding: 10px;
}
.s-dialog-footer {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.s-dialog-fade-enter-active,
.s-dialog-fade-leave-active,
.s-dialog-flipv-enter-active,
.s-dialog-flipv-leave-active,
.s-dialog-fliph-enter-active,
.s-dialog-fliph-leave-active,
.s-dialog-scale-enter-active,
.s-dialog-scale-leave-active,
.s-dialog-slider-enter-active,
.s-dialog-slider-leave-active,
.s-dialog-slidel-enter-active,
.s-dialog-slidel-leave-active,
.s-dialog-slidet-enter-active,
.s-dialog-slidet-leave-active,
.s-dialog-slideb-enter-active,
.s-dialog-slideb-leave-active,
.s-dialog-zoom-enter-active,
.s-dialog-zoom-leave-active {
  transition: opacity 0.3s;
}

.s-dialog-fade-enter,
.s-dialog-fade-leave-to,
.s-dialog-flipv-enter,
.s-dialog-flipv-leave-to,
.s-dialog-fliph-enter,
.s-dialog-fliph-leave-to,
.s-dialog-slider-enter,
.s-dialog-slider-leave-to,
.s-dialog-slidel-enter,
.s-dialog-slidel-leave-to,
.s-dialog-slidet-enter,
.s-dialog-slidet-leave-to,
.s-dialog-slideb-enter,
.s-dialog-slideb-leave-to,
.s-dialog-scale-enter,
.s-dialog-scale-leave-to,
.s-dialog-zoom-enter,
.s-dialog-zoom-leave-to {
  opacity: 0;
}

.s-dialog-fliph-enter-active .s-dialog-box,
.s-dialog-fliph-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-fliph-enter .s-dialog-box,
.s-dialog-fliph-leave-to .s-dialog-box {
  transform: rotateY(-70deg);
}
.s-dialog-flipv-enter-active .s-dialog-box,
.s-dialog-flipv-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-flipv-enter .s-dialog-box,
.s-dialog-flipv-leave-to .s-dialog-box {
  transform: rotateX(-70deg);
}
.s-dialog-zoom-enter-active .s-dialog-box,
.s-dialog-zoom-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-zoom-enter .s-dialog-box,
.s-dialog-zoom-leave-to .s-dialog-box {
  transform: scale(2);
}
.s-dialog-scale-enter-active .s-dialog-box,
.s-dialog-scale-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-scale-enter .s-dialog-box,
.s-dialog-scale-leave-to .s-dialog-box {
  transform: scale(0);
}
.s-dialog-slider-enter-active .s-dialog-box,
.s-dialog-slider-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-slider-enter .s-dialog-box,
.s-dialog-slider-leave-to .s-dialog-box {
  transform: translateX(50px);
}
.s-dialog-slidel-enter-active .s-dialog-box,
.s-dialog-slidel-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-slidel-enter .s-dialog-box,
.s-dialog-slidel-leave-to .s-dialog-box {
  transform: translateX(-50px);
}
.s-dialog-slidet-enter-active .s-dialog-box,
.s-dialog-slidet-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-slidet-enter .s-dialog-box,
.s-dialog-slidet-leave-to .s-dialog-box {
  transform: translateY(-50px);
}
.s-dialog-slideb-enter-active .s-dialog-box,
.s-dialog-slideb-leave-active .s-dialog-box {
  transition: transform 0.3s;
}

.s-dialog-slideb-enter .s-dialog-box,
.s-dialog-slideb-leave-to .s-dialog-box {
  transform: translateY(50px);
}
</style>