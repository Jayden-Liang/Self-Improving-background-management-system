<template>
    <div class='question-answer' @mouseenter="showAnswer" @mouseleave="showQuestion">

        <div :class='{question: show, questionhide: !show}'>
            {{item.question}}
        </div>
         
        <div  :class='{answer: !show, answerhide: show}'>
            {{ item.answer }}
        </div>
        <div class='operation'>
             <el-button mini type="primary" icon="el-icon-edit"></el-button>
             <el-button type="primary" icon="el-icon-delete"></el-button>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['item'],
    data: function(){
        return {
           show: true
        }
    },
    methods: {
        showAnswer(){
            this.show=false
        },
        showQuestion(){
            this.show=true
        }
    }
}
</script>

<style scoped>

.question-answer{
    height: 200px;
    width: 500px;
    border: 1px #ccc solid;
    position: relative;
    box-shadow: 5px 10px 10px #cccc;
}
/* .question-answer:hover{
    background: #c6e2ff;
} */
.questionhide, .answerhide{
    /* display: none; */
    opacity: 0;
    transition: all 0.5s ease;
    text-align: center;

}
.question, .answer{
    opacity: 1;
    display: block;
    transition: all 0.5s ease;
    text-align: center;

}
.question{
    color: #420420;
    font-size: 1.5rem;
    margin-top: 3rem;
}
.operation{
    position: absolute;
    right: 5px;
    bottom: 10px;
}
</style>