<template>
  <div class="dialog-choose-menu">
    <el-dialog title="选择菜单" width="25%" v-el-drag-dialog :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" label-position="left" label-width="180px" style="width: 350px; margin-left:50px;">
        <el-input v-model="filterMenus" placeholder="请输入内容" style="width:350px;" suffix-icon="el-icon-search" class="width-search" size="small" />
        <el-tree
          :data="menus"
          default-expand-all
          :filter-node-method="filterNode"
          node-key="id"
          ref="menusTree"
          highlight-current
          style="height:400px;overflow:auto;"
          :render-content="renderContent"
          :props="defaultProps">
        </el-tree>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entrySubmit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/assets/directive/el-dragDialog'
import {getMenus} from '@/api/system'
import Tree from '@/assets/mixin/Tree'

export default {
  directives: { elDragDialog},
  mixins:[Tree], 
  data() {
    return {
      dialogFormVisible:false,
      filterMenus:'',
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      menus:[]
    };
  },
  mounted(){

  },
  methods: {
    isShow(dialogFormVisible,id){
        this.dialogFormVisible = dialogFormVisible
        getMenus().then(res => {
            const info = res.data
            if(info.success){
                this.menus = info.data

                this.$nextTick(() => {
                    this.$refs.menusTree.setCurrentKey(id);
                });
            }
        })
    },
    entrySubmit(){
        const menu = this.$refs.menusTree.getCurrentNode()
        
        this.dialogFormVisible = false
        this.$emit('input', menu)
    },
    renderContent(h, { node, data, store }){
      let className = '';
      if(node.data.children && node.data.children.length){
        className = 'fa fa-folder-open';
      }else{
        className = 'fa fa-file';
      }

      return (
        <span>
          <i class={className}></i>
          <span>{node.label}</span>
        </span>
      );
    }
  },
  watch: {
    filterMenus(val) {
      this.$refs.menusTree.filter(val);
    }
  },
};
</script>
<style rel="stylesheet/scss" lang="scss">
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

    .el-tree-node.is-current > .el-tree-node__content {
        background: #c9c9c9;
    }

    .el-tree-node__content > .el-tree-node__expand-icon{
        font-size: 20px;
        color: #8a8a8a;
    }

    .el-tree-node__content>.el-tree-node__expand-icon.is-leaf{
        color: transparent;
        cursor: default;
    }

    .el-dialog{
      margin-top:15vh !important;
    }

    .el-radio-group{
      margin-top:12px;
      .el-radio{
        margin-left: 0px;
        margin-bottom: 15px;
      }
    }

    .fa.fa-folder-open,.fa.fa-file{
      color:#409EFF;
    }

    .width-search{
      width:250px;
      margin-bottom: 10px;
    }
  }
</style>


