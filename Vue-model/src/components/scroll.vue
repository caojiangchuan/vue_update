<template>
  <div class="scroll">
    <scrollactive
      class="my-nav"
      active-class="active"
      :offset="80"
      :duration="800"
      :modifyUrl="false"
    >
      <a href="#home" class="scrollactive-item" @click="error()">Home</a>
      <a href="#about-us" class="scrollactive-item" @click="error()">About Us</a>
      <a href="#portfolio" class="scrollactive-item" @click="error()">Portfolio</a>
      <a href="#contact" class="scrollactive-item" @click="error()">Contact</a>
    </scrollactive>
    <div id="home" style="background:red"></div>
    <div id="about-us" style="background:gray"></div>

    <div id="portfolio" style="background:yellow"></div>

    <div id="contact" style="background:blue"></div>
    <div>
    <h1 style="margin:100px">我会悬挂</h1>
    <div style="margin-top:500px"></div>
    </div>
  </div>
</template>
<script>
export default {
    data() {},
    methods: {
        error() {
            return false;
        }
    }
};
</script>
<style scoped>
body {
    height: 100%;
}
.my-nav {
    position: fixed;
    z-index: 1000;
    top: 0;
    width: 100%;
}
.active {
    color: red;
}
div {
    width: 100%;
    height: 800px;
    opacity: .4;
}
h1 {
    position:         sticky;
    position: -webkit-sticky;
    top: 0;
    color: #fff;
    background-color: red;
}
</style>