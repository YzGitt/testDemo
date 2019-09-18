<template>
    <div class="nav">
      <ul class="ul f-cb">
        <li>
          <router-link to="#">
            <div class="big-box rgb-bule " v-if="this.$route.path=='/first/bases'">
              基础规则
              <div class="rotate-box rgb-bule"></div>
              <div class="border-box"></div>
            </div>

            <div class="big-box rgba-bule" v-else >
              基础规则
              <div class="rotate-box rgba-bule"></div>
              <div class="border-box"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <div class="big-box  rgb-bule " v-if="this.$route.path=='/first/other'">
              其他规则
              <div class="rotate-box rgb-bule"></div>
              <div class="border-box"></div>
            </div>
            <div class="big-box rgba-bule" v-else>
              其他规则
              <div class="rotate-box rgba-bule"></div>
              <div class="border-box"></div>
            </div>

          </router-link>
        </li>
        <li>
          <router-link to="#">
            <div class="big-box rgb-bule" v-if="this.$route.path=='/first/complete'">
              确认创建
              <div class="rotate-box rgb-bule"></div>
            </div>
            <div class="big-box rgba-bule" v-else>
              确认创建
              <div class="rotate-box rgba-bule"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .rgb-bule{
    background-color: #0098D2;
  }
  .rgba-bule{
    background-color: #CBE7F3;
  }
  .ul li{
    width: 220px;
    height: 30px;
    float: left;
    position: relative;
  }
  .ul li:nth-last-child(1){
    width: 210px;
  }
  .ul li a{
    display: block;
    width: 210px;
    height: 30px;
  }
  .big-box{
    height: 30px;
    line-height: 30px;
    /*background-color: #1E90FF;*/
    color: #fff;
    width: 215px;
    position: absolute;

    /*z-index: 99;*/
    text-align: center;
    text-indent: 20px;

  }
  .rotate-box{
    width: 21px;
    height: 21px;
    transform: rotateZ(45deg);
    box-sizing: border-box;
    /*border-top: 5px solid #fff;*/
    /*border-right: 5px solid #fff;*/
    /*border-left: none;*/
    /*border-bottom: none;*/
    border: none;
    /*background-color: #1E90FF;*/
    position: absolute;
    right: -11.3px;
    top: 4.425px;
    bottom: 0;
    z-index: 9999;
  }

  .border-box{
    width: 22px;
    height: 22px;
    transform: rotateZ(45deg);
    box-sizing: border-box;
    /*border-top: 5px solid #fff;*/
    /*border-right: 5px solid #fff;*/
    /*border-left: none;*/
    /*border-bottom: none;*/
    border: none;
    background-color: #fff;
    position: absolute;
    right: -17px;
    top: 4px;
    bottom: 0;
    z-index: 999;
  }
</style>
