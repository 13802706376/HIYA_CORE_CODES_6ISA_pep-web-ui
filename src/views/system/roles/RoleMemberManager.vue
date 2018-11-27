<template>
  <div class="role-member-manager app-container">
    <section class="header-content">
      <router-link to="/system/role">
        <el-button class="go-back" size="medium"><i class="el-icon-arrow-left"></i>返回</el-button>
      </router-link>
      <h3 class="header-font-style">
        <label>角色成员管理</label> 
        <label class="font-style">【角色名称】</label> 
      </h3>
      <el-button class="config-role" type="primary" size="medium">分配角色成员</el-button>
    </section>

    <el-form :inline="true">
      <el-form-item label="工号：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="姓名：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="部门：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="岗位：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small">搜索</el-button>
        <el-button size="small">清除</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px;"
      border
      :cell-style="{textAlign:'center',borderColor:'#e9e9e9'}"
      :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9',textAlign:'center'}"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="工号"></el-table-column>
      <el-table-column prop="name" label="部门"></el-table-column>
      <el-table-column prop="name" label="岗位"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[
        {
          name:'1'
        }
      ],
    };
  },
  mounted(){

  },
  methods: {
   
  }
};
</script>
<style lang="scss" scoped>
  .role-member-manager{
    .header-content{
      display: flex;
      justify-content:space-between;
      height:40px;
      margin-bottom: 20px;
      h3{
        display: flex;
        flex-direction: row;
        .font-style{
          font-size: 16px;
          font-weight: bold;
          margin-top: 3px;
        }
      }
    }
  }
</style>


