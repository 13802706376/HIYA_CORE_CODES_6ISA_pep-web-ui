<template>
  <div class="station-manager">
    <section class="operate-content">
      <el-button type="primary" size="medium" @click="addStation">添加岗位</el-button>
    </section>

    <el-form :inline="true">
      <el-form-item label="岗位名称：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="岗位分类：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="适用部门：">
        <el-input size="small"></el-input>
      </el-form-item>

      <el-form-item label="是否已配置面试题模板：">
        <el-select size="small" v-model="value">
          <el-option value="1" label="是"></el-option>
          <el-option value="2" label="否"></el-option>
        </el-select>
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
      :header-cell-style="{color:'#555',background:'#f0f0f0',borderColor:'#e9e9e9',textAlign:'center'}"
      :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column prop="name" label="岗位名称"></el-table-column>
      <el-table-column prop="name" label="岗位分类"></el-table-column>
      <el-table-column prop="name" label="适用部门"></el-table-column>
      <el-table-column prop="name" label="是否已配置面试题模板"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑岗位</el-button>
          <el-button type="text" size="small">删除岗位</el-button>
          <el-button type="text" size="small">配置面试题模板</el-button>
        </template>
      </el-table-column>
    </el-table>

    <add-station ref="addStationRef"></add-station>
  </div>
</template>

<script>
import AddStation from './AddStation'
export default {
  components:{AddStation},
  data() {
    return {
      tableData:[
        {
          name:'1'
        }
      ],
      value:''
    };
  },
  mounted(){

  },
  methods: {
   addStation(){
     this.$refs.addStationRef.isShow(true)
   }
  }
};
</script>
<style lang="scss" scoped>
  .station-manager{
    .operate-content{
      overflow: hidden;
      margin-bottom: 15px;
      .el-button{
        float: right;
      }
    }
  }
</style>


