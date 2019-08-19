<template>
    <div>
       看console.log打印了解linq 
    </div>
</template>
<script>
export default {
    data(){
        return{
        list:[{name:'tom',age:2},{name:'jim',age:18},{name:'tony',age:98},{name:'tony',age:45},{name:'ajs',age:10},]
        }
    },
    created(){
        console.log(this.list)
    },
    mounted(){
   let list=[] //排序
   list =this.$linq
   .from(this.list)
   .orderByDescending("x=>x.age")
   .toArray()  
   console.log(list)

   let quchong=[]
   quchong=this.$linq
   .from(this.list)
   .distinct("x=>x.name")
   .toArray()
   console.log(quchong)
    }
}
</script>
<style scoped>

</style>