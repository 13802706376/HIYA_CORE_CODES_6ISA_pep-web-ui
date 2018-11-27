<template>
  <el-table 
    :data="formatData" 
    :row-style="showRow" 
    v-bind="$attrs"
    style="margin-top: 20px;"
    :cell-style="{borderColor:'#e9e9e9'}"
    :header-cell-style="{color:'#555',background:'#f4f4f4',borderColor:'#e9e9e9'}">
    <el-table-column v-if="columns.length===0" width="150">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
        <span v-if="iconShow(0,scope.row)" class="tree-ctrl" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-plus"/>
          <i v-else class="el-icon-minus"/>
        </span>
        {{ scope.$index }}
      </template>
    </el-table-column>
    <el-table-column v-for="(column, index) in columns" v-else :key="column.value" :label="column.text" :width="column.width">
      <template slot-scope="scope">
        <template v-if="index === 0">
          <span v-for="space in scope.row._level" :key="space" class="ms-tree-space"/>
          <template v-if="iconShow(index,scope.row) && !scope.row.top">
            <i @click="toggleExpanded(scope.$index,$event)" class="el-icon-caret-bottom"></i>
          </template>
          <template v-else>
            <i class="el-icon-caret-bottom" style="opacity:0;"></i>
          </template>
        </template>
         <span v-if="iconShow(index,scope.row)" class="tree-ctrl">
            <img class="img-style" v-if="scope.row.parentId === '0'" src="../../../../../assets/images/icon/top-tree.png" />
            <img class="img-style" v-else src="../../../../../assets/images/icon/folder.png" />
        </span>

        <template>
          <template v-if="column.value === 'type'">
            <el-tag v-if="scope.row[column.value] === 'catalogue'">目录</el-tag>
            <el-tag type="warning" v-else-if="scope.row[column.value] === 'menu'">菜单</el-tag>
            <el-tag v-else type="info">按钮</el-tag> 
          </template>
          <template v-else-if="column.value === 'isShow'">
            <el-tag v-if="scope.row[column.value] === '1'" type="success">显示</el-tag>
            <el-tag v-else type="danger">隐藏</el-tag>
          </template>
          <template v-else>
            <span>{{ scope.row[column.value] || '/' }}</span>
          </template>
        </template>
      </template>
    </el-table-column>
    <slot name="operate-slot"></slot>
  </el-table>
</template>

<script>

import treeToArray from './eval'
export default {
  name: 'TreeTable',
  props: {
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
    formatData: function() {
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
    showRow: function(row) {
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
    // 图标显示
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
