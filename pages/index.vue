<template>
  <div class="home">
    <Navbar />
    <div class="topbox">
      <div style="text-align: center">
        <div class="headline" style="color: #ffffff; padding-bottom: 30px">
          曈星阁
        </div>
        <div class="text">一群少年向着梦想前进</div>
      </div>
      <div class="s"></div>
    </div>
    <div class="box">
      <div>
        <div class="headline">管理模式</div>
        <div class="home-mode">
          <div class="home-mode-item" v-for="(m, key) in mode_items" :key="key">
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
        <div v-swiper:mySwiper_member="swiperOption_member" class="home-member">
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
                  <div class="home-member-item-footer-btn" @click="getinfo(key)">取得联系</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <s-dialog v-model="m_dialog" animation="zoom"> 12121 </s-dialog>
    <div class="box">
      <div>
        <div class="headline">最近在干什么</div>
        <div v-swiper:mySwiper_notice="swiperOption_notice" class="home-notice">
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
        </div>
      </div>
    </div>
    <div class="home-join">
      <div class="home-join-bg" :class="bg?'home-join-bg_a':''"></div>
      <div class="home-join-btn" @mouseenter="bg=true" @mouseleave="bg=false">加入我们</div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="footer-left"></div>
        <div class="footer-right">.footer</div>
      </div>
      <div class="footer-bottom">
        © 2022. All Rights Reserved.曈星阁 版权所有
      </div>
    </div>
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
<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/navbar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
  },
  data() {
    return {
      m_dialog: false,
      swiperOption_member: {
        loop: false,
        autoplay: 3000,
        slidesPerView: 1,
      },
      bg:false,
      swiperOption_notice: {
        effect: 'cards',
        loop: false,
        autoplay: false,
        slidesPerView: 1,
      },
      loadingOver: false,
      im: false,
      member_info:{},
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
        {
          name: '源界',
          introduce: '详细介绍',
          group_n: 517060062,
        },
      ],
      members: [
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
        },
        {
          name: 'Lai追求',
          info: '曈星阁创始人\n想法特别多，曈星阁策划基本上都出自他手\n擅长前端开发（这个网站就是他开发的）',
          qq_number: '123632704',
        },
        {
          name: 'Lai追求',
          info: '阿巴阿巴',
          qq_number: '123632704',
        },
      ],
      notices: [
        {
          title: '2022新计划',
          content: '2022了，我们要搞个计划',
        },
        {
          title: '2022新计划',
          content: '2022了，我们要搞个计划',
        },
      ],
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.s_width = document.body.clientWidth
        this.swiperOption_member.slidesPerView = Math.floor(this.s_width / 300)
      })()
    }
  },
  created() {
    if (process.browser) {
      this.s_width = document.body.clientWidth
      this.swiperOption_member.slidesPerView = Math.floor(this.s_width / 300)
    }
  },
  methods: {
    getinfo(key){
      this.member_info=this.members[key];
      this.m_dialog=true;
    }
  },
})
</script>
