<template>
  <div class="home">
    <no-ssr>
      <Navbar :style="'margin-top:'" />
      <div class="topbox" :style="'height:' + (600 - scrollTop) + 'px'">
        <div style="text-align: center">
          <div class="headline" style="color: #ffffff; padding-bottom: 30px">
            曈星阁
          </div>
          <div class="text">因志趣相投而相遇，因共怀梦想而相聚</div>
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
      <div
        class="home-tip"
        :style="'background-position-y: -' + scrollTop * 0.1 + 'px;'"
      >
        <div class="home-tip-content" v-show="s" @click="newTip">
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
  width: 100%;
  left: 0;
  top: 50%;
  height: 30px;
  background: url(../assets/cloud.svg) repeat-x;
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
      ],
      tipkey: 0,
      s: false,
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
            '许许多多不同兴趣爱好的相聚在一起，讨论交流亦或是单纯的聊天娱乐。经常会举行一些有趣的活动',
          group_n: 517060062,
          color: '#ffc000',
        },
        {
          name: '源界',
          introduce: '曈星阁的技术团，专门讨论编程技术的地方（涉及web、软件、信息技术竞赛、硬件……领域）',
          group_n: 1040999292,
          color: '#1280ff',
        },
        { name: '同议编辑院', introduce: '一同商议', group_n: 711258979 },
        { name: '绘画家协会', introduce: '', group_n: 607188291 },
      ],
      members: [
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: '熙熙xiyxiy',
          info: '曈星阁副总管，擅长窜写文案。',
          qq_number: '2658730880',
          to:"https://space.bilibili.com/473020111/"
        },
        {
          name: '海藻酸钠',
          info: '曈星创始人之一，经常摸鱼，曈星阁的设计部分基本都是他干的，曾经改了3次曈星阁的logo',
          qq_number: '3409473369',
          to:"https://www.yuque.com/hzsn"
        },
        {
          name: '晓梦DawnDream',
          info: '会java、c++、python等多种编程语言，编曲、unity游戏开发也有相应的经验！',
          qq_number: '1040545078',
          to:"https://www.github.com/Dawn-Dream"
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
          to:"https://space.bilibili.com/473020111/"
        },
      ],
      notices: [
        { title: '2022新计划', content: '2022又是新的一年，我们将全力以赴。曈星阁官网、源界、learn、曈星阁家园、曈星阁动画、曈星阁小故事集合……给我干起来吧！' },
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
      this.s = false
      let min = 0
      let max = this.tip.length - 1
      this.tipkey = parseInt(Math.random() * (max - min + 1) + min, 10)
      setTimeout(() => {
        this.s = true
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
