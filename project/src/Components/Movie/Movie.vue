<template>
  <div class="movie">
    
    <navBar/>
    <main>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval='3000'>
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <swiper-1/>
        </div>
        <div class="carousel-item">
          <swiper-2/>
        </div>
        <div class="carousel-item">
          <swiper-3/>
        </div>
        <div class="carousel-item">
          <swiper-4/>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class='prev' aria-hidden="true"><i class='el-icon-arrow-left'></i></span>
        <span class="sr-only">Previous</span>
      </a>
      <!-- class="carousel-control-prev-icon" -->
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="next" aria-hidden="true"><i class='el-icon-arrow-right'></i></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class='main-sec'>
       <div class='column-4'>
          <div class='mini-card '><div class='card-1'></div></div>
          <div class='mini-card'><div class='card-2'></div></div>
          <div class='mini-card'><div class='card-3'></div></div>
          <div class='mini-card'><div class='card-4'></div></div>
       </div>
       <div class='post'>
           <div class='selects'>
              <ul>
                <li>剧情</li>
                <li>奇幻</li>
                <li>动画</li>
                <li>文艺</li>
                <li>纪录片</li>
              </ul>
           </div>
           <div class='row'> 
                <story />
                <div class='col right-sec  col-sm-3'>
                    <div class='myMovieList'>
                      
                    </div>
                    <div class='wish-list'>
                        <div class='wish-list-title'> <svg t="1585054178773" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5031" width="200" height="200"><path d="M356.266667 117.333333c59.584 0 100.021333 20.842667 155.818666 68.16C567.872 138.176 608.32 117.333333 667.904 117.333333c126.261333 0 212.746667 76.736 248.384 202.848a32 32 0 1 1-61.6 17.386667C826.357333 237.312 763.274667 181.333333 667.914667 181.333333c-41.536 0-70.389333 15.253333-117.12 55.253334-2.165333 1.856-14.4 12.416-17.941334 15.434666a32.010667 32.010667 0 0 1-41.536 0c-3.541333-3.018667-15.786667-13.578667-17.952-15.434666C426.645333 196.586667 397.792 181.333333 356.266667 181.333333 230.133333 181.333333 149.333333 282.368 149.333333 428.096c0 110.965333 113.290667 248.885333 343.637334 408.8a32.533333 32.533333 0 0 0 37.216-0.16c47.456-33.536 79.018667-56.426667 94.293333-68.373333a32.010667 32.010667 0 0 1 39.424 50.432c-16.352 12.778667-48.48 36.085333-96.768 70.208a96.554667 96.554667 0 0 1-110.677333 0.458666C210.293333 718.56 85.333333 566.432 85.333333 428.096 85.333333 249.770667 191.242667 117.333333 356.266667 117.333333z m388 555.392a31.925333 31.925333 0 0 1-22.773334-8.704l-93.184-87.84a29.824 29.824 0 0 1 0-43.413333l1.077334-1.013333a32 32 0 0 1 43.904 0l70.976 66.912 140.053333-132.021334a32 32 0 0 1 43.904 0l1.066667 1.013334a29.824 29.824 0 0 1 0 43.413333L767.04 664.032a31.925333 31.925333 0 0 1-22.762667 8.693333z" p-id="5032" fill="#1296db"></path></svg>想看清单</div>
                        <div class='wish-list-item'>
                            <div class='wish-list-item-each' v-for='(item, index) in wishList' :key='index'>
                               <div>{{ index+1}}</div>
                               <div>{{item}}</div>
                            </div>
                        </div>
                    </div>
                    <div class='recent-view'>
                          <div class='recent-review-title'>
                            近期观影
                          </div>
                          <div class='recent-review-item'>
                            <div class='recent-review-item-each' v-for='(item, index) in recentView' :key='index'>
                               <div>{{ index+1}}</div>
                               <div>{{item}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
           </div>
       </div>
    </div>
    </main>
    
    
  </div>
</template>

<script>
import navBar from '../Nav/Nav.vue';
import swiper1 from "./swiper/swiper1.vue";
import swiper2 from "./swiper/swiper2.vue";
import swiper3 from "./swiper/swiper3.vue";
import swiper4 from "./swiper/swiper4.vue";
import story from './Movies/story.vue';

export default {
  components: {
    "swiper-1": swiper1,
    "swiper-2": swiper2,
    "swiper-3": swiper3,
    "swiper-4": swiper4,
    story,
    navBar
  },
  data: function() {
    return {
      active: "swiper-1",
      wishList: ['何以为家','阳光普照','法国大革命','燃烧','超时空接触','午夜巴塞罗那','大象席地而坐','龙虾','蓝色茉莉','浮城谜事'],
      recentView: ['大空头','哥斯拉','哈利波特与死亡圣器','勇敢者游戏2','让子弹飞','百变狸猫','你的名字','流浪地球','加勒比海盗4','流感']
    };
  },
  methods:{
    
  }

};
</script>

<style scoped>
@import './Movie.css';

 main{
    margin-left: 300px;
    padding-top: 50px;
  }

.catagory{
  margin-top: 50px;
}
.catagory div:last-child{
  display: inline-block;
  position: relative;
  top: 3px;
  color: #800080;
}

</style>