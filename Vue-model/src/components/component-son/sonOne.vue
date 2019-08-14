<template>
<div>
  {{getMessage}}
  
</div>
</template>

<script>
export default {
  name: 'sonOne',
  props: {
    getMessage: {}
  },
  data(){
    return{
    
    }
  },
  mounted(){
    console.log(this.getMessage)
  },
  methods:{
  giveF(){
  alert('1')
}
  }
}
</script>

<style scoped>

</style>
