<template>
    <div class='note'>
        <!-- <div><ckeditor id="editor1" name="editor1" rows="10" class='myeditor' v-model.lazy="message" ></ckeditor></div>
        <button class='button'>提交</button> -->
        <!-- <div v-html='message'></div> -->
        <mavon-editor v-model="value" />

        <!-- <button @click='submit'>click</button> -->

        <!-- <mavon-editor
          defaultOpen="preview"
          :toolbarsFlag="false"
          :subfield="false"
          :preview="true"
          v-model="value"
          /> -->

    </div>
    
</template>

<script>
export default {
    data: function(){
        return {
            message:'#输入内容',
            value: 'hello'
            
        }
    },
    methods:{
        submit(){
            console.log(this.value)
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