<template>
  <div>
    <swiper loop :list="list" auto></swiper>
    <flexbox>
      <flexbox-item>
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item>
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item>
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item>
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item>
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item class="vux-flexbox--second-line">
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item class="vux-flexbox--second-line">
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item class="vux-flexbox--second-line">
        <icon type="success"></icon>
        <span>title</span>
      </flexbox-item>
      <flexbox-item class="vux-flexbox--second-line"></flexbox-item>
      <flexbox-item class="vux-flexbox--second-line"></flexbox-item>
    </flexbox>
    <x-img :src="src" :default-src="defaultSrc" style="height: 180px;width: 300px;"></x-img>
  <div>
</template>

<script>
import Hello from 'components/Hello'
// import { Flexbox, FlexboxItem, Swiper, Icon } from 'vux'
import { Flexbox, FlexboxItem } from 'vux-components/flexbox'
import Swiper from 'vux-components/swiper'
import Icon from 'vux-components/icon'
import XImg from 'vux-components/x-img'

import store from '../store/'

export default {
  store,
  vuex: {
    getters: {
      list: state => state.list
    }
  },
  data: () => {
    return {
      src: 'http://7xqzw4.com2.z0.glb.qiniucdn.com/3.jpg',
      defaultSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABGdBTUEAALGPC/xhBQAAAA1JREFUCB1j+Pnz538ACcUD68G1fyYAAAAASUVORK5CYII='
    }
  },
  components: {
    Hello,
    Flexbox,
    FlexboxItem,
    Swiper,
    Icon,
    XImg
  }
}
</script>

<style>
@import '~vux/dist/vux.css';

html {
  height: 100%;
}
.vux-flexbox-item {
  text-align: center;
  padding: 20px 0;
  & i::before {
    font-size: 50px;
  }
}
.vux-flexbox--second-line {
  padding-top: 0;
}

</style>
