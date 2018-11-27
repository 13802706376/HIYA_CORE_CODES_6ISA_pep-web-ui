<template>
  <div class="role-manager-content app-container">
    <h3 class="header-font-style">组织架构</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="人员管理" name="personalManager">
        <personal-manager></personal-manager>
      </el-tab-pane>
      <el-tab-pane label="部门管理" name="departmentManager">
        <department-manager></department-manager>
      </el-tab-pane>
      <el-tab-pane label="岗位管理" name="stationManager">
        <station-manager></station-manager>
      </el-tab-pane>
      <el-tab-pane label="人员编制管理" name="personalAuthorizedManager">
        <!-- <personal-authorized-manager></personal-authorized-manager> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import PersonalManager from './components/PersonalManager'
import DepartmentManager from './components/DepartmentManager'
import StationManager from './components/StationManager'
import PersonalAuthorizedManager from './components/PersonalAuthorizedManager'
export default {
  components:{
    PersonalManager,
    DepartmentManager,
    StationManager,
    PersonalAuthorizedManager
  },
  data() {
    return {
      activeName:'personalManager',
    };
  },
  created() {

  },
  mounted(){

  },
  methods: {
    handleClick(){

    }
  }
};
</script>

