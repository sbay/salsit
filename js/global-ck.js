(function(e){var t={init:function(){this.helpers.init();this.bind();this.homePage();this.limited_rack();this.hot_styles()},bind:function(){e(document).keydown(function(t){t.keyCode==37?e(".bx-prev").click():t.keyCode==39&&e(".bx-next").click()});var t=e(".product .gallery .more_images img");t.on("mouseover",function(){e(this).click()})},homePage:function(){var t=e(".product .label-radio-configurable");t.length&&t.each(function(t){var n=e(this).find("span").text();e(this).append('<div class="ss-radio">'+n+"</div>")});e(".ss-radio",t).on("click",function(){e(this).parent().find("input:radio").attr("checked","checked");e(".ss-radio",t).removeClass("checked");e(this).addClass("checked")})},limited_rack:function(){if(e("body").hasClass("category-limited-rack")){e(".products-grid").bxSlider({minSlides:3,maxSlides:3,slideWidth:300,infiniteLoop:!0,hideControlOnEnd:!0});e(".bx-prev, .bx-next").click(function(e){e.preventDefault})}},hot_styles:function(){console.log("adsfsda");if(e("body").hasClass("category-hot-styles")){console.log("asdf");e(".category-image").append('<div class="category-menu"><a href="/hot-styles/be-cute">Be Cute</a> | <a href="/hot-styles/be-wild">Be Wild</a></div>')}},fancybox:{init:function(){e("[rel~='fancybox']").fancybox(this.options())},options:function(t){return e.extend({padding:0,autoSize:!0,autoCenter:!0,maxWidth:1e3,maxHeight:800,arrows:!0,closeBtn:!0,loop:!1,wrapCSS:"no-scrollbars",iframe:{scrolling:"no"}},t)},mediaOptions:function(t){return e.extend({type:"iframe",scrolling:"no",padding:0,margin:[40,0,20,0],wrapCSS:"no-scrollbars",autoCenter:!0,closeClick:!1,fitToView:!0,loop:!1,width:1e3,beforeShow:function(){e("body").css({overflow:"hidden"})},afterClose:function(){e("body").css({overflow:"auto"})}},t)}},helpers:{scrollElement:"html, body",scrolling:!1,init:function(){this.toTop();e("html, body").each(function(){var t=e(this).attr("scrollTop");e(this).attr("scrollTop",t+1);if(e(this).attr("scrollTop")==t+1){this.scrollElement=this.nodeName.toLowerCase();e(this).attr("scrollTop",t);return!1}});e('a[rel="external"]').click(function(){window.open(e(this).attr("href"));return!1});e("a").each(function(){if(!e(this).hasClass("live")&&!e(this).hasClass("fancybox")&&e(this).attr("rel")!="fancybox"){var t=new RegExp("/"+window.location.host+"/"),n=new RegExp("postback");!t.test(this.href)&&!n.test(this.href.toLowerCase())&&e(this).click(function(e){e.preventDefault();e.stopPropagation();window.open(this.href,"_blank")})}})},padWithZeros:function(e,t){e=e.toString();return e.length<t?this.padWithZeros("0"+e,t):e},scrollContent:function(n,r){var i="+="+n+"px";e(t.helpers.scrollElement).animate({scrollTop:i},r,function(){t.helpers.scrolling&&t.helpers.scrollContent(n,r)})},toTop:function(){e("#totop").hide();e(window).scroll(function(){e(this).scrollTop()>700?e("#totop").fadeIn():e("#totop").fadeOut()});e("#totop").click(function(){e("body, html").animate({scrollTop:0},800);return!1})}}};e(function(){e("body").append('<div id="totop"></div>');t.init()});(function(e){e.fn.extend({customSelect:function(t){var n={customClass:null,mapClass:!0,mapStyle:!0},r=function(e,t){var n=e.find(":selected"),r=t.children(":first"),i=n.html()||"&nbsp;";r.html(i);setTimeout(function(){t.removeClass("customSelectOpen")},60)};if(typeof document.body.style.maxHeight=="undefined")return this;t=e.extend(n,t);return this.each(function(){var n=e(this),i=e('<span class="customSelectInner" />'),s=e('<span class="customSelect" />');s.append(i);n.after(s);t.customClass&&s.addClass(t.customClass);t.mapClass&&s.addClass(n.attr("class"));t.mapStyle&&s.attr("style",n.attr("style"));n.addClass("hasCustomSelect").on("update",function(){r(n,s);var e=parseInt(n.outerWidth(),10)-(parseInt(s.outerWidth(),10)-parseInt(s.width(),10));s.css({display:"inline-block"});var t=s.outerHeight();n.attr("disabled")?s.addClass("customSelectDisabled"):s.removeClass("customSelectDisabled");i.css({width:e,display:"inline-block"});n.css({"-webkit-appearance":"menulist-button",width:s.outerWidth(),position:"absolute",opacity:0,height:t,fontSize:s.css("font-size")})}).on("change",function(){s.addClass("customSelectChanged");r(n,s)}).on("keyup",function(){n.blur();n.focus()}).on("mousedown",function(){s.removeClass("customSelectChanged").addClass("customSelectOpen")}).focus(function(){s.removeClass("customSelectChanged").addClass("customSelectFocus")}).blur(function(){s.removeClass("customSelectFocus customSelectOpen")}).hover(function(){s.addClass("customSelectHover")},function(){s.removeClass("customSelectHover")}).trigger("update")})}})})(jQuery)})($j);