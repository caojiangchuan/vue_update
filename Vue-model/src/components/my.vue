<template>
    <div>
     <div @click="about">调用接口</div>
     <div @click="lang">多语言功能</div>
     <div @click="linq">linq使用功能</div>
      
    </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {

    }
  },
  created () {
    this.$store.dispatch('getdata2')
  },
  methods: {
    about () {
      this.$router.push({
        path: 'about'
      })
    },
    lang(){
      this.$router.push({
        path: 'lang'
      })
    },
    linq(){
      this.$router.push({
        path: 'linq'
      })
    }
  },
  computed: {
    abc () {
      return this.$store.state.List
    }
  }
}
</script>

<style scoped>
div{
  margin: 20px;
}
</style>
