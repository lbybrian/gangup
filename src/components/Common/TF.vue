<template>
    <div>
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <trees @ehandleNodeClick="ehandleNodeClick" />

            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main :style="mainWidh">
                    <forms :formData="formData" :tableType="tableType" />
                    <div class="btnbox">
                        <el-button type="primary" @click="doIt('add')">
                            <i class="l-btn-icon fa fa-search  el-icon-search"></i>
                            添加</el-button>
                        <el-button type="primary" @click="doIt('edit')">
                            <i class="l-btn-icon fa fa-search  el-icon-search"></i>
                            编辑</el-button>
                        <el-button type="primary" @click="doIt('del')">
                            <i class="l-btn-icon fa fa-search  el-icon-search"></i>
                            删除</el-button>
                    </div>
                    <tables :tableData="tableData" :tableType="tableType" />

                </el-main>
                <div class="right" v-if="tableType=='3'">
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column type="index" :index="indexMethod">
                        </el-table-column>
                        <el-table-column v-for="item in columns" :key="item.prop" :label="item.label" :prop="item.prop" :width="item.width">
                        </el-table-column>
                    </el-table>
                </div>
            </el-container>
        </el-container>
        <dialogpage v-if="visible" :visible="visible" :dialogTitle="dialogTitle" />
    </div>
</template>

<script>
import trees from "./tableAndForm/treeList";
import tables from "./tableAndForm/tableList";
import forms from "./tableAndForm/formList";
import dialogpage from "./tableAndForm/dialog";
export default {
  name: "table-form",
  data() {
    return {
      tableData: [],
      tableType: "1",
      formData: [],
      visible: false,
      dialogTitle: "",
      columns: [
        {
          label: "属性",
          prop: "name",
          width: 80
        },
        {
          label: "属性值",
          prop: "value"
        }
      ]
    };
  },
  computed: {
    mainWidh() {
      if (this.tableType == "3") {
        return { width: "1360px" };
      } else {
        return { width: "auto" };
      }
    }
  },
  components: {
    trees,
    tables,
    forms,
    dialogpage
  },
  methods: {
    ehandleNodeClick(data, node) {
      console.log(111111111, data);
      this.tableType = data.type;
      if (data.type == "1") {
        this.tableData = [
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ];
      } else if (data.type == "2") {
        this.tableData = [];
      } else if (data.type == "3") {
      }
    },
    doIt(type) {
      this.visible = true;
      if (type == "add") {
        this.dialogTitle = "添加";
      } else if (type == "edit") {
        this.dialogTitle = "修改";
      } else if (type == "del") {
        this.dialogTitle = "删除";
      }
    },
    handleClose(done) {
      //使用before-close会暂停 Drawer 的关闭
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style>
.el-main {
  border: 1px solid #ccc;
}
.right {
  width: 300px;
  position: absolute;
  right: 0;
  top: 74px;
}
</style>