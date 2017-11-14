<template>
    <div>
        <!--component :is="current"></component-->
        <router-view></router-view>
    </div>
</template>
<script>
    import Login from "./component/Login/Login";
    import Student from "./component/Student/Student";
    import Teacher from "./component/Teacher/Teacher";
    import Manager from "./component/Manager/Manager";

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
                    this.current = Teacher;
                } else if (this.$store.state.status === 3) {
                    this.current = Manager;
                } else {
                    this.current = Login;
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
