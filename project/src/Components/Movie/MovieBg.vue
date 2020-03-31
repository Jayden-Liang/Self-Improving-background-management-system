<template>
  <div class="movie-backstage">
     <navBar/>
    <div class='main'>
         <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 80%; margin: auto;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="标题" width="450"></el-table-column>
      <el-table-column prop="name" label="电影" width="150"></el-table-column>
      <el-table-column label="日期" width="400">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          
          <el-button type="text" @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button  type="text" @click='open(scope.row)' size="small">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column></el-table-column>
    </el-table>
    <div class='pagination'>
      <el-pagination @next-click='nextclick' layout="prev, pager, next" :total="20"></el-pagination>
    </div>
    </div>
    
  </div>
</template>

<script>
import { allMovies } from "../../assets/data/movie.js";
import navBar from '../Nav/Nav.vue';
export default {
  components:{
     navBar
  },
  data() {
    return {
      tableData: [],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(param){
        console.log(param)
    },
    nextclick(){
       console.log('next-click')
    },
    open(mydata) {
        this.$confirm('永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(mydata)
          const index =this.tableData.indexOf(mydata)
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    
  },
  mounted() {
    const table_data = allMovies();
    this.tableData = table_data;
  }
};
</script>


<style scoped>


.main{
   margin-left: 300px;
  
}



.pagination{
    width: 80%;
    margin: auto;
    margin-top: 2rem;
}
</style>