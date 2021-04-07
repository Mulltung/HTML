/**
 * 
 */
	function fnGet(){
		// submit 실행
		var fm = document.getElementById("fm"); // <form>
		fm.action = "html1.html?userId=test01&password=asdf";// url 세팅
		fm.method = "post";
		fm.submit();
	}
	

	function fnAjax(){
		$.ajax({
			url : "intro.html"
			,type : "GET"
// 			,data :
// 			,dataType :
			,success : function(data){
				$("#divResult").html(data);
			}
			,error : function(){
				
			}
		});
	}
	
	function fnText(){
		$.ajax({
 			url : "/jqureyPro3/html/Sample/data_text.txt"
//  			,type : "get"
//  			,data : {}
 			,dataType : "text"
 			,success : function(data){
 				// 아래 둘다 무관. text이기 때문에
	  			$("#divResult").text(data);
 			}
		});
	}
	
	function fnHtml(){
		$.ajax({
 			url : "/jqureyPro3/html/Sample/data_text.txt"
//  			,type : "get"
//  			,data : {}
 			,dataType : "html"
 			,success : function(data){
 				$("#divResult").html(data);
 			}
		});
	}
	
	function fnJsonObj(){
		$.ajax({
			url : "/jqureyPro3/html/Sample/data_json_obj.txt"
			,dataType : "json"
			,success : function(data){
				console.log(data);
				console.log(data.name);
				// div에 이름 : ~, 나이:~,
				
				var str = "";
				str += "이름 : " + data.name + "<br>"
					+ "나이 : " + data.age + "<br>"
					+ "성별 : " + data.gender + "<br>"
					+ "직업 : " + data.job;
				
				$("#divResult").html(str);
			}
		});
	}
	
	function fnJsonArr(){
		console.log(">>>>>fnJsonArr호출");
		$.ajax({
			url : "/jqureyPro3/html/Sample/data_json_arr.txt"
			,dataType : "json"
			,success : function(data){
				console.log(">>>>> 성공 : " + data);
				
				var str = "<ol>";
				for (var i=0 ; i<data.length ; i++){
					str += "<li>" + data[i]	+ "</li>";
				}
				str += "</ol>";
				$("#divResult").html(str);
			}
			,error : function(data){
				console.log(">>>> 오류 :" + data);
				console.log(data);
			}
		});
	}
	
	
	function fnJsonList(){
		$.ajax({
			url : "/jqureyPro3/html/Sample/data_json_list.txt"
			,dataType : "json"
			,success : function(data){
				console.log(data);
				
				var str = "<table border='1'><tr style='background-color: red'><th>이름</th><th>나이</th><th>성별</th><th>직업</th></tr>";
				for(var i=0 ; i < data.length ; i++ ){
					var obj = data[i];
					str +="<tr><td>" + obj.name + "</td><td>" + obj.age + "</td><td>" + obj.gender + "</td><td>" + obj.job + "</td></tr>"	
			
				}		
				str += "</table>"
				$("#divResult").html(str);
				
			}
		});
	}
	
	function fnXml(){
		$.ajax({
			url : "cd_catalog.xml"
			,type : "get" // "post"
			,data : {}
			,dataType : "xml"
			,success : function(data){
				console.log(data);
				console.log(data.getElementsByTagName("CATALOG"));
				console.log(data.getElementsByTagName("CD"));
// 				childNodes, children
				makeArtistList(data); // 결과는 따로 메서드로 만드는것이 좋다
			}
			,error : function(xhr){
				console.log(xhr);
				alert("오류발생");
			}
		});
		
	}	
	
	function fnXml2(){
		$.ajax({
			url : "cd_catalog.xml"
			,type : "get" // "post"
			,data : {}
			,dataType : "xml"
			,success : function(data){
				console.log(data);
				console.log(data.getElementsByTagName("CATALOG"));
				console.log(data.getElementsByTagName("CD"));
// 				childNodes, children
				makeTitleList(data); // 결과는 따로 메서드로 만드는것이 좋다
			}
			,error : function(xhr){
				console.log(xhr);
				alert("오류발생");
			}
		});
		
	}	
	
	function fnXml3(){
		$.ajax({
			url : "cd_catalog.xml"
			,type : "get" // "post"
			,data : {}
			,dataType : "xml"
			,success : function(data){
				makeTable(data); // 결과는 따로 메서드로 만드는것이 좋다
			}
			,error : function(xhr){
				console.log(xhr);
				alert("오류발생");
			}
		});
		
	}	
	
	function makeArtistList(param){
		// param ==> document
		// console.log(arr);
		// console.log(arr[0]);
		// console.log(arr[0].innerHTML);
		var arr = param.getElementsByTagName("ARTIST");
		var str = "<ol>";
		for(var i = 0 ; i<arr.length ; i++){
			str += "<li>" + arr[i].innerHTML + "</li>"; //가수이름
		}
		str += "</ol>";
		$("#divResult").html(str);
	}
	
	function makeTitleList(param){
		// param ==> document
		var arr = param.getElementsByTagName("TITLE");
 		console.log("1 : " + arr);
 		console.log("2 : " + arr[0]);
 		console.log("3 : " + arr[0].childNodes);
 		console.log("4 : " + arr[0].childNodes[0]);
 		console.log("5 : " + arr[0].childNodes[0].nodeValue);
		// [HTML 교재 10 - DOM순회]pdf에서 참고
		var str = "<table border='1'><tr style='background-color: red'><th>제목</th></tr>";
		for(var i = 0 ; i<arr.length ; i++){
			str += "<tr><td>" + arr[i].childNodes[0].nodeValue + "</td></tr>"; //제목이름
		}
		str += "</table>";
		$("#divResult").html(str);
	}
	
	function makeTable(param){
		var arrCd = param.getElementsByTagName("CD");
		console.log(arrCd);
//		var arrCd = $("CD", param);
		
		var str = "<table border='1'><tr style='background-color: red'><th>TITLE</th><th>ARTIST</th><th>COUNTRY</th><th>COMPANY</th><th>PRICE</th><th>YEAR</th></tr>";
		for(var obj of arrCd){
//			console.log(obj);
//			console.log($(obj).children());
//			console.log($(obj).children().eq(0));
//			console.log($(obj).children().eq(0).html());
//			return
			
			var objTitle = obj.getElementsByTagName("TITLE");
			var objARTIST = obj.getElementsByTagName("ARTIST");
			var objCOUNTRY = obj.getElementsByTagName("COUNTRY");
			var objCOMPANY = obj.getElementsByTagName("COMPANY");
			var objPRICE = obj.getElementsByTagName("PRICE");
			var objYEAR = obj.getElementsByTagName("YEAR");
		
			var TITLE = $(objTitle).html();
			var ARTIST = $(objARTIST).html();
			var COUNTRY = $(objCOUNTRY).html();
			var COMPANY = $(objCOMPANY).html();
			//빈값일 경우
			var price ="";
			if($(objPRICE).length > 0){
				var PRICE = $(objPRICE).html();
			}
			var YEAR = $(objYEAR).html();
			
			str += "<tr>" 
				+"<td>" + TITLE + "</td>"
				+"<td>" + ARTIST + "</td>"
				+"<td>" + COUNTRY + "</td>"
				+"<td>" + COMPANY + "</td>"
				+"<td>" + PRICE + "</td>"
				+"<td>" + YEAR + "</td>"
				+"</tr>";
		}
		$("#divResult").html(str);
	}
	