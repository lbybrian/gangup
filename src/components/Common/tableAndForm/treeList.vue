<template>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
        <span class="tree-span" slot-scope="{node,data}">
            <i class=""></i>
            <span>{{data.title}}</span>
            <span>{{node.title}}</span>
        </span>
    </el-tree>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "一级 1",
          type: "1"
          //   children: [
          //     {
          //       label: "二级 1-1",
          //       children: [
          //         {
          //           label: "三级 1-1-1"
          //         }
          //       ]
          //     }
          //   ]
        },
        {
          title: "一级 2",
          type: "2"
          //   children: [
          //     {
          //       label: "二级 2-1",
          //       children: [
          //         {
          //           label: "三级 2-1-1"
          //         }
          //       ]
          //     },
          //     {
          //       label: "二级 2-2",
          //       children: [
          //         {
          //           label: "三级 2-2-1"
          //         }
          //       ]
          //     }
          //   ]
        },
        {
          title: "一级 3",
          type: "3"
          //   children: [
          //     {
          //       label: "二级 3-1",
          //       children: [
          //         {
          //           label: "三级 3-1-1"
          //         }
          //       ]
          //     },
          //     {
          //       label: "二级 3-2",
          //       children: [
          //         {
          //           label: "三级 3-2-1"
          //         }
          //       ]
          //     }
          //   ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "title"
      }
    };
  },
  methods: {
    handleNodeClick(data, node) {
      console.log(data, node);
      this.$emit("ehandleNodeClick", data, node);
    }
  }
};
</script>