<template>
    <div>
        <component :is="current"></component>
    </div>
</template>
<script>
    import Login from "./component/Login/Login";
    import Student from "./component/Student/Student";

    export default {
        name: "app",
        components: {
            Login
        },
        data() {
            return {
                current: Login
            }
        },
        computed: {
            changedStatus() {
                return this.$store.state.status;
            }
        },
        watch: {
            changedStatus: function(val, oldVal) {
                if (val === 1) {
                    this.current = Student;
                }
            }
        }
    }
</script>
    <style rel="stylesheet">
        body {
            width: 100%;
        }
        .container {
            width: 100%;
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
