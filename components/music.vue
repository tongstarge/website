<template>
  <div class="music" v-html="musics[musicKey]" :style="'opacity:'+(scrollTop/200)"></div>
</template>

<script>
  export default{
    data(){
      return {
        // 音乐iframe
        musics: [
          `<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=155 height=52 src="//music.163.com/outchain/player?type=2&id=1924246096&auto=0&height=32"></iframe>`,
        ],

        // 音乐的索引
        musicKey: 0,

        // 浏览位置
        scrollTop: 0,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.getTop)
      this.musicKey = Math.floor(Math.random()*this.musics.length)
      console.log(`%c[info]%c music:${this.musicKey}`, 'background-color:green;border-radius:3px', '')
    },
    methods: {
      getTop() {
        this.scrollTop = document.documentElement.scrollTop
      },
    }
  }
</script>

<style>
iframe{
  position: absolute;
  transition: all .5s cubic-bezier(1, -0.37, 0, 1.26);
  left: -105px;
}
.music{
  position: fixed;
  width: 100px;
  left: 0;
  top: 70%;
  height: 55px;
  width: 170px;
  z-index: 114514;
}
.music:hover iframe{
  left: 0px;
}
</style>
