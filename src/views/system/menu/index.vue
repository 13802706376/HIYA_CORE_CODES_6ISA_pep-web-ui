<template>
  <div class="menu-manager-content app-container">
    <h3 class="header-font-style">菜单管理</h3>

    <section class="operate-content">
      <el-button type="primary" size="medium" @click="addMenu(0)">新增菜单</el-button>
    </section>

    <el-form :inline="true" ref="filterForm">
      <el-form-item label="菜单名称：">
        <el-input v-model.trim="filterForm.name" size="small"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="searchMenus">搜索</el-button>
      </el-form-item>
    </el-form>

    <tree-table :data="menus" :expandAll="true" :columns="columns" border>
      <el-table-column
          slot="operate-slot"
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editMenu(scope.row.id)">编辑</el-button>
            <el-button type="primary" size="mini" @click="addMenu(1,scope.row)">新增</el-button>
            <el-button type="danger" size="mini" @click="deleteMenu(scope.row.id)">删除</el-button>
          </template>
      </el-table-column>
    </tree-table>

    <add-menu @addSuc="getMenus" ref="addMenuRef"></add-menu>
    <edit-menu @updateSuc="getMenus" ref="editMenuRef"></edit-menu>
  </div>
</template>

<script>
import TreeTable from './components/TreeTableOrg'
import AddMenu from './components/AddMenu'
import EditMenu from './components/EditMenu'
import {getMenus,deleteMenu} from '@/api/system'
import Tree from '@/assets/mixin/Tree'

export default {
  mixins:[Tree], 
  components:{
    TreeTable,
    AddMenu,
    EditMenu
  },
  data() {
    return {
      filterForm:{
          name:''
      },
      columns: [
        {
          text: '菜单名称',
          value: 'name',
          width: 200
        },
        {
          text: '排序',
          value: 'sort'
        },
        {
          text: '请求地址',
          value: 'href'
        },
        {
          text: '类型',
          value: 'type'
        },
        {
          text: '可见',
          value: 'isShow'
        },
        {
          text: '权限标识',
          value: 'permission'
        }
      ],
      menus:[],
    };
  },
  created() {

  },
  mounted(){
      this.getMenus()
  },
  methods: {
    getMenus(){
        getMenus().then(res => {
            const info = res.data
            if(info.success){
                this.menus = info.data
            }
        })
    },
    searchMenus(){
        if(!this.filterForm.name){
            this.getMenus()
        }else{
            this.menus = this.queryTree(this.menus,this.filterForm.name) || []
        }
    },
    editMenu(id){
        this.$refs.editMenuRef.isShow(true,id)
    },
    addMenu(flag,data){
        let menu = {}
        if(flag){ 
            menu = data 
        }else{ 
            menu = {
                id:this.menus[0].id,
                parentId:this.menus[0].parentId,
                parentIds:this.menus[0].parentIds,
                name:this.menus[0].name,
            }
        }

        this.$refs.addMenuRef.isShow(true,menu)
    },
    deleteMenu(id){
      this.$confirm('是否删除该菜单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(res => {
          deleteMenu(id).then(res => {
              const info = res.data
              if(info.success){
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  });

                  this.getMenus()
              }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.menu-manager-content {
  .operate-content {
    overflow: hidden;
    margin-bottom: 15px;
    .el-button {
      float: right;
    }
  }
}
</style>


