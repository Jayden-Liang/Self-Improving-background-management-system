<template>
    <div class='card' :style='cardStyle'> 
       <div class='each'>
           <h3>问题一</h3>
           <div class='question'>
                添加背景图片backgound-image
           </div>
           <div class='answer'>
               <button class='button'>答案</button>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    
    data: function(){
        return {

        }
    }

}
</script>

<style  scoped>
.card{
    height: 100vh;
    margin-top: 0;
    /* margin-left: 18.6rem; */
    display: flex;
    /* justify-content: center; */
    /* margin-top: 5rem; */
    /* background: yellow; */
    background: url('../../assets/fogs-on-green-mountain.jpg');
    background-size: cover;
    
}

.each{
    padding: 1rem;
    height: 20rem;
    margin-top: 5rem;
    width: 40rem;
    margin-left: 35rem;
    /* border: 1px #cccccc solid; */
    background: url('../../assets/bg-card/bg-2.jpg');
    background-size: contain;
   
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

