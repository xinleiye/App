<template>
    <!--div class="login_box">
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <el-input placeholder="请输入教委统一认证ID号" v-model="username"></el-input>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <el-input placeholder="请输入统一认证ID的密码" v-model="password"></el-input>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :span="4">
                <el-button v-on:click="show" type="primary">登陆</el-button>
            </el-col>
        </el-row>
    </div-->
    <div class="login_box">
        <el-form label-width="100px">
            <el-form-item label="用户名">
                <el-input placeholder="请输入教委统一认证ID号" v-model="username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" placeholder="请输入统一认证ID的密码" v-model="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox v-model="checked">下次自动登录</el-checkbox>
            </el-form-item>
            <el-form-item>
                <el-button v-on:click="login" type="primary" class="login_btn">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name: "login",
        data: function() {
            return {
                stUsername: "student",
                stPassword: "12345678",
                teUsername: "teacher",
                tePassword: "12345678",
                maUsername: "admin",
                maPassword: "admin",
                username: "",
                password: "",
                checked: false
            };
        },
        methods: {
            login() {
                console.log(this.username, this.password, this.checked);
                if(this.username === this.stUsername && this.password === this.stPassword) {
                    alert("学生");
                    return;
                }
                if(this.username === this.maUsername && this.password === this.maPassword) {
                    alert("管理员");
                    return;
                }
                if(this.username === this.teUsername && vpassword === this.tePassword) {
                    alert("老师");
                    return;
                }
            }
        }
    }
</script>
<style rel="stylesheet">
    .login_box {
        width: 30%;
        margin: auto;
    }
    .login_btn {
        width: 100%
    }
</style>
