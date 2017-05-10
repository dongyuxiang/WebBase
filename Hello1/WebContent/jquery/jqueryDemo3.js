/**
 * 
 */
// 子孙后代的选择器
function my_formSelect() {
	console.log($('#my_form :input:checked'));
}

function selSelect() {
	console.log($('#sel :selected'));
}
// 一个值是获取，两个值是设置
function attrDemo() {
	console.log($('#myform').attr('action'));// 获取action的值
	$('#myform').attr('action', 'bar.html');// 把action的值改为bar.html
	console.log($('#myform').attr('action'));
}
// 删除属性
function removeattrDemo() {
	$("img").removeAttr("src");
	console.log(document.getElementsByTagName("img")[0]);
}
// 获取属性html、text
function huoqu() {
	console.log($('p').html());
	$('p').html('<i>World</i>');
	console.log($('p').html());
}
function htmlTextDemo() {
	console.log($('p').text());
	$('p').html('<i>world</i>');
	console.log($('p').text());
}
/*
 * function cssDemo(){ //
 * document.getElementsByTagName("p")[0].style.color="blue";
 * $('p')[0].style.color = "blue"; // $('p').css('color', 'red');
 * console.log($('p').css('color')); }
 */
// 改变标签属性
function cssDemo() {
	/* $('p')[0].style.color="blue"; */
	// 和上面的用法不同，但是效果相同，，一个参数表示获取，两个参数表示设置
	$('p').css('color', "red"); // 表示设置
	console.log($('p').css('color')) // 表示获取
}
// 在p1的class属性中添加值
function classAdd() {
	console.log($("#p1"));
	$("#p1").addClass("test");
	console.log($("#p1"));
}
function appendDemo() {
	$('#p1').append('*****'); // 在p1之后追加
	$('#p1').prepend('#####');// 在p1之前追加
}
function afterbeforeDemo() {
	/* $('#p2').after('<p>hehehe</p>'); */// 在p2之后追加
	$('#p2').before('<p>hehehe</p>');// 在p2之前追加
}
function clone() {
	var clone1 = $('#p1').clone();// 复制p1中的内容
	$('#p2').after(clone1);// 在p2后面显示内容
}
// 替换原本标签中的所有内容
function replacewithDemo() {
	$('#p3').replaceWith('<h1>旺财</h1>');
}

function wrapwrapinnerDemo() {
	$("#p3").wrap('<h1></h1>')// 在外围包围一个标签
	$("#p3").wrapInner('<i></i>')// 在标签内部包围一堆标签
}
// 删除指定的数据
function removeDemo() {
	/* $('li').remove(); */// 删除所有
	$('li').remove(".fruit");
}
// 清空，清除所有数据
function emptyDemo() {
	/* $('li').remove(); */
	$('body').empty();
}

// **************************************************************
$(function() {
	$('#bun').bind('click', function() {
		$(this).attr("disabled", "true");
	})
	// 通过focus和blur，通过点击触发时间，使之达到相应的效果
	$('#username').bind('focus', function() {
		$(this).css("border", "3pt solid red")
	}).bind('blur', function() {
		$(this).css("border", "3pt solid yellow")
	})
	// 利用mouseover方法，来让鼠标在不同的位置有不同的显示方法
	$('#bun').mouseover(function() {
		$(this).val("mouseover -已进入");
	}).mouseout(function() {
		$(this).val("mouseout -已退出");
	})
	// 利用hover方法，来控制鼠标，以达到mouserover相同的效果
	$('#bun2').hover(function() {
		$(this).val("已进入");
	}, function() {
		$(this).val("已退出");
	})
});
// ********************************************************
// 隐藏和显示
$(function() {
	$("#hide").bind("click", function() {
		$("#p4").hide("100000");
	})
	$("#show").bind("click", function() {
		$("#p4").show("100000");
	});
	/*
	 * $("#show").click(function(){ $("p").show(); });
	 */
});
function showDemo() {
	$("#divDemo").show('slow');
	/*
	 * $("#divDemo").show('slow',function(){ alert("Div 显示成功"); });
	 */
}
function hideDemo() {
	$("#divDemo").hide('slow');
	/*
	 * $("#divDemo").hide('slow',function(){ alert("Div 隐藏成功"); });
	 */
}
// 显示和隐藏，同时改变标签的值
function togDemo() {
	$("#divDemo").toggle(500, function() {
		if ($('#tog').val() == "显示") {
			$('#divDemo').show('slow');
			$('#tog').val('隐藏');
		} else {
			$('#divDemo').hide('slow');
			$('#tog').val('显示');
		}
	});
}
// 方法一

  $(function() { 
  $('#yidong1').click(function(){
   var div=$('#divDemo1');
  div.animate({left:'100px'},'slow');
	div.animate({left:'0px'},'slow');
}); 
})
 
// 方法二
function yidongDemo() {
	var div = $('#divDemo1');
	div.animate({left : '100px',top : '100px'}, 'slow');//斜移动
	div.animate({left : '0px'}, 'slow');
	div.animate({top : '0px'}, 'slow');
	div.animate({left : '100px'}, 'slow');
	div.animate({top : '100px'}, 'slow');
	div.animate({left : '0px',top : '0px'}, 'slow');
	/*
	 * $('#yidong').ready(function(){ var div=$('#divDemo1');
	 * div.animate({left:'100px'},'slow'); div.animate({left:'0px'},'slow'); });
	 */
}
//方法二
function bianda() {
//	var div = $('#divDemo1');
	$("#divDemo1").animate({
		width : '+=240px',height : '+=320px'
	},3000);
	$("#divDemo1").animate({
		width : '-=240px',height : '-=320px'
	},3000);
}
//方法一
$(function(){
	$('#bianda1').click(function(){
		var div = $('#divDemo1');
		div.animate({
			width : '+=240px',height : '+=320px'
		},3000);
		div.animate({
			width : '-=240px',height : '-=320px'
		},3000);
	})
})

function slideupDemo() {
	$("div")[1].slideUp('slow');
}
function slideDownDemo() {
	$("#divDemo").slideDown('slow');
}
function slideToggleDemo() {
	$("#divDemo").slideToggle('slow');
}
function fadeinDemo() {
	$("#divDemo").fadeIn(5000);
}
function fadeoutDemo() {
	$("#divDemo").fadeOut(5000);
}
