<template>
  <div class="personal-authorized-manager">
    <tree-table @update="update" :data="data" :columns="columns" :expandAll="true" border>
      <el-table-column
          slot="operate-slot"
          fixed="right"
          label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editDepart">查看成员</el-button>
          </template>
      </el-table-column>
    </tree-table>
  </div>
</template>

<script>
import TreeTable from '@/components/TreeTable'
export default {
  components:{
    TreeTable
  },
  data() {
    return {
      deleteAmount:0,
      columns: [
        {
          text: '部门及岗位名称',
          value: 'event',
          width: 300
        },
        {
          text: '岗位数量',
          value: 'id'
        },
        {
          text: '全职（非实习）员工数量',
          value: 'timeLine'
        },
        {
          text: '全职（实习）员工数量',
          value: 'comment'
        },
        {
          text: '实习员工数量',
          value: 'event',
        },
        {
          text: '岗位需求-新增',
          value: 'id'
        },
        {
          text: '岗位需求-替补',
          value: 'timeLine'
        },
        {
          text: '当前编制',
          value: 'comment'
        },
        {
          text: '规划编制',
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
   update(formatData){
     this.deleteAmount = formatData.filter(el => !el.children && el.checked).length
   }
  }
};
</script>
<style lang="scss" scoped>
.personal-authorized-manager {
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






