<template>
  <div>
    <nav class="navBar">
      <div class="cardTitle">Memory card</div>
      <ul>
        <li @click="naviTobg" class='card-data'>数据统计</li>
        <li>
          <el-button type="text" @click="dialogVisible = true">添加</el-button>
        </li>
      </ul>
    </nav>

    <el-dialog title="添加问题" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="问题">
          <el-input v-model="form.question"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input type="textarea" v-model="form.answer"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitData">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      dialogVisible: false,
      form: {
        question: "",
        answer: ""
      }
    };
  },
  methods: {
    naviTobg() {
      this.$router.push("/card-bg").catch(err => {});
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitData() {
      console.log(this.form)
      const axios = require("axios");
      axios
        .post("http://hit-the-road.cc/api/memoryCard", this.form)
        .then(res => {
          this.dialogVisible = false;
          this.$message({
            message: "添加数据成功!",
            type: "success"
          });
        });
    }
  }
};
</script>
<style scoped>
.navBar {
  background: #2ea3fd;
  width: 100%;
  height: 50px;
  display: flex;
}
.navBar div:first-child {
  flex: 2;
  text-align: center;
  /* margin-top: 30px; */
  font-size: 2rem;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
}
.navBar ul {
  flex: 1;
  margin-top: 5px;
}
.navBar ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
  color: white;
}

.card-data {
  cursor: pointer;
}
.el-button--text{
    color: white;
}
</style>