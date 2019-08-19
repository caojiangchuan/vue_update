<template>
    <div>
       <h1> {{$t("write.title") }}</h1>
       <h4>{{$t("write.content")}}</h4>
       <p>{{$t("write.acter")}}</p>
       <p>{{$t("write.data")}}</p>
       <ul style="margin-top:50px" >
        <li v-for="(item,index) in list" :key="index" @click="getActive(item,index)" :class="index==idx?'active':''">{{item.item}}</li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{item:'中文',lang:"zh_cn"},{item:'英文',lang:"zn_en"},{item:'繁体',lang:"zn_ft"}],
            idx:0
        }
    },
    mounted(){
      
        this.list.forEach((item,index)=>{
         if(item.lang==localStorage.getItem('lang')){
            this.idx=index
         }
     })  
 
     
    },
    methods:{
    ulli(){
        console.log(this)
    },
    getActive(item,index){
       this.idx=index
       if(localStorage.getItem('lang')!=item.lang){
      localStorage.setItem('lang',item.lang)
      this.$i18n.locale=localStorage.getItem('lang')
       }
}
    
    }
}
</script>
<style scoped>
ul {
    display: flex
}
ul li {
    list-style-type: none;
    flex: 1;
    text-align: center;
    font-size: 32px;}
    
.active{
    color:mediumaquamarine
}
</style>