<template>
  <el-container style="border: 1px solid #eee" class="el-container">
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '3']" style="padding-top:60px;background-color:#D3DCE6; ">
        <el-submenu index="1">
          <template slot="title"><i></i>管理</template>
          <el-menu-item-group style="background-color:#D3DCE6;">
            <el-menu-item index="1-1">卷包管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>后台</el-header>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
   /deep/ .el-menu{
    border-right: none
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
    min-height: calc(100vh - 62px);
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
