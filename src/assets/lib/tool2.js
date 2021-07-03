export default {
	//时间相关
	timeNow:function(newTime) {
		var getTimeFromDate =function(date) {
			var year = null,
				month = null,
				day = null;
			year = date.getFullYear();
			month = (date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1);
			day = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate();
			//		console.log(year + month + day + date.toTimeString().slice(0,8).split(":").join(""))
			return(year + month + day + date.toTimeString().slice(0, 8).split(":").join(""));
		};
		
		var Flipper= (function() {
			function Flipper(node, currentTime, nextTime) {
				//	 	this.isFlipping = false; 
				this.duration = 600;
				this.flipNode = node;
				this.frontNode = node.querySelector(".front");
				this.backNode = node.querySelector(".back");
				console.log('qS',this.frontNode,this.backNode)
	
				this.setFrontTime(currentTime);
				this.setBackTime(nextTime);
			}
			Flipper.prototype.setFrontTime = function(time) {
				this.frontNode.innerHTML = this.frontNode.dataset.number = time;
			}
			Flipper.prototype.setBackTime = function(time) {
				this.backNode.innerHTML = this.backNode.dataset.number = time;
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
				setTimeout(function() {
					//			_this.flipNode.classList.remove("running");
					//			_this.isFlipping = false;
					_this.setFrontTime(nextTime);
				}, this.duration);
			}
			return Flipper;
		}());
	
		var flips = document.querySelectorAll(".flip");
		var nowTimeStr = getTimeFromDate(new Date(newTime - 1000));
		var nextTimeStr = getTimeFromDate(new Date(newTime));
		var flippers = Array.from(flips).map(function(flip, i) {
			//			console.log(flip,i)
			return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
		});
		//		console.log(flippers,flips,front)
		for(var i = 0; i < flippers.length; i++) {
			if(nowTimeStr[i] === nextTimeStr[i]) {
				continue;
			}
			flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
		}
	}
}