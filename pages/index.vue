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
        <div class="s" title="正在设计，请不要着急，谢谢！"></div>
        <music></music>
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
            title="排名不分先后，是随机打乱的"
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
                  <div class="home-member-item-info" v-html="m.info"></div>
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
                  <div
                    class="home-notice-item-content"
                    v-html="n.content"
                  ></div>
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
        title="图片来源于网络，如有侵权请联系我们，谢谢！"
      >
        <div class="home-tip-content" v-show="tip_show" @click="newTip">
          <h2 style="text-align: center;">{{ tip[tipkey] }}</h2>
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
  background: url(../assets/cloud.svg) repeat-x;
  background-size: contain;
}
</style>
<script>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import music from '../components/music.vue'

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    Footer,
    music,
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
        '人类的悲欢并不相通，但是我们能分享创造的喜悦。',
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
            '许许多多不同兴趣爱好的相聚在一起，讨论交流亦或是单纯的聊天娱乐。经常会举行一些有趣的活动',
          group_n: 517060062,
          color: '#ffc000',
        },
        {
          name: '源界',
          introduce:
            '曈星阁的技术团，专门讨论编程技术的地方（涉及web、软件、信息技术竞赛、硬件……领域）',
          group_n: 1040999292,
          color: '#1280ff',
        },
        { name: '同议编辑院', introduce: '一同商议', group_n: 711258979 },
        { name: '绘画家协会', introduce: '', group_n: 607188291 },
      ],
      members: [
        {
          name: 'Lai追求',
          info: '曈星阁创始人之一，现任总管/曈帝。<b>想法/创意多多</b>。<b>擅长前端开发</b>,曈星阁web开发团队的主力之一。兴趣爱好广泛……内容太多了，请前往曈星阁了解详细(*￣▽￣*)',
          qq_number: '123632704',
          to: 'https://space.bilibili.com/473020111/',
        },
        {
          name: '熙熙xiyxiy',
          info: '曈星阁副总管，<b>擅长窜写文案</b>。<br/>究极死宅，二次元手游重患。<b>原神56级，崩坏三68级</b>……ψ(｀∇´)ψ',
          qq_number: '2658730880',
          to: 'https://space.bilibili.com/660196687',
        },
        {
          name: '海藻酸钠',
          info: '曈星创始人之一，<b>擅长设计UI</b>。曈星阁的设计部分基本都是他干的——曈星阁logo、源界的logo、曈星阁的颜色的规范……<br/>兴趣爱好：摸鱼（？）',
          qq_number: '3409473369',
          to: 'https://www.yuque.com/hzsn',
        },
        {
          name: 'FanUCK',
          info: '翻译、音游狗、homo小鬼、像素画师、业余演说家、小说家、思想控制者，是歌姬吧，打五把csgo。<b>不要再打错我名字的大小写了！</b> ',
          qq_number: '2920312856',
          to: 'https://b23.tv/JEylHfp',
        },
        {
          name: '晓梦DawnDream',
          info: '<b>java（最擅长的）</b>、c++、python等多种编程语言都被他……(￣y▽,￣)╭ （就是都很会用的意思）',
          qq_number: '1040545078',
          to: 'https://www.github.com/Dawn-Dream',
        },
        {
          name: '土土',
          info: '曈星阁的人事管理，为曈星阁招募到了许多新成员，<b>是曈星阁转变的关键性人物！</b><br/>会前端开发和python。<br/>furry爱好者',
          qq_number: '2093142951',
          to: 'https://www.tutime.cn',
        },
        {
          name: '小阳',
          info: '外号：阳小欠儿<br/>虽然web开发技术不怎么样，但是却<b>有丰富的运营经验</b>。小阳的加入推动了曈星阁跨入了新时代！',
          qq_number: '3197005320',
          to: 'https://www.page2.cn/',
        },
        {
          name: '可可本可',
          info: '<b>擅长体育</b>……更多的还是来曈星阁了解吧~(/▽＼)',
          qq_number: '2357211881',
          to: 'https://keke235.github.io/',
        },
        {
          name: 'cx_xigai',
          info: '：瞳星阁摸鱼者，擅长潜水（bushi），<b>搞音乐。成绩还挺好</b>。最近在做的事：跟朋友做云电脑软件。',
          qq_number: '3013749697',
          to: 'https://121.5.162.208',
        },
        {
          name: '喵茶九尾',
          info: '<b>曈星阁绘画家协会会长</b>，曈星阁的吉祥物和其他角色的设计都出自她手。<br/>兴趣爱好嘛，当然是绘画了呀！',
          qq_number: '3353857668',
          to: 'https://space.bilibili.com/670277332',
        },{
          name: '万有引力',
          info: '自我介绍：一条有梦想的咸鱼，<b>爱好编程绘画音乐</b>，渴望改变世界但是摆烂真爽，算了，还是努努力吧',
          qq_number: '941306008',
          to:'https://space.bilibili.com/1088931406',
        },
        {
          name: '箱子-BOX',
          info: '<b>游戏制作者之一</b>，会用Scratch和Gamemaker8制作游戏，会视频剪辑，擅长摄影、采访，Godot学习中……热门冷门游戏都爱玩，成分很杂的融合怪(^o^)/~',
          qq_number: '1509639704',
          to: 'https://space.bilibili.com/359876245',
        },
        {
          name: '小苏打',
          info: '<b>曈星阁web开发组成员之一</b>，擅长的自然是web开发啊。<br/>正在努力学习新技术！',
          qq_number: '2677373701',
          to: "javascript: alert('此人已隐身，无法拜访！(*/ω＼*)'); void(0);",
        },
        {
          name: 'or1=1',
          info: '<b>源界技术大佬</b>，源界镇界之宝（镇阁之宝是追求( ‵▽′)ψ）<br/>擅长php、网络安全、硬件，有非常丰富计算机编程经验。（至少在我们阁里面是深不可测的实力',
          qq_number: '2805721375',
          to: 'https://github.com/or1equ1',
        },
        {
          name: 'DDoS_LING',
          info: '专注于研究网络安全、Minecraft Java Server、Flask，拥有丰富的运维经验。爱好Minecraft、Python、硬件、剪辑、摄影。与or1=1并称“曈星阁源界二佬”',
          qq_number: '1928668616',
          to: 'https://ddos-ling.top/',
        },
        {
          name: 'encryption',
          info: '<b>网络安全员</b>。会python，C，Java(会一点点点)，kali。喜欢/狗头（不是）',
          qq_number: '3618142439',
          to: 'https://v.douyin.com/NbYYTmK/',
        },
        {
          name: '传闻中的蟹鼠',
          info: '米娜桑，ここは うわさのはあいしゆ蟹鼠 有时间的话什么事都会干 只要你能想到的 絶対に何も蟹鼠ではない。',
          qq_number: '2024757871',
          to: 'https://space.bilibili.com/484843607',
        },
      ],
      notices: [
        {
          title: '2022新计划',
          content:
            '2022又是新的一年，我们将全力以赴。<br/>曈星阁官网、源界、learn、曈星阁家园、曈星阁动画、曈星阁小故事集合……给我干起来吧！',
        },
        { title: '暑假预示第一个巅峰时期', content: '期待吧！' },
      ],
      show_Positions: [],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getTop,true)
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
    var arr = this.members
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
      var index = parseInt(Math.random() * (len - i))
      var temp = arr[index]
      arr[index] = arr[len - i - 1]
      arr[len - i - 1] = temp
    }
  },
  methods: {
    newTip() {
      // 将tip隐藏
      this.tip_show = false

      // 更新tip
      this.tipkey += 1

      // 如果已经到了最底部，打乱数组
      if (this.tipkey >= this.tip.length - 1) {
        this.tip.sort(function () {
          return 0.5 - Math.random()
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
  head() {
    // 优化seo：动态设置title，keywords 和 description
    return {
      title: '曈星阁 官方网站',
      meta: [
        {
          name: 'keywords',
          content: '曈星阁,兴趣,社团',
        },
        // hid是一个唯一标识
        {
          hid: 'description',
          name: 'names',
          content: '首页',
        },
      ],
    }
  },
}
</script>
