<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 
String str = "홍길동";
System.out.println("오잉~");

String userName = request.getParameter("userName");
%>
</body>
	<p>안녕하세요, '<span id ="spUserName"><%=str%></span>씨.</p>
	<br>
	<p>올해로 '<span id="spUserAge"><%=%></span>살 이시군요~</p>
</html>