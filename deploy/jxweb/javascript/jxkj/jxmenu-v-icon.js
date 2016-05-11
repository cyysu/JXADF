var JxMenu=function(){var e=function(e,t){this.menuDiv="object"==typeof t?t:$("#"+t);var n={idKey:"app",pIdKey:"parent",menuData:null,iconBase:""};this.setting=$.extend(n,e),this.initData(),t.addClass("jxMenuDiv"),"en"==langCode&&$(".popupWin").addClass("en")},t=null;return e.prototype.transformToTreeData=function(e){var t,n,i=e.idKey,p=e.pIdKey,a=e.menuData;if(childKey="children",!i||""==i||!a)return[];var o=[],u=[];for(t=0,n=a.length;n>t;t++)u[a[t][i]]=a[t];for(t=0,n=a.length;n>t;t++)u[a[t][p]]&&a[t][i]!=a[t][p]?(u[a[t][p]][childKey]||(u[a[t][p]][childKey]=[]),u[a[t][p]][childKey].push(a[t])):o.push(a[t]);return o},e.prototype.mouseOverEventHandler=function(e){t&&clearTimeout(t);var n,i=$(this).offset().top-e.data.menuDiv.position().top,p=$(window).height(),a=e.data.menuDiv.outerHeight(),o=$(document).scrollTop(),u=p-(i-o),r=$(".subMenu",$(this)[0].parentNode),s=$(".popupWin"),l=20,d=r.children();if(d.length<=0)return s.hide(),!1;var c=d.clone(!0);c.last().css({"border-bottom":"none","margin-bottom":"0"}),r.hide(),e.data.curSubMenu=c,s.removeAttr("style").html("<div class='popupWin_bg'></div><div class='popupWin_content'></div>").find(".popupWin_content").append(c).show(),subMenuHeight=s.height(),u>=subMenuHeight?n=i:subMenuHeight>u&&a>subMenuHeight?n=o+p-subMenuHeight-5:(subMenuHeight=a-l,n=o-e.data.menuDiv.position().top);var m=n-e.data.menuDiv.parent().position().top;0>m&&(m=0),s.css({top:m,left:"246px",height:subMenuHeight,display:"block"})},e.prototype.mouseOutEventHandler=function(){t=setTimeout(function(){$(".popupWin").hide()},20)},e.prototype.createMenu=function(e,t){if(null!=e)for(var n=this.menuDiv,i=!1,p=0;p<e.length;p++){if(!e[p].parent){var a=$('<span class="icon-module icon-module-'+e[p].app.toLowerCase()+'"></span>'),o=$('<div class="menuContainer"></div>').append(a).append($('<div id="'+e[p].app+'" class="menuItem" '+(e[p].appUrl?'appUrl="'+e[p].appUrl:"")+'" app="'+e[p].app+'" appId="'+e[p].maxAppsId+'">'+e[p].description+"</div> ")),u=$("<div class='topMenu'></div>");u.append(o).appendTo(n),null!=e[p].children&&this.createMenu(e[p].children,$('<div class="subMenu"></div>').appendTo(u))}if("MODULE"==e[p].appType&&e[p].parent){i=!1;var r=$('<dt appUrl="'+e[p].appUrl+'" app="'+e[p].app+'" appId="'+e[p].maxAppsId+'">'+e[p].description+"</dt>");if(null!=t&&(t.length>1&&"DL"==t[0].tagName||"DD"==t[0].tagName)&&(t=t.closest(".subMenu")),null!=t){var s=$("<dl/>").append(r).appendTo(t);null!=e[p].children&&this.createMenu(e[p].children,s)}}"APP"==e[p].appType&&t&&("DL"!=t[0].tagName&&"DD"!=t[0].tagName&&(t=$("<dl/>").appendTo(t)),i?$('<em appUrl="'+e[p].appUrl+'" app="'+e[p].app+'" appId="'+e[p].maxAppsId+'">'+e[p].description+"</em>").appendTo(t):(t=$('<dd><em appUrl="'+e[p].appUrl+'" app="'+e[p].app+'" appId="'+e[p].maxAppsId+'">'+e[p].description+"</em></dd>").appendTo(t),i=!0))}},e.prototype.menuClickEventHandler=function(e){void 0!=$(this).attr("appUrl")&&""!=$(this).attr("appUrl")&&"function"==typeof e.data.onMenuClick&&(e.data.curSubMenu&&e.data.curSubMenu.toggle(),e.data.onMenuClick(e),$(".popupWin").hide())},e.prototype.menuHisBtnClickEventHandler=function(e){var t=$(".popupWin"),n=$("#menuAppBar");t.css({top:n.position().top+n.outerHeight(),left:"22px",height:"250px"}),t.is(":visible")||(WebClientBean.getMenuHisData(function(e){function n(e,n){for(var i=$("<dt/>").text(n),p=$("<dd/>"),a=0;a<e.length;a++)$("<em/>").text(e[a].DESCRIPTION).attr("appUrl",e[a].APPURL).attr("app",e[a].APP).appendTo(p);$("<dl/>").addClass("subMemuFont").append(i).append(p).appendTo(t)}t.empty(),null!=e&&(n(e.favoriteApp,getLangString("home.myFavorite")),n(e.recentApp,getLangString("home.recentVisit")))}),e.data.curSubMenu=t),t.toggle()},e.prototype.loadModuleImg=function(e,t){var n=$(e).find(".moduleIcon"),i=$(e).find(".menuItem"),p=this.setting.iconBase+"menu/"+i.attr("ID").toLowerCase()+t+".png";this.imgLoad(p,n)},e.prototype.initData=function(){if(null!=this.setting.menuData){var e=$(".popupWin"),n=this.transformToTreeData(this.setting);this.menuDiv.on("mouseenter",".menuContainer",this,this.mouseOverEventHandler),this.menuDiv.on("mouseleave",".menuContainer",$.proxy(this.mouseOutEventHandler,this)),this.menuDiv.on("click",".menuItem, .subMenu dt, .subMenu  em",this,this.menuClickEventHandler),$(".visitHisBtn").on("click",null,this,this.menuHisBtnClickEventHandler),this.autoComplete(),e.on("click","em",this,this.menuClickEventHandler),e.on("mouseleave",function(){$(this).hide()}).on("mouseenter",$.proxy(function(){t&&clearTimeout(t)},this)),this.createMenu(n,null)}},e.prototype.autoComplete=function(){var e=[];$.each(this.setting.menuData,function(t,n){e.push({label:n.description,value:n.description,target:"#mainMenu [appid="+n.maxAppsId+"]",appUrl:n.appUrl})});var t=$.fn.menu;$.widget.bridge("menu",$.ui.menu),$(".input-txt","#menuAppBar").autocomplete({source:e,select:function(e,t){$(t.item.target).trigger(t.item.appUrl?"click":"mouseover")}}).on("keypress",function(e){var t=$(".ui-autocomplete");t.is(":visible")&&13==e.keyCode&&(t.find("a").eq(0).trigger("click"),$(this).blur())}).on("focusin",function(){$(".popupWin").hide(),$(this).val("")}),$.fn.menu=t},e.prototype.imgLoad=function(e,t){var n=new Image;n.src=e,n.complete?t.attr("src",e):n.onload=function(){t.attr("src",e),n.onload=null}},e}();