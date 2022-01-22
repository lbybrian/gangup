<template>
	<div>
		<hehe />
		<router-view></router-view>
		<!--ABBBBBB-->
		<div>{{d}}、{{time}}</div>
		<!--<hr  />-->
		<div>
			<div class="box" v-for="item in infos">
				<span>姓名： {{item.name}}</span><br />
				<span>{{item.age}}</span><br />
				<span>{{item.message}}</span><br />
				<el-tag :closable="isEdit ? true : false" size="medium" type="info" @close="delPerson()" :style="colors(item.age)" style="margin-right: 8px;">{{item.name}}</el-tag>
				<el-button @click="addtooltip(item)" v-show='!isShow'>查看地址信息</el-button>
				<el-button @click="reset(item)" v-show='isShow'>取消</el-button>
				<el-button @click="addInfo" v-if="!isEdit">添加人物</el-button>
				<el-button @click="this.isEdit=false" v-else="isEdit">完成</el-button>
			</div>
			<el-row style="width: 20%;margin:2% 0 0 40%;" v-for="item in infos.others">
				<el-col :span="17">
					<span v-if="!isEdit&&item.title">{{item.title}}</span>
					<el-input v-else size="mini" v-model="item.title" />
				</el-col>
				<el-col :span="7">
					<span v-if="!isEdit&&item.newAge">{{item.newAge}}</span>
					<el-input v-else size="mini" v-model="item.newAge" />
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      d: "",
      isShow: false,
      isEdit: false,
      infos: [
        {
          name: "张三",
          age: 24
        }
      ]
    };
  },
  created() {
    this.time = new Date().toLocaleTimeString();
    this.getDay();
  },
  computed: {
    colors(age) {
      return age => {
        switch (age) {
          case age < 18:
            return { color: "red" };
          case 18 <= age < 58:
            return { color: "greey" };
          case 58 <= age:
            return { color: "yellow" };
            break;
        }
      };
    }
  },
  methods: {
    addtooltip(item) {
      this.isShow = true;
      this.$set(item, "message", "出生于四川遂宁");
      this.$set(item, "age", "28");
    },
    reset(item) {
      this.isShow = false;
      this.isEdit = false;
      this.$delete(item, "message", "出生于四川遂宁");
      this.$set(item, "age", "25");
    },
    addInfo() {
      this.isEdit = true;
      let it = (this.infos.others = []);
      it.push({
        title: "",
        newAge: ""
      });
      this.$set(this.infos.others, "other", it);
    },
    delPerson() {},
    getDay() {
      let d = new Date().getDay();
      switch (d) {
        case 0:
          this.d = "今天是星期日";
          break;
        case 1:
          this.d = "今天是星期一";
          break;
        case 2:
          this.d = "今天是星期二";
          break;
        case 3:
          this.d = "今天是星期三";
          break;
        case 4:
          this.d = "今天是星期四";
          break;
        case 5:
          this.d = "今天是星期五";
          break;
        case 6:
          this.d = "今天是星期六";
          break;
      }
    }
  }
};
</script>

<style>
</style>