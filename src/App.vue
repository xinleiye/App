<template>
    <div>
        <!--component :is="current"></component-->
        <div>
        <!--el-button v-on:click="getTestData" type="primary" class="test float2l">获取测试数据</el-button-->
        <a href="javascript:void(0);" class="test a_btn" v-on:click="getTestData()">
        </a>
        <el-button v-on:click="destroyTestData" type="primary" class="test float2l">隐藏测试数据</el-button>
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
    import {str_student} from "./assets/lang/zh_cn";

    import testTable from "./component/test";

    export default {
        name: "app",
        components: {
            testTable
        },
        data() {
            return {
                isShow: false,
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
                let _this = this;
                var callback = function(data) {
                        console.log(data);
                }
                function getJSONP(url, cb) {
                
                    var head = document.getElementsByTagName("head")[0];
                    var script = document.createElement("script");
                    script.type = 'text/javascript';
                    script.src = url;
                    script.onload = script.onreadystatechange = function() {
                        if((!this.readyState || this.readyState === "loaded" || this.readyState === "complete")){
                            console.log(this);
                            cb && cb();  
                            // Handle memory leak in IE  
                            script.onload = script.onreadystatechange = null;//人工回收内存  
                            if ( head && script.parentNode ) {  
                                head.removeChild( script );  
                            }  
                        }
                    };
                    head.insertBefore(script, head.firstChild)
                }
                getJSONP("https://api.douban.com/v2/book/1220562?callback=callback", callback);
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
        .a_btn {
            display: block;
            color: #fff;
            background-color: #409EFF;
            border-color: #409EFF;
            display: inline-block;
            line-height: 1;
            white-space: nowrap;
            cursor: pointer;
            background: #fff;
            border: 1px solid #d8dce5;
            color: #5a5e66;
            -webkit-appearance: none;
            text-align: center;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            -webkit-transition: .1s;
            transition: .1s;
            padding: 12px 20px;
            border-radius: 4px;
        }
        .float2l{
            float: left;
        }
</style>
