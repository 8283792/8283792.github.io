$(function(){
	
	
	var manageListIn = $(".job_nr ul > li");
	manageListIn.data("opened",false);
	manageListIn.find("span").removeClass("hot");
	manageListIn.find("h2");
	manageListIn.each(function(){
		var me = $(this);
		var btn = me.children("h2");
		btn.on("click",function(){
			if(me.data("opened")){
				btn.removeClass("hot");
				me.children(".job_xs")
				  .slideUp();
			}else{
				btn.addClass("hot");
				me.children(".job_xs")
				  .slideDown();
			}
			me.data("opened",!me.data("opened"));

		});
		
		$(manageListIn[0]).find(".job_xs").slideDown();
		$(manageListIn[0]).data("opened",true);

	});


//合作机构
$('.hzjg_xgnr').each(function(){
$(this).find('li:gt(3)').css({"border-top":"none"});
});



//首页弹出层
			//var djw = $(".btm p");
			var gb = $(".sy_zjnrxxr strong");
			var ycc = $(".sy_zjpf");
			/*djw.click(function(){
				ycc.show();
			});*/
			gb.click(function(){
				ycc.hide();
			});
//底部滑动门
			var box = $(".jwsy_cp");
			box.each(function(){
				var me = $(this);
				var _sub = me.find(".jwsy_cpsub li");
				var _center = me.find(".jwsy_cpnr .jwsy_cpnrb1");
				_sub.on("hover",function(){
					var _sub1 = $(this);
					var _inxex2 = _sub1.index();
					_sub1.addClass("hot").siblings().removeClass("hot");
					_center.eq(_inxex2).show().siblings().hide();
					});
			});	


	//关于我们
	var dbox = $(".ab_box");
	dbox.each(function(){
		var me = $(this);
		var _dsub = me.find(".rfdz_sub li");
		var _dcenter = me.find(".rfdz_zcbox .rfdz_zcnr");
		_dsub.on("click",function(){
			var _dsub1 = $(this);
			var _dinxex2 = _dsub1.index();
			_dsub1.addClass("hot").siblings().removeClass("hot");
			_dcenter.eq(_dinxex2).show().siblings().hide();
			});
	});	


//排序js

	
	var me =$(this);
	var _subpx = me.find(".jwsy_cpbg tr.bod td");
	
	_subpx.on("click",function(){
			var _ssub = $(this);
			_ssub.toggleClass("hot");
	})
	
	

//首页banner下滑动加边框效果

	var me1 =$(this);
	var _subsy = me1.find(".jwsy_fl li");
	
	_subsy.on("hover",function(){
			var _subsy1 = $(this);
			_subsy1.toggleClass("hot");
	})
	
	//公墓基金页面查看更多
	$(".ck").click(function(){
		$(".jwsy_cpbg .jwgm_gd").toggleClass("gaodu");
	});
	
	//首页查看更多收起
	
	$(".ckgd_bt").click(function(){
		$(".jwsy_cpbg .jwsy_cpgd").toggleClass("gaodu");
		$(".jwsy_cpbg .ckgd_bt").toggleClass("hotbg");
		
	});

	
	
		var hovertd =$(".jwsy_cpbg tr");
		hovertd.hover(function(){
			$(this).addClass("hoverStatus");
		},function(){
			$(this).removeClass("hoverStatus");
	});

	
	
	//关于我们
	var abbox = $(".ab_box");
	abbox.each(function(){
		var me = $(this);
		var _absub = me.find(".ab_sub li");
		var _abcenter = me.find(".ab_nr .ab_box1");
		_absub.on("click",function(){
			var _absub1 = $(this);
			var _abinxex2 = _absub1.index();
			_absub1.addClass("hot").siblings().removeClass("hot");
			_abcenter.eq(_abinxex2).show().siblings().hide();
			});
	});	

	//投资范围
		var zbox = $(".ab_box");
		zbox.each(function(){
			var me = $(this);
			var _zsub = me.find(".jjxq_sub li");
			var _zcenter = me.find(".jjbox .jj_nr");
			_zsub.on("click",function(){
				var _zsub1 = $(this);
				var _zinxex2 = _zsub1.index();
				_zsub1.addClass("hot").siblings().removeClass("hot");
				_zcenter.eq(_zinxex2).show().siblings().hide();
				});
		});	
	

	
	var pfbox = $(".jwsy_wxnr");
	var pfdj = $(".jwsy_wxnr p");
	pfdj.click(function(){
		pfbox.hide();
	});
	
	//投资银行
	var tbox = $(".ab_box");
	tbox.each(function(){
		var me = $(this);
		var _tsub = me.find(".tzyh_sub li");
		var _tcenter = me.find(".tzyh_box .tzyh_nr1");
		_tsub.on("click",function(){
			var _tsub1 = $(this);
			var _tinxex2 = _tsub1.index();
			_tsub1.addClass("hot").siblings().removeClass("hot");
			_tcenter.eq(_tinxex2).show().siblings().hide();
			});
	});	

	//私募基金
	var sbox = $(".ab_box2");
	sbox.each(function(){
		var me = $(this);
		var _ssub = me.find(".tzyh_sub1 li");
		var _scenter = me.find(".smjj_box .smjj_nr");
		_ssub.on("click",function(){
			var _ssub1 = $(this);
			var _sinxex2 = _ssub1.index();
			_ssub1.addClass("hot").siblings().removeClass("hot");
			_scenter.eq(_sinxex2).show().siblings().hide();
			});
	});	


	
//head nav
	$(".navN ul li").click(function(){ 
		$(this).addClass("hover").siblings().removeClass("hover");
	})
//
	$("#Tpro-botNav li").click(function(){ 
		$(this).addClass("hover").siblings().removeClass("hover");
		var index=$(this).index();
		$("#Tpro-cont > div").eq(index).show().siblings().hide();	
	})

	$("#Tpro-botNav2 li").click(function(){ 
		$(this).addClass("hover").siblings().removeClass("hover");
		var index=$(this).index();
		$("#Tpro-cont2 > div").eq(index).show().siblings().hide();	
	})	

	$(".tab-tit li").click(function(){ 
		$(this).addClass("selected").siblings().removeClass("selected");
		var index=$(this).index();
		$("#tab-cont > div").eq(index).show().siblings().hide();
		var heit=$("#tab-cont > div").eq(index).height();
		if(heit>295){
			$("#tab-cont > div").eq(index).addClass("scroolY").siblings().removeClass("scroolY");
		}

	})
	var heit=$("#tab-cont > div:first").height();
	if(heit>295){
		$("#tab-cont > div:first").addClass("scroolY");
	}

//table change Bg
	$(".product-table2 tr:even").addClass("tdBg01");

//public-list bottom0
	len=$("#bonus-ul li").length;
	$("#bonus-ul li").eq(len-1).addClass("line");
	$("#bonus-ul li").eq(len-2).addClass("line");

	len=$("#bonus-ul2 li").length;
	$("#bonus-ul2 li").eq(len-1).addClass("line");
	$("#bonus-ul2 li").eq(len-2).addClass("line");

	len=$("#bonus-ul3 li").length;
	$("#bonus-ul3 li").eq(len-1).addClass("line");
	$("#bonus-ul3 li").eq(len-2).addClass("line");

	len=$("#bonus-ul4 li").length;
	$("#bonus-ul4 li").eq(len-1).addClass("line");
	$("#bonus-ul4 li").eq(len-2).addClass("line");

	len=$("#bonus-ul5 li").length;
	$("#bonus-ul5 li").eq(len-1).addClass("line");
	$("#bonus-ul5 li").eq(len-2).addClass("line");

		
//fundDetail tit

	$("#pic01").click(function(){		 
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();
			$(".pic01").addClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");	
		})		
	$("#pic02").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();
			$(".pic01").removeClass("Pic01on");
			$(".pic02").addClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})		
	$("#pic03").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").addClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})			
	$("#pic04").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").addClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})	
	$("#pic05").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").addClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})			
	$("#pic06").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").addClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})	
	$("#pic07").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").addClass("Pic07on");
			$(".pic08").removeClass("Pic08on");		
		})			
	$("#pic08").click(function(){
    		var index=$(this).index();
   		 	$(".publicFund-proDetailCont > div").eq(index).show().siblings().hide();

			$(".pic01").removeClass("Pic01on");
			$(".pic02").removeClass("Pic02on");
			$(".pic03").removeClass("Pic03on");
			$(".pic04").removeClass("Pic04on");
			$(".pic05").removeClass("Pic05on");
			$(".pic06").removeClass("Pic06on");
			$(".pic07").removeClass("Pic07on");
			$(".pic08").addClass("Pic08on");		
		})

