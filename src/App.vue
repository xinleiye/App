<template>
    <div>
        <component :is="current"></component>
    </div>
</template>
<script>
    import Store from "./store/store"
    import Login from "./component/Login/Login";
    import Student from "./component/Student/Student";
    import Teacher from "./component/Teacher/Teacher";
    import Manager from "./component/Manager/Manager";

    export default {
        name: "app",
        data: function() {
            return {
                current: "",
                Store,
            }
        },
        created() {
            if (Store.status === 1) {
                this.current = Student;
            } else if (Store.status === 2) {
                this.current = Teacher;
            } else if (Store.status === 3) {
                this.current = Manager;
            } else {
                this.current = Login;
            }
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
