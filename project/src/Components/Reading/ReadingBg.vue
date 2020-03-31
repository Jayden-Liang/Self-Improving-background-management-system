<template>
  <div class='readingBg'>
      
    <nav class="navbar">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <button @click="naviToBg" class="btn btn-outline-success my-sm-0" type="submit">后台</button>
        </li>
      </ul>
    </nav>
    <div class="all">
         <div class='banner'>
          <h1>精读多思</h1>
    </div>
    <div class='readingbg-select-group'>
        <div class='each'>
             <span><router-link to='/reading-bg'>书籍</router-link></span>  
             <span><router-link to='/reading-bg/management'>管理</router-link></span>
        </div>
    </div>
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>



export default {
    data: function(){
        return {
            
        }
    },
    methods:{
        naviToBg(){
          this.$router.push('/reading-bg').catch(err => {})
     }
    }
}
</script>

<style scoped>
@import './ReadingBg.css';



.navbar{
    position: fixed;
}

.readingbg-select-group{
    height: 100px;
    background-color: #F6F6F1;
    
}

.readingbg-select-group .each{
    max-width:900px;
    margin: auto;
    padding-top: 60px;
    
}
.readingbg-select-group span:last-child{
    margin-left: 3rem;
}


</style>