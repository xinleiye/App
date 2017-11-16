<template>
    <div>
        <el-tree :data="arr"></el-tree>
    </div>
</template>
<script>
    export default {
        name: "testTable",
        props: {
            data: {
                type: Object,
                default: function() {
                    return {};
                }
            },
        },
        data() {
            return {
                arr: {}
            }
        },
        created() {
            var data = this.data;
            /*
                {
                    "data": {
                        "userName": "abc"
                    }
                } =>
                [
                    {
                        label: "data",
                        children: [
                            {
                                label: "userName",
                                children: {
                                    label: "abc"
                                }
                            }
                        ]
                    }
                ]
            */
            function object2arr(data) {
                var res = [];
                var obj = {};
                var _obj;
                var val;
                var key;
                for(key in data) {
                    obj = {};
                    _obj = {};
                    val = data[key];
                    if (typeof val === "object") {
                        obj.label = key;
                        obj.children = object2arr(val);
                    } else {
                        _obj[key] = val;
                        obj = keyValueToArr(_obj);
                    }
                    res.push(obj);
                }
                return res;
            }
            /*
                {"resultCode": "0000"} =>
                {
                    label: "resultCode",
                    children: [{
                        label: "0000"
                    }]
                }
            */
            function keyValueToArr(data) {
                var _arr = [];
                var obj = {};
                var _obj = {};
                var key;
                for (key in data) {
                    obj.label = key;
                    _obj.label = data[key];
                    _arr.push(_obj);
                    obj.children = _arr;
                }
                return obj;
            }
            this.arr = object2arr(data);
        }
    }
</script>


// WEBPACK FOOTER //
// src/component/test.vue?5ac4457b