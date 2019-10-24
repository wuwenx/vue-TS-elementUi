<template>
  <div class="about">
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-table :data="userData" style="width: 100%" max-height="500">
          <el-table-column fixed prop="uId" label="编号" width="150"></el-table-column>
          <el-table-column prop="uName" label="姓名" width="120"></el-table-column>
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

  name: string = "武文祥";
  userData: Array<object> = [];
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
  }
  // 获取用户信息
  getUserInforList() {
    this.$https.get("/api").then(result => {
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
}
</script>
<style lang="less" scoped>
</style>
