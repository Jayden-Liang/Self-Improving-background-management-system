import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        showModal: false,
        showdailyNote: false
        
    },
    mutations:{
        dailynote: state=>{
            state.showdailyNote=true
        },
        modal: state=>{
            state.showModal=true
        },
        cancelModal: state=>{
            state.showModal= false
            state.showdailyNote=false
        }
    },
    actions:{
         ayncModal:({commit})=>{
            //  setTimeout(()=>{
            //      commit('modal')
            //  }, 1000)
             commit('modal')
             commit('dailynote')
         }
    }
})