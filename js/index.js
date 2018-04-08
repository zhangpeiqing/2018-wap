$(function(){
		//tab切换
	$(".m_01_tab li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		$(".m_01_tab_content").eq($(this).index()).show().siblings(".m_01_tab_content").hide();	
	})

	//得天独厚的优势，让你永无后顾之忧tab
	$(".navigation").click(function(){
		$(".navigation_warp").toggle();
	});
	//text_link
	$(".text_link ul li a").click(function(){
		$(this).addClass("in").parent("li").siblings("li").children("a").removeClass("in");
		$(this).siblings("span").css("background","#ff8b58").parent("li").siblings("li").children("span").css("background","#999");
	})
})