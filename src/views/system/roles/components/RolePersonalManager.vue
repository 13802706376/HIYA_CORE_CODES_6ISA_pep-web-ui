<template>
  <div class="role-personal-manager">
    <section class="operate-content">
      <el-button type="primary" size="medium" @click="addRole">新增角色</el-button>
    </section>

    <el-form :inline="true">
      <el-form-item label="角色名称：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px;"
      border
      :cell-style="{textAlign:'center',borderColor:'#e9e9e9'}"
      :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9',textAlign:'center'}"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="name" label="角色说明"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <router-link to="/system/roleMemManger">
            <el-button type="text" size="small">角色成员管理</el-button>
          </router-link>
          <el-button type="text" size="small">删除角色</el-button>
          <el-button type="text" size="small" @click="editRole">编辑角色</el-button>
        </template>
      </el-table-column>
    </el-table>

    <add-role ref="addRoleRef"></add-role>
    <edit-role ref="editRoleRef"></edit-role>
  </div>
</template>

<script>
import AddRole from './AddRole'
import EditRole from './EditRole'
export default {
  components:{
    AddRole,
    EditRole
  },
  data() {
    return {
      tableData:[
        {
          name:'1'
        }
      ],
      isShowAddRole:false,
    };
  },
  mounted(){

  },
  methods: {
   addRole(){
     this.$refs.addRoleRef.isShow(true)
   },
   editRole(){
     this.$refs.editRoleRef.isShow(true)
   }
  }
};
</script>
<style lang="scss" scoped>
  .role-personal-manager{
    .operate-content{
      overflow: hidden;
      margin-bottom: 15px;
      .el-button{
        float: right;
      }
    }
  }
</style>


