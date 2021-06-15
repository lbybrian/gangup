//弹窗信息
	/*
	 showDetailInfo({
	 	name:feature.name,
	 	id:feature.id.split("_")[1],
	 	autoclose:false,是否自动关闭
	 	infos:[
	 		'名称'+feature.name,
	 		'经度':lon,
	 		‘纬度:lat
	 	]
	 });
	 * */
function showDetailInfo(info){
	let _detailStr=`
		<div
			class="detail"
			id="detail_${info.uniqueId}"
			data-time=${new Data().getTime()}
			data-autoclose=${info.autoclose}
		>
			<div class="detail-title">
				<img src="">
				${info.name}
			</div>
			<div class="detail-info" id="detailinfo_${info.id}">
				${info.infos.join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')}
			</div>
	`;
	if(!info.autoclose){
		_detailStr +=`<img class="detail-close" src="" onclick="closeDetailInfo('detail_${info.id}')">`;
	}
	_detailStr+=`</div>`
	$('#detail-container').append(_detailStr)
}

//点击关闭详情\n\n
function closeDetailInfo(id){
	$('#'+id).remove();
}

//时间相关
var Flipper = (function(){
	function Flipper(node, currentTime, nextTime){
//	 	this.isFlipping = false; 
	 	this.duration = 600; 
	 	this.flipNode = node; 
	 	this.frontNode = node.querySelector(".front");
	 	this.backNode = node.querySelector(".back");
//	 	console.log('qS',this.frontNode,this.backNode)
	 	
	 	this.setFrontTime(currentTime); 
	 	this.setBackTime(nextTime);
	}
   	Flipper.prototype.setFrontTime = function(time){
   		this.frontNode.innerHTML=this.frontNode.dataset.number = time;
	}
   	Flipper.prototype.setBackTime = function(time){
   		this.backNode.innerHTML=this.backNode.dataset.number = time;
   	}
	Flipper.prototype.flipDown = function(currentTime, nextTime) {
		var _this = this;
		if(this.isFlipping) {
			return false;
		}
//		this.isFlipping = true;
		this.setFrontTime(currentTime);
		this.setBackTime(nextTime);
//		console.log(this.flipNode.classList)
//		this.flipNode.classList.add("running");
		setTimeout(function(){
//			_this.flipNode.classList.remove("running");
//			_this.isFlipping = false;
			_this.setFrontTime(nextTime);
		},this.duration);
	}
	return Flipper;
}());

//
//Elements	 Console	 Network	 Performance	 Memory	 Application	 Security	 lighthouse
// Sources
// top	 Filter	 Default levels
	var getTimeFromDate = function (date){
 		var year = null,month = null,day=null;
 		year = date.getFullYear();
		month=(date.getMonth()+ 1)< 10?('0'+(date.getMonth()+ 1)):(date.getMonth()+1);
		day = date.getDate() < 10 ?('0'+ date.getDate()):date.getDate();
//		console.log(year + month + day + date.toTimeString().slice(0,8).split(":").join(""))
		return (year + month + day + date.toTimeString().slice(0,8).split(":").join(""));
	};
	
	function timeNow(newTime){
		 var flips = document.querySelectorAll(".flip");
		 var nowTimeStr = getTimeFromDate(new Date(newTime - 1000)); 
		 var nextTimeStr = getTimeFromDate(new Date(newTime)); 
//		console.log('now',nowTimeStr,'next',nextTimeStr)
		
//		var front = document.querySelector(".front");
//		front.innerHTML=nowTimeStr;
		
		var flippers = Array.from(flips).map(function (flip, i){
//			console.log(flip,i)
			return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
		});
//		console.log(flippers,flips,front)
		for(var i=0;i<flippers.length;i++){
			if(nowTimeStr[i]===nextTimeStr[i]){
				continue;
			}
			flippers[i].flipDown(nowTimeStr[i],nextTimeStr[i]);
		}
	}

export function isZero(m){
  return m < 10 ? '0' + m : m
}
export function formatDate(shijianchuo) {
  //时间戳是整数，否则要parseInt转换
  var time = new Date(shijianchuo) // 需要使用Date格式进行日期转化，若是时间戳、字符串时间，需要通过new Date(..)转化
  var y = time.getFullYear()
  var m = time.getMonth()+1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return y+'-'+isZero(m)+'-'+isZero(d)+' '+isZero(h)+':'+isZero(mm)+':'+isZero(s)
}

export const Colors = ['#3399ff', '#ff9900', '#db4553', '#00cc66', '#6666cc', '#97ddff', '#16dcdc', '#ff6600', '#b0d882', '#4894b2', '#003366', '#379684']

export {
	getTimeFromDate,
	timeNow,
}
