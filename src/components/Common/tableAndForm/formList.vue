<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" :inline="true" class="demo-ruleForm">
            <el-form-item :label="tableType=='1'?'第一':(tableType=='2'?'第二':'第三')" prop="name" class="item-l">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item class="item-r">
                <el-button type="primary" @click="submitForm('ruleForm')">
                    <i class="l-btn-icon fa fa-search  el-icon-search"></i>
                    搜索</el-button>
                <el-button @click="resetForm('ruleForm')">
                    <i class="el-icon-refresh"></i>
                    重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["tableType", "formData"],
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style >
.demo-ruleForm {
  /* /deep/.el-form { */
  position: relative !important;
  height: 80px !important;
}
.item-l {
  position: absolute;
  left: 50px;
}
.item-r {
  position: absolute;
  right: 207px;
}
</style>
