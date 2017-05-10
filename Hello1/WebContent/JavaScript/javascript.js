/**
 * 
 */
function Demo1() {
	var len=navigator.plugins.length;
	with(document){//静态导入
		write("你的浏览器共支持"+len+"中外挂插件：<br/>");
		write("<TABLe border=1 bordercolor=blue>");
		write("<CAPTION>外挂清单</CAPTION>");
		write("<tr><th>编号  <th>名称<th><描述> <th> 文件名")//tr表示第一行，每个th后面的文字表示每列的表头名称
		for(var i=0;i<len;i++){
			write("<tr><td>"+i+				//每次打印一行    <td>代表每一列，逐一打出每一列
			"<td>"+navigator.plugins[i].name+
			"<td>"+navigator.plugins[i].description+
			"<td>"+navigator.plugins[i].filename);
		}
	}
}
function Demo2(){
	if(screen.width<=1440 || screen.colorDepth<8){
		var msg="本网站最佳浏览模式为1440*900*256";
		confirm(msg);
	}
}
function Demo3(){
	if(prompt("确定离开么？","我考虑一下")){
		window.close();     //弹出的框中，确定代表if为true  取消代表if为false
		//alert.close();
	}else{
		document.write("暂时不想离开");
	}
}
