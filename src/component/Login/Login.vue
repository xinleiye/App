<template>
    <el-container class="container">
        <el-header class="title">学生综合素质评价</el-header>
        <el-main>
            <el-card class="login_box">
                <el-form label-width="100px">
                    <el-form-item label="用户名">
                        <el-input placeholder="请输入教委统一认证ID号" v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" placeholder="请输入统一认证ID的密码" v-on:keyup.enter="login" v-model="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="checked">下次自动登录</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button v-on:click="login" type="primary" class="login_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-card>
        </el-main>
        <el-footer class="foot">版权所有</el-footer>
    </el-container>
</template>
<script>
    export default{
        name: "login",
        data: function() {
            return {
                username: "",
                password: "",
                checked: false
            };
        },
        methods: {
            login() {
                const _this = this;
                _this.$http.post("/api/user/login", {
                    username: this.username, 
                    password: this.password
                }).then(function(res) {
                    if (res.data.code) {
                        _this.$store.dispatch("doLogin", res.data);
                    }
                })
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
