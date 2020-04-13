<template>
    <div class='moviePost'>
        <navBar/>
        <div class='movie-main'>
            <div class='header'>
            <div class='header-img'></div>
        </div>
        <div class='main'>
            <div class='title'>以牙还牙，双倍奉还《半泽直树》。终归也只是一部爽剧而已</div>
            <div class='icon-date'>
                <div class='myicon'><svg t="1584805396947" class="icon" viewBox="0 0 1122 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3407" width="200" height="200"><path d="M596.744828 858.041379H312.496552c-5.296552 0-10.593103-3.531034-14.124138-7.062069l-141.24138-245.406896c-3.531034-5.296552-3.531034-10.593103 0-15.889655l141.24138-245.406897c3.531034-5.296552 7.062069-7.062069 14.124138-7.062069h284.248276c5.296552 0 10.593103 3.531034 14.124138 7.062069l141.241379 245.406897c3.531034 5.296552 3.531034 10.593103 0 15.889655l-141.241379 245.406896c-3.531034 3.531034-7.062069 7.062069-14.124138 7.062069z m-275.42069-31.77931h266.593103l132.413793-231.282759-132.413793-231.282758H321.324138l-132.413793 231.282758 132.413793 231.282759zM850.97931 418.427586H723.862069c-7.062069 0-12.358621-3.531034-15.889655-8.827586L646.17931 300.137931c-3.531034-5.296552-3.531034-12.358621 0-17.655172l63.558621-109.462069c3.531034-5.296552 8.827586-8.827586 15.889655-8.827587h125.351724c7.062069 0 12.358621 3.531034 15.889656 8.827587l63.55862 109.462069c3.531034 5.296552 3.531034 12.358621 0 17.655172l-63.55862 109.462069c-3.531034 5.296552-10.593103 8.827586-15.889656 8.827586z m-116.524138-35.310345h105.931035l52.965517-91.806896-52.965517-91.806897h-105.931035l-52.965517 91.806897 52.965517 91.806896z" fill="#3164AF" p-id="3408"></path></svg> <div class='tag'>剧情</div></div>
                <div class='date'>2020-3-25</div>
            </div>
            
        </div>
        </div>
        
    </div>
</template>

<script>

import navBar from '../../Nav/Nav.vue';


export default {
   components:{
       navBar
   }
    
}
</script>

<style scoped>
.movie-main{
    margin-left: 300px;
}

.header{
    height: 20rem;
    background: #F4F4F4;
    position: relative;
}

.header-img{
    /* max-width: 1200px; */
    width: 800px;
    margin: auto;
    height: 400px;
    background: url('../../../assets/movie/movie-1.png');
   
}

.main{
    max-width: 800px;
    margin: auto;
    margin-top: 150px;
    padding: 0 1rem;
}

.title{
    font-size: 1.6rem;
    color: #000000;
}
.icon-date{
    position: relative;
    
     margin-top: 2rem;
}

.icon-date svg{
  width: 40px;
  height: 40px;
 
}

.tag{
    display: inline-block;
    position: relative;
    top: 4px;
}
.date{
    position: absolute;
    right: 0;
    top: 10px;
    font-size: 0.9rem;
}
</style>