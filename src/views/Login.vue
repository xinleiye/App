<template>
    <el-container class="home">
        <el-main class="main">
            <el-card class="login_box">
                <el-form label-width="100px">
                    <el-form-item v-bind:label="str_login.str_username">
                        <el-input v-bind:placeholder="str_login.str_authId" v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item v-bind:label="str_login.str_password">
                        <el-input type="password" v-bind:placeholder="str_login.str_authpassword" v-on:keyup.enter="login" v-model="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="checked">{{str_login.str_username}}</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button v-on:click="login" type="primary" class="login_btn">{{str_login.str_login}}</el-button>
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
                str_login: this.$store.state.login.str_login,
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
                }).catch(function() {
                    console.log('Login error')
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
