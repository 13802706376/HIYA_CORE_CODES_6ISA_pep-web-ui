export default {
  methods: {
    filterNode(value, data,node) {
      //如果共有三级菜单
      if (!value) return true
      let if_one = data.name.indexOf(value) !== -1
      let if_two = node.parent && node.parent.data && node.parent.data.name && (node.parent.data.name.indexOf(value) !== -1)
      let if_three = node.parent && node.parent.parent && node.parent.parent.data && node.parent.parent.data.name && (node.parent.parent.data.name.indexOf(value) !== -1)
      let result_one = false
      let result_two = false
      let result_three = false
      if(node.level === 1) {
        result_one = if_one
      }else if(node.level === 2) {
        result_two = if_one || if_two
      }else if(node.level === 3) {
        result_three = if_one || if_two || if_three
      }

      return result_one || result_two || result_three
    },
    queryTree(tree,name) {
        let stark = [];
        stark = stark.concat(tree);
        while(stark.length) {
            let temp = stark.shift();
            if(temp.children) {
                stark = stark.concat(temp.children);
            }
            if(temp.name.includes(name)) {
                return temp;
            }
        }
    },
  }
}
