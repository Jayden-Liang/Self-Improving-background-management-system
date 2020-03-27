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
    <main>
        <div class='wish-booklist'>
        <div class='catagory'>
           想看的书
        </div>
        <div class='wish-booklist-detail'>
             <a v-for="(item, index) in mywishBooks" href='#':key='index' class='each'>
                 <img :src="item.imgUrl" alt="">
                 <div class='book-name'>{{item.name}}</div>
                 <div class='book-author'>{{item.author}}</div>
             </a>
        </div>
    </div>
    <div  class='curent-booklist'>
        <div class='catagory'>
           在看的书
        </div>
        <div class='reading-booklist-detail'>
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
    </div>
    
    

  </div>
</template>

<script>

import { wishBooks } from '../../assets/data/books.js'

export default {
    data: function(){
        return {
            mywishBooks: '',
            mycurrentReading:''
        }
    },
    methods:{
        naviToBg(){
          this.$router.push('/reading-bg').catch(err => {})
     }
    },
    mounted(){
        let books=wishBooks()
        this.mycurrentReading=books.slice(0,5)
        this.mywishBooks= books
    }
}
</script>

<style scoped>
@import './ReadingBg.css';

main{
    max-width:900px;
    margin: auto;
    background: white;
}

</style>