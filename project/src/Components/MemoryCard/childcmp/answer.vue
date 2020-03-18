<template>

<div class='each'>
           <!-- <transition name='rotate' mode='out-in'> -->
           <!-- <component :is='currentCmp'></component> -->
           <!-- </transition> -->
           <h3>正确答案</h3>
          <div>
            bla bla bla
          </div>

           <div class='answer'>
               <button class='button' @click='changeCmp'>返回</button>
           </div>
       </div>

</template>

<script>
export default {
    props:['callback'],
    methods:{
        changeCmp(){
            this.callback('question')
        }
    }
}
</script>

<style scoped>
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

.answer{
    text-align: center;
    margin-top: 4rem;
    /* margin-bottom: 1rem; */
}

.button{
  padding: 5px 35px;
  margin: auto;
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