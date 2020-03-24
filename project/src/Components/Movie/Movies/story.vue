<template>
<div class='col col-sm-8'>
  <div v-for="(item,index) in story" :key=index>
       <temp :passData="item"/>
    </div>
</div>
    
</template>

<script>
import { allMovies} from '../../../assets/data/movie.js'
import template from './template/template.vue'

export default {
    components:{
        'temp':template
    },
    mounted(){
        const data= allMovies()
        this.story=data
    },
    data: function(){
        return {
            story:'',
            
        }
    }
}
</script>