<!-- 使用ElementUi-PLUS 创建一个登陆页面 -->
<template>
    <el-form label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名">
            <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="sumbit">登录</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script setup>
import { login } from '../api/user.js'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const loginForm = reactive({
    username: '',
    password: ''
})

const sumbit = () => {
    console.log(loginForm.username, loginForm.password);
    login({
        username: loginForm.username, 
        password: loginForm.password
    }).then(res => {
        console.log(res);
        window.localStorage.setItem('jwtToken', res.token)
        window.localStorage.setItem('level', res.level)
        router.push({path: '/home'})
    })
}
</script>
  
<style lang="css" scoped>
.login {
    width: 500px;
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
}
</style>