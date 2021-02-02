<template>
  <div style="padding: 20px 40px">
    <div style="margin-bottom: 10px; width: 1000px">
      <el-alert type="success" :closable="false">
        该组件可支持9种用户输入：单行文本，多行文本，时间段，数字输入，多选输入，单选输入，选择框输入，时间选择输入和开关输入。同时也可以支持纯文本和标签来展示信息。
      </el-alert>
    </div>
    <el-collapse v-model="activeNames" :accordion="true" style="width: 1000px">
      <el-collapse-item title="组件示例" name="1">
        <h2 style="position: relative; float: left; width: 100%">
          典型案例
          <el-button
            @click="openExampleStrunctDialog"
            style="float: right; margin-left: 20px"
            type="text"
            >参数数据结构</el-button
          >
          <el-button
            @click="openExampleCodeDialog"
            style="float: right"
            type="text"
            >示例代码</el-button
          >
        </h2>
        <Example1
          style="
            width: calc(100% - 180px);
            display: inline-block;
            float: left;
            margin-right: 20px;
          "
          class="exampleItem"
          ref="exampleItem"
        ></Example1>
        <el-radio-group
          v-model="exampleSelect"
          @change="dealSelectExample"
          style="
            padding: 10px 0px;
            float: left;
            width: 160px;
            display: inline-block;
          "
        >
          <slot v-for="d in exampleName">
            <el-radio
              style="width: 100%; margin: 0px; margin-bottom: 5px"
              :label="d.callbackName"
              border
              >{{ d.name }}</el-radio
            >
          </slot>
        </el-radio-group>
      </el-collapse-item>

      <el-collapse-item title="支持的事件" name="4">
        <DataTable ref="eventTable" :dataObj="eventDescription"></DataTable>
      </el-collapse-item>
      <el-collapse-item title="参数属性含义" name="5">
        <DataTable ref="paramTable" :dataObj="paramDescription"></DataTable>
      </el-collapse-item>
      <el-collapse-item title="支持的方法" name="6">
        <DataTable ref="methodTable" :dataObj="methodDescription"></DataTable>
      </el-collapse-item>
    </el-collapse>
    <DialogItem
      @openDialog="dealOpenDialog('exampleStrunctDialog')"
      @confirmDialog="dealConfirmDialog"
      :config="exampleStrunctDialog"
      ref="exampleStrunctDialog"
    >
      <template>
        <CodeViewer ref="exampleStructItem"></CodeViewer>
      </template>
    </DialogItem>
    <DialogItem
      @openDialog="dealOpenDialog('exampleCodeDialog')"
      :config="exampleCodeDialog"
      ref="exampleCodeDialog"
    >
      <template>
        <ExampleViewer
          style="max-height: 800px"
          :url="componentPath"
        ></ExampleViewer>
      </template>
    </DialogItem>
  </div>
</template>

<script>
import Example1 from "../../../static/example/formInfo/1.vue";
import ExampleViewer from "@/common/exampleViewer";
import CodeViewer from "@/common/codeViewer";
import DataTable from "@/common/dataTable";
import DialogItem from "@/common/dialogItem";
var beautify = require("js-beautify").js;

