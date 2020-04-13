<template>
    <div>
        <div class='backdrop'  v-if='show'  @click="cancelModal"></div>
       <transition 
        appear
        enter-class=''
        enter-active-class='animated rotateIn'
        leave-class=''
        leave-active-class='animated rotateOut'
     >
        <div class='modalContent'  v-if='show'>
            <slot></slot>
        </div>
       </transition>
    </div>
</template>

<script>
export default {
    props: ['show'],
    methods: {
        cancelModal(){
            this.$emit('modalReset', false)
        }
    }
}
</script>

<style scoped>
.backdrop{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(178,178,178,0.5);
    z-index: 1000;
}


</style>

<style>
.modalContent{
    background: white;
    position: absolute;
    top: 300px;
    left: 800px;
    z-index: 2000;
    width: 30%;
}
</style>