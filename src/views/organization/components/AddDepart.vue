<template>
  <div class="dialog-add-depart">
    <el-dialog title="添加部门" width="38%" :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" :model="addRoleForm" label-position="left" label-width="180px" style="width: 560px; margin-left:50px;">
        <h3 class="header-font-style">部门信息</h3>
        <el-form-item label="部门名称：">
          <el-input style="width:320px;" size="small" />
        </el-form-item>
        <el-form-item label="上级部门：">
          <el-input style="width:320px;" size="small" />
        </el-form-item>
        <el-form-item label="所属分公司（选填）：" style="margin-bottom:0px;">
          <el-select style="width:320px;" v-model="value" placeholder="请选择">
            <el-option key="123" label="123" value="123"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <ul>
            <li>* 1. 总部的部门可不填；</li>
            <li>2. 若上级部门已选分公司，下级部门跟随上级部门，不能修改</li>
          </ul>
        </el-form-item>
        <el-form-item label="规划编制（选填）：">
          <el-input style="width:320px;" size="small" />
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

    .width-search{
      width:250px;
      margin-bottom: 10px;
    }
  }
</style>


