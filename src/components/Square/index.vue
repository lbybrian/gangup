<template>
	<div class="square_body">
		<div class="square_box">
			Square
	        	<el-popover class="mxglPop">
					<p>请选择切换系统</p>
					<el-radio-group v-model="system">
						<el-radio label="0">Windows</el-radio> <el-radio label="1">Linux</el-radio>
					</el-radio-group>
					<div style="text-align: rightmargin-top: 10px:">
						<el-button size="mini" @cick="closePopover(scope.row.id)">取消</el-button>
						<el-button size="mini" type="primary" @click="migratetModel(scope.row)">确定</el-button>
					</div>
					<el-link slot="reference" tunderline="false" type="primary" @click="visible = true">切换系统</el-link>
				</el-popover>
				<!--<el-popconfirm title="确认删除?"@onConfirm="deleteMode(Iscope.row.id)">
					<el-link slot-"reference " underline="false" type='danger'>删除</el-link>
				</el-popconfirm>-->

			<!--<router-view to="/square/squarelist"></router-view>-->
			<div class="square_main">
				<a class="fl common_right_01 1 common_right_hover" href="javascript:;" target="_blank" id="msgCenter" @mouseover="mouseover" @mouseleave="mouseleave">
		            <img src="//res.tuwan.com/templet/play/public/images/message.png" class="qt" :style="theDisplay">
		            <img src="//res.tuwan.com/templet/play/public/images/message_hover.png" :style="Display" class="qt_hover">
		            <br> 消息
		        </a>
			</div>
		</div>
		
		<!--<div class="f">
			<a class="fl common_right_01 1 common_right_hover" href="javascript:;" target="_blank" id="msgCenter">
            <img src="//res.tuwan.com/templet/play/public/images/message.png" class="qt" style="display: inline;">
            <img src="//res.tuwan.com/templet/play/public/images/message_hover.png" style="display: none;" class="qt_hover">
            <br> 消息
        </a>
		</div>-->
		
		
		<!--CSS画曲线-->
		<div class="circleBox">
			<ul>
				<li><p class="circle1"></p></li>
				<li><p class="circle2"></p></li>
				<li><p class="circle3"></p></li>
				<li><p class="circle4"></p></li>
			</ul>
		</div>
		<hr />
		<br />
		
		
		<SquareList/>
		
	</div>
</template>

<script>
	
	import SquareList from '@/components/SquareList';
	
	var ela = document.querySelector('#msgCenter');
	var tru = document.querySelector('.qt');
	var fal = document.querySelector('.qt_hover');
	
	export default{
		name:"Square",
		components:{
			SquareList,
			
		},
		data(){
			return{
				Display:'display:none',
				theDisplay:'display:block',
				system:1,
			}
		},
		mounted(){
			
		},
		methods:{
			changeDisplay(){
				
			},
			mouseover(){
				tru.style=this.Display;
				fal.style=this.theDisplay;
			},
			mouseleave(){
				tru.style=this.theDisplay;
				fal.style=this.Display;
			}
		}
	}
</script>

<style lang="scss">
	.circleBox{
		ul{
			li{
				float: left;
				/*display: block;*/
			}
		}
	}
	.circle1 {

    width: 100px;

    height: 200px;

    border: 1px solid black;

    border-radius: 100% 0 0 100%/50%;

    border-right: none;

}

.circle2 {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    border-radius: 50% 50% 0 0/100% 100% 0 0;

    border-bottom: none;

}

.circle3 {

    width: 100px;

    height: 200px;

    border: 1px solid black;

    border-radius: 0 100% 100% 0/50%;

    border-left: none;

}

.circle4 {

    width: 200px;

    height: 100px;

    border: 1px solid black;

    border-radius: 0 0 50% 50%/0 0 100% 100% ;

    border-top: none;

}
</style>