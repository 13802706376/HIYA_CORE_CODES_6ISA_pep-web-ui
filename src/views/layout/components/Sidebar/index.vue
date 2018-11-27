<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="pro-name">政经平台</div>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      mode="vertical"
      :unique-opened="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">

      <el-submenu v-for="(route,inx) in routes" :index="route.path" :key="'router'+inx">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{route.name}}</span>
        </template>
        <el-menu-item @click="goto(child)" :test="child.path" :index="child.path" v-for="(child,index) in route.children" :key="'child'+index">{{child.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  data(){
    return {
      routes:[
        {
          name:'政委工作',
          path:'/political',
          children:[
            {
              name:'政委评分',
              path:'/political/grade',
            }
          ]
        },{
          name:'系统管理',
          path:'/system',
          children:[
            {
              name:'角色管理',
              path:'/system/role',
            },{
              name:'菜单管理',
              path:'/system/menu',
            }
          ]
        },{
          name:'组织架构',
          path:'/organization',
          children:[
            {
              name:'组织架构',
              path:'/organization/structure',
            }
          ]
        }
      ]
    }
  },
  computed: {

  },
  methods:{
    goto(child){
      if(child.path){
        this.$router.push(child.path );
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .pro-name{
    width:100%;
    height: 50px;
    background-color: rgb(48, 65, 86);
    color:#fff;
    font-size: 24px;
    padding:15px;
    font-weight: 400;
  }
</style>
