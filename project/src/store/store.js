import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        showModal: false,
        showdailyNote: false,
        // activeBanner: 'swiper-1'
        
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
             commit('modal')
             commit('dailynote')
         },
        //  swiper:({commit})=>{
        //      setInterval(()=>{

        //      },2000)
        //  }
    }
})