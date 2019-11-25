<template>
  <div class="login">
    <h1 class='red'>欢迎来到这里</h1>
    <el-alert title="温馨提示,请注意账户安全" type="warning" show-icon></el-alert>
    <div class="zh">
      <input type="text" placeholder="请输入账号" v-model="name" />
    </div>
    <div class="psd">
      <input type="password" placeholder="请输入密码 " v-model="password" />
    </div>
    <div class="btn com" @click="btn">登录</div>
  </div>
</template>

<script>
import { Alert } from "element-ui";
import {one,abc} from '../commit/oneFunction'
import defa from '../commit/default'
import '../less/test.less'
export default {
  name: "login",

  components: {
    [Alert.name]: Alert
  },
  data() {
    return {
      show: false,
      name: "",
      password: "",
      users: {
        name: "15606926118",
        password: "666666"
      }
    };
  },
  mounted(){
    console.log(defa)
   console.log(one)
   abc()
   
  },

  methods: {
    hi() {
      this.show = !this.show;
    },
    btn() {
      if (this.name === "") {
        this.$store.dispatch("alertTip2", "账号不能为空");
      } else if (this.name !== this.users.name) {
        this.$store.dispatch("alertTip2", "账号输入错误");
      } else if (this.password === "") {
        this.$store.dispatch("alertTip2", "密码不能为空");
      } else if (this.password !== this.users.password) {
        this.$store.dispatch("alertTip2", "密码输入错误");
      } else {
        this.$store.commit("getLogin", this.name);
        localStorage.setItem("login", this.$store.state.login);
        this.$router.push({
          path: "/main"
        });
      }
    }
  }
};
</script>


