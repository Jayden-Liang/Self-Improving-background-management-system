<template>
  <div class="bg-management">
    <div class="bg-info my-banner">
      <div class="text-white p-3">想看的书</div>
      <el-button class="myAddbutton" size="mini" type="warning" @click="Form1show">添加</el-button>
    </div>
    <div>
      <el-table :data="tableData1" style="width: 100%">
        <el-table-column label="封面" width="200">
          <template slot-scope="scope">
            <span style="margin-left: 10px">
              <img class="el-img" :src="scope.row.imgUrl" alt />
            </span>
          </template>
        </el-table-column>
        <el-table-column label="书名" width="300">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p> 标签: <span> <el-tag class="mytag" size="mini" type="info" v-for="(item, index) in scope.row.tags" :key="index"  >{{item}}</el-tag>   </span>
              </p>
              <p> 作者:
                <span style="margin-left: 10px">{{ scope.row.author }}</span>
              </p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" class="my-operation">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">标记</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 20px;"
        :page-size="5"
        background
        layout="prev, pager, next"
        :total="pageLength1"
        @current-change="handleCurrentChange1($event,2)"
      ></el-pagination>
    </div>
    <div class="bg-success mt-4 my-banner">
      <div class="text-white p-3">在看的书</div>
      <el-button
        class="myAddbutton"
        size="mini"
        type="warning"
        @click="Form2show"
      >添加</el-button>
    </div>
    <el-table :data="tableData2" style="width: 100%">
      <el-table-column label="封面" width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <img class="el-img" :src="scope.row.imgUrl" alt />
          </span>
        </template>
      </el-table-column>
      <el-table-column label="书名" width="300">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>标签:<span><el-tag class="mytag" size="mini" type="info" v-for="(item, index) in scope.row.tags" :key="index">{{item}}</el-tag></span>
            </p>
            <p>
              作者:
              <span style="margin-left: 10px">{{ scope.row.author }}</span>
            </p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="操作" class="my-operation">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">标记</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :hide-on-single-page="pageLength2 <=5"
      style="margin-top: 20px;"
      :page-size="5"
      background
      layout="prev, pager, next"
      :total="pageLength2"
      @current-change="handleCurrentChange($event,2)"
    ></el-pagination>










    <!-- modal  form1-->
    <transition 
        appear
        enter-class=''
        enter-active-class='animated bounceInLeft'
        leave-class=''
        leave-active-class='animated bounceOutRight'
     >
      <div class="wish-list-add" v-if="showForm1">
        <i @click='cancelForm1' class="el-icon-circle-close"></i>
        <form class='form1'>
          <div class="form-group row">
            <label for="input1" class="col-sm-2 col-form-label">书名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form1.name" id="input1" />
            </div>
          </div>
          <div class="form-group row">
            <label for="input2" class="col-sm-2 col-form-label">作者</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form1.author" id="input2" />
            </div>
          </div>

          <div class="form-group row">
            <label for="input3" class="col-sm-2 col-form-label">简介</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="input3" v-model="form1.introduction" required></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label for="input4" class="col-sm-2 col-form-label">图片地址</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form1.imgUrl" id="input4" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">标签</label>
            <div class="col-sm-10">
              <div>
                <input type="text" v-model="form1.tags[0]" class="form-control tag-add" />
                <el-button
                  type="primary"
                  @click="tagAdd"
                  class="tag-add-button"
                  icon="el-icon-plus"
                  circle
                ></el-button>
                <div v-for="(item, index) in form1Tag-1" :key="index">
                  <input type="text" v-model="form1.tags[index+1]" class="form-control tag-add" />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button @click.prevent="submitForm1" class="btn btn-primary">提交</button>
            </div>
          </div>
        </form>
      </div>
    </transition>
      <!-- modal  form2-->
      <transition 
        appear
        enter-class=''
        enter-active-class='animated bounceInLeft'
        leave-class=''
        leave-active-class='animated bounceOutRight'
     >
      <div class="wish-list-add" v-if="showForm2">
        <i @click='cancelForm2' class="el-icon-circle-close"></i>
        <form class='form1'>
          <div class="form-group row">
            <label for="input1" class="col-sm-2 col-form-label">书名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form2.name" id="input1" />
            </div>
          </div>
          <div class="form-group row">
            <label for="input2" class="col-sm-2 col-form-label">作者</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form2.author" id="input2" />
            </div>
          </div>

          <div class="form-group row">
            <label for="input3" class="col-sm-2 col-form-label">简介</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="input3" v-model="form2.introduction" required></textarea>
            </div>
          </div>

          <div class="form-group row">
            <label for="input4" class="col-sm-2 col-form-label">图片地址</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="form2.imgUrl" id="input4" />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-sm-2 col-form-label">标签</label>
            <div class="col-sm-10">
              <div>
                <input type="text" v-model="form2.tags[0]" class="form-control tag-add" />
                <el-button
                  type="primary"
                  @click="tagAdd"
                  class="tag-add-button"
                  icon="el-icon-plus"
                  circle
                ></el-button>
                <div v-for="(item, index) in form2Tag-1" :key="index">
                  <input type="text" v-model="form2.tags[index+1]" class="form-control tag-add" />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button @click.prevent="submitForm1" class="btn btn-primary">提交</button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>


