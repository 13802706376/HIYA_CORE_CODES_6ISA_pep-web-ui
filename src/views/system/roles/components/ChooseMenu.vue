<template>
  <div class="dialog-choose-menu">
    <el-dialog title="选择菜单" width="20%" v-el-drag-dialog :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" label-position="left" label-width="180px" style="width: 250px; margin-left:50px;">
        <el-input v-model="filterMenus" placeholder="请输入内容" suffix-icon="el-icon-search" class="width-search" size="small" />
        <el-tree
          :data="menus"
          show-checkbox
          default-expand-all
          :filter-node-method="filterNode"
          node-key="id"
          ref="menusTree"
          highlight-current
          :props="defaultProps">
        </el-tree>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry('updateForm')">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/assets/directive/el-dragDialog'
export default {
  directives: { elDragDialog},
  data() {
    return {
      dialogFormVisible:false,
      filterMenus:'',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      menus: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
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
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
  },
  watch: {
    filterMenus(val) {
      this.$refs.menusTree.filter(val);
    }
  },
};
</script>
<style lang="scss">
  .dialog-choose-menu{
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


