<template>
  <div class="personal-role-manager">
    <section class="left-content">
      <h3 class="header-font-style">组织架构</h3>
      <el-tree :data="data" style="background:#f2f2f2;" @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
                <!-- <i :class="node.icon"></i> -->
                <img v-if="node.icon === 'top-tree'" class="folder-open" src="../../../../assets/images/icon/top-tree.png" />
                <img v-if="node.icon === 'folder'" class="folder-open" src="../../../../assets/images/icon/folder.png" />
                &nbsp;
                {{ node.label }}
            </span>              
        </span>
      </el-tree>
    </section>
    <section class="right-content">
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
        <el-form-item label="已分配角色：">
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
        <el-table-column prop="name" label="已分配角色"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogFormVisible = true;">分配角色</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <el-dialog title="分配角色 【姓名】" width="35%" :visible.sync="dialogFormVisible">
      <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="选择角色：">
          <el-select v-model="storeScopeSelect" size="small" placeholder="输入内容可搜索" filterable>
            <el-option
              v-for="item in storeScope"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeScope:[
        {
          value: 1,
          label: "全部"
        }
      ],
      storeScopeSelect:[1],
      dialogFormVisible:false,
      tableData:[
        {
          name:'1'
        }
      ],
      data: [{
        label: '一级 1',
        icon:'top-tree',
        children: [{
          label: '二级 1-1',
          icon:'folder',
          children: [{
            label: '三级 1-1-1'
          }]
        },{
          label: '二级 1-1',
          icon:'folder',
          children: [{
            label: '三级 1-1-1'
          }]
        },{
          label: '二级 1-1',
          icon:'folder',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }]
    };
  },
  mounted(){

  },
  methods: {
    handleNodeClick(data,node,self) {
      // if(!data.children){
      //   console.log(data);
      // }
    }
  }
};
</script>
<style lang="scss">
  .personal-role-manager{
    width:100%;
    overflow: hidden;
    .left-content{
      float: left;
      width:300px;
      background: #f2f2f2;
      height:700px;
      .header-font-style{
        padding-left:15px;
        padding-bottom:10px;
        border-bottom: 1px solid #ccc;
      }
      .folder-open{
        width:16px;
        height: 16px;
      }
    }
    .right-content{
      margin-left:15px;
      float: left;
      width:calc(100% - 315px);
      height:700px;
    }
    .el-input{
      .el-input__inner{
        width:150px;
      }
    }
    .el-select{
      width:100%;
      .el-input{
        .el-input__inner{
          width:100%;
        }
      }
    }
  }
</style>


