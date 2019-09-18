<template>
  <div :class="className">
    <div class="top">
      <div class="title"><span>添加卷</span><i class="el-icon-close close" style="float: right" @click="close"></i></div>
    </div>
    <div class="header">
      <navbar class="navbar"></navbar>
    </div>
    <div class="main">
      <router-view @changeClass="getClass"></router-view>
    </div>
  </div>
</template>

<script>
  import navbar from '../navbar'
  export default {
    name: "index",
    components:{
      navbar
    },
    data() {
      return {
        flag: false,
        className: 'wrapper',
        wrapper: ['wrapper', 'wrapper1']
      }
    },
    methods: {
      close() {
        this.$emit('closeBox', this.flag)
      },
      getClass(msg) {
        // console.log(msg);
        if (msg === 1) {
          this.className = this.wrapper[1];
        } else {
          this.className = this.wrapper[0];
        }
      }
    },
  }
</script>

<style scoped>
  .wrapper {
    width: 860px;
    height: 492px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
  }
  .wrapper1 {
    width: 860px;
    height: 690px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
  }
  .top {
    padding: 20px 30px;
  }
  .top .title {
    color: #333B43;
    font-size: 18px;
    font-weight: 700;
    opacity: 100%;
  }
  .title .close {
    cursor: pointer;

  }
  .header .navbar{
    width: 650px;
    height: 30px;
    margin: 0 auto;
  }

  .ul li {
    float: left;

  }

</style>
