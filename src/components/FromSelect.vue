<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark"></div>
        <el-form ref="form" :model="form" label-width="50px" size="mini">
          <el-form-item label="姓名">
            <el-input v-model="form.uName" aria-placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.uAge" type="number" aria-placeholder="请输入年龄"></el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.uSex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="爱好">
            <el-input type="textarea" v-model="form.like"></el-input>
          </el-form-item>
          <el-form-item label="居住地址">
            <el-input v-model="form.address" aria-placeholder="请输入地址"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="form.remake" aria-placeholder="请输入"></el-input>
          </el-form-item>
          <el-upload
            class="upload-demo"
            :action="logoUrl"
            list-type="picture"
            :on-preview="handlePreview"
            :http-request="myUpload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="cancel('form')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script long='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class FromSelect extends Vue {
  form = {
    uName: "",
    uAge: "",
    uSex: 1,
    like: "",
    address: "",
    remake: ""
  };
  logoUrl = "/api/profile";
  onSubmit() {
    const self = this;
    console.log("submit!");
    this.$https.post("/api/adduser", this.form).then(res => {
      if (res.code === 1) {
        self.$message({
          message: res.message,
          type: "success"
        });
      } else {
        self.$message({
          message: res.message,
          type: "warning"
        });
      }
    });
  }
  cancel(formName) {
    this.$refs[formName].resetFields();
  }
  myUpload(content) {
    let formData = new FormData();
    formData.append("file", content.file); // 'file[]' 代表数组 其中`file`是可变的
    this.$https
      .post(content.action, formData)
      .then(rs => {})
      .catch(err => {
        console.log(err);
      });
  }
  handlePreview(file){
    debugger
  }
}
</script>