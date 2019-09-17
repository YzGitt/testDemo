<template>
  <div class="other">
      <div class="color">
        <div class="span">卡卷颜色</div><div class="input"><el-color-picker v-model="otherFrom.color1" size="mini"></el-color-picker></div>
      </div>
    <div class="date">
      <div class="span">有效期</div><div class="input">
      <el-radio v-model="otherFrom.radio" label="1">领取后</el-radio>
      <el-select v-model="otherFrom.value" placeholder="请选择" style="width:116px;height: 24px;padding-left: 14px" size="mini">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span>生效天数</span>
      <el-select v-model="otherFrom.times" placeholder="请选择" style="width:116px;height: 24px" size="mini">
        <el-option
          v-for="item in times"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div style="padding-top: 20px">
        <el-radio v-model="otherFrom.radio" label="2">固定日期</el-radio>
        <el-date-picker
          v-model="otherFrom.value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        size="mini">
        </el-date-picker>
      </div>

    </div>
    </div>
    <div class="disable">
      <div class="span">可用时段</div><div class="input"><el-radio v-model="otherFrom.disable" label="全部时段"></el-radio>
    <div style="padding-top: 20px">
      <el-radio v-model="otherFrom.disable" label="部分时段"></el-radio>
    </div>
    </div>
    </div>
    <div class="shopName">
      <div class="span">可用时段</div><div class="input"><span v-if="flag">{{otherFrom.shopName}}</span><input type="text" v-model="otherFrom.shopName" :placeholder="otherFrom.shopName" v-else> <span @click="setShop">{{flag?'修改':'确认'}}</span>
    </div>
    </div>
    <div class="tools">
      <div class="span">核销方式</div><div class="input">
      <el-radio v-model="otherFrom.tools" label="卷码核销">卷码核销，扫描卡卷二维码核销，<a href="*">核销工具</a></el-radio>
      <div style="padding-top: 20px">
        <el-radio v-model="otherFrom.tools" label="2" disabled ><span>卷码核销，接口不支持</span></el-radio>
      </div>
      <div style="padding-top: 20px">
        <el-radio v-model="otherFrom.tools" label="自助核销"><span>自助核销，用户自助点击“立即使用即可核销”</span></el-radio>
      </div>
    </div>
    </div>
    <div class="useRule">
      <div class="span">使用限制</div><div class="input"><el-checkbox-group v-model="otherFrom.checkList">
      <el-checkbox label="不与其他优惠共享">不与其他优惠共享</el-checkbox>
      <el-checkbox label="最低消费">最低消费<el-input v-model="otherFrom.downSale" placeholder="请输入内容" size="mini" style="width: 115px"></el-input>元可用</el-checkbox>
    </el-checkbox-group></div>
    </div>
    <div class="useRuleMore">
      <div class="span">使用须知</div><div class="input" v-for="(item,i) of otherFrom.useRuleMore"  :key="i"><el-input v-model="otherFrom.useRuleMore[i]" placeholder="请输入内容" size="mini" style="width: 370px" maxlength="20" >
      <i slot="suffix">{{`${otherFrom.useRuleMore[i].length}/20`}}</i>
    </el-input>
      <i v-if="otherFrom.useRuleMore.length===1" class="el-icon-circle-plus-outline" style="cursor: pointer" @click="add" ></i>
      <span class="del" v-else>
        <i class="el-icon-delete" @click="del(i)"></i>
        <i class="el-icon-circle-plus-outline" @click="add"></i>
      </span>
    </div>

    </div>
    <div class="btn">
      <el-button type="primary" @click="goNext" size="mini">下一步</el-button>
      <el-button size="mini" style="width: 68px" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "other",
        data(){
          return{
            flag:true,//控制可不可以编辑
            listInput:[],//动态使用须知
            otherFrom:{
              color1:'#f00',//颜色
              radio:'1',//是否固定或领取后
              value:'', //是否立即生效
              times:'', //生效天数
              value6:'',//固定日期
              disable:'全部时段',//可用时段
              tools:'卷码核销',//核销方式
              checkList:['不与其他优惠共享'],//使用规则
              downSale:'',//最低消费
              useRuleMore:[''],//使用须知
              shopName:'全部门店',//可用门店
              today:'',//今日
              otherDay:''//生效多少天之后
            },
            options: [{
              value: '立即生效',
              label: '立即生效'
            }, ],
            times: [{
              value: '30',
              label: '30天'
            }, ],

          }
        },
        computed:{
          ...mapState(['baseInfo'])
        },
        methods:{
          goNext(){
            let date = new Date()
            this.otherFrom.today=date
            let date1 = new Date(date);
            date1.setDate(date.getDate() + 30);
            this.otherFrom.otherDay=date1
            this.$emit('changeClass',1);
            this.$store.dispatch('changeOther',{otherInfo:this.otherFrom})
            this.$router.push('/first/complete')
          },
          setShop(){
              this.flag=!this.flag
          },
          add(){
            this.otherFrom.useRuleMore.push('')
          },
          del(i){
            this.otherFrom.useRuleMore.splice(i,1)
          },
          goBack(){
            this.$emit('changeClass',0);
            this.$router.go(-1)
          }
        },
    }
</script>

<style scoped>
  .wrapper{
    height: 600px;
  }
  .other{
    width: 650px;
    margin: 0 auto;
  }
  .other>div{
    padding-top: 15px;
  }
  .other .span{
    font-size: 12px;
    text-align: left;
    padding-right: 20px;
    float: left;
  }
  .other .tools{
    padding-top: 20px;
  }
  .other .input{
    padding-left: 70px
  }
  .el-radio__label{
    font-size: 12px;
  }
  .other .input i{
    line-height: 28px;
    font-size: 14px;
  }
  .other .btn{
    padding-left: 288px;
  }
  .shopName span:nth-child(2){
    color: 	#1E90FF;
    cursor: pointer;
  }
  .del i {
    cursor: pointer;
  }
</style>
