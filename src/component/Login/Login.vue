<template>
    <el-container class="container">
        <el-header class="title">学生综合素质评价</el-header>
        <el-main>
            <el-card class="login_box">
                <div slot="header" class="clearfix">
                    <span>ID: {{$store.state.user}}</span>
                </div>
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
    import store from "../../store/store"
    export default{
        name: "login",
        store,
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
                checked: false,
                store,
            };
        },
        methods: {
            login() {
                console.log(this.username, this.password, this.checked);
                if(this.username === this.stUsername && this.password === this.stPassword) {
                    store.state.user = this.username;
                    store.state.status = 1;
                    this.$router.push({path: "/student"});
                    return;
                }
                if(this.username === this.teUsername && this.password === this.tePassword) {
                    store.state.user = this.username;
                    store.state.status = 2;
                    this.$router.push({path: "/teacher"});
                    return;
                }
                if(this.username === this.maUsername && this.password === this.maPassword) {
                    store.state.user = this.username;
                    store.state.status = 3;
                    this.$router.push({path: "/manager"});
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
