import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    books:[],
    boot: []
  },
  mutations: {
    increment(state) {
      state.count+=500
    },
    increment2(state) {
      state.count+=1000
    },
     increment3(state) {
      state.count+=3000
    },
    increment4(state) {
      state.count+=5000
    },
// me
  deleate(){
    this.state.books=[]
  },
  deleate2(){
    this.state.boot=[]
  },
   addTobooks(state,booksinfor){
    var flag = false;
    state.books.forEach((item,index)=>{
      if(item.id == booksinfor.id){
       flag = ture;
      }
    })
    if(flag == false){
      state.books.push(booksinfor);   
    }
   
    },
    setbowere(state, booksinto) {
      var flag = false;
      state.boot.forEach((item,index)=>{
        if(item.id == booksinto.id){
         flag = ture;
        }
      })
      if(flag == false){
        state.boot.push(booksinto);   
      }
     
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
  },
  plugins: [createPersistedState()]
})
