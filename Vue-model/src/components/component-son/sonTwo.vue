<template>
  <div>
    <span @click="giveFather">点击传递值给父组件||调用父组件的方法</span>
    <div @click="childMethod()">点击调用父组件</div>
    <div @click="changebus">触发bus兄弟传值</div>
  </div>
</template>

<script>
import bus from "../../commit/bus";

export default {
  name: "sonTwo",
  mounted() {
    this.$emit("givefather", "子传给父组件");
  },
  methods: {
    giveFather() {
      this.$emit("givefather", "改变一下子传父的值");
    },
    childMethod() {
      this.$parent.fatherMethod();
    },
    changebus(){
      bus.$emit('give','你好')
    }
  }
};
</script>

<style scoped>
</style>
