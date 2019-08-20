import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import Api from '../api/index'
Vue.use(Vuex)

const state = {
  isShow: false,
  List: [],
  message: '5555',
  show: false,
  newList:[],
  test:10,
  login:''||localStorage.getItem('login')
}
const getters = {
  abc(state){    
    return state.test-5
  }
}
const mutations = {// 改变状态
  getLogin(state,x){
      state.login=x
  },
  change (state) {
    state.isShow = true
  },
  change2 (state) {
    state.isShow = false
  },
  alertTip (state, x) {
    state.message = x
    state.show = true
    setTimeout(() => {
      state.show = false
    }, 2000)
  },
  getShareApi(state,x){  
    Api.post('https://qa2-api.idax.mn/api/v2/signalr/getAllOpenMarkets',null,r=>{
    console.log(r.data)
    state.newList=r.data    
  }) 
  setTimeout(()=>{
    state.test+=x

  },2000)
  },
  getApi(state){
    //  Axios.post('https://qa-api.idax.global/api/v2/signalr/getAllOpenMarkets')
    // .then(function (response) {
    //   console.log(response)
    //   state.newList = response
    // })
  }
  // getdata (state, res) {
  //   state.List = res
  //   console.log(state.List)
  // } 

  // Axios.post('/h5Gateway/customer/getCarousel', {sysCode: 'H5'})
  //   .then(function (response) {
  //     console.log(response)
  //     state.List = response
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   }) // 将接口数据保存在状态管理 对应的调用页面在created中 使用this.$store.commit(‘getdata')获取 然后将值直接带入this.$store.state.List
}

const actions = {// 异步使用改变状态Mutation
  achange (context) {
    context.commit('change')
  },
  achange2 (context) {
    context.commit('change2')
  },
  // getdata2 (context) {
  //   Axios.post('https://qa-api.idax.global/api/v2/signalr/getAllOpenMarkets', {sysCode: 'H5'})
  //     .then(function (response) {
  //       context.commit('getdata', response)
  //     })
  //     .catch(function (error) {
  //       console.log(error)
  //     })   //   结合mutation中的getdata，将接口数据保存在状态管理 对应的调用页面在created中 使用this.$store.dispatch(‘getdata')获取 然后将值直接带入this.$store.state.List
    
  // },
  alertTip2 (context, res) {
    context.commit('alertTip', res)
    
  },


  getAsynsmes(context,res){
    setTimeout(()=>{
      context.commit('getShareApi', res)
    },1000)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})

export default store
