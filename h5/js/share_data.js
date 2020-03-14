var _mtac = {};
(function() {
	var mta = document.createElement("script");
	mta.src = "https://pingjs.qq.com/h5/stats.js?v2.0.4";
	mta.setAttribute("name", "MTAH5");
	mta.setAttribute("sid", "500707003");
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(mta, s);
})();


if (typeof (pgvMain) == 'function') {
	pgvMain();
};
var shareData = {
	title: '我丢！扔东西的快乐你想象不到 >>> ',
	/*分享标题*/
	desc: '从你扔掉的东西里竟然能看出你的性格！',
	/*分享描述*/
	img: 'https://mat1.gtimg.com/news/images/static/2019/chenqiwang/drop/images/share6.jpg',
	/*分享图片*/
	link: location.href
};
var MShare = {
	WeiXin: function () {
		WeixinJSBridge.on("menu:share:timeline", function (e) {
			var data = {
				img_width: "120",
				img_height: "120",
				img_url: shareData.img,
				link: shareData.link,
				desc: shareData.desc,
				title: shareData.title
			};
			WeixinJSBridge.invoke("shareTimeline", data, function (res) {
				WeixinJSBridge.log(res.err_msg)
				// alert("shareTimeline");
			})
		});
		WeixinJSBridge.on("menu:share:weibo", function () {
			WeixinJSBridge.invoke("shareWeibo", {
				"content": shareData.desc,
				"url": shareData.link
			}, function (res) {
				WeixinJSBridge.log(res.err_msg)
				// alert("menu:share:weibo");
			})
		});
		WeixinJSBridge.on('menu:share:appmessage', function (argv) {
			WeixinJSBridge.invoke("sendAppMessage", {
				img_width: "120",
				img_height: "120",
				img_url: shareData.img,
				link: shareData.link,
				desc: shareData.desc,
				title: shareData.title
			}, function (res) {
				WeixinJSBridge.log(res.err_msg)
				// alert("sendAppMessage");
			})
		})
	},
	qqNews: function () {
		try {
			window.TencentNews.shareFromWebView(shareData.title, shareData.desc, shareData.img);
		} catch (e) { }
	},
	mqq: function () {
		// 自定义手Q分享内容
		ppo.loadjs('https://pub.idqqimg.com/qqmobile/qqapi.js?_bid=152', function () {
			try {
				window.mqq.data.setShareInfo({
					share_url: shareData.link,
					title: shareData.title,
					desc: shareData.desc,
					image_url: shareData.img
				});
			} catch (e) { }
		});
	},
	init: function () {
		var _this = this;
		_this.mqq();
		// qqnews
		_this.qqNews();
		document.addEventListener('WeixinJSBridgeReady', function () {
			_this.WeiXin()
		})
	}
};
MShare.init();

var UA = function () {
	var a = navigator.userAgent.toLowerCase();
	return {
		ipad: /ipad/.test(a),
		iphone: /iphone/.test(a),
		android: /android/.test(a),
		qqnews: /qqnews/.test(a),
		weixin: /micromessenger/.test(a),
		qqnews_version: a.match(/qqnews/i) == "qqnews" ? a.split('qqnews/')[1] : ''
	}
};

var nickname = '我的昵称';
var headimgurl = "";
if (UA().weixin) {
	function getUserInfo() {
		$.ajax({
			url: 'https://yc.static.qq.com/?service=App.Getinfo_Getinfo.getindex',
			dataType: 'jsonp',
			jsonp: "callback",
			jsonpCallback: "infocallback",
			success: function (data) {
				console.log(data)
				_e = data;
				infocallback(data)
			}
		})
	}

	function getwxUsrInfo() {
		var g_appid = "wxca92e8bcb9f28c93";
		var authserver = "https://yc.static.qq.com/?service=App.Getinfo_Getinfo.Getuserinfo&original_uri=" + encodeURIComponent(location.href);
		var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + g_appid + '&redirect_uri=' + encodeURIComponent(authserver) + '&response_type=code&scope=snsapi_userinfo&state=' + encodeURIComponent(location.href) + '#wechat_redirect';
		console.log(url)
		document.location.href = url
	}
	function infocallback(e) {
		console.log(e)
		if (e.data.openid == null) {
			getwxUsrInfo()
		} else {
			nickname = e.data.nickname;
			headimgurl = e.data.headimgurl
		}
	}
	getUserInfo()
}
/*  |xGv00|7a17c2b0302190df75dceb9f5e49940a */