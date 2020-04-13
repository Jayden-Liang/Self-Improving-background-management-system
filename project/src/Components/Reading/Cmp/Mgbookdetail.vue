<template>
     <main>
        <div class='wish-booklist'>
        <div class='catagory'>
           想看的书
        </div>
        <div class='wish-booklist-detail' v-loading="loading1">
             <a v-for="(item, index) in mywishBooks" href='#':key='index' class='each'>
                 <img :src="item.imgUrl" alt="">
                 <div class='book-name'>{{item.name}}</div>
                 <div class='book-author'>{{item.author}}</div>
             </a>
        </div>
    </div>
    <div  class='curent-booklist'>
        <div class='catagory reading-cata'>
           在看的书
        </div>
        <div class='reading-booklist-detail' v-loading="loading2">
             <div v-for="(item, index) in mycurrentReading" :key='index' class='each'>
                 <img :src="item.imgUrl" alt="">
                 <div class='book-name'>{{item.name}}</div>
                 <div class='book-author'>{{item.author}}</div>
             </div>
        </div>
    </div>
    <div class='new-article'>
       <div class='catagory'>
           最新读后感
        </div>
        <div class='article-content'>
            <div class='content-title'>打破“五岁定终身”的魔咒</div>
            <div class='from-book'>自卑与超越</div>
            <div class='brief'>“一个人在五岁之前，其生活经验已经决定了他（她）成年后解释自身遭遇和回应的方式，对于“对这个世界和自己应该期待些什么”有了基本的答案。” ——阿尔弗雷德•阿德勒 阿尔弗雷德•阿德勒是著名的奥地利心理学家，个体心理学派的创始人。他在思想最成熟的1932年写...</div>
        </div>

    </div>

    <footer>
        <span>
             &copy; 2020 Jayden-Liang, all rights reserved
       </span>
    </footer>
    </main>
</template>


<script>

const axios = require("axios");

export default {
    data: function(){
        return {
            mywishBooks: '',
            mycurrentReading:'',
            loading1: true,
            loading1: true
        }
    },
    methods:{
        naviToBg(){
          this.$router.push('/reading-bg').catch(err => {})
     }
    },
    mounted(){
        axios
      .get("http://hit-the-road.cc/api/readingList")
      .then(res => {
        this.mywishBooks = res.data;
        this.loading1=false
      })
      .catch(error => {
        this.$message.error(error);
      });
    axios
      .get("http://hit-the-road.cc/api/readingList/current-reading")
      .then(res => {
        this.mycurrentReading = res.data;
        this.loading2=false
      })
      .catch(error => {
        this.$message.error(error);
      });

    }
}
</script>
<style scoped>
main{
    max-width:900px;
    margin: auto;
    background: white;
}



.catagory{
  font-size: 1.3rem;
  font-weight: bold;
  color: #420420;
  padding: 1.3rem;
  padding-left: 4rem;
  border-bottom: 1px #cccc solid;
  background: url('../../../assets/smile-fish.png') no-repeat;
  background-size: contain;
}

.reading-cata{
    background: url('../../../assets/child-tree.jpg') no-repeat;
    background-size: contain;
    
    /* color: white; */
}

.new-article .catagory{
    background: url('../../../assets/lamp.png') no-repeat;
    background-size: contain;
}


.wish-booklist{
    background: #FFFFFF;
    /* margin-top: 3rem; */
    
}

.wish-booklist-detail,.reading-booklist-detail{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;    
}

.reading-booklist-detail .each, .wish-booklist-detail .each{
    /* border: 1px red solid; */
    width: 180px;
    margin-top: 1.5rem;

}
.reading-booklist-detail a, .wish-booklist-detail a{
   text-decoration: none;
   color: #133337;
}
.each img{
    /* height: 300px; */
    width: 150px;
    height: 200px;
    margin: auto;
    display: block;
    /* border: 1px red solid; */
}

.book-name, .book-author{
    width: 150px;
    margin-left: 13px;
    font-size: 0.8rem;
}
.book-name{
    margin-top: 0.5rem;
}

.curent-booklist{
    background: #FFFFFF;
    margin-top: 2rem;
}

.new-article{
    
}


.article-content{
    padding: 2rem;
    border: 1px #ccc solid;
    margin: 1rem;
    font-size: 0.8rem;
}
.content-title{
    font-size: 1rem;
    color:#000099
    ;
}

.from-book{
    margin: 0.5rem 0;
}
</style>