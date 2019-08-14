<template>
    <div>
      <p class="font">欢迎测试组件传值功能</p>
      <label>父传子：</label>
      <SonOne :getMessage="fatherGetMessage"></SonOne> <div @click="changeSon()">changeSon</div>
      <br/>
      <label>子传父：</label>
      <SonTwo @givefather="getsonchange"></SonTwo>{{getson}}<br/>
      <br/>
      <label>父调子方法：</label>
       <SonOne ref="mychild"></SonOne> <div @click="getSonMethods">调用子组件方法</div>
        <br/>
      <label >子调父方法：</label>
       <SonTwo></SonTwo>
    </div>
</template>

<script>
import SonOne from './component-son/sonOne'
import SonTwo from './component-son/sonTwo'

export default {
  components: {SonOne, SonTwo},
  name: 'component',
  data () {
    return {
      fatherGetMessage: '父组件传给sonone的信息',
      getson:''
    }
  },
  mounted(){
    
  },
  methods: {
    //改变父传子的值
    changeSon(){
      this.fatherGetMessage='改变父组件给子组件的值'
    },

    getsonchange(e){
     console.log(e)
     this.getson=e
    },

    getSonMethods(){
      this.$refs.mychild.giveF();
    },
    fatherMethod() {
       alert('测试')
      }
  
    
  }
}
</script>

<style scoped>
.font{
  font-size: 40px;
text-align: center
}
label{
  color:red;
  font-size: 30px;
}
</style>