export default {
  components: {
    Example1,
    ExampleViewer,
    CodeViewer,
    DataTable,
    DialogItem,
  },
  mounted() {
    this.$nextTick(function () {
      this.basicData = { ...this.$refs.exampleItem.dataObj };
    });
  },
  data() {
    return {
      basicData: {},
      componentPath: "/static/example/formInfo/1.vue",
      exampleSelect: "",
      activeNames: "1",
      exampleCodeDialog: {
        visible: false,
        title: "典型案例的示例代码",
        withFooter: false,
      },
      exampleStrunctDialog: {
        visible: false,
        title: "典型案例的参数数据结构",
        withFooter: true,
      },
      eventDescription: {
        header: [
          {
            prop: "name",
            label: "事件名",
            width: "180",
          },
          {
            prop: "description",
            label: "描述",
            align: "left",
          },
          {
            prop: "param",
            label: "参数",
            width: "180",
          },
        ],
        data: [
          {
            name: "change",
            param: "item, index, inputArray",
            description: "当输入发生变化时，触发该事件",
          },
        ],
      },
      paramDescription: {
        header: [
          {
            prop: "name",
            label: "属性名称",
            width: "180",
          },
          {
            prop: "description",
            label: "描述",
            align: "left",
          },
          {
            prop: "type",
            label: "类型",
            width: "120",
          },
          {
            prop: "option",
            label: "可选值",
            align: "center",
            width: "180",
          },
          {
            prop: "default",
            label: "默认值",
            align: "center",
            width: "120",
          },
        ],
        data: [
          {
            name: "labelWidth",
            description: "表单的标签区域的宽度",
            type: "String",
            option: "-",
            default: "120px",
          },
          {
            name: "labelPosition",
            description: "表单的标签的位置",
            type: "String",
            option: "left, right, top",
            default: "right",
          },
          {
            name: "labelSuffix",
            description: "表单域标签的后缀",
            type: "String",
            option: "-",
            default: ":",
          },
          {
            name: "data",
            description: "表单输入项的数组",
            type: "Array",
            option: "-",
            default: "-",
          },
          {
            name: "data[].name",
            description: "表单输入项标签的名称",
            type: "string",
            option: "-",
            default: "-",
          },
          {
            name: "data[].value",
            description: "表单输入项的输入值",
            type: "string",
            option: "-",
            default: "-",
          },
          {
            name: "data[].type",
            description: "表单输入项的类型",
            type: "string",
            option:
              "text, number, textarea, select, checkbox, radio, dateRange, datePicker, tags",
            default: "-",
          },
          {
            name: "data[].must",
            description: "表单输入项是否是必须输入项",
            type: "boolean",
            option: "true, false",
            default: "false",
          },
          {
            name: "data[].items",
            description: "表单输入项的输入配置项",
            type: "Array",
            option: "-",
            default: "-",
          },
          {
            name: "data[].checkRule",
            description: "表单输入项的输入验证配置",
            type: "Array, Object",
            option: "-",
            default: "-",
          },
        ],
      },
      methodDescription: {
        header: [
          {
            prop: "name",
            label: "方法名称",
            width: "180",
          },
          {
            prop: "description",
            label: "描述",
            align: "left",
          },
          {
            prop: "param",
            label: "参数",
            width: "180",
          },
        ],
        data: [
          {
            name: "updateData",
            param: "data",
            description: "用于更新当前表单数据包含输入的值，和配置信息",
          },
          {
            name: "updateFormValue",
            param: "data",
            description: "用于更新表单中的值",
          },
          {
            name: "emptyFormValue",
            param: "-",
            description: "用于清空表单中的值",
          },
          {
            name: "getFormValue",
            param: "-",
            description: "获取表单中的值",
          },
          {
            name: "checkValue",
            param: "item",
            description: "用于验证表单中某输入项是否符合规则",
          },
          {
            name: "checkAllItems",
            param: "-",
            description: "用于验证表单中所有输入项是否符合规则",
          },
        ],
      },
      exampleName: [
        {
          name: "默认示例",
          callbackName: "exampleCallback1",
        },
        {
          name: "表单信息预览模式",
          callbackName: "exampleCallback2",
        },
        {
          name: "各种类型的输入",
          callbackName: "exampleCallback3",
        },
         {
          name: "含提交重置按钮",
          callbackName: "exampleCallback4",
        },
      ],
    };
  },
  methods: {
    updateExampleData(data) {
      if (
        this.$refs.exampleItem.$refs.exampleTestItem &&
        this.$refs.exampleItem.$refs.exampleTestItem.updateData
      ) {
        this.$refs.exampleItem.$refs.exampleTestItem.updateData(data);
      }
    },
    exampleCallback1() {
      var tData = { ...this.basicData };
      this.updateExampleData(tData);
    },
    exampleCallback2() {
      var tData = { ...this.basicData };
      tData.data = [
        {
          name: "行动目标",
          value: "珠穆朗玛峰",
        },
        {
          name: "时间范围",
          value: "2019年10月12日至2020年7月20日",
        },
        {
          name: "协同间隔(小时)",
          value: 100,
        },
      ];
      this.updateExampleData(tData);
    },
    exampleCallback3() {
      var tData = { ...this.basicData };
      tData.labelWidth = "90px";
      tData.data = [
        {
          name: "单行文本",
          value: "",
          type: "text",
          must: true,
          items: [
            {
              placeholder: "请输入单行文本",
            },
          ],
        },
        {
          name: "多行文本",
          value: "",
          type: "textarea",
          items: [
            {
              placeholder: "请输入文本",
            },
          ],
        },
        {
          name: "只读文本",
          value: "你好，我是不可编辑的文本",
        },
        {
          name: "时间段",
          value: "",
          type: "dateRange",
          items: [""],
        },
        {
          name: "数字输入",
          value: "",
          type: "number",
          must: true,
          checkRule: [
            {
              message: "输入值必须大于2。",
              callback: function (v) {
                var ret = 0;
                if (v < 2) {
                  ret = 2;
                }
                return ret;
              },
            },
          ],
          items: [""],
        },
        {
          name: "多选输入",
          value: "",
          type: "checkbox",
          items: ["选项", "选项", "选项", "选项", "选项", "选项1"],
          folding: false,
          checkAll:false,
          isIndeterminate:false
        },
        {
          name: "单选输入",
          value: "",
          type: "radio",
          items: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
        },
        {
          name: "选择框输入",
          value: "",
          type: "select",
          items: [
            {
              options: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
            },
          ],
        },
        {
          name: "时间输入",
          value: "",
          type: "datePicker",
          items: [""],
        },
        {
          name: "开关输入",
          value: "",
          type: "switch",
          items: [""],
        },
        {
          name: "显示标签",
          value: "",
          type: "tags",
          items: [
            {
              value: [
                {
                  name: "标签1",
                  type: "primary",
                },
                {
                  name: "标签2",
                  type: "primary",
                },
                {
                  name: "标签3",
                  type: "primary",
                },
              ],
            },
          ],
        },
      ];
      this.updateExampleData(tData);
    },
    exampleCallback4() {
      var tData = { ...this.basicData };
      tData.labelWidth = "90px";
      tData.data = [
        {
          name: "单行文本",
          value: "",
          type: "text",
          must: true,
          items: [
            {
              placeholder: "请输入单行文本",
            },
          ],
        },
        {
          name: "多行文本",
          value: "",
          type: "textarea",
          items: [
            {
              placeholder: "请输入文本",
            },
          ],
        },
        {
          name: "只读文本",
          value: "你好，我是不可编辑的文本",
        },
        {
          name: "时间段",
          value: "",
          type: "dateRange",
          items: [""],
        },
        {
          name: "数字输入",
          value: "",
          type: "number",
          must: true,
          checkRule: [
            {
              message: "输入值必须大于2。",
              callback: function (v) {
                var ret = 0;
                if (v < 2) {
                  ret = 2;
                }
                return ret;
              },
            },
          ],
          items: [""],
        },
        {
          name: "多选输入",
          value: "",
          type: "checkbox",
          items: ["选项", "选项", "选项", "选项", "选项", "选项1"],
          folding: false,
          checkAll:false,
          isIndeterminate:false
        },
        {
          name: "单选输入",
          value: "",
          type: "radio",
          items: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
        },
        {
          name: "选择框输入",
          value: "",
          type: "select",
          items: [
            {
              options: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"],
            },
          ],
        },
        {
          name: "时间输入",
          value: "",
          type: "datePicker",
          items: [""],
        },
        {
          name: "开关输入",
          value: "",
          type: "switch",
          items: [""],
        },
        {
          name: "显示标签",
          value: "",
          type: "tags",
          items: [
            {
              value: [
                {
                  name: "标签1",
                  type: "primary",
                },
                {
                  name: "标签2",
                  type: "primary",
                },
                {
                  name: "标签3",
                  type: "primary",
                },
              ],
            },
          ],
        },
        {
          name:"提交重置",
          value:"",
          type:"button",
          items:[
            // {
            //   value:[
                {
                  name:"提交",
                  type:"button1",
                },
                {
                  name:"重置",
                  type:"button2",
                },
                // {
                //   name:"修改",
                //   type:"button3",
                // }
            //   ]
            // }
          ],
        }
      ];
      this.updateExampleData(tData);
    },
    dealSelectExample(v) {
      console.log(v);
      if (v && typeof this[v] === "function") {
        this[v]();
      }
    },
    openDataStrunctDialog() {
      this.$refs.testDialog.show();
    },
    openExampleStrunctDialog() {
      this.$refs.exampleStrunctDialog.show();
    },
    openExampleCodeDialog() {
      this.$refs.exampleCodeDialog.show();
    },
    dealOpenDialog(name) {
      if (name === "testDialog") {
        this.$refs.exampleViewerItem.code = beautify(
          this.util.objectToString(
            this.$refs.exampleItem.$refs.exampleTestItem.dataInfo
          ),
          opts
        );
      } else if (name === "exampleStrunctDialog") {
        this.$refs.exampleStructItem.code = beautify(
          this.util.objectToString(
            this.$refs.exampleItem.$refs.exampleTestItem.dataInfo
          ),
          opts
        );
      } else {
      }
    },
    dealConfirmDialog() {
      var code = this.$refs.exampleStructItem.code;
      console.log(code);
      try {
        this.updateExampleData(this.util.stringToObject(code));
        // this.$refs.exampleTest.$forceUpdate();
        this.exampleSelect = "";
      } catch (e) {
        console.log(e);
      }
    },
    dealSelectionChange(val) {},
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.introduce {
  position: relative;
  float: left;
  max-width: 1200px;
  margin-bottom: 20px;
  padding-right: 20px;
  width: 100%;
}

.introduce > h2 {
  font-weight: 700;
  margin-bottom: 5px;
}

/deep/ .CodeMirror {
  border-top: solid 1px #ddd;
  border-left: solid 1px #ddd;
  box-shadow: 1px 1px 1px #ddd;
  height: 500px !important;
}

/deep/ .exampleItem,
.howToImport .CodeMirror {
  height: auto !important;
}

.exampleItem {
  padding-bottom: 10px;
}

/deep/ .containerArea {
  margin-bottom: 10px;
}

/deep/ .el-form-item {
  margin-bottom: 5px;
}

/deep/ .el-collapse-item__header {
  font-weight: 700;
}

/deep/ .el-collapse-item__wrap {
  overflow: auto;
}
</style>
