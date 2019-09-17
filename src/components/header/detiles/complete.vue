<template>
  <div class="complete">
    <div class="p">
      <span>卷类型</span><p>{{this.baseInfo.radio}}</p>
    </div>
    <div class="p">
      <span>标题</span><p>{{this.baseInfo.title}}</p>
    </div>
    <div class="p">
      <span>副标题</span><p>{{this.baseInfo.twoTitle}}</p>
    </div>
    <div class="p">
      <span>卷面价值</span><p>{{this.baseInfo.sale}}</p>
    </div>
    <div class="p">
      <div style="float:left;">卡卷颜色</div><div class="color" :style="{'background-color':getColor}"></div>
    </div>
    <div class="p">
      <span>可用时间</span>
      <div>
        <p v-if="this.otherInfo.radio=='1'">{{this.otherInfo.today | dateFtt}}至{{this.otherInfo.otherDay | dateFtt}}</p>
        <p v-else>{{this.otherInfo.value6[0] | dateFtt}}至{{this.otherInfo.value6[1] | dateFtt}}</p>
        <p style="padding: 15px 0 0 90px">有效时间内，任意时间可用</p>
      </div>
    </div>
    <div class="p">
      <span>卷生效时间</span><p>卷在领取后立即生效，用户须在可用时间内使用</p>
    </div>
    <div class="p">
      <span>使用门店</span><p>{{this.otherInfo.shopName}}</p>
    </div>
    <div class="p">
      <span>核销方式</span><p>{{this.otherInfo.tools}}</p>
    </div>
    <div class="p">
      <span>使用限制</span><p>{{this.otherInfo.checkList[0]}}{{this.otherInfo.downSale?`,${this.otherInfo.checkList[1]}${this.otherInfo.downSale}元`:''}}</p>
    </div>
    <div class="p f-cb">
      <span>使用须知</span><p v-for="(item,index) in this.otherInfo.useRuleMore" :key="index" style="padding-left: 90px">{{item}}</p>
    </div>
    <div class="weChat">
        <div class="card">
          <div class="img">
            <img src="../../../assets/logo.png" alt="">
          </div>
          <div class="content">
            <p>果皮咖啡馆</p>
            <p>{{this.baseInfo.title}}</p>
            <p>{{this.baseInfo.twoTitle}}</p>
            <p><el-button type="danger" size="mini">立即使用</el-button></p>
          </div>
          <div class="detiles">
            <p>兑换卷详情<i class="el-icon-arrow-right" ></i></p>
          </div>
          <div class="footer f-cb">
            <p>公众号<i class="el-icon-arrow-right" ></i></p>
          </div>
        </div>
        <div class="last">
          <p>已添加至卡包，<a href="*">点击查看</a></p>
        </div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="goNext" size="mini">完成创建</el-button>
      <el-button size="mini" style="width: 68px" @click="goBack" >返回</el-button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {dateF} from '@/filters/filters.js'
    export default {
        name: "complete",
      computed:{
          ...mapState(['baseInfo','otherInfo']),
        getColor(){
            return this.otherInfo.color1
        },
        getDate(){

        }
      },
      filters:{
        dateFtt(time) {
          return dateF(time)
        }
      },
      methods:{
        goNext(){

        },
        goBack(){
          this.$router.go(-1);
        }
      },
      created() {

      }

    }
</script>

<style scoped>
.complete{
  width: 650px;
  margin: 0 auto;
  position: relative;
}
  .complete .p{
    padding-top: 24px;
  }
  div span{
    float: left;
    width: 90px;
  }
  .p span{
    font-size: 12px;
    width: 90px;
    float: left;
  }
  .p .color{
    width: 15px;
    height: 15px;
    /*background-color: #f00;*/
    border-radius: 3px;
    margin-left: 90px;
  }
  .weChat{
    width: 240px;
    height: 428px;
    background-color: rgb(175,60,53);
    background-image: url('../../../assets/phone-header-white.png');background-repeat:no-repeat;
    background-size:240px 50px;
    position: absolute;
    top:25px;
    right: 0;
  }
  .weChat .card{
    width: 225px;
    height: 215px;
    background-color: #fff;
    position: absolute;
    top: 58px;
    right: 7.5px;
    border-radius: 5px;
  }
.weChat .card .img{
  width: 43px;
  height: 43px;
  border-radius: 50%;
  position: absolute;
  left: 41%;
  top: -25px;
}
.weChat .card img{
  width: 42px;
  height: 42px;
  border: 1px solid #B3C0D1;
  border-radius: 50%;
}
  .card .content{
    padding-top: 30px;
    border-bottom: 1px dashed 	#DCDCDC;
  }
  .content p{
    text-align: center;
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 700;

  }
  .content p:nth-child(odd){
     color: rgb(171,174,177);
    font-size: 12px;
   }
.detiles{
  margin: 5px;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid #DCDCDC;
}
  .card .footer{
    font-size: 14px;
    font-weight: 600;
    margin: 5px;
  }
.weChat .card i{
  float: right;
  cursor: pointer;
}
  .weChat .last p{
    color: #ffffff;
    text-align: center;
  }
  .weChat .last{
    position: absolute;
    bottom: 20px;
    left: 25%;
  }
.weChat .last a{
  color: #ffffff;
}
  .btn{
    padding-top: 60px;
    text-align: center;
  }
</style>
