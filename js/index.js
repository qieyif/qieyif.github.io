//移动设备点击菜单按钮事件
$('#btn-menu').on('click',function(){
	$('nav ul').toggleClass('visible');
});

//渲染list页面
$.ajax({
	type:"get",
	url:"/mock/index.json",
	success:function(data){
//		console.log(data);
		
		var str = '',
			len = data.listInfo.length;
		for(var i=0;i<len;i++){
			str += `<ul class="article-list">
						<li>
							<h3>${data.listInfo[i].title}</h3>
							<p>${data.listInfo[i].introduce}</p>
							<div><span>阅读：${data.listInfo[i].readeAmount}</span> <span>创建：${data.listInfo[i].createTime}</span></div>
							<img src="img/js.jpg"/>
						</li>
					</ul>`;
		}
		$('article').html(str);
		
		//点击每一跳信息 => 跳转到详情页面
		$('.article-list').on('click',function(){
			var index = $(this).index();
			window.location.href = 'html/detail.html?item='+index;
		});
		
	}
});
