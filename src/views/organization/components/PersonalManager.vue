<template>
  <div class="personal-manager">
    <section class="left-content">
      <p class="search-content"><el-input v-model="filterMenus" placeholder="请输入内容" suffix-icon="el-icon-search" class="width-search" size="small" /></p>
      <el-tree ref="menusTree" 
        :data="data" 
        default-expand-all
        :filter-node-method="filterNode" 
        style="background:#f2f2f2;"
        @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>
                <!-- <i :class="node.icon"></i> -->
                <img v-if="node.icon === 'top-tree'" class="folder-open" src="../../../assets/images/icon/top-tree.png" />
                <img v-if="node.icon === 'folder'" class="folder-open" src="../../../assets/images/icon/folder.png" />
                &nbsp;
                {{ node.label }}
            </span>              
        </span>
      </el-tree>
    </section>
    <section class="right-content">
      <header>
        <label class="header-font">营销中心</label>
        <el-button size="small">编辑</el-button>
      </header>
      <section class="content">
        <span class="parent">广州云移信息科技有限公司 </span>
        <span class="child">> 产品部</span>
      </section>
      <header>
        <img src="../../../assets/images/icon/top-tree.png">
        <label class="header-font">下级部门</label>
      </header>
      <section class="child-depart-content">
        <div class="operate-content">
          <el-button size="small">添加子部门</el-button>
          <el-button size="small">调整顺序</el-button>
        </div>
        <ul class="depart-list">
          <li>
            <span class="left">直销部（2人）</span>
            <i class="el-icon-arrow-right"></i>
          </li>
          <li>
            <span class="left">直销部（2人）</span>
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </section>
      <header class="margin-top-15">
        <img src="../../../assets/images/icon/depart-per.png">
        <label class="header-font">部门人员</label>
      </header>
      <section class="child-depart-content">
        <div class="operate-content">
          <el-button type="primary" size="small" plain>添加成员</el-button>
          <el-button size="small">调整部门</el-button>
          <el-button size="small">调整顺序</el-button>
          <el-button type="danger" size="small" plain>批量删除</el-button>
        </div>

        <el-table
          :data="tableData"
          style="width: 100%;margin-top:10px;"
          border
          :cell-style="{textAlign:'center',borderColor:'#e9e9e9'}"
          :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9',textAlign:'center'}"
          :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column type="selection" width="80"></el-table-column>
          <el-table-column prop="name" label="工号"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="name" label="岗位"></el-table-column>
          <el-table-column prop="name" label="手机号"></el-table-column>
          <el-table-column prop="name" label="邮箱"></el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small">查看员工档案</el-button>
              <el-button type="text" size="small">重置密码</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
    </section>
  </div>
</template>

<script>
import Tree from '@/assets/mixin/Tree'
export default {
  components:{},
  mixins:[Tree], 
  data() {
    return {
      tableData:[
        {
          name:'1'
        },
        {
          name:'1'
        }
      ],
      filterMenus:'',
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
          label: '二-级 1-1',
          icon:'folder',
          children: [{
            label: '三级 1-1-1'
          }]
        },{
          label: '二-级 1-1',
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
    handleNodeClick(data,node,el) {
      console.log(data,node,el)
    }
  },
  watch: {
    filterMenus(val) {
      this.$refs.menusTree.filter(val);
    }
  },
};
</script>
<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';
  .personal-manager{
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
      margin-left:30px;
      padding-top:10px;
      float: left;
      width:calc(100% - 330px);
      height:700px;
      header{
        .header-font{
          font-size: 18px;
          color:#666;
          font-weight: normal;
          vertical-align: middle;
        }
        .el-button{
          margin-left: 10px;
        }
        img{
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
      }
      .content{
        padding:20px 15px 20px 15px;
        .parent{
          color:$mainColor;
        }
        .child{
          color:#868686;
        }
      }
      .child-depart-content{
        .operate-content{
          background: #f2f2f2;
          height: 52px;
          width: 100%;
          line-height: 52px;
          padding-left:20px;
          margin-top:10px;
        }
        .depart-list{
          margin-top:10px;
          li{
            cursor: pointer;
            height: 38px;
            border-bottom: 1px solid #ccc;
            display: flex;
            padding:0 30px;
            justify-content: space-between;
            align-items: center;
            .left{
              color:#666;
              font-size: 14px;
            }
            i{
              font-size: 14px;
            }
          }
        }
      }
    }
    .search-content{
      padding-left:10px;
      .width-search{
        width:80%;
      }
    }
  }
</style>