<script>
import { wishBooks } from "../../../assets/data/books.js";
import { readingBooks } from "../../../assets/data/books.js";



export default {
  data: function(){
    return {
      mywishBooks: "",
      mycurrentReading: "",
      tableData1: [],
      tableData2: [],
      pageLength1: 0,
      pageLength2: 0,
      showForm1: false,
      showForm2: false,
      form1Tag: 1,
      form2Tag: 1,
      form1: {
        name: "",
        imgUrl: "",
        tags: [],
        author: "",
        introduction: ""
      },
      form2: {
        name: "",
        imgUrl: "",
        tags: [],
        author: "",
        introduction: ""
      }
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange1(index) {
      this.tableData1 = this.mywishBooks.slice(
        (index - 1) * 5,
        (index - 1) * 5 + 5
      );
    },
    handleCurrentChange2(index) {
      this.tableData2 = this.mycurrentReading.slice(
        (index - 1) * 5,
        (index - 1) * 5 + 5
      );
    },
    tagAdd() {
      this.form1Tag += 1;
    },
    Form1show() {
      this.showForm1=true
    },
    Form2show() {
      this.showForm2=true
    },
    cancelForm1(){
      console.log('cancel ')
      this.showForm1=false
    },
    cancelForm2(){
      this.showForm2=false
    },
    submitForm1() {
      const axios = require("axios");
      axios
      .post("http://hit-the-road.cc/api/readingList", this.form1)
      .then(res => {
        console.log(res)
  
      })
      .catch(error => {
        this.$message.error(error);
      });
    },
    tagChange() {
      console.log("changed");
    }
  },
  computed: {},
  mounted() {
    const axios = require("axios");
    axios
      .get("http://hit-the-road.cc/api/readingList")
      .then(res => {
        this.mywishBooks = res.data;
        this.pageLength1 = res.data.length;
        if (res.data.length>5){
          this.tableData1=res.data.slice(0,5)
        }else{
           this.tableData1=res.data
        }
        console.log(res.data)
      })
      .catch(error => {
        this.$message.error(error);
      });

    //   this.mycurrentReading = readingBooks();
    // console.log(this.mywishBooks)
    // this.tableData1 =this.mywishBooks.slice(0, 5);
    // this.tableData2 = this.mycurrentReading.slice(0, 5);
    // this.pageLength1 = books.length;
    // this.pageLength2 = this.mycurrentReading.length;
  }
  
    // let books = wishBooks();
    
    
};
</script>

<style scoped>
.bg-management {
  max-width: 900px;
  margin: auto;
  background: white;
  height: 105vh;
}

.el-img {
  width: 50px;
  height: 80px;
}

.mytag {
  margin-left: 10px;
}

.my-banner {
  position: relative;
}
.myAddbutton {
  position: absolute;
  top: 0.9rem;
  right: 2rem;
}

.wish-list-add {
  z-index: 100;
  width: 500px;
  padding: 1.5rem;
  position: absolute;
  background: white;
  box-shadow: 1px 1px 10px #eeeeee;
  top: 300px;
  
}

.form1{
  margin-top: 3rem;
}
.wish-list-add {
  font-size: 0.7rem;
  /* text-align: center; */
}

.tag-add {
  display: inline-block;
  width: 85%;
}
.tag-add-button {
  margin-left: 10px;
  font-size: 6px;
}

.wish-list-add .el-icon-circle-close{
  position: absolute;
  font-size: 2rem;
  right: 10px;
  top: 10px;
  color:#800080;
  cursor: pointer;
}
.wish-list-add .el-icon-circle-close:hover{
  color:#ff00ff;
}
</style>