//
	$(".netchartTit li:last").addClass("line");
	$(".netchartTit li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index=$(this).index();
		$(".netchartCont > div").eq(index).show().siblings().hide();

	})	
	
	$(".publicFund-infor .dl dd:last").addClass("line");

//float tuijian
	$(".publicFund-packUp").click(function(){ 
		$(this).hide();
		$("#div").slideUp("fast");
		$(".floatTJIcon2").addClass("floatTJIcon");
	});


//new list
	$(".right").height($(".new-list").height());
	$(".left").height($(".new-list").height());
    $("#menu-list li").click(function(){
   		var index=$(this).index(); 
    	$(this).addClass("selected").siblings().removeClass("selected");
    	$("#menu-list li").children("img").remove();	
		$(this).append("<img src='images/listIcon2.png' class='img' />");
		$(".right-cont > div").eq(index).show().siblings().hide();

    }) 
//privateFund scroolY
	var heit=$("#pribate-table > div").height();
	if(heit>295){
		$("#pribate-table > div").addClass("scroolY");
	}
//nav
	$(".navN>ul>li").hover(function(){ 
		var index=$(this).index();
		$(".navN ul li ul").hide().eq(index).show();

	},function(){ 
		var index=$(this).index();
		$(".navN ul li ul").eq(index).hide();

	});

	


});	

