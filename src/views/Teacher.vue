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
        <el-button v-on:click="setBtnName" type="primary">{{newCount}}</el-button>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'teacher',
        data() {
            return {
                count: 0
            }
        },
        computed: mapState({
            newCount: function(state) {
                console.log(state)
                return state.teacher.kind
            }
        }),
        methods: {
            changeCount() {
                this.$store.dispatch('changeCount', this.count++);
            },
            logout() {

            },
            ...mapActions({
                setBtnName: 'fnInTeacherAction'
            })
        }
    }
</script>