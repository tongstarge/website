<template>
  <div class="home">
    <no-ssr>
      <Navbar :style="'margin-top:'" />
      <div class="topbox" :style="'height:' + (600 - scrollTop) + 'px'">
        <div style="text-align: center">
          <div class="headline" style="color: #ffffff; padding-bottom: 30px">
            曈星阁
          </div>
          <div class="text">一群少年向着梦想前进(介绍)</div>
        </div>
        <div class="s"></div>
      </div>
      <div class="box">
        <div>
          <div class="headline">管理模式</div>
          <div class="home-mode">
            <div
              class="home-mode-item"
              v-for="(m, key) in mode_items"
              :key="key"
            >
              <div class="home-mode-item-img_box">
                <div
                  class="home-mode-item-img"
                  :style="
                    'background-image:url(https://p.qlogo.cn/gh/' +
                    m.group_n +
                    '/' +
                    m.group_n +
                    '/640)'
                  "
                ></div>
              </div>
              <div class="home-mode-item-content">
                <div class="home-mode-item-name">
                  {{ m.name }}
                </div>
                <div class="home-mode-item-introduce">
                  {{ m.introduce }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box" style="background: #f2ecde">
        <div>
          <div class="headline">遇见有趣的人</div>
          <div
            v-swiper:mySwiper_member="swiperOption_member"
            class="home-member"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(m, key) in members" :key="key">
                <div class="home-member-item">
                  <div
                    class="home-member-item-avatar"
                    :style="
                      'background-image:url(http://q1.qlogo.cn/g?b=qq&nk=' +
                      m.qq_number +
                      '&s=640)'
                    "
                  ></div>
                  <div class="home-member-item-name">
                    {{ m.name }}
                  </div>
                  <div class="home-member-item-info">
                    {{ m.info }}
                  </div>
                  <div class="home-member-item-footer">
                    <div
                      class="home-member-item-footer-btn"
                      @click="visit(key)"
                    >
                      拜访
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box">
        <div>
          <div class="headline">最近在干什么</div>
          <div
            v-swiper:mySwiper_notice="swiperOption_notice"
            class="home-notice"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(n, key) in notices" :key="key">
                <div class="home-notice-item">
                  <div class="home-notice-item-title">
                    {{ n.title }}
                  </div>
                  <div class="home-notice-item-content">
                    {{ n.content }}
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <div class="home-tip" :style="'background-position-y: -'+scrollTop*0.1+'px;'">
        <div class="home-tip-content" v-show="tip_show" @click="newTip">
          {{ tip[tipkey] }}
        </div>
      </div>
      <Footer />
    </no-ssr>
  </div>
</template>
<style>
@import url(../style/home.css);
.s {
  position: absolute;
  width: 100px;
  left: 0;
  top: 50%;
  height: 30px;
  background: url(../assets//hw.svg) repeat-x;
  background-size: contain;
}
</style>
<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      m_dialog: false,
      tip: [
        '既然我们都坚持下来了，为何不再坚持下去呢？',
        '一切都是最好的安排',
        '多多留意身边事物，指不定能给你带来什么收获呢',
        '也许是该放松下了',
        '曈星阁为梦而建',
        '因志趣相投而相遇，因共怀梦想而相聚',
        '归星，聚星，合星，耀星，曈星',
        '不要看到前方的路远远望不到尽头就感到害怕，你只需要看向脚下，一步一步的往前走便是，总有一天你会走到那的！',
        '人类的悲欢并不相通，但是我们能分享创造的喜悦。'
      ],
      tipkey: 0,
      tip_show: false,
      swiperOption_member: {
        observer: true,
        observeParents: true,
        loop: false,
        autoplay: 3000,
        slidesPerView: 1,
      },
      scrollTop: 0,
      swiperOption_notice: {
        loop: false,
        autoplay: false,
        slidesPerView: 1,
        pagination: '.swiper-pagination',
      },
      loadingOver: false,
      im: false,
      e_active: -1,
      mx: 0,
      mode_items: [
        {
          name: '主阁',
          introduce:
            '详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍详细介绍',
          group_n: 517060062,
          color: '#ffc000',
        },
        {
          name: '源界',
          introduce: '详细介绍',
          group_n: 517060062,
          color: '#1280ff',
        },
        { name: '源界', introduce: '详细介绍', group_n: 517060062 },
      ],
      members: [
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: 'Lai追求',
          info: '别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
      ],
      notices: [
        { title: '2022新计划', content: '2022了，我们要搞个计划' },
        { title: '2022新计划', content: '2022了，我们要搞个计划' },
      ],
      show_Positions: [],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getTop)
    window.onresize = () => {
      return (() => {
        this.s_width = document.body.clientWidth
        this.$set(
          this.swiperOption_member,
          'slidesPerView',
          Math.floor(this.s_width / 300)
        )
      })()
    }
  },
  created() {
    if (process.browser) {
      this.s_width = document.body.clientWidth
      this.swiperOption_member.slidesPerView = Math.floor(this.s_width / 300)
    }
    this.newTip()
  },
  methods: {
    newTip() {
      // 将tip隐藏
      this.tip_show = false

      // 更新tip
      this.tipkey += 1

      // 如果已经到了最底部，打乱数组
      if(this.tipkey >= this.tip.length-1){
        this.tip.sort(function(){
          return (0.5-Math.random())
        })
        this.tipkey = 0
      }

      setTimeout(() => {
        this.tip_show = true
      }, 100)
    },
    getTop() {
      this.scrollTop = document.documentElement.scrollTop
    },
    visit(key) {
      window.open(this.members[key].to)
    },
  },
}
</script>
