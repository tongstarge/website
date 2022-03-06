<template>
  <header class="navbar">
    <div class="navbar-content">
      <div class="navbar-logo">
        <img :src="require('../assets/logo-text.svg')" alt="logo" />
      </div>
      <div class="spacer"></div>
      <ul class="navbar-nav">
        <li class="navbar-nav-item">
          <nuxt-link to="/">首页</nuxt-link>
        </li>
        <li class="navbar-nav-item">
          <nuxt-link to="/blog">博客</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  z-index: 10000;
}
.navbar-content {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 100%;
}
.navbar-logo {
  display: flex;
  height: 34px;
}
.spacer {
  flex-grow: 1;
}
.navbar-nav {
  display: flex;
  align-items: center;
}
.navbar-nav-item {
  list-style: none;
}
.navbar-nav-item a {
  padding: 15px;
  color: #ffffff99;
  font-size: 16px;
  text-decoration: none;
  transition: .2s;
}
.navbar-nav-item a:hover{
  color: #ffffff;
}
.navbar-nav-item .nuxt-link-active {
  color: #ffffff !important;
}
</style>