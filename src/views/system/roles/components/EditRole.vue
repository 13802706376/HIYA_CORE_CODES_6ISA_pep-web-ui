<template>
  <div class="dialog-add-role">
    <el-dialog title="编辑角色" top="6vh" width="35%" :visible.sync="dialogFormVisible">
      <el-form ref="updateForm" :model="addRoleForm" label-position="left" label-width="180px" style="width: 450px; margin-left:50px;">
        <h3 class="header-font-style">角色信息</h3>
        <el-form-item label="角色名称：">
          <el-input style="width:220px;" size="small" />
        </el-form-item>
        <el-form-item label="角色说明（选填）：">
          <el-input style="width:220px;" size="small" />
        </el-form-item>

        <h3 class="header-font-style">配置菜单查看/修改权限</h3>
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

        <h3 class="header-font-style">数据权限配置<label>Tip：指定菜单的数据权限优先级高于菜单通用数据权限</label></h3>

        <el-form-item label="菜单通用数据权限配置：">
          <el-radio-group v-model="memuDatasConfig">
            <el-col><el-radio :label="1">仅个人数据</el-radio></el-col>
            <el-col><el-radio :label="2">所在部门及下级部门数据</el-radio></el-col>
            <el-col><el-radio :label="3">所在分公司数据</el-radio></el-col>
            <el-col><el-radio :label="4">所有部门数据</el-radio></el-col>
            <el-col><el-radio :label="5">指定部门/人数据</el-radio></el-col>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="指定菜单数据权限配置：">
          <el-button type="primary" @click="addConfig" size="small" plain>新增</el-button>
        </el-form-item>
      </el-form>

      <el-table
        :data="tableData"
        style="width: 100%;margin-top:10px;"
        border
        :cell-style="{textAlign:'center',borderColor:'#e9e9e9'}"
        :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9',textAlign:'center'}"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column prop="name" label="指定菜单层级"></el-table-column>
        <el-table-column prop="name" label="数据权限"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry('updateForm')">确定</el-button>
      </div>
    </el-dialog>

    <menu-role-config ref="menuConfigRef"></menu-role-config>
  </div>
</template>

<script>
import MenuRoleConfig from './MenuRoleConfig'
export default {
  components:{MenuRoleConfig},
  data() {
    return {
      tableData:[
        {
          name:'1'
        }
      ],
      dialogFormVisible:false,
      addRoleForm:{

      },
      memuDatasConfig:5,
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
    addConfig(){
      this.$refs.menuConfigRef.isShow(true)
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },
  watch: {
    filterMenus(val) {
      this.$refs.menusTree.filter(val);
    }
  },
};
</script>
<style lang="scss">
  .dialog-add-role{
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


