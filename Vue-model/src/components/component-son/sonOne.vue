<template>
<div>
  {{getMessage}}
  <div>接受bus数据</div>
</div>
</template>

<script>
import bus from '../../commit/bus'
export default {
  name: 'sonOne',
  props: {
    getMessage: {}
  },
  data(){
    return{
      
    
    }
  },
  created(){
  console.log('s'+'cre')

  },
  mounted(){
    bus.$on('give',this.data)
  console.log('s'+'mou')

    // console.log(this.getMessage)
  },
  methods:{
  giveF(){
  alert('1')
},
data(e){
  console.log(e)
}
  }
}
</script>

<style scoped>

</style>
