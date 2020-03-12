<template>
    <div class='note'>
        <div><ckeditor id="editor1" name="editor1" rows="10" class='myeditor' v-model.lazy="message" ></ckeditor></div>
        <button class='button'>提交</button>
        <!-- <div v-html='message'></div> -->
    </div>
    
</template>

<script>
export default {
    data: function(){
        return {
            message:'#输入内容'
            
        }
    }
}
</script>

<style  scoped>
  .note{
      margin-left: 18.6rem;
  }
  .button{
      margin-top: 3rem;
  }
</style>