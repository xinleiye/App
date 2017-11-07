<template>
    <el-container class="container">
        <el-header class="title">学生综合素质评价</el-header>
        <el-main>
            <Login></Login>
        </el-main>
        <el-footer class="foot">版权所有</el-footer>
    </el-container>
</template>
<script>
    import Login from "./component/Login/Login";
    export default {
        name: "app",
        data: function() {
            return {visible: false}
        },
        components: {
            Login,
        }
    }
</script>
    <style rel="stylesheet">
        body {
            width: 100%;
        }
        .container {
            width: 70%;
            margin: auto;
            background-color: #fafafa;
        }
        .title {
            background-color: #b3c0d1;
            font-size: 30px;
            text-align: center;
            line-height: 60px;
            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        }
        .foot {
            background-color: #b3c0d1;
            font-size: 15px;
            text-align: center;
            line-height: 60px;
            font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        }
</style>
