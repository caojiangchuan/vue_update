<template>
  <div>
    <p>带参数传值跳转动态参数 ONE(动态路由)</p>
   <ul>
     <li v-for="(item,index) in list" @click="active(item,index)" :class="index==num?'actives':''" :key="index">
         {{item.item}}
     </li>
   </ul>

    <p>带参数传值跳转 TWO(query)</p>
    <ul>
     <li v-for="(item,index) in list" @click="activeTwo()" :class="index==num?'actives':''" :key="index">
         {{item.item}}
     </li>
   </ul>
   <p>带参数传值跳转 Three(param)</p>
    <ul>
     <li v-for="(item,index) in list" @click="activeThree()" :class="index==num?'actives':''" :key="index">
         {{item.item}}
     </li>
   </ul>
    <br/>

    <br/>

    <br/>

    <br/>

  </div>
</template>

<script>
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
      num: 0
    }
  },
  created () {
    // alert(this.$route.params.id)
  },
  methods: {
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
.actives{
  color: red;
}
p{
  color: red;
  font-size: 32px;
}
</style>
