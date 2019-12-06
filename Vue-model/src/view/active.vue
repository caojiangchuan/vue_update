<template>
<div>
<div>{{this.$route.params.id}}</div>
<div>{{this.$route.query.age}}</div>
<div>{{this.$route.params.id}}</div>
</div>
</template>

<script>
export default {
  name: 'active',
  created () {
    console.log(this.$route)
  },
  mounted(){
  
  },

  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
