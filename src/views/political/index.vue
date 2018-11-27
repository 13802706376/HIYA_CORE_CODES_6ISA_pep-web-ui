<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="评分周期：">
        <el-col :span="11">
          <el-date-picker size="small" type="month" placeholder="起始月份" v-model="gradeFilter.startTime" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker size="small" type="month" placeholder="结束月份" v-model="gradeFilter.endTime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="选择员工：">
        <el-select v-model="employees" size="small" multiple placeholder="输入内容可搜索" filterable>
          <el-option
            v-for="item in employeesAll"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="选择部门：">
        <el-select v-model="employees" size="small" multiple placeholder="输入内容可搜索" filterable>
          <el-option
            v-for="item in employeesAll"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-form :inline="true" style="padding-top:0px;">
      <el-form-item label="得分范围：">
        <el-select v-model="storeScopeSelect" size="small" multiple readonly>
          <el-option
            v-for="item in storeScope"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-input size="small" placeholder="分值下限"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input size="small" placeholder="分值上限"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox size="small">只看没填</el-checkbox>
      </el-form-item>

      <el-form-item class="filter-btn-depart">
        <el-button type="primary" size="small">查询</el-button>
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

      <el-table-column label="姓名">
        <template slot-scope="scope">
          <span class="link-type">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="部门"></el-table-column>
      <el-table-column prop="name" label="岗位"></el-table-column>
      <el-table-column prop="name" label="评分周期" sortable></el-table-column>
      <el-table-column prop="name" label="政委得分" sortable></el-table-column>
      <el-table-column prop="name" label="精神状态" sortable></el-table-column>
      <el-table-column prop="name" label="思想状态" sortable></el-table-column>
      <el-table-column prop="name" label="能力状态" sortable></el-table-column>
      <el-table-column prop="name" label="执行状态" sortable></el-table-column>
      <el-table-column prop="name" label="情感状态" sortable></el-table-column>
      <el-table-column prop="name" label="评分人"></el-table-column>
      <el-table-column prop="name" label="更新时间"></el-table-column>
      <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination :current-page="listQuery.page" :page-sizes="[16]" :page-size="listQuery.limit" :total="tableData.length" background layout="total, sizes, prev, pager, next, jumper" />
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      gradeFilter: {
        startTime: "",
        endTime: ""
      },
      storeScope:[
        {
          value: 1,
          label: "全部"
        }
      ],
      storeScopeSelect:[1],
      employeesAll: [
        {
          value: "选项1",
          label: "全选"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      employees: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516"
        }
      ],
      listQuery: {
        page: 1,
        limit: 16
      },
    };
  },
  created() {},
  methods: {

  }
};
</script>

