<template>
  <div class="reading">
    <nav class='navbar sticky-top'>
      <ul class='navbar-nav ml-auto'>
        <li class="nav-item"><button @click='naviToBg' class="btn btn-outline-success  my-sm-0" type="submit">后台</button></li>
      </ul>
    </nav>
    <main>
        <div class="data-display">
      <div class="summary">
        <div>
          <button
            type="button"
            class="btn btn-primary checkout"
            @click="ModalShow"
          >打卡</button>
          
        </div>
        
        <div class="finished-task" @click="naviToBg">
          <div>
            <div class="word">已读</div>
            <div class="num">2/30</div>
          </div>
        </div>
        <div class="notes-num">
          <div>
            <div class="word">笔记</div>
            <div class="num">35</div>
          </div>
        </div>
      </div>
      <div class="chart">
        <div class="line">
          
        </div>
        <div class="pie">
         
        </div>
        <div class='bar'>

        </div>
      </div>

      <div class="daily-say" v-loading="loading" >
        <div class="daily-each" v-for='(item, index) in notes' :key='index'>
          <div class="date-today">{{item.date}}</div>
          <div class="daily-note">{{ item.content }}</div>
          <div class="daily-book">-{{item.book}}</div>
        </div>
      </div>

      

    <div class="booklist">
      <div class="read-btn" @click="shifCmp">
        <div>{{buttonText}}</div>
      </div>
      <!-- <UnreadList /> -->
      <transition name="slide" mode="out-in">
        <component :is="selectedCmp"></component>
      </transition>
    </div>

    <Modal :show="showModal" @modalReset='showModal=$event'>
      <div class='my-modal'>
           <div class='Modal-header'>
               <h5>今日阅读</h5>
           </div>
           <div class='Modal-body'>
             <div class="block mt-2">
                <el-date-picker v-model="noteForm.date" type="date" placeholder="选择日期"></el-date-picker>
              </div>
              <el-input
                class="mt-4"
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="noteForm.content"
              ></el-input>

              <el-select class="mt-4" v-model="noteForm.book" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
           </div>
           <div class="modal-footer">
              <el-button plain @click="ModalHide">取消</el-button>
              <el-button type="success" plain @click="submitDailyNote">提交</el-button>
            </div>
      </div>
    </Modal>

    </div>
    </main>
    
  </div>
</template>

<script>
import {LineCart, barCart, pieCart} from "./charts.js";

import ReadList from "./Cmp/ReadList.vue";
import UnreadList from "./Cmp/UnreadList.vue";
import dailyNote from "./Cmp/dailyNote.vue";
import Modal from '../../UI/Modal.vue'
const axios = require("axios");


export default {
  components: {
    ReadList: ReadList,
    UnreadList: UnreadList,
    dailyNote,
    Modal
  },
  data: function() {
    return {
      selectedCmp: "ReadList",
      showModal: false,
      buttonText: "已读",
      addNote: true,
      name: "",
      readingBooks: '',
      notes: [],
      loading: true,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      options: [
        
      ],
      noteForm:{
        date: '',
        content: '',
        book:''

      },
    };
  },
  methods: {
    shifCmp() {
      if (this.selectedCmp == "ReadList") {
        this.selectedCmp = "UnreadList";
        this.buttonText = "未读";
      } else {
        this.selectedCmp = "ReadList";
        this.buttonText = "已读";
      }
    },
    naviToBg(){
      this.$router.push('/reading-bg').catch(err => {})
    },
    ModalShow(){
      this.showModal=true
    },
    ModalHide(){
      this.showModal=false
    },
    submitDailyNote(){
      const axios = require("axios");
      let formData=this.noteForm
      let myDate = new Date(formData.date)
      formData.date=(`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`)
      console.log(formData)
      axios.post('http://hit-the-road.cc/api/dailyNote', formData)
      .then(res=>{
        console.log(res.data)
        this.showModal=false,
        this.noteForm={
        date: '',
        content: '',
        book:''

      }
      })
      .catch(error => {
        this.$message.error(error);
      });
    }

  },
  created(){
     axios
      .get("http://hit-the-road.cc/api/readingList")
      .then(res => {
        this.readingList = res.data;
      })
      .catch(error => {
        this.$message.error(error);
      });
  },
  mounted(){
    LineCart()
    barCart()
    pieCart()
    axios
      .get("http://hit-the-road.cc/api/readingList/current-reading")
      .then(res => {
        this.readingBooks= res.data;
        this.options=this.readingBooks.map((item,index)=>{index
        return {
          value: item.name,
          label: item.name
        }
    })
      })
      .catch(error => {
        this.$message.error(error);
      });
    axios
      .get("http://hit-the-road.cc/api/dailyNote")
      .then(res => {
        this.notes= res.data;
        this.loading=false
      })
      .catch(error => {
        this.$message.error(error);
      });
    

  }
};
</script>

<style scoped>
@import "./Reading.css";


.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 1s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.3s ease-in forwards;
  opacity: 0;
  transition: opacity 0.3s;
}
/* @keyframes slide-in {
      from {
          transform: translateX(100px);
      }
      to {
          transform: translateX(0);
      }
  }
  @keyframes slide-out {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(100px);
      }
  } */

</style>

<style >
.my-modal{
  
  padding: 2rem;
  
}

.modal-footer{
  border-top: none;
}
</style>

