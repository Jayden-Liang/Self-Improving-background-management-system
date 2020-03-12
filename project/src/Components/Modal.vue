<template>
    <div @click="cancel" class='modal' v-show='this.$store.state.showModal'>
    </div>

</template>


<script>
export default {
    props:['showModal'],
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        cancel(){
            this.$store.commit('cancelModal')
        }
    }

}
</script>



<style  scoped>



.modal{
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    right:0;
    z-index: 100;
    background-color: #008080;
    opacity: 0.3;
}
</style>