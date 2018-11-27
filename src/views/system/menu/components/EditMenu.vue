<template>
  <div class="dialog-add-menu">
    <el-dialog title="编辑菜单" width="35%" :visible.sync="dialogFormVisible">
      <el-form ref="menuForm" :rules="rules" :model="menus" label-position="right" label-width="120px" style="width: 450px; margin-left:50px;">
        <el-form-item label="上级菜单：" class="set-pointer" prop="parent.name">
          <el-input style="width:260px;cursor:pointer;" :disabled="disabled" :value="menus.parent.name" @click.native="chooseMenu" size="small" readonly/>
        </el-form-item>

        <el-form-item label="菜单类型：" prop="type">
          <el-radio-group v-model="menus.type">
            <el-radio label="catalogue">目录</el-radio>
            <el-radio label="menu">菜单</el-radio>
            <el-radio label="button">按钮</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="菜单名称：" prop="name">
          <el-input style="width:260px;" v-model="menus.name" size="small" />
        </el-form-item>

        <el-form-item label="请求地址：" v-show="menus.type === 'menu' || menus.type === ''" prop="href"> 
          <el-input style="width:260px;" v-model="menus.href" size="small" />
        </el-form-item>

        <el-form-item label="权限标识：" v-show="menus.type !== 'catalogue'" prop="permission">
          <el-input style="width:260px;" v-model="menus.permission" size="small" />
        </el-form-item>

        <el-form-item label="显示排序：" prop="sort">
          <el-input-number :min="1" style="width:260px;" v-model="menus.sort" size="small" />
        </el-form-item>

        <el-form-item label="图标：" class="set-pointer" v-show="menus.type === 'catalogue' || menus.type === ''" prop="icon">
          <el-input style="width:260px;" v-model="menus.icon" @click.native="chooseIcon" size="small" readonly/>
        </el-form-item>

        <el-form-item label="菜单状态：" prop="isShow">
          <el-radio-group v-model="menus.isShow">
            <el-radio label="1">显示</el-radio>
            <el-radio label="0">隐藏</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="entry('menuForm')">确定</el-button>
      </div>
    </el-dialog>

    <choose-menu v-model="menus.parent" ref="chooseMenuRef"></choose-menu>
    <choose-icon v-model="menus.icon" ref="chooseIconRef"></choose-icon>
  </div>
</template>

<script>
import ChooseMenu from './ChooseMenu'
import ChooseIcon from '@/components/ChooseIcon/index'
import {updateMenu,getMenu} from '@/api/system'

export default {
  components:{
    ChooseMenu,
    ChooseIcon
  },
  data() {
    return {
      dialogFormVisible:false,
      disabled:false,
      menus:{
        id:'',
        parentIds:'',
        type:'',
        name:'',
        sort:1,
        parent:{},
        href:'',
        permission:'',
        icon:'',
        isShow:'1',
      },
      rules: {
        type: [
          { trigger: 'change',required: true ,message:"请选择菜单类型"}
        ],
        name: [
          { trigger: 'blur',required: true ,message:"请输入菜单名称"}
        ],
        sort: [
          { trigger: 'blur',required: true ,message:"请输入显示排序"}
        ]
      },
    }
  },
  mounted(){

  },
  methods: {
    isShow(dialogFormVisible,id){
      this.dialogFormVisible = dialogFormVisible
      
      this.getMenu(id)
    },
    getMenu(id){
        getMenu(id).then(res => {
            const info = res.data
            for(let key in this.menus){
                this.menus[key] = info.data[key]
            }

            if(!this.menus.parent.parentId){
                this.menus.parent.name = '无'
                this.disabled = true
            }else{
                this.disabled = false
            }
        })
    },
    chooseMenu(){
        if(!this.disabled){
            this.$refs.chooseMenuRef.isShow(true,this.menus.parent.id)
        }
    },
    chooseIcon(){
      this.$refs.chooseIconRef.isShow(true)
    },
    entry(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.menus.parent = {
            id:this.menus.parent.id,
            parentId:this.menus.parent.parentId,
            parentIds:this.menus.parent.parentIds
          }
          this.menus.sort = this.menus.sort+''

          if(this.menus.type === 'catalogue'){
              this.menus.href = ''
              this.menus.permission = ''
          }else if(this.menus.type === 'menu'){
              this.menus.icon = ''
          }else if(this.menus.type === 'button'){
              this.menus.href = ''
              this.menus.icon = ''
          }

          updateMenu(this.menus).then(res => {
              const info = res.data
              if(info.success){
                    this.$message({
                        message: '修改成功!',
                        type: 'success'
                    });

                    this.$refs[formName].resetFields()

                    this.dialogFormVisible = false

                    this.$emit('updateSuc')
              }
          })
        } else {
          return false
        }
      });
    }
  }
};
</script>
<style lang="scss">
  .dialog-add-menu{
    .set-pointer{
      .el-input__inner{
        cursor: pointer;
      }
    }
  }
</style>


