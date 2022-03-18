<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-item" v-for="(f, key) in footer_items" :key="key">
        <div class="footer-item-h">{{ f.headline }}</div>
        <div class="footer-item-p" v-for="(fp, k) in f.items" :key="k">
          <a :href="fp.url" target="_blank" rel="noopener noreferrer">
            {{ fp.text }}
          </a>
        </div>
      </div>
      <div class="footer-item">
        <div class="footer-other">
          <div class="footer-other-item">
            <a
              href="https://space.bilibili.com/1979288592"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="footer-other-item-icon"
                :src="require('../assets/bilibili.svg')"
              />
            </a>
          </div>
          <div class="footer-other-item">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style="width: 30px; margin-top: 35px; height: 30px"
                class="footer-other-item-icon"
                :src="require('../assets/qq.svg')"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">© 2022. All Rights Reserved.曈星阁 版权所有</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer_items: [
        {
          headline: '加入我们',
          items: [
            {
              text: 'qq频道',
              url: 'https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=zyeHi&from=246610&biz=ka',
            },
            {
              text: '成为内部成员',
              url: 'https://wj.qq.com/s2/8706484/a8ff',
            },
          ],
        },
        {
          headline: '传送门',
          items: [
            {
              text: '曈星阁家园',
              url: 'https://www.tongstarge.com',
            },
            /** {
              text: '源界',
              url: 'https://yc.tongstarge.cn',
            },
            {
              text: '自学直达',
              url: 'https://learn.tongstarge.cn',
            },**/
          ],
        },
      ],
    }
  },
}
</script>

<style>
.footer {
  width: 100vw;
  text-align: center;
}
.footer-box {
  padding: 5vw 20vh;
}
.footer-item {
  display: inline-block;
  vertical-align: top;
  padding: 50px 40px;
  text-align: left;
}
@media (max-width: 700px) {
  .footer-item {
    display: block !important;
    text-align: center !important;
    padding: 0 !important;
  }
  .footer-box {
    padding: 5vh 2vw;
  }
  .footer-other-item {
    width: 80vw !important;
    display: block !important;
  }
}
.footer-item-h {
  color: #50616d;
  font-family: '思源宋体';
  font-weight: 800;
  margin-bottom: 15px;
  font-size: 17px;
}
.footer-item-p {
  color: #50616d99;
  transition: 0.2s;
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
}
.footer-item-p a:hover {
  color: #ff5100;
}
.footer-item-p a {
  text-decoration: none;
  color: inherit;
}
.footer-other {
  border-left: 1px solid #50616dcc;
  padding-left: 20px;
}
.footer-other-item-icon {
  width: 50px;
  height: 50px;
  line-height: 100px;
  display: inline-block;
  vertical-align: top;
  color: #fff !important;
}
.footer-other-item {
  color: #bbb;
  width: 100px;
  text-align: center;
  height: 100px;
  display: inline-block;
  vertical-align: top;
}
.footer-other-item-icon {
  width: 40px;
  margin-top: 30px;
  height: 40px;
}
.footer-bottom {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  color: #ffffffcc;
  background-color: #3d3b4f;
}
</style>
