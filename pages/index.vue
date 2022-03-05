<template>
  <div class="home">
    <Navbar />
    <div class="home-box">
      <div class="home-box-content">
        <div
          class="home-introduce"
          @click="im = !im"
          :class="im ? 'home-introduce-im' : ''"
        >
          <div class="home-introduce-text" v-if="!im">聚天下少年</div>
          <div class="home-introduce-text" v-if="im">我们的初心是</div>
        </div>
      </div>
    </div>
    <div class="home-box">
      <div class="home-box-content">
        <div class="home-explain">
          <div
            class="home-explain-item"
            v-for="(e, key) in e_data"
            :key="key"
            :class="e_active == key ? 'home-explain-item-active' : ''"
          >
            <div class="home-explain-item-content" @click="eac(key)">
              <div class="home-explain-item-content-t">{{ e.i_name }}</div>
              <div class="home-explain-item-content-e">
                <div>
                  {{ e.einfo }}
                </div>
              </div>
            </div>
            <div
              class="home-explain-item-detailed"
              @click="e_active = -1"
              v-if="e_active == key"
            >
              <div class="home-explain-item-detailed-t">{{ e.i_name }}</div>
              <div class="home-explain-item-detailed-t">{{ e.dinfo }}</div>
            </div>
          </div>
          <div
            class="home-explain-bk"
            :style="e_active != -1 ? '' : 'visibility:hidden;opacity: 0;'"
          ></div>
        </div>
      </div>
    </div>
    <div class="home-box">
      <div class="home-box-content">
        <div class="home-member">
          <div style="position:absolute" :style="'width:' + 270 * members.length + 'px;'+'left:'+mx+'px'">
            <div
              class="home-member-item"
              v-for="(m, key) in members"
              :key="key"
            >
              <div class="home-member-item-button"></div>
              <br />
              <div
                class="home-member-item-avatar"
                :style="'background-image:url(' + m.avatar_url + ')'"
              ></div>
              <div class="home-member-item-content">
                <div class="home-member-item-name">{{ m.name }}</div>
                <div class="home-member-item-info">{{ m.info }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-joinbox">
      <div class="home-joinbtn">
        <button><span style="position: inherit">加入我们</span></button>
      </div>
    </div>
    <div class="home-box">footer</div>
    <div class="footer"></div>
    <!-- <Loading/> -->
  </div>
</template>
<style>
@import url(../style/home.css);
</style>
<script lang="ts">
import Vue from 'vue'
//import Loading from '../components/loading.vue'
import Navbar from '../components/navbar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Navbar,
    //Loading
  },
  data() {
    return {
      im: false,
      e_active: -1,
      mx:0,
      e_data: [
        {
          i_name: '源界',
          einfo: '简单介绍',
          dinfo: '详细介绍',
        },
        {
          i_name: '源界',
          einfo: '简单介绍',
          dinfo: '详细介绍',
        },
        {
          i_name: '源界',
          einfo: '简单介绍',
          dinfo: '详细介绍',
        },
        {
          i_name: '源界',
          einfo: '简单介绍',
          dinfo: '详细介绍',
        },
      ],
      members: [
        {
          name: 'Lai追求',
          info: '阿巴阿巴',
          avatar: '',
        },
        {
          name: 'Lai追求',
          info: '阿巴阿巴',
          avatar: '',
        },
        {
          name: 'Lai追求',
          info: '阿巴阿巴',
          avatar: '',
        },
      ],
    }
  },
  methods: {
    eac(k) {
      if (this.e_active == k) {
        this.e_active = -1
      } else {
        this.e_active = k
      }
    },
  },
})
</script>
