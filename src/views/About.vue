<template>
  <div class="about">
    <el-row type="flex" justify="center">
      <el-col :span="3" :offset="1">
        <el-input placeholder="请输入姓名" v-model="pageArray.uName" clearable></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-input placeholder="请输入地址" v-model="pageArray.address" clearable></el-input>
      </el-col>
      <el-col :span="6" :offset="4">
        <el-button type="primary" round @click="searchList">搜索</el-button>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-table :data="userData" style="width: 100%" max-height="500">
          <el-table-column fixed prop="uId" label="编号" width="150"></el-table-column>
          <el-table-column prop="uName" label="姓名" width="120"></el-table-column>
          <el-table-column label="头像" width="120">
            <template slot-scope="scope">
              <img
                v-if="scope.row.picture"
                :src="'http://localhost:4000/upload/'+scope.row.picture"
                width="50"
                height="50"
              />
            </template>
          </el-table-column>
          <el-table-column prop="uAge" label="年龄" width="120"></el-table-column>
          <el-table-column prop="uSex" label="性别" width="120"></el-table-column>
          <el-table-column prop="like" label="爱好" width="300"></el-table-column>
          <el-table-column prop="address" label="地址" width="120"></el-table-column>
          <el-table-column prop="remake" label="备注" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-pagination
      :current-page="pageArray.pageindex"
      @current-change="currentChange"
      @size-change="sizeChange	"
      :page-sizes="pageArray.pageSizes"
      :page-size="pageArray.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageArray.total"
    ></el-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync, Watch } from "vue-property-decorator";
@Component
export default class About extends Vue {
  @Prop(String) readonly address!: string;
  @Prop(Number) readonly uAge: number | undefined;
  // 同时使它像在父组件中添加.sync修饰符一样简单。
  @PropSync("remake", { type: String }) syncRemake!: string;

  userData: Array<object> = [];
  pageArray: object = {
    pageSizes: [10, 20, 30, 40, 50],
    pagesize: 10,
    pageindex: 1,
    total: 0,
    uName: "",
    address: ""
  };
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  }
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }

  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  }
  @Watch("name", { immediate: true, deep: true })
  private onChangeName(val: string, oldVal: string) {}
  created() {
    this.getUserInforList();
    this.getListCount();
  }
  getListCount() {
    this.$https.get("/api/getListCount",{params:this.pageArray}).then(result => {
      if (result.code === 1) {
        this.pageArray.total = result.data.count;
      }
    });
  }
  // 获取用户信息
  getUserInforList() {
    this.$https.get("/api", { params: this.pageArray }).then(result => {
      if (result.code === 1) {
        this.userData = result.data;
      }
    });
  }
  // 删除用户信息
  deleteRow(item) {
    this.$https.get("/api/removeUserinfor?uId=" + item.row.uId).then(result => {
      if (result.code === 1) {
        this.getUserInforList();
        this.$message({
          message: result.message,
          type: "success"
        });
      } else {
        this.$message({
          message: result.message,
          type: "warning"
        });
      }
    });
  }
  sizeChange(pagesize) {
    this.pageArray.pagesize = pagesize;
    this.getUserInforList();
  }
  currentChange(pageindex) {
    this.pageArray.pageindex = pageindex;
    this.getUserInforList();
  }
  searchList() {
    this.pageArray.pageindex = 1;
    this.getListCount();
    this.getUserInforList();
  }
}
</script>
<style lang="less" scoped>
</style>
