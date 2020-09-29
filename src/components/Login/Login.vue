<template>
    <el-form :model="adminInfo" :rules="rules" ref="adminForm" class="container">
        <h3>饿了么管理系统</h3>
        <el-form-item prop="adminName">
            <el-input v-model="adminInfo.adminName" autocomplete="off" placeholder="管理员账号"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input v-model="adminInfo.passWord" type="password" placeholder="管理员密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="width:100%;" type="primary" :loading="$store.state.loading" @click="submitForm">登陆</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                adminInfo:{
                    adminName:"",
                    passWord:""
                },
                // loading:false,
                rules:{
                    adminName: [
                        { required: true, message: '请输入管理员账号', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ],
                    passWord: [
                        { required: true, message: '请输入管理员账号', trigger: 'blur' },
                        { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.adminForm.validate(async (vali)=>{
                   if(vali){

                       try{
                           const data = await this.$store.dispatch("adminLogin",{
                               adminInfo:this.adminInfo,
                               vm:this
                           });
                           this.$message({
                               message: '恭喜您，登陆成功！',
                               type: 'success'
                           });
                       }catch ({msg}){
                           this.$message.error(msg);
                       }



                       // this.loading = true;
                       // 发送请求
                       // this.$store.dispatch("adminLogin",{
                       //     adminInfo:this.adminInfo,
                       //     vm:this
                       // })
                       // this.$message({
                       //     message: '管理员的账号或密码正确',
                       //     type: 'success'
                       // });
                   }else{
                       this.$message.error('请输入正确的管理员账号或密码');
                   }
                })
            }
        }
    }
</script>

<style scoped>
    .container{
        width:350px;
        margin:250px auto;
        border:1px solid #eaeaea;
        padding:10px 20px;
        box-shadow: 0 0 25px red;
        h3{
            text-align:center;
        }
    }
</style>