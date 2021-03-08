<template>
    <div>
        <el-form :rules="rules"
                 v-loading="loading"
                 element-loading-text="加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0,0,0,0.8)"
                 ref="loginForm" :model="loginForm" class="loginStyle">
            <h3 class="loginFontStyle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" auto-complete="false" v-model="loginForm.username"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" auto-complete="false" v-model="loginForm.password"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" auto-complete="false" v-model="loginForm.code" placeholder="更换验证码"
                          style="width: 250px;margin-right:5px"></el-input>
                <img :src="captchaUrl" @click="updatePic">

            </el-form-item>
            <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>

        </el-form>
    </div>
</template>

<script>


    export default {
        name: "Login",
        data() {
            return {
                captchaUrl: '/captcha?time=' + new Date(),
                loginForm: {
                    username: 'admin',
                    password: '123456',
                    code: ''
                },
                checked: true,
                loading: false,
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
                }
            }
        },
        methods: {
            submitLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.postRequest('/login', this.loginForm).then(res => {
                            this.loading = false
                            if (res) {

                                // const tokenStr = res.obj.tokenHead + res.obj.token;
                                // window.sessionStorage.setItem('tokenStr', tokenStr);

                                let path = this.$route.query.redirect;
                                this.$router.replace((path == '/' || path == undefined ? '/home' : path))
                                //this.$router.replace('/home')

                            }
                        })

                        //this.$router.replace('/home');


                    } else {
                        this.$message.error('错了哦，这是一条错误消息');
                        return false;
                    }
                });
            },
            updatePic() {
                this.captchaUrl = '/captcha?time' + new Date();
            }
        }

    }
</script>

<style>
    .loginStyle {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #ffffff;
        border: 1px solid #eeaaee;
        box-shadow: 0 0 25px aqua;
    }

    .loginFontStyle {
        margin: 0 auto 40px auto;
        text-align: center;
    }

    .loginRemember {
        text-align: left;
        margin: 0 0 15px 0;
    }

    .el-form-item__content {
        display: flex;
        align-items: center;
    }
</style>