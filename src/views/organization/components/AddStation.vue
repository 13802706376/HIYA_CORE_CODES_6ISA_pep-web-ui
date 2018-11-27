<template>
  <div class="dialog-add-depart">
    <el-dialog title="添加岗位" top="6vh" width="35%" :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" :model="addRoleForm" label-position="left" label-width="150px" style="width: 520px; margin-left:50px;">
        <h3 class="header-font-style">岗位基本情况</h3>
        <el-form-item label="岗位名称：">
          <el-input style="width:250px;" size="small" />
        </el-form-item>
        <el-form-item label="岗位分类：">
          <el-radio v-model="radio" label="1">销售</el-radio>
          <el-radio v-model="radio" label="2">非销售</el-radio>
        </el-form-item>
        <el-form-item label="适用部门：">
          <el-input style="width:250px;" size="small" />
        </el-form-item>
        <el-form-item label="专业级：">
          <el-select style="width:100px;" size="small" v-model="value">
            <el-option value="1" label="是"></el-option>
            <el-option value="2" label="否"></el-option>
          </el-select>

          <el-input style="width:145px;" size="small" />
        </el-form-item>

        <el-form-item label="管级：">
          <el-input style="width:250px;" placeholder="非管级，请填“无”" size="small" />
        </el-form-item>

        <h3 class="header-font-style">工作职责</h3>
        <el-input type="textarea" placeholder="1000个字符以内" />
        <p class="hint-font">0/1000</p>

        <h3 class="header-font-style">任职要求</h3>
        <el-input type="textarea" placeholder="1000个字符以内" />
        <p class="hint-font">0/1000</p>

        <h3 class="header-font-style">职业发展通道</h3>
        <el-form-item label="专业通道：" class="el-form-seft">L1（初级）-  L2（中级）- L3（高级）- L4（资深）- L5（专家）- L6（资深专家）</el-form-item>

        <el-form-item label="专业序列福利图：">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="fa fa-image"></i>
            <div class="el-upload__text">未上传</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="专业通道：" class="el-form-seft">M1(主管）-M2（经理）-M3（高级经理）-M4（总监）-M5（高级总监）-M6（资深总监/中心总经理）-M7（VP）-M8（CEO）</el-form-item>

        <el-form-item label="管理序列福利图：">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="fa fa-image"></i>
            <div class="el-upload__text">未上传</div>
          </el-upload>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry('updateForm')">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible:false,
      addRoleForm:{

      },
      value:'',
      radio:'1',
    };
  },
  mounted(){

  },
  methods: {
    isShow(dialogFormVisible){
      this.dialogFormVisible = dialogFormVisible
    },
    entry(formName){

    }
  }
};
</script>
<style lang="scss">
  .dialog-add-depart{
      .header-font-style{
      border-left: 8px solid #f2f2f2;
      padding: 3px 3px 3px 10px;
      margin-left: -20px;
      width:500px;
      label{
        color:#aeaeb5;
        font-size: 13px;
        margin-left: 20px;
      }
    }

    .el-form-seft{
      .el-form-item__content{
        line-height: 20px;
      }
    }

    .hint-font{
      font-weight: 650;
      font-style: normal;
      font-size: 14px;
      color: #868686;
      text-align: right;
    }

    ul{
      li{
        line-height: 30px;
        font-size: 12px;
        color: #868686;
      }
    }

    .el-radio-group{
      margin-top:12px;
      .el-radio{
        margin-left: 0px;
        margin-bottom: 15px;
      }
    }

    .el-upload-dragger{
      .fa.fa-image{
        font-size: 80px;
        color: #c0c4cc;
        margin: 40px 0 16px;
        line-height: 50px;
        color:#ccc;
      }
      .el-upload__text{
        font-size: 24px;
        color:#ccc;
      }
    }

    textarea{
      width:520px;
      height:199px;
      resize:none;
    }

    .el-upload-dragger{
      background-color: #ededee;
    }

    .width-search{
      width:250px;
      margin-bottom: 10px;
    }
  }
</style>


