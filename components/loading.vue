<template>
  <div class="loading" v-if="loading">
    <div class="loading-header"></div>
    <div class="loading-content">
      <div>
        <div class="loading-effect">
          <span style="animation-delay: 0s"></span>
          <span style="animation-delay: 0.2s"></span>
          <span style="animation-delay: 0.4s"></span>
          <span style="animation-delay: 0.6s"></span>
          <span style="animation-delay: 0.8s"></span>
        </div>
      </div>
    </div>
    <div class="loading-footer">正在为您打开曈星阁的大门……</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style>
.loading-effect {
  position: relative;
  margin-bottom: 50px;
  color: #ffffff;
  perspective: 400px;
  -webkit-perspective: 400px;
}
.loading-effect span {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  display: inline-block;
  transform-style: preserve-3d;
  animation: loading 5s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}
@keyframes loading {
  50% {
    opacity: 0;
    transform: perspective(400px) rotateY(180deg) scale(1.2);
    -webkit-transform: perspective(400px) rotateY(180deg) scale(1.2);
  }
  100% {
    transform: perspective(400px) rotateY(360deg);
    -webkit-transform: perspective(400px) rotateY(360deg);
    opacity: 1;
  }
}
.loading {
  background-color: #ff4c00;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10000;
  left: 0;
  top: 0;
}
.loading-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.loading-text {
  text-align: center;
  color: #ffffffdd;
  line-height: 50px;
}
.loading-footer {
  text-align: center;
  color: #ffffffdd;
  line-height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>