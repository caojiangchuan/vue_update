<template>
    <div>
      <h1 class="top">共享数据</h1>

        <el-button>Scatter</el-button>
        <el-button type="primary">Line</el-button>
        <el-button type="success">Pie</el-button>
        <el-button type="info">Bar</el-button>
        <el-button type="warning">PictorialBar</el-button>
        <el-button type="danger">Dataset</el-button>
      <div :class="[this.$store.state.isShow ? 'loading' : '']"></div>
      <div>{{this.$store.state.test}}</div>
      <div @click="golek()">555</div>
      <label>多语言</label>
      <div> {{ $t("message.hello") }}</div>
    </div>
</template>

<script>


export default {
  name: 'function',
 
  data () {
    return {

    }
  },
  created () {
      console.log(localStorage.getItem(lang))
  },
  mounted(){
    


    console.log(this.$store.state.test)//vuex原始值
    this.$store.commit('getShareApi',1)//改变vuex值
    console.log(this.$store.state.test)//vuex值
  console.log(this.$store.getters.abc)//vuex计算属性
  // this.$store.dispatch('getAsynsmes',5)
  // console.log(this.$store.state.test)//异步改变之后的值
  this.$store.commit('getApi')//改变vuex值
    console.log(this.$store.state.newList)//vuex值
  },
  methods: {
golek(){
  // this.$store.commit('getShareApi',5)
    localStorage.setItem('lang','en')
    window.location="/#/main/function" 
    console.log(localStorage.getItem('lang'))
    this.$i18n.locale=localStorage.getItem('lang')
}
  }
}
</script>

<style lang="scss" scoped>
  $a : 30px;
  .top{
     font-size: $a;
    text-align: center;
   }
   label{
     color:red;
     font-size:32px;
   }

</style>
