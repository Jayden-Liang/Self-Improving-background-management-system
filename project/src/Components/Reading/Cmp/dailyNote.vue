<template>
  <div class="dailyNote" 
     
     :class="{show:this.$store.state.showdailyNote, hide:!this.$store.state.showdailyNote}"
     
   >
    <div @click="cancel">
      <svg
        t="1583485021863"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2256"
        width="200"
        height="200"
      >
        <path
          d="M688.579263 705.773369a20.409106 20.409106 0 0 1-14.463404-5.981538L324.425232 350.911098c-8.005759-7.988353-8.021118-20.953813-0.033788-28.960596 7.988353-8.005759 20.953813-8.021118 28.960597-0.033789l349.690626 348.881758c8.005759 7.987329 8.021118 20.953813 0.032765 28.959572a20.411154 20.411154 0 0 1-14.496169 6.015326z"
          fill="#bfbfbf"
          p-id="2257"
        />
        <path
          d="M338.888636 705.773369a20.416273 20.416273 0 0 1-14.497192-6.014302c-7.987329-8.005759-7.972995-20.972243 0.033788-28.959573l349.690627-348.881757c8.004735-7.987329 20.972243-7.972995 28.959573 0.033788 7.988353 8.006783 7.972995 20.972243-0.032765 28.960597L353.352041 699.791831a20.416273 20.416273 0 0 1-14.463405 5.981538z"
          fill="#bfbfbf"
          p-id="2258"
        />
      </svg>
    </div>
    <div class="date">{{ t_year }}-{{ t_month }}-{{ t_day }}</div>
    <textarea name id="note" style="width: 39rem; height:60px"></textarea>
    <button class="button" @click="submit">提交</button>
  </div>
</template>




<script>
export default {
  data() {
    return {
      t_month: "",
      t_year: "",
      t_day: ""
    };
  },
  methods: {
    submit() {
      console.log("yes");
    },
    cancel() {
      this.$store.commit("cancelModal");
    }
  },
  mounted() {
    var ins = new Date();
    this.t_year = ins.getFullYear();
    this.t_month = ins.getMonth() + 1;
    this.t_day = ins.getDate();
  }
};
</script>
<style scoped>


.dailyNote {
  position: fixed;
  padding: 2rem;
  width: 40rem;
  background: white;
  z-index: 101;
  border-radius: 5px;
  transition: all 0.5s;
  box-shadow: 10px 15px 23px -14px rgba(102,100,102,1);
  /* transform: translateX(20rem); */
}

.show{
    transform: translate(20vh,20vh);
}

.hide{
    transform: translate(20vh, -200vh);
    
}

.icon {
  height: 30px;
  width: 30px;
  position: absolute;
  right: 5px;
  top: 5px;
}

.date {
  margin-bottom: 1rem;
}

.button {
  width: 70px;
  height: 30px;
  margin-top: 1rem;
  background: #3399ff;
  border-color: #3399ff;
  border-radius: 20px;
  border-width: 0;
  color: white;
  outline: none;
  cursor: pointer;
}

.button:hover {
  background: #ffe4e1;
}
</style>
// v-show="this.$store.state.showdailyNote"