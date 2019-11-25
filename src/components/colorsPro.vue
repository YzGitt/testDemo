<template>
  <div>
    <el-dropdown>
      <div class="colorP">
        <div class="box" :style="{'background-color':getColor}">
        </div>
        <i class="el-icon-arrow-down"></i>
      </div>
      <el-dropdown-menu slot="dropdown" style="width: 165px;height: 40px;">
          <div class="box1 "  v-for="(item,index) in colors " :style="{'background-color':item}" @click="setColor(item)" :key="index"></div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
    export default {
        name: "colorsPro",
        data(){

          return{
            setColors:'',
            colors:[
              "#FFB6C1",
              "#32CD32",
              "#7B68EE",
              "#FFFF00",
              "#1E90FF",
              "#CD5C5C",
              "#556B2F",
              "#A52A2A",
              "#800000",
              "#FFEFD5",
              "#F08080",
              "#FF8C00",
              "#CD853F",
              "#A0522D",
        ]
          }
        },
        computed:{
          getColor(){
              return this.setColors
          },
        },
        methods:{
          setColor(item){
            this.setColors = item
            this.$emit('childColor',this.setColors)
          }
        }
    }
</script>

<style scoped>
  .colorP{
    width: 50px;
    height: 23px;
    border: 1px solid #E9EEF3;
    border-radius: 3px;
    position: relative;
  }
  .colorP .box{
    width: 15px;
    height: 15px;
    background-color: #f00;
    border-radius: 3px;
    margin:4px 4px 0;
  }
  .box1{
    width: 15px;
    height: 15px;
    background-color: #f00;
    border-radius: 3px;
    float: left;
    margin:4px 4px 4px 4px ;
    cursor: pointer;
  }{

  }
  .colorP i{
    position: absolute;
    top: 5px;
    right: 4px;
  }
.el-dropdown-menu{
  position: absolute;
  top: 0;
  right:0;
  padding: 10px 0;
  margin: 5px 0;
  background-color: #FFF;
  border: 1px solid #EBEEF5;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

</style>
