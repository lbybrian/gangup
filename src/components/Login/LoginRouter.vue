<template>
  <el-row>
    <el-col :span="5" :offset="8">
      <div class="login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="ruleForm.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
            <el-button @click="reset('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
//import * as $ from 'jquery'
//import md5 from 'js-md5'
//const API = '/api'
export default {
  name: 'LoginRouter',
  data () {
    return {
      ruleForm: {
        username: 'vvvvvv',
        pwd: '111111'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 1, max: 100, message: '请输入用户名', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'change'},
          {min: 1, max: 100, message: '请输入密码', trigger: 'blur'}
        ]
      }

    }
  },
  created () {},
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            path: '/'
          })
        }
      })
    },
    reset (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.login{
  margin-top: 30%;
}
</style>
