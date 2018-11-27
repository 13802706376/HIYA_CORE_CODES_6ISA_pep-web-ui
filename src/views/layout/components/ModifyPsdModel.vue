<template>
  <el-dialog title="修改密码" width="30%" :visible.sync="dialogFormVisible">
    <p class="tip-update">温馨提示：密码长度为6~20位，必须包含1个大写字母，1个小写字母，1个数字和1个特殊字符($@!%*?&/_-^;.)</p>
    <el-form ref="updateForm" :rules="rules" :model="modifyForm" label-position="right" label-width="100px" style="width: 350px; margin-left:50px;">
      <el-form-item label="原密码：" prop="originalPsd">
        <el-input type="password" v-model="modifyForm.originalPsd" placeholder="请输入当前登录密码" />
      </el-form-item>
      <el-form-item label="新密码：" prop="newPsd">
        <el-input type="password" v-model="modifyForm.newPsd" placeholder="请输入正确的密码" />
      </el-form-item>
      <el-form-item label="确认密码：" prop="entryPsd">
        <el-input type="password" v-model="modifyForm.entryPsd" placeholder="请再次输入新密码" />
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取消</el-button>
      <el-button type="primary" @click="entry('updateForm')">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {validatUpdatePsd} from '@/utils/validate';
export default {
  data(){
    let validateOriginalPsd = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入当前登录密码'));
      }else {
        callback();
      }
    }
    let validateNewPsd = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入正确的密码'));
      }else if(value.length < 6 || value.length > 20){
        callback(new Error('密码长度为6~20位，请重新输入'));
      }else if(!validatUpdatePsd(value)){
        callback(new Error('密码必须包含1个大写字母，1个小写字母，1个数字和1个特殊字符($@!%*?&/_-^;.)'));
      }else {
        callback();
      }
    }
    let validateEntryPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.modifyForm.newPsd) {
        callback(new Error('两次输入密码不一致，请重新输入!'));
      } else {
        callback();
      }
    }
    return {
      modifyForm: {
        originalPsd: '',
        newPsd: '',
        entryPsd: ''
      },
      rules: {
        originalPsd: [
          { validator: validateOriginalPsd, trigger: 'blur',required: true }
        ],
        newPsd: [
          { validator: validateNewPsd, trigger: 'blur',required: true }
        ],
        entryPsd: [
          { validator: validateEntryPass, trigger: 'blur',required: true}
        ]
      },
      dialogFormVisible:false,
    }
  },
  components: {},
  methods: {
    isShow(dialogFormVisible){
      this.dialogFormVisible = dialogFormVisible
    },
    entry(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
  .el-dialog{
    .el-dialog__header{
      border-bottom: 1px solid #f2f2f2;
    }
    .el-dialog__body{
      padding: 12px 20px;
    }
    .el-form-item{
      margin-bottom: 33px;
    }
    .tip-update{
      margin-top:0px;
      color:#888;
    }
  }
</style>
