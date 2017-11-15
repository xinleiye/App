<template>
    <el-container class="home">
        <el-main class="main">
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
    .home {
        width: 100%;
        height: 790px;
        background-image: url("../assets/image/bg_login.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .main {
        position: relative;
    }
    .login_box {
        width: 30%;
        height: 35%;
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .login_btn {
        width: 100%
    }
</style>
