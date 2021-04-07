/**
 * 
 */
var pop ;
function proc(){
	pop = window.open("https://google.com")
}
		
function proc2(){
	pop.close();
}
		
function showMsg(){
// window.setTimeout();
//	setTimeout(alertMsg, 3000);
	setTimeout(function (){
		alert("타이머")
	}, 3000);
	
	//쓰는법
	window.setTimeout(function (){
		alert("ㅠ")
	}, 5000);
}
		
// 	function alertMsg(){
// 		alert("타이머")
// 		


function changeBgColor(){
	setInterval(changeColor,3000);

}

function changeColor(){
	//랜덤으로 색을 만들어서 p태그의 배경을 넣어주기
	//1. 랜덤 색 뽑기
	var r= 0, g=0, b=0;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	//2. p태그에 배경색 주기
	document.getElementById("pInterval").style.backgroundColor = "rgb(" + r + "," + g + "," + b+")";
	
	//<p id="pInterval" style = "background-color : yellow;">
	// "red", "#ff0055", "rgb(255,0,255)"
}
	