<template>
  <div class="base">
    <div class="radio">
      <span>卷类型</span>
      <el-radio v-model="baseFrom.radio" label="兑换卷"></el-radio>
      <el-radio v-model="baseFrom.radio" label="代金卷"></el-radio>
      <el-radio v-model="baseFrom.radio" label="折扣卷"></el-radio>
    </div>
    <div class="cost">
      <div class="span">卷价值</div><div class="input"><el-input v-model="baseFrom.sale" placeholder="请输入内容" style="width: 150px;height: 40px; "></el-input>元</div>
    </div>
    <div class="title">
      <div class="span">标题</div><div class="input"><el-input v-model="baseFrom.title" placeholder="请输入内容" style="width: 200px;height: 40px;" maxlength="9"><i slot="suffix">{{`${baseFrom.title.length*3}/27`}}</i></el-input></div>
    </div>
    <div class="twoTitle ">
      <div class="span">副标题</div><div class="input"><el-input v-model="baseFrom.twoTitle" placeholder="请输入内容" style="width: 230px;height: 40px; " maxlength="11"><i slot="suffix">{{`${baseFrom.twoTitle.length*3}/33`}}</i></el-input><span style="color: #B3C0D1;padding-left: 5px">选填</span></div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="goNext" size="mini">下一步</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "bases",
        data(){
          return{
            baseFrom:{
              radio:'兑换卷',//类型
              sale:'',//卷价值
              title:'',//标题
              twoTitle:''//副标题
            }
          }
        },
        methods:{
          goNext(){
            this.$emit('changeClass',1);
            this.$store.dispatch('changeBase',{baseInfo:this.baseFrom})
            this.$router.push('/first/other')
          },

        }
    }
</script>

<style scoped>
.base{
  width: 650px;

  margin: 0 auto;
}
 .base .radio{
   padding-top: 30px;
   font-size: 14px;
 }
  .base .cost{
    padding: 22px 0 ;
    font-size: 14px;
  }
.base .title{
  padding: 0 0 22px 0 ;
  font-size: 14px;
}
.base .twoTitle{
  padding:0 0  80px 0;
  font-size: 14px;
}
  .base .span{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    color: #333B43;
    text-align: left;
    padding-right: 20px;
    float: left;
  }
.base .input{
  padding-left: 65px
}
.base .input i{
  line-height: 40px;
  font-size: 14px;
}
  .base .btn{
    padding-left: 288px;
  }
</style>