//焦点图
var slidePicIndex = 0, slidePicCount;
$(function(){
	slidePicCount = $("#banner_list a").length;
	var circleDotDom = ""; 
	for(var i=0; i < slidePicCount; i++){
		if(i==0){
			circleDotDom += "<li class=\"on\">" + (i+1) + "</li>";
		}else{
			circleDotDom += "<li>" + (i+1) + "</li>";			
		}
	}
	$(".circleDot").html(circleDotDom);

	$("#banner_list a:not(:first-child)").hide();
	$("#banner li").click(function() {
		var i = $(this).index();//获取li在同辈元素中的索引位置
		slidePicIndex = i;
		if (i >= slidePicCount) return;
		$("#banner_list a").filter(":visible").fadeOut(500);//隐藏图片
		$("#banner_list a").eq(i).fadeIn(1000);//显示图片
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});
	var t = setInterval("showAuto()", 4000);//四秒循环执行
	$("#banner").hover(
		function(){
			clearInterval(t);
			$(".iconLR>img").show();
		}, 
		function(){
			t = setInterval("showAuto()", 4000);
			$(".iconLR>img").hide();
		}
	);	
});
function showAuto(){
	slidePicIndex = slidePicIndex >=(slidePicCount - 1) ? 0 : ++slidePicIndex;
	$("#banner li").eq(slidePicIndex).trigger('click');
}
function slidePic(type){
	var $obj = $(".circleDot .on");
	if(type == "next"){
		$obj.next().click();
	}else{		
		$obj.prev().click();
	}
}


//float tuijian
function click_show(n){
	var tit = document.getElementById(n);
	var cont= document.getElementById("con_"+n);
	var arrow= document.getElementById("packUp");
	if (tit.style.display == "block") {
		tit.style.display = "none";
		cont.className="floatTJIcon";
		arrow.style.display = "none";				
	} else if (tit.style.display == "none") {
		tit.style.display = "block";
		cont.className="floatTJIcon2";
		arrow.style.display = "block";
	}
}




