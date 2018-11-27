<template>
  <div class="menu-role-config">
    <el-dialog title="指定菜单数据权限配置" v-el-drag-dialog width="35%" :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" label-position="left" label-width="120px" style="width: 350px; margin-left:50px;">
        <el-form-item label="选择菜单：">
          <el-input style="width:220px;" placeholder="请选择菜单" @click.native="chooseMenu" size="small" readonly/>
        </el-form-item>

        <el-form-item label="数据权限配置：">
          <el-radio-group v-model="memuDatasConfig" :inline="true">
            <el-col><el-radio :label="1">仅个人数据</el-radio></el-col>
            <el-col><el-radio :label="2">所在部门及下级部门数据</el-radio></el-col>
            <el-col><el-radio :label="3">所在分公司数据</el-radio></el-col>
            <el-col><el-radio :label="4">所有部门数据</el-radio></el-col>
            <el-col><el-radio :label="5">指定部门/人数据</el-radio></el-col>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry('updateForm')">确定</el-button>
      </div>
    </el-dialog>

    <choose-menu ref="chooseMenuRef"></choose-menu>
  </div>
</template>

<script>
import elDragDialog from '@/assets/directive/el-dragDialog'
import ChooseMenu from './ChooseMenu'
export default {
  directives: { elDragDialog},
  components:{ChooseMenu},
  data() {
    return {
      dialogFormVisible:false,
      memuDatasConfig:5
    };
  },
  mounted(){

  },
  methods: {
    isShow(dialogFormVisible){
      this.dialogFormVisible = dialogFormVisible
    },
    entry(formName){

    },
    chooseMenu(){
      this.$refs.chooseMenuRef.isShow(true)
    }
  }
};
</script>
<style lang="scss">
  .menu-role-config{
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

    .el-input__inner{
      cursor: pointer;
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


