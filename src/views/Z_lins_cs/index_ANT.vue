<!--adtd下拉菜单-->
<template>
	<div>
		<a-select mode="tags" style="width: 100%" placeholder="Tags Mode" @change="handleChange">
			<a-select-option v-for="i in 26" :key="(i + 9).toString(36) + i">
				{{ (i + 9).toString(36) + i }}
			</a-select-option>
		</a-select>
<hr />
<br />
		<a-select default-value="lucy" style="width: 120px" @change="handleChange">
			<a-select-option value="jack">
				Jack
			</a-select-option>
			<a-select-option value="lucy">
				Lucy
			</a-select-option>
			<a-select-option value="disabled" disabled>
				Disabled
			</a-select-option>
			<a-select-option value="Yiminghe">
				yiminghe
			</a-select-option>
		</a-select>
		<a-select default-value="lucy" style="width: 120px" disabled>
			<a-select-option value="lucy">
				Lucy
			</a-select-option>
		</a-select>
		<a-select default-value="lucy" style="width: 120px" loading>
			<a-select-option value="lucy">
				Lucy
			</a-select-option>
		</a-select>
<hr />
<br />


	</div>
</template>

<script>
	export default {
		name:'zlinscs',
		data() {
			return {
//				form: this.$form.createForm(this),
				treeValue: '',
			}
		},
		methods: {
//			getTreeFieldValue() {
//				return this.form.getFieldValue("demoTree")
//			},
			handleChange(value) {
				console.log(`selected ${value}`);
			},
		}
	}
</script>


<!--<template>
  <div class="pc">
    <h1>{{ msg }}</h1>
    <div
      class="demo"
      @mouseover="mouseOver"
      @mouseleave="mouseLeave"
      :style="active"
    >
      <p ref="acp">我是内容</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld,I am PC",
      active: "",
    };
  },
  methods: {
    // 移入
    mouseOver() {
      this.active = "background-color:black";
      // 操作dom 获取p标签改变其样式
      var acps = this.$refs.acp
      acps.style.color = "red"
    },
    // 移出
    mouseLeave() {
      this.active = "";
      this.$refs.acp.style=''
    }
  }
};
</script>

<style lang="scss" scoped>
.pc {
  .demo {
    width: 100%;
    height: 300px;
    background-color: lightcoral;
    p {
      color: limegreen;
    }
  }
}
</style>-->


<!-- <template>
  <div>
    <div
      class="hello"
      v-for="(arry , index) in itemse"
      :key="arry.index"
      :value="arry.value"
      :label="arry.label"
      @mouseenter="enters(index)"
      @mouseleave="leaver(index)"
    >
      <div v-show="switchNice[index].arry">{{arry.name}}</div>
      <div v-show="switchNice[index].arrys">{{arry.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemse: [
        { index: 1, name: "苹果", text: "可乐" },
        { index: 2, name: "香蕉", text: "雪碧" },
        { index: 3, name: "草莓", text: "橙子" }
      ],
      switchNice: [      //这绑定了上面V-show,
        {
          arry: true,
          arrys: false
        },
        {
          arry: true,
          arrys: false
        },
        {
          arry: true,
          arrys: false
        }
      ]
    };
  },
  methods: {
    enters(index) {
      this.switchNice[index].arry = false;   //这里的先后顺序如果写反了 就会一直闪，这是根据上面那个思路写的，
      this.switchNice[index].arrys = true;  //鼠标移入 首先是A先消失，然后B再出现的，写反就会疯狂闪。
    },
    leaver(index) {
      this.switchNice[index].arrys = false;  //移出时也一样，先B消失 再出现A。
      this.switchNice[index].arry = true;
    }
  }
};
</script>
<style scoped>
.hello {
  display: inline-block;
  padding: 0px 10px;
}
</style> -->
