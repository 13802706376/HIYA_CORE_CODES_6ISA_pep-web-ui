<template>
  <div class="role-manager-content app-container">
    <h3 class="header-font-style">角色管理</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="角色人员管理" name="rolePersonalManager">
        <role-personal-manager></role-personal-manager>
      </el-tab-pane>
      <el-tab-pane label="人员角色管理" name="personalRoleManager">
        <personal-role-manager></personal-role-manager>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import RolePersonalManager from './components/RolePersonalManager'
import PersonalRoleManager from './components/PersonalRoleManager'
export default {
  components:{
    RolePersonalManager,
    PersonalRoleManager
  },
  data() {
    return {
      activeName:'rolePersonalManager',
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

