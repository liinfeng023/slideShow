var TotalW = 4000  //总宽度(图片的数量*图片的宽度)
var ImgW = 800  // 图片的宽度
var count = 0  
var marLeft = 0 //#banner移动的margin-left值

// 点击向左图标的事件
$(document).ready(function(){
	$("#img_left").click(function(){
		count++
		marLeft = count*(ImgW)
		console.log(marLeft)
		if(marLeft > 0 && marLeft < TotalW){
			$("#banner").css({
				"margin-left":-marLeft+'px',
				"transition":'all 1s'	
			})
		}else{
			$("#banner").css({
				"margin-left":'0',
				"transition":'all 1s'	
			})
			count = 0
			marLeft = 0
		}
	})
})

// 点击向右图标的事件
$(document).ready(function(){
	$("#img_right").click(function(){
		count--
		marLeft = count*(800)	
		if(marLeft < TotalW && marLeft > 0){
			$("#banner").css({
				"margin-left":-marLeft+'px',
				"transition":'all 1s'	
			})
		}else{
			$("#banner").css({
				"margin-left":'0',
				"transition":'all 1s'	
			})
			count = 0
			marLeft = 0
		}
	})
})

// 设置自动播放
function autoPlay(){
	timer = setInterval(function(){
		count++
		marLeft = count*(ImgW)
		console.log(marLeft)
		if(marLeft > 0 && marLeft < TotalW){
			$("#banner").css({
				"margin-left":-marLeft+'px',
				"transition":'all 1s'	
			})
		}else{
			$("#banner").css({
				"margin-left":'0',
				"transition":'all 1s'	
			})
			count = 0
			marLeft = 0
		}	
	},5000);
}
autoPlay()  // 调用自动播放函数

$("#main").mouseover(function(){
	clearInterval(timer)  // 鼠标移入时清除自动播放
}).mouseout(function(){
	autoPlay()  //鼠标移出时自动播放
})
