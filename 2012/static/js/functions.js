/*//////////////////////////////////////////////////////////
//
//  # Functions
//
//  - Auth: ekkun.com [eiji@ekkun.com]
//  - 2012-03-26 (Mon)
//
//////////////////////////////////////////////////////////*/

jQuery(document).ready(function(){

	// Page Scroller
	adjPosition = -65;

	// Scroll Flow
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > 0) {
//			jQuery('#header').css({ 'position': 'fixed', 'top': '0px', 'opacity': '0.8' });
			jQuery('#header').css({ 'opacity': '0.8' });
			jQuery('#header').addClass('box_shadow');
		} else {
//			jQuery('#header').css({ 'position': 'relative', 'top': '0px', 'opacity': '1.0' });
			jQuery('#header').css({ 'opacity': '1.0' });
			jQuery('#header').removeClass('box_shadow');
		}
	});

	// Close function for Alart
	jQuery('[data-dismiss="alert"]').click(function(){
		jQuery(this).parent().fadeOut(500, function () {
			jQuery(this).remove();
		});
	});

	// Added Class to DIV.ENTRY
//	jQuery('div.posts:odd').addClass('even');

	//
	jQuery('div.posts').mouseover(
		function() {
			jQuery(this).addClass('hover');
		});
	jQuery('div.posts').mouseout(
		function() {
			jQuery(this).removeClass('hover');
	});

	// Display Google Maps
	var mapTab1 = '<iframe width="570" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=q&amp;source=s_q&amp;hl=ja&amp;geocode=&amp;q=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;aq=&amp;brcurrent=3,0x60188c3b07a8fe2d:0x3a8822c1af9fc092,0&amp;ie=UTF8&amp;t=m&amp;ll=35.713904,139.760427&amp;spn=0.013938,0.024419&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe><p><small><a href="http://maps.google.co.jp/maps?f=q&amp;source=embed&amp;hl=ja&amp;geocode=&amp;q=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;aq=&amp;brcurrent=3,0x60188c3b07a8fe2d:0x3a8822c1af9fc092,0&amp;ie=UTF8&amp;t=m&amp;ll=35.713904,139.760427&amp;spn=0.013938,0.024419&amp;z=15&amp;iwloc=A" target="_blank">大きな地図で見る</a></small></p>';
	var mapTab2 = '<iframe width="570" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=d&amp;source=s_d&amp;saddr=%E4%B8%B8%E3%81%AE%E5%86%85%E7%B7%9A%E6%9C%AC%E9%83%B7%E4%B8%89%E4%B8%81%E7%9B%AE%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FRnXIAIdiJFUCCFOtw-VKxEOeg%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.708486,139.760406&amp;sspn=0.006577,0.010568&amp;brcurrent=3,0x60188c3a06e5a53f:0xe2aaa6e06adf653f,0&amp;dirflg=w&amp;mra=ltm&amp;ie=UTF8&amp;t=m&amp;ll=35.708486,139.760406&amp;spn=0.006969,0.012209&amp;z=16&amp;output=embed"></iframe><p><small><a href="http://maps.google.co.jp/maps?f=d&amp;source=embed&amp;saddr=%E4%B8%B8%E3%81%AE%E5%86%85%E7%B7%9A%E6%9C%AC%E9%83%B7%E4%B8%89%E4%B8%81%E7%9B%AE%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FRnXIAIdiJFUCCFOtw-VKxEOeg%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.708486,139.760406&amp;sspn=0.006577,0.010568&amp;brcurrent=3,0x60188c3a06e5a53f:0xe2aaa6e06adf653f,0&amp;dirflg=w&amp;mra=ltm&amp;ie=UTF8&amp;t=m&amp;ll=35.708486,139.760406&amp;spn=0.006969,0.012209&amp;z=16" target="_blank">大きな地図で見る</a></small></p>';
	var mapTab3 = '<iframe width="570" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=d&amp;source=s_d&amp;saddr=%E5%A4%A7%E6%B1%9F%E6%88%B8%E7%B7%9A%E6%9C%AC%E9%83%B7%E4%B8%89%E4%B8%81%E7%9B%AE%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FSbZIAIdxZFUCCHvZPeHx0JLCA%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.70874,139.76028&amp;sspn=0.003289,0.005284&amp;brcurrent=3,0x60188c3ba9f3a89f:0xac7a8db69e5bbe6c,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.70859,139.760277&amp;spn=0.006969,0.012209&amp;z=16&amp;output=embed"></iframe><p><small><a href="http://maps.google.co.jp/maps?f=d&amp;source=embed&amp;saddr=%E5%A4%A7%E6%B1%9F%E6%88%B8%E7%B7%9A%E6%9C%AC%E9%83%B7%E4%B8%89%E4%B8%81%E7%9B%AE%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FSbZIAIdxZFUCCHvZPeHx0JLCA%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.70874,139.76028&amp;sspn=0.003289,0.005284&amp;brcurrent=3,0x60188c3ba9f3a89f:0xac7a8db69e5bbe6c,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.70859,139.760277&amp;spn=0.006969,0.012209&amp;z=16" target="_blank">大きな地図で見る</a></small></p>';
	var mapTab4 = '<iframe width="570" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=d&amp;source=s_d&amp;saddr=%E5%8D%83%E4%BB%A3%E7%94%B0%E7%B7%9A%E6%B9%AF%E5%B3%B6%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FVveIAIdhLdUCCnTU5oFIYwYYDFmFadk7PWTDw%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.70874,139.76028&amp;sspn=0.003289,0.005284&amp;brcurrent=3,0x60188c2474a30781:0x1d604f9a127ca6fd,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.708834,139.764977&amp;spn=0.006969,0.012209&amp;z=16&amp;output=embed"></iframe><p><small><a href="http://maps.google.co.jp/maps?f=d&amp;source=embed&amp;saddr=%E5%8D%83%E4%BB%A3%E7%94%B0%E7%B7%9A%E6%B9%AF%E5%B3%B6%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FVveIAIdhLdUCCnTU5oFIYwYYDFmFadk7PWTDw%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.70874,139.76028&amp;sspn=0.003289,0.005284&amp;brcurrent=3,0x60188c2474a30781:0x1d604f9a127ca6fd,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.708834,139.764977&amp;spn=0.006969,0.012209&amp;z=16" target="_blank">大きな地図で見る</a></small></p>';
	var mapTab5 = '<iframe width="570" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.jp/maps?f=d&amp;source=s_d&amp;saddr=%E5%8D%83%E4%BB%A3%E7%94%B0%E7%B7%9A%E6%A0%B9%E6%B4%A5%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FU8DIQIdaaRUCCm9AkPRLYwYYDEhu0kQzRohzg%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.708835,139.76498&amp;sspn=0.006577,0.010568&amp;brcurrent=3,0x60188c2e154eb4a9:0x7fd7659ff827e985,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.714113,139.761844&amp;spn=0.013938,0.024419&amp;z=15&amp;output=embed"></iframe><p><small><a href="http://maps.google.co.jp/maps?f=d&amp;source=embed&amp;saddr=%E5%8D%83%E4%BB%A3%E7%94%B0%E7%B7%9A%E6%A0%B9%E6%B4%A5%E9%A7%85&amp;daddr=35.710302,139.760374(%E4%BC%8A%E8%97%A4%E5%9B%BD%E9%9A%9B%E5%AD%A6%E8%A1%93%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)&amp;hl=ja&amp;geocode=FU8DIQIdaaRUCCm9AkPRLYwYYDEhu0kQzRohzg%3BFV7lIAId9pJUCA&amp;aq=&amp;sll=35.708835,139.76498&amp;sspn=0.006577,0.010568&amp;brcurrent=3,0x60188c2e154eb4a9:0x7fd7659ff827e985,0&amp;dirflg=w&amp;mra=ls&amp;ie=UTF8&amp;t=m&amp;ll=35.714113,139.761844&amp;spn=0.013938,0.024419&amp;z=15" target="_blank">大きな地図で見る</a></small></p>';
	jQuery('#tab1 a').click(function(){
		jQuery('#mapTab > div').show().html(mapTab1);
	});
	jQuery('#tab2 a').click(function(){
		jQuery('#mapTab > div').show().html(mapTab2);
	});
	jQuery('#tab3 a').click(function(){
		jQuery('#mapTab > div').show().html(mapTab3);
	});
	jQuery('#tab4 a').click(function(){
		jQuery('#mapTab > div').show().html(mapTab4);
	});
	jQuery('#tab5 a').click(function(){
		jQuery('#mapTab > div').show().html(mapTab5);
	});

	// For IE
	if (!($.support.borderRadius)) {
	}

});

