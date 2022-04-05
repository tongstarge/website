<template>
  <div class="home">
    <no-ssr>
      <Navbar :style="'margin-top:'" />
      <div class="b-head"></div>
      <div class="b-content">
        <div class="b-content-l">
          <div>
            <div class="bl-none" v-if="!blogs.length"></div>
            <div class="bl-box" v-for="(bl, item) in blogs" :key="item">
              <nuxt-link :to="'/blog/' + bl.id">
                <div class="bl-box-1">
                  <div
                    v-if="bl.bgurl"
                    class="bl-img bgimg"
                    :style="'background-image:url(' + bl.bgurl + ');'"
                  ></div>
                  <div v-if="!bl.bgurl" class="bl-img"></div>
                </div>
                <div class="bl-box-2">
                  <div class="bl-content">
                    <div class="bl-content-head">
                      <i class="el-icon-time"></i>
                      {{ bl.time }}
                    </div>
                    <div class="bl-content-body">
                      <div class="bl-content-body-title">{{ bl.title }}</div>
                      <div class="bl-content-body-text">{{ bl.content }}</div>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="b-content-r">
          <div class="br-box">搜索</div>
        </div>
      </div>
      <Footer />
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: '1231',
          bgurl: '',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          title: '标题',
          time:"今天"
        },
        {
          id: '1231',
          bgurl: '',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          title: '标题',
          time:"今天"
        },
        {
          id: '1231',
          bgurl: '',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          title: '标题',
          time:"今天"
        },
        {
          id: '1231',
          bgurl: '',
          content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
          title: '标题',
          time:"今天"
        },
      ],
      word: '',
      total_count: '',
      loading: true,
      issearch: false,
    }
  },
  methods: {
    qd() {
      alert('博客功能还未完善——敬请期待')
    },
    search(content) {
      qd()
      console.log(content)
    },
  },
  created(){
    alert("博客正在开发中……敬请期待")
  },
  head() {
    // 优化seo：动态设置title，keywords 和 description
    return {
      title: '博客——曈星阁 官方网站',
      meta: [
        {
          name: 'keywords',
          content: '曈星阁,兴趣,社团,博客',
        },
        // hid是一个唯一标识
        {
          hid: 'description',
          name: 'names',
          content: '博客',
        },
      ],
    }
  },
}
</script>
<style>
.b-head {
  width: 100vw;
  height: 200px;
  background: #ff7728 center;
  background-size: cover;
}
.b-content{
  padding-top: 100px;
}
@media (min-width: 1300px) {
  .b-content-l {
    width: 650px;
  }
  .b-content-r {
    width: 500px;
  }
  .bl-box {
    text-align: left;
    padding-left: 0 !important;
  }
  .b-content {
    text-align: center;
  }
}
@media (min-width: 700px) and (max-width: 1300px) {
  .b-content-l {
    width: 550px;
  }
  .b-content-r {
    width: 400px;
  }
  .bl-box {
    text-align: left;
    padding-left: 0 !important;
  }
  .b-content {
    text-align: center;
  }
}
@media (max-width: 700px) {
  .b-content-l {
    width: 100vw;
  }
  .b-content-r {
    width: 100vw;
  }
  .bl-box-1 {
    width: 100% !important;
    height: 50vw !important;
  }
  .bl-box-2 {
    width: 100% !important;
  }
}
.bl-box-1 {
  width: 320px;
  height: 180px;
  display: inline-block;
  vertical-align: top;
}
.bl-box-2 {
  display: inline-block;
  vertical-align: top;
  width: 100%;
}
.b-content-l {
  vertical-align: top;
  display: inline-block;
  min-height: 200px;
}
.b-content-r {
  vertical-align: top;
  display: inline-block;
  min-height: 200px;
}
.br-box {
  padding: 20px 60px;
}
.bl-box {
  cursor: pointer;
  padding: 20px;
}
.bl-img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  margin: auto;
  background: #297eff;
}
.bl-content {
  padding: 20px;
}
.bl-content-body-title {
  padding: 10px 0;
  font-weight: 600;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.bl-content-body-text {
  font-size: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.bl-none::after {
  content: '无数据';
  color: #534e4e;
  margin-top: 20px;
  display: block;
  text-align: center;
}
</style>