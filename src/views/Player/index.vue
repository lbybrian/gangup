<template>
	<div class="ele">
		 <el-container>
      <el-aside width="230px" id="menuClass">
        <!--<el-menu :default-active="'1'" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true" @select="selectHandle" background-color="rgba(8,58,74,0.7)" text-color="#47AFAE" active-text-color="#02feff">-->
        <el-menu >
          <el-menu-item index="/" class="logomenu">
            <template>
              <span style="color: #47AFAE; font-size: 16px">安全审计系统</span>
            </template>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span slot="title">审计管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/audit">审计分析</el-menu-item>
              <el-menu-item index="/rule">规则管理</el-menu-item>
              <el-menu-item index="/alarm">告警管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">日志管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/log">日志查询</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <el-row :gutter="20">
            <el-col :span="1">
              <div @click="">
                <i class="el-icon-s-fold" style="color: #47AFAE; font-size: 20px;"></i>
              </div>
            </el-col>
            <el-col :span="1" :offset="20">
              <div class="grid-content bg-purple">
                <div>
                  <i class="el-icon-message-solid"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <div>
                  <i class="el-icon-user"></i>
                  <span>用户名</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main style="overflow-x: hidden">
          <transition>
            <!--<router-view></router-view>-->
          </transition>
        </el-main>
      </el-container>
      
      
      	<div class="dateRange">
            <el-date-picker
              v-model="dengyouTimeValue"
              type="daterange"
              @change="dengyouSelectTime"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="dengyou_pickerOptions"
            ></el-date-picker>
		</div>

    </el-container>
	</div>
</template>
<style scoped >
	.ele /deep/ .el-aside{
		color: ;
		background-color: yellow;
	}
	.ele /deep/ .el-submenu{
		background-color: blue;
	}
	


</style>

<style scoped>
/* 这里是element时间选择器的公共样式 */

.dateRange >>> .el-date-table td {
  padding: 0;
}

.dateRange >>> .el-date-range-picker__content {
  padding: 10px;
}

.dateRange >>> .el-date-table th {
  font-size: 12px;
  padding: 0;
}

.dateRange >>> .el-date-range-picker__header div {
  font-size: 14px;
}

.dateRange >>> .el-date-editor .el-range-input {
  width: 70px;
  color: #f0f8ff;
  background: #01131b;
}
</style>
<script>
	export default {
  name: 'player',
  components: {},
  data () {
    return {}
  },
  created () {},
  mounted () {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->