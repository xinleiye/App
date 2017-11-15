<template>
    <div>
        <!--component :is="current"></component-->
        <router-view></router-view>
    </div>
</template>
<script>
    import Login from "./views/Login";
    import Student from "./views/Student";
    import Teacher from "./views/Teacher";
    import Manager from "./views/Manager";
    import {str_student} from "./assets/lang/zh_cn";

    export default {
        name: "app",
        components: {
            Login,
            Student
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
                if (this.$store.state.status === 1) {
                    this.$router.push({path: "student"});
                } else if (this.$store.state.status === 2) {
                    this.$router.push({path: "teacher"});
                } else if (this.$store.state.status === 3) {
                    this.$router.push({path: "manager"});
                } else {
                    this.$router.push({path: "/"});
                }
            }
        }
    }
</script>
<style rel="stylesheet">
        body {
            margin: 0px;
            padding: 0px;
            width: 100%;
        }
        .container {
            width: 100%;
            margin: auto;
            background-color: #fafafa;
        }
        .title {
            background-image: url("./assets/image/st_top_bj.png");
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
