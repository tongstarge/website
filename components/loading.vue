<template>
  <div class="loading">
      <div class="loading-header"></div>
    <div class="loading-content">
      <div>
        <div class="loading-logo">
          <img src="~/assets/logo-text.svg" alt="logo" />
        </div>
        <div class="loading-effect">
            <div class="l2"></div>
            <div class="l1"></div>
            <div class="l"></div>
        </div>
      </div>
    </div>
    <div class="loading-footer">正在为您打开曈星阁的大门……</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.loading-header{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: url(~/assets/hw.svg) repeat-x;
    background-size: contain;
    height: 27px;
}
.loading-effect{
    margin: 20px auto;
    height: 100px;
    width: 100px;
    position: relative;
    margin-bottom: 50px;
}
.l{
    position: absolute;
    top: 50px;
    left: 45px;
    height: 10px;
    width: 10px;
    background: #ffffff;
    transform: rotate(45deg);
}
.l1,.l2{
    top: 20px;
    left: 15px;
    position: absolute;
    width: 60px;
    height: 60px;
    border: 5px solid #ffffff;
}
.l1{
    background: #ff793f;
    animation: l1 2s infinite cubic-bezier(0.19, 0.4, 0.46, 1.18);
    transform: rotate(45deg);
}
.l2{
    border-color: #ffffff;
    animation: l2 2s infinite cubic-bezier(0.19, 0.4, 0.46, 1.18);
}
@keyframes l2{
    0%{
        transform: rotate(0deg);
    }
    80%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(180deg);
    }
}
@keyframes l1{
    0%{
        transform: rotate(45deg);
    }
    80%{
        transform: rotate(-135deg);
    }
    100%{
        transform: rotate(-135deg);
    }
}
.loading {
  background-color: #ff6c2e;
  background-image: linear-gradient(#ffb100, #ff6c2e);
  position: fixed;
  width: 100%;
  height: 100%;
}
.loading-content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.loading-logo img {
  height: 70px;
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