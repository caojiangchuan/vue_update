<template>
  <div>
      <h1>让我们来实现懒加载吧！</h1>
      <div>
          <img v-for="(item,index) in number" :key="index" v-lazy="'https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png?'+item" >
      </div>
      
  </div>
</template>

<script>
export default {
   data(){
       return{
           number:100
       }
   }
}
</script>

<style>
img{
    width: 30%;
    display: block
}
</style>