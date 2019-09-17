<template>
<div>
  <button @click="target">添加卷</button>
  <diaLog class="box" v-if="dialogFormVisible" @closeBox="closeBox"></diaLog>
  <div class='popContainer' v-show="dialogFormVisible"></div>
</div>

</template>

<script>
  import diaLog from '@/components/header/index'
    export default {
        name: "index",
      components:{
        diaLog
      },
      data(){
          return{
            dialogFormVisible:false,
            flag:false,
            formLabelWidth: '120px',
            form:{}
          }
      },
      methods:{
        target(){
          this.dialogFormVisible=!this.dialogFormVisible;
          this.$router.push('/first/bases')
        },
        closeBox(val){
          this.dialogFormVisible=val
        }
      }
    }
</script>

<style scoped>
  .el-dialog__title{
  opacity: 100%;
  color: #333B43;
}
  .box{
    z-index: 10;
    background-color: #FFFFFF;
    width: 200px;
    height: 200px;
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    margin:auto;
  }
  .popContainer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }

</style>
