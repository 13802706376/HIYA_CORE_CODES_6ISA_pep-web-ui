<template>
  <el-table 
    :data="formatData"
    :row-style="showRow" 
    v-bind="$attrs"
    :cell-style="{borderColor:'#e9e9e9'}"
    :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9'}"
    :default-sort = "{prop: 'date', order: 'descending'}">
    <el-table-column v-for="(column, index) in columns" :key="column.value" :label="column.text" :width="column.width">
      <template slot-scope="scope">
        <template v-if="index === 0">
          <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
          <template v-if="iconShow(index,scope.row) && !scope.row.top">
            <i @click="toggleExpanded(scope.$index,$event)" class="el-icon-caret-bottom"></i>
          </template>
          <template v-else>
            <i class="el-icon-caret-bottom" style="opacity:0;"></i>
          </template>
          <el-checkbox v-if="!scope.row.top" v-model="scope.row.checked" @change="changeCheckbox(scope.$index,scope.row.checked)"></el-checkbox>
        </template>
        <span class="tree-ctrl-content">
          <span v-if="iconShow(index,scope.row)" class="tree-ctrl">
            <img class="img-style" v-if="scope.row.top" src="../../assets/images/icon/top-tree.png" />
            <img class="img-style" v-else src="../../assets/images/icon/folder.png" />
          </span>
        </span>

        <!-- <slot name="operate-slot-alter"></slot> -->
      </template>
    </el-table-column>
    <slot name="operate-slot"></slot>
  </el-table>
</template>

<script>
/**
  Auth: Lei.j1ang
  Created: 2018/1/19-13:59
*/
import treeToArray from './eval'
export default {
  name: 'TreeTable',
  props: {
    /* eslint-disable */
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 格式化数据源
    formatData() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs ? Array.concat([tmp, this.expandAll], this.evalArgs) : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    showRow(row) {
      const show = (row.row.parent ? (row.row.parent._expanded && row.row.parent._show) : true)
      row.row._show = show
      return show ? 'animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;' : 'display:none;'
    },
    // 切换下级是否展开
    toggleExpanded(trIndex,event) {
      const record = this.formatData[trIndex]
      if(record.children && record.children.length > 0){
        event.currentTarget.className = record._expanded ? 'el-icon-caret-right' : 'el-icon-caret-bottom'
      }
      record._expanded = !record._expanded
    },
    changeCheckbox(trIndex){
      const record = this.formatData[trIndex]

      this.checkedRecursionChild(record,record.checked)

      if(!record.checked){
        this.checkedRecursionParent(record,record.checked)
      }else{
        this.checkedParentChoose(record,record.checked)
      }

      this.$emit('update',this.formatData)
    },
    checkedRecursionChild(formatData,checked){
      formatData.checked = checked
      const children = formatData.children
      if(children && children.length){
        children.forEach(el => this.checkedRecursionChild(el,checked))
      }
    },
    checkedRecursionParent(formatData,checked){
      formatData.checked = checked
      const parent = formatData.parent
      if(parent && typeof parent === 'object'){
        this.checkedRecursionParent(parent,checked)
      }
    },
    checkedParentChoose(record,checked){
      let parent = record.parent
      if(parent && typeof parent === 'object'){
        if(parent.children.every(el => el.checked)){//所有子节点都选择了
          parent.checked = checked
          this.checkedParentChoose(parent,checked)
        }
      }
    },
    // // 图标显示
    iconShow(index, record) {
      return (index === 0 && record.children && record.children.length > 0)
    }
  }
}
</script>
<style rel="stylesheet/css">
  @keyframes treeTableShow {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  @-webkit-keyframes treeTableShow {
    from {opacity: 0;}
    to {opacity: 1;}
  }
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
  $color-blue: #2196F3;
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width:20px;
    height: 14px;
    &::before {
      content: ""
    }
  }
  .processContainer{
    width: 100%;
    height: 100%;
  }
  table td {
    line-height: 26px;
  }

  .tree-ctrl{
    position: relative;
    color: $color-blue;
  }

  .img-style{
    width: 16px;
    height: 16px;
  }

  i{
    cursor: pointer;
    font-size: 18px;
  }
</style>
