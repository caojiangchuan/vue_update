<template>
    <div>
      <p class="font">欢迎测试组件传值功能</p>
      <label>父传子：</label>
      <SonOne :getMessage="fatherGetMessage">
        </SonOne> 
      <br/>
      <label>子传父：</label>
      <SonTwo @givefather="getsonchange"><p>000</p><div style="color:red" slot="show"></div></SonTwo>{{getson}}<br/>
      <br/>
      <label>父调子方法：</label>
       <SonOne ref="mychild"></SonOne> <div @click="getSonMethods">调用子组件方法</div>
        <br/>
      <label >子调父方法：</label>
       <SonTwo></SonTwo>
       <label>$attrs</label>
       <FirstSone :name="'tome'"  age="'18'" address="'浦东新区'"></FirstSone>
       <label>vuex多层通讯</label>
       <Vuxtext></Vuxtext>
    </div>
</template>

<script>
import SonOne from './component-son/sonOne';
import SonTwo from './component-son/sonTwo';
import FirstSone from '../components/firstSon';
import Vuxtext from './component-son/vuextext';

export default {
    components: {SonOne, SonTwo, FirstSone, Vuxtext},
    name: 'component',
    data() {
        return {
            fatherGetMessage: '父组件传给sonone的信息',
            getson: ''
        };
    },
    beforeCreate() {},
    created() {
        this.$store.commit('vuextext', '测试这条vuex传值');
    },
    beforeMount() {},
    mounted() {

        console.log('f' + 'mou');

    },
    methods: {
        // 改变父传子的值
        changeSon() {
            this.fatherGetMessage = '改变父组件给子组件的值';
        },

        getsonchange(e) {
            //  console.log(e)
            this.getson = e;
        },

        getSonMethods() {
            this.$refs.mychild.giveF();
        },
        fatherMethod() {
            alert('测试');
        }

    }
}
</script>

<style scoped>
.font {
    font-size: 40px;
    text-align: center;
}
label {
    font-size: 30px;
    color: red;
}
</style>
