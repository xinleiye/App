<template>
    <div>
        <!--component :is="current"></component-->
        <div>
            <el-button v-on:click="getTestData" type="primary" class="test float2l">{{str_app.str_getdata}}</el-button>
            <el-button v-on:click="destroyTestData" type="primary" class="test float2l">{{str_app.str_hidedata}}</el-button>
            <testTable v-if="isShow" v-bind:data="testData" class="float2l"></testTable>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Login from "./views/Login";
    import Student from "./views/Student";
    import Teacher from "./views/Teacher";
    import Manager from "./views/Manager";

    import testTable from "./component/test";

    export default {
        name: "app",
        components: {
            testTable
        },
        data() {
            return {
                isShow: false,
                str_app: this.$store.state.str_app,
                testData: {}
            }
        },
        computed: {
            changedStatus() {
                return this.$store.state.status;
            },
            changedTestData() {
                return this.$store.state.testData;
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
            },
            changedTestData: function(val, oldVal) {
                this.isShow = true;
                this.testData = this.$store.state.testData;
            }
        },
        methods: {
            getTestData(){
                let _this = this
                this.$jsonp("http://172.16.16.137:8080/biz-ws-deploy/service/mem/login", { account: "admin", password: 111111})
                .then(json => {
                    _this.$store.dispatch("setTestData", json);
                });
                /*
                _this.$http.get("biz-ws-deploy/service/mem/login", {params: {
                    account: "admin", 
                    password: 111111
                }}).then(function(res) {
                    _this.$store.dispatch("setTestData", res.data);
                })*/
            },
            destroyTestData() {
                this.isShow = false;
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
        .test {
            width: 200px;
            height: 200px;
        }
        .float2l{
            float: left;
        }
</style>
