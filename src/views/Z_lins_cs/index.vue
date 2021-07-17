<!--adtd下拉菜单-->
<template>
	<div>
		<!--划取选词-->
		<hr />
		<br />
		<p class="sjcqDetail">{{textValue}}</p>
		<div class="footer">
			<el-tabs v-model="names" @tab-click="tabClick">
				<el-tab-pane label='测试' name='1'>
					<el-row>
						<el-col :span='12'>
							<!--<SjLeft />-->
						</el-col>
						<el-col :span='12'>
							<!--<SjRight />-->
						</el-col>
					</el-row>
				</el-tab-pane>
				<el-tab-pane label='花刺' name='2'>
					<el-row>
						<el-col :span='12'>
							<SjLeft :title="title" :dataList='dataList' />
						</el-col>
						<el-col :span='12'>
							<SjRight :title="title" :dataList='dataList' @handleAddtagList="handleAddtagList" @handleDeletetagList="handleDeletetagList" />
						</el-col>
					</el-row>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import SjLeft from './SJCQ/SjLeft.vue'
//	import SjLeft from '@/views/Z_lins_cs/SJCQ/SjLeft.vue'
	import SjRight from '@/views/Z_lins_cs/SJCQ/SjRight.vue'
	export default {
		name: 'zlinscs',
		components: {
			SjLeft,
			SjRight
		},
		watch: {
			"dataList.keyMap": {
				immediate: true,
				deep: true,
				handler(val) {
					return val;
				}
			}
		},
		data() {
			return {
				//				form: this.$form.createForm(this),
				textValue: '「每日一习话·礼赞一百年」必须加快国防和军队现代化 原创2021-07-11 07:00·央广网 习近平：以史为鉴、开创未来，必须加快国防和军队现代化。强国必须强军，军强才能国安。坚持党指挥枪、建设自己的人民军队，是党在血与火的斗争中得出的颠扑不破的真理。人民军队为党和人民建立了不朽功勋，是保卫红色江山、维护民族尊严的坚强柱石，也是维护地区和世界和平的强大力量。 这段话出自2021年7月1日习近平在庆祝中国共产党成立100周年大会上的讲话。 建设巩固国防和强大军队，为实现中华民族伟大复兴提供坚强战略支撑，这是百年党史留下的经验启示。 党在成立初期，并没有充分认识到建立和掌握军队的重要性。经过严酷的斗争和血的教训，我们党深刻领悟到，必须建设自己的人民军队。1927年8月1日，南昌城头的枪声拉开了党创建人民军队的大幕。自那时起，党领导下的人民军队就英勇投身于为中国人民求解放、求幸福，为中华民族谋独立、谋复兴的历史洪流之中。 人民军队历经战火，走过了90多年的非凡历程，不仅保卫了红色江山、捍卫了民族尊严，还有效维护了地区和世界和平。回望历史，中华民族走出苦难，中国人民实现解放，有赖于一支英雄的人民军队。展望未来，中华民族实现伟大复兴，中国人民过上更加美好的生活，必须加快国防和军队现代化。 履行好新时代人民军队的使命任务，必须坚持政治建军、改革强军、科技强军、人才强军、依法治军，走出一条中国特色强军之路。只有这样，才能把人民军队建设成为世界一流军队，以更强大的能力、更可靠的手段捍卫国家主权、安全、发展利益！ （本期特约专家：常培育 国防大学国家安全学院副教授）',
				names: '1',
				title: '',
				dataList: {
					TypeStatus: '逢秋',
					tigger: '跳跳虎',
					keyWords: '工程',
					keyMap: {
						'主体': ['主体1，主体2'],
						'客体': ['客体1，客体2'],
						'时间': ['2021年12月11，2012年3月12,2018年5月4日'],
						'地址': ['北京市海淀区东芦路，昌平区史各庄街道，海淀区马连洼街道,昌平区平西府,怀柔区国防工程大学'],
					}
				}

			}
		},
		created() {
			this.title = this.textValue.split('。')[0]
		},
		methods: {
			tabClick(tab, event) {
				//  			console.log(tab, event);
			},
			//			getTreeFieldValue() {
			//				return this.form.getFieldValue("demoTree")
			//			},
			handleChange(value) {
				console.log(`selected ${value}`);
			},
			getData() {

				//				if(res.status==1){
				//					
				//				}
			},
			handleAddtagList(type, data) {
				this.dataList.keyMap[type].push(data)
			},
			handleDeletetagList(type, data) {
				const index = this.dataList.keyMap[type].indexOf(data);
				index != -1 && this.dataList.keyMap[type].splice(index, 1);
			}
		}
	}
</script>