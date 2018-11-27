<template>
  <div class="department-manager">
    <section class="operate-content">
      <el-button type="primary" size="medium" @click="addDepart" plain>添加部门</el-button>
      <el-button size="medium">删除选中部门（{{deleteAmount}}）</el-button>
    </section>

    <tree-table @update="update" :data="data" :columns="columns" :expandAll="true" border>
      <el-table-column
          slot="operate-slot"
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editDepart">编辑</el-button>
          </template>
      </el-table-column>
    </tree-table>

    <add-depart ref="addDepartRef"></add-depart>
    <edit-depart ref="editDepartRef"></edit-depart>
  </div>
</template>

<script>
import AddDepart from './AddDepart'
import EditDepart from './EditDepart'
import TreeTable from '@/components/TreeTable'
export default {
  components:{
    AddDepart,
    EditDepart,
    TreeTable
  },
  data() {
    return {
      deleteAmount:0,
      columns: [
        {
          text: '部门名称',
          value: 'event',
          width: 300
        },
        {
          text: '所属分公司',
          value: 'id'
        },
        {
          text: '成员数',
          value: 'timeLine'
        },
        {
          text: '部门负责人',
          value: 'comment'
        }
      ],
      data: {
        id: 1,
        event: '事件1',
        timeLine: 100,
        comment: '无',
        top:true,
        checked:false,
        children: [
          {
            id: 2,
            event: '事件2',
            timeLine: 10,
            checked:false,
            comment: '无'
          },
          {
            id: 3,
            event: '事件3',
            timeLine: 90,
            comment: '无',
            checked:false,
            children: [
              {
                id: 4,
                event: '事件4',
                timeLine: 5,
                checked:false,
                comment: '无'
              },
              {
                id: 5,
                event: '事件5',
                timeLine: 10,
                checked:false,
                comment: '无'
              },
              {
                id: 6,
                event: '事件6',
                timeLine: 75,
                checked:false,
                comment: '无',
                children: [
                  {
                    id: 7,
                    event: '事件7',
                    timeLine: 50,
                    comment: '无',
                    checked:false,
                    children: [
                      {
                        id: 71,
                        event: '事件71',
                        timeLine: 25,
                        checked:false,
                        comment: 'xx'
                      },
                      {
                        id: 72,
                        event: '事件72',
                        timeLine: 5,
                        checked:false,
                        comment: 'xx'
                      },
                      {
                        id: 73,
                        event: '事件73',
                        timeLine: 20,
                        checked:false,
                        comment: 'xx'
                      }
                    ]
                  },
                  {
                    id: 8,
                    event: '事件8',
                    timeLine: 25,
                    checked:false,
                    comment: '无'
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  mounted(){

  },
  methods: {
   addRole(){
     this.$refs.addRoleRef.isShow(true)
   },
   update(formatData){
     this.deleteAmount = formatData.filter(el => !el.children && el.checked).length
   },
   addDepart(){
      this.$refs.addDepartRef.isShow(true)
   },
   editDepart(){
     this.$refs.editDepartRef.isShow(true)
   }
  }
};
</script>
<style lang="scss" scoped>
.department-manager {
  .operate-content {
    overflow: hidden;
    margin-bottom: 15px;
    .el-button {
      float: right;
      &:last-child {
        margin-right: 15px;
      }
    }
  }
}
</style>




