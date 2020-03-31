<template>
  <div class="bg-management">
      <div class='bg-info my-banner'>
          <div class=" text-white p-3">想看的书</div>
          <el-button class='myAddbutton' size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">添加</el-button>
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
              <p>标签:<span> <el-tag class='mytag' size='mini' type="info" v-for="(item, index) in scope.row.tag" :key='index'>{{item}}</el-tag></span></p>
              <p >作者: <span style="margin-left: 10px">{{ scope.row.author }}</span></p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- <el-table-column label="" width="180">
      
        </el-table-column> -->
        <el-table-column label="操作" class='my-operation'>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">标记</el-button>
            
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style='margin-top: 20px;' :page-size=5 background layout="prev, pager, next" :total='pageLength1'  @current-change="handleCurrentChange1($event,2)"></el-pagination>
    </div>
    <div class='bg-success mt-4 my-banner'>
          <div class=" text-white p-3">在看的书</div>
          <el-button class='myAddbutton' size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">添加</el-button>
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
              <p>标签:<span> <el-tag class='mytag' size='mini' type="info" v-for="(item, index) in scope.row.tag" :key='index'>{{item}}</el-tag></span></p>
              <p >作者: <span style="margin-left: 10px">{{ scope.row.author }}</span></p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="操作" class='my-operation'>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">标记</el-button>
            
          </template>
        </el-table-column>
      </el-table>
      <el-pagination :hide-on-single-page="pageLength2 <=5" style='margin-top: 20px;' :page-size=5 background layout="prev, pager, next" :total='pageLength2'  @current-change="handleCurrentChange($event,2)"></el-pagination>
  </div>
</template>


<script>
import { wishBooks } from "../../../assets/data/books.js";
import { readingBooks } from "../../../assets/data/books.js";

export default {
  data() {
    return {
      mywishBooks: "",
      mycurrentReading: "",
      tableData1: [],
      tableData2:[],
      pageLength1: 0,
      pageLength2: 0
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange1(index){
        this.tableData1=this.mywishBooks.slice((index-1)*5,(index-1)*5+5)
    },
    handleCurrentChange2(index){
        this.tableData2=this.mycurrentReading.slice((index-1)*5,(index-1)*5+5)
    }
  },
  computed:{

  },
  mounted() {
    let books = wishBooks();
    this.mywishBooks=books
    this.mycurrentReading = readingBooks();
    this.tableData1 = books.slice(0,5);
    this.tableData2 = this.mycurrentReading.slice(0,5)
    this.pageLength1 = books.length
    this.pageLength2= this.mycurrentReading.length
  }
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

.mytag{
    margin-left: 10px;
}

.my-banner{
    position: relative;
}
.myAddbutton{
    position: absolute;
    top:0.9rem;
    right: 2rem;
}


</style>