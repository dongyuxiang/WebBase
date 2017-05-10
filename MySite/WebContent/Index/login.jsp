<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body background="../images/bglogin.jpg">
	<form action="loginReceive.jsp" method="post" name="login" align="center" style="margin-top: 200px;">
	
		<span style="font-size: 50px">用户名：</span> 
		<input type="text" size="20" name="userName"style="font-size:15px;height: 50px" /><br>
		
		 <span style="font-size: 50px">密&nbsp;&nbsp;&nbsp;码：</span> 
			<input type="password" name="passWord" size="20" style="font-size:15px; height: 50px"><br>
		<br> <br>
		
		<input type="submit" value="登录" name="subMit"
			style="width: 100px; height: 40px; background-color: orange" />
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
		
		<input type="reset" value="取消" name="reset"
			style="width: 100px; height: 40px; background-color: orange" />
	</form>

</body>
</html>