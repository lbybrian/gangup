<template>
    <div>
        <el-dialog :title="dialogTitle" :visible.sync="visible">
            <el-dialog width="30%" title="内层 Dialog" :visible.sync="innerVisible" append-to-body>
                <div>
                    <div class="header">
                        ONE资源列表
                    </div>
                    <p v-for="item in one" :key="item .id">
                        <el-checkbox>
                            <li>
                                <span>{{item.name}}</span>
                            </li>
                        </el-checkbox>
                    </p>
                </div>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button class="addbtn" @click="innerVisible = true"><i class="el-icon-plus"></i></el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  props: ["dialogTitle", "visible"],
  data() {
    return {
      outerVisible: false,
      innerVisible: false
    };
  }
};
</script>
<style>
.addbtn {
  width: 100%;
}
.header {
  height: 40px;
  line-height: 40px;
  background: #40acaf;
  color: #fff;
  text-align: center;
}
</style>
