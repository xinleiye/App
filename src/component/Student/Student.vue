<template>
    <div>
        <el-container>
            <el-header class="title">Header
                <el-button v-on:click="logout" type="primary">Login</el-button>
            </el-header>
            <el-container>
                <el-aside class="aside">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航一</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main class="main">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: "Student",
        methods: {
            logout() {
                const _this = this;
                _this.$http.post("/api/user/logout")
                .then(function(res) {
                    if (res.data.code) {
                        _this.$store.dispatch("doLogout");
                    }
                })
            }
        }
    }
</script>
<style>
    .aside {
        background-color: #d3dce6;
        text-align: center;
        line-height: 200px;
    }
    .main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    .el-menu-vertical-demo {
        display: inline-block;
        text-align: left;
    }
</style>