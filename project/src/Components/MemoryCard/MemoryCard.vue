<template>
    <div class='card' > 
        <nav class='navBar'>
            <div>Memory card</div>
            <ul>
                <li>数据统计</li>
                <li>添加</li>
            </ul>
        </nav>
      
        
       
       <div class='each'>
           <h3>问题一</h3>
           <div class='question'>
                添加背景图片backgound-image
           </div>
           <div class='answer'>
               <button class='button'>答案</button>
           </div>
       </div>

       <div class='slogan'>
          <h1>温故而知新</h1>
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
    font-size: 1.6rem;
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
.card{
    /* height: 100vh; */
    margin-top: 0;
    margin-left: 300px;
    /* margin-left: 18.6rem; */
    
    /* justify-content: center; */
    /* margin-top: 5rem; */
    /* background: yellow; */
    /* background: url('../../assets/fogs-on-green-mountain.jpg'); */
    background-size: cover;
    
}

.each{
    padding: 1rem;
    margin: auto;
    margin-top: 10rem;
    width: 40rem;
    /* border: 1px #cccccc solid; */
    box-shadow: 1px 1px 10px #ccc;
    /* border-radius: 5px; */
    /* margin-left: 35rem; */
    /* border: 1px #cccccc solid; */
    /* background: url('../../assets/bg-card/bg-2.jpg'); */
    /* background-size: contain; */
   
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

.slogan{
    text-align: center;
    font-family:'lixukexingshu1f8ea482aa1e86d';
    margin-top: 5rem;
    letter-spacing:10px;
    font-size: 4rem;
}
</style>

