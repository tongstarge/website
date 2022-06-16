<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-item-box">
        <div class="footer-item" v-for="(f, key) in footer_items" :key="key">
          <div class="footer-item-h">{{ f.headline }}</div>
          <div class="footer-item-p" v-for="(fp, k) in f.items" :key="k">
            <a :href="fp.url" target="_blank" rel="noopener noreferrer">
              {{ fp.text }}
            </a>
          </div>
        </div>
      </div>
      <div class="footer-item-box">
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
                href="mailto:tutu@tongstarge.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  class="footer-other-item-icon"
                  :src="require('../assets/mail.svg')"
                />
              </a>
            </div>
            <div class="footer-other-item">
              <a>
                <img
                  class="footer-other-item-icon"
                  style="width: 40px"
                  :src="require('../assets/qq.svg')"
                />
                <div class="footer-other-item-icontent">
                  <img :src="require('../assets/qqurl.png')" />
                </div>
              </a>
            </div>
            <div class="footer-other-item">
              <a>
                <img
                  class="footer-other-item-icon"
                  :src="require('../assets/weixin.svg')"
                />
                <div class="footer-other-item-icontent">
                  <img :src="require('../assets/weixinurl.png')" />
                </div>
              </a>
            </div>
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
              url: 'https://www.tongstarge.cn', 
            },
            {
              text: '源界',
              url: 'https://yc.tongstarge.cn',
            },
            {
              text: 'learn',
              url: 'https://learn.tongstarge.cn',
            },
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
  padding: 50px;
  display: flex;
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
    padding: 20px 0 !important;
  }
  .footer-box {
    padding: 5vh 2vw;
    display: block !important;
  }
}
.footer-item-h {
  color: #50616d;
  font-family: '思源宋体';
  font-weight: 800;
  margin-bottom: 15px;
  font-size: 20px;
}
.footer-item-p {
  color: #50616d99;
  transition: 0.2s;
  font-size: 16px;
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
.footer-other-item-icon {
  width: 50px;
  height: 50px;
  display: inline-block;
  padding: 10px;
  vertical-align: top;
  color: #fff !important;
}
.footer-other-item {
  position: relative;
  color: #bbb;
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
.footer-other-item a {
  cursor: pointer;
}
.footer-other-item-icontent {
  position: absolute;
  top: -130px;
  left: 50%;
  margin-left: -65px;
  width: 130px;
  height: 130px;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;
  visibility: hidden;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  transform: translateY(20px) scale(0.8);
  opacity: 0;
}
.footer-other-item-icontent img {
  width: 120px;
  height: 120px;
  margin: 5px;
}
.footer-other-item a:hover .footer-other-item-icontent {
  visibility: visible;
  transform: translateY(0) scale(1);
  opacity: 1;
  z-index: 100;
}
.footer-bottom {
  text-align: center;
  font-size: 14px;
  padding: 10px;
  color: #ffffffcc;
  background-color: #3d3b4f;
}
.footer-item-box{
  flex-grow: 1;
}
</style>
