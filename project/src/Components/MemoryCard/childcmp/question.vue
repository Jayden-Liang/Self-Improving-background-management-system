
<template>
   <div class='each'>
           <div class='question'>
           <h3>问题一</h3>
           <div>跨域解决方案 </div>
            
          </div>

           <div class='answer'>
               <button class='button' @click='changeCmp'>答案</button>
           </div>
       </div>
    
</template>

<script>
export default {
    props:['callback', 'parentData'],
    methods:{
        changeCmp(){
            this.callback('answer')
        }
    }
}
</script>


<style  scoped>
.each{
    padding: 1rem;
    margin: auto;
    margin-top: 10rem;
    width: 40rem;
    box-shadow: 1px 1px 10px #ccc;
   
}
.each h3{
    margin-left: 1rem;
}

.question{
    margin-top: 3rem;
    text-align: center;
    font-size: 150%;
}
.answer{
    text-align: center;
    margin-top: 4rem;
    /* margin-bottom: 1rem; */
}

.button{
  padding: 5px 35px;
  border-radius: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #699CFC;
  margin-bottom: 1rem;
  color: white;
}
.button:hover{
    background: #6DFD9C;
}


</style>

