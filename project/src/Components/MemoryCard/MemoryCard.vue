<template>
    <div class='my-card' > 
        <nav class='navBar'>
            <div class='cardTitle'>Memory card</div>
            <ul>
                <li>数据统计</li>
                <li>添加</li>
            </ul>
        </nav>
      
         <div class='cardiv'>
            <transition name='rotate' mode='out-in'>
                <component :is='currentCmp' :callback='shiftCmp'></component>
            </transition>
         </div>
           
       <!-- <div class='slogan'>
          <h1>温故而知新</h1>
       </div> -->
    </div>
</template>

<script>
import question from './childcmp/question.vue'
import answer from './childcmp/answer.vue'
export default {
    components:{
        question,
        answer
    },
    data: function(){
        return {
           currentCmp: 'question',
           buttonText:'答案'
        }
    },
    methods:{
        shiftCmp(el){
            if (el==='answer'){
                this.currentCmp='answer'
                this.buttonText='返回'
            }else{
                this.currentCmp='question'
                this.buttonText='答案'
            }
        }
    }

}
</script>

<style  scoped>
.rotate-enter-active{
    animation: jump-in 0.3s ease-out forwards;
}

.rotate-leave-active{
    animation: jump-out 0.3s ease-out forwards;
}

@keyframes jump-in {
    from {
        transform: rotateY(90deg);
    }to{
        transform: rotateY(0deg);
    }
}
@keyframes jump-out {
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(90deg);
    }
}

.navBar{
    background: #2EA3FD;
    width: 100%;
    height: 100px;
    display: flex;
}
.navBar div:first-child{
    flex: 2;
    text-align: center;
    margin-top: 30px;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    letter-spacing: 1px;
}
.navBar ul{
    flex: 1;
    margin-top: 40px;
}
.navBar ul li{
 list-style: none;
 display: inline-block;
 margin-left: 20px;
 color: white;

}
.my-card{
    margin-top: 0;
    margin-left: 300px;
    background-size: cover;
    
}


.cardiv{
    /* border: 1px red solid; */
    min-height: 300px;
}


.slogan{
    text-align: center;
    font-family:'lixukexingshu1f8ea482aa1e86d';
    margin-top: 5rem;
    letter-spacing:10px;
    font-size: 4rem;
}
</style>

