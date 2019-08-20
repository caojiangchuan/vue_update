<template>
  <div>
    <p>带参数传值跳转动态参数 ONE(动态路由)</p>
   <ul>
     <li v-for="(item,index) in list" @click="active(item,index)" class="liii"  :key="index">
         {{item.item}}<span class="anlian">anlian</span>
     </li>
   </ul>

    <p>带参数传值跳转 TWO(query)</p>
    <ul>
     <li v-for="(item,index) in list" @click="activeTwo()"  :key="index">
         {{item.item}}
     </li>
   </ul>
   <p>带参数传值跳转 Three(param)</p>
    <ul>
     <li v-for="(item,index) in list" @click="activeThree()" :key="index">
         {{item.item}}
     </li>
   </ul>
   <div class="bg" @click="zhezao()">出来遮罩层</div>
    <br/>

    <br/>

    <br/>

    <br/>
{{ testtwo }}
<div @click="add()" >change</div>
<div class="zhezhao" v-if="show" @click="hide">

<div class="alert" @click="sto()"></div>

</div>
<br/>
{{time}}
<input v-model="test">

  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'index',
  data () {
    return {
      list: [
        {item: 1},
        {item: 1},
        {item: 1},
        {item: 1}
      ],
      num: 0,
      test:'Allow',
      time:'',
      show:false
    }
  },
  computed:{
   testtwo:{
      get: function () {
      return this.test
    },
    // setter
    // set: function (newValue) {
    //   console.log(newValue)
    //   var names = newValue.split(' ')
    //   this.firstName = names[0]
    //   this.lastName = names[names.length - 1]
    // }
   }
  },
  created () {

    // alert(this.$route.params.id)
  },
  mounted(){
    this.go()
  this.timess=setInterval(()=>{
     this.go()
   },1000)  //本地电脑时间，需获取服务端的时间在进行计算
  },
  methods: {
    sto(){
        event.stopPropagation()
    },
    hide(){
this.show=false
    },
    zhezao(){
         this.show=true
    },
     totwo(e){
          return e<10?"0"+e:""+e;//如果取得的数字为个数则在其前面增添一个0
        },
        go(){//把获取时间的功能封装到函数内    注意 时间要向下取整避免小数
           
            var time1=new Date();//获取当前时间 获取的市1970年1年1月日到现在的毫秒数(必须写在函数或者定时器内 每一次变化都要重新获取当前时间)
            console.log(time1.getHours())
            console.log(time1.getMinutes()+''+time1.getSeconds())
            var time2=new Date(2019,7,19,17,27,0);//设置需要到达的时间 也是获取的毫秒数
            var conS=Math.floor((time2.getTime()-time1.getTime())/1000);//获得差值除以1000转为秒
            // var day=this.totwo(Math.floor(conS/86400));// 差值/60/60/24获取天数
            var hour=this.totwo(Math.floor(conS%86400/3600)); //  取余/60/60获取时(取余是获取conS对应位置的小数位)
            var min=this.totwo(Math.floor(conS%86400%3600/60));// 取余/60获取分
            var s=this.totwo(Math.floor(conS%60)); //取总秒数的余数
            var html="倒计时"+hour+"时"+min+"分"+s+"秒"; 
            this.time=html;//把字符串添加进div中
            console.log(conS)
            
           
            if(conS<0){//倒计时完成 执行功能，这里是播放MP3
              clearInterval(this.timess);//执行功能时要清除时间函数
              this.time="春节快乐！";
            } else{

            }
        },
    add(){
       this.test='990';
       clearInterval(this.timess)
    },
    active (item, index) {
      console.log(item, index)
      this.num = index
      this.$router.push({
        path: `/active/${index}`
      })
    },
    activeTwo(){
      this.$router.push({
        path: `/active/two`,
        query:{name:'tome',age:'18'}
      })
    },
    activeThree(){
      this.$router.push({
        name: 'active',
        params: {id:'1'}
      })
    }
  }
}
</script>

<style scoped>
.alert{
  width: 500px;
  height: 200px;
  background: white;
  position: absolute;
  left: 0;
  right:0 ;
  top:0;
  bottom:0;
  margin: auto
}
.zhezhao{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0,0,0, .3);
  z-index: 10000;
 
}
.bg{
  background: black;
  width: 100px;
  height: 100px;
  color:white;
  font-size: 20px;
  text-align: center;
  line-height:100px;
}
.actives{
  color: red;
}
p{
  color: red;
  font-size: 32px;
}
 li:hover .anlian{
 display:inline-block
}
.anlian{
  display: none
}
</style>
