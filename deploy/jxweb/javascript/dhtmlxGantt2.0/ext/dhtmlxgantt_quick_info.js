gantt.config.quickinfo_buttons=["icon_delete","icon_edit"],gantt.config.quick_info_detached=!0,gantt.attachEvent("onTaskClick",function(t){return gantt.showQuickInfo(t),!0}),function(){for(var t=["onEmptyClick","onViewChange","onLightbox","onBeforeTaskDelete","onBeforeDrag"],i=function(){return gantt._hideQuickInfo(),!0},n=0;n<t.length;n++)gantt.attachEvent(t[n],i)}(),gantt.templates.quick_info_title=function(t,i,n){return n.text.substr(0,50)},gantt.templates.quick_info_content=function(t,i,n){return n.details||n.text},gantt.templates.quick_info_date=function(t,i,n){return gantt.templates.task_time(t,i,n)},gantt.showQuickInfo=function(t){if(t!=this._quick_info_box_id){this.hideQuickInfo(!0);var i=this._get_event_counter_part(t);i&&(this._quick_info_box=this._init_quick_info(i),this._fill_quick_data(t),this._show_quick_info(i))}},gantt._hideQuickInfo=function(){gantt.hideQuickInfo()},gantt.hideQuickInfo=function(t){var i=this._quick_info_box;if(this._quick_info_box_id=0,i&&i.parentNode){if(gantt.config.quick_info_detached)return i.parentNode.removeChild(i);"auto"==i.style.right?i.style.left="-350px":i.style.right="-350px",t&&i.parentNode.removeChild(i)}},dhtmlxEvent(window,"keydown",function(t){27==t.keyCode&&gantt.hideQuickInfo()}),gantt._show_quick_info=function(t){var i=gantt._quick_info_box;if(gantt.config.quick_info_detached){i.parentNode&&"#document-fragment"!=i.parentNode.nodeName.toLowerCase()||gantt.$task_data.appendChild(i);var n=i.offsetWidth,e=i.offsetHeight,a=this.getScrollState(),o=this.$task.offsetWidth+a.x-n;i.style.left=Math.min(Math.max(a.x,t.left-t.dx*(n-t.width)),o)+"px",i.style.top=t.top-(t.dy?e:-t.height)-25+"px"}else i.style.top="20px",1==t.dx?(i.style.right="auto",i.style.left="-300px",setTimeout(function(){i.style.left="-10px"},1)):(i.style.left="auto",i.style.right="-300px",setTimeout(function(){i.style.right="-10px"},1)),i.className=i.className.replace("dhx_qi_left","").replace("dhx_qi_left","")+" dhx_qi_"+(1==t?"left":"right"),gantt._obj.appendChild(i)},gantt._init_quick_info=function(){if(!this._quick_info_box){var t=this._quick_info_box=document.createElement("div");t.className="dhx_cal_quick_info",gantt.$testmode&&(t.className+=" dhx_no_animate");var i='<div class="dhx_cal_qi_title"><div class="dhx_cal_qi_tcontent"></div><div  class="dhx_cal_qi_tdate"></div></div><div class="dhx_cal_qi_content"></div>';i+='<div class="dhx_cal_qi_controls">';for(var n=gantt.config.quickinfo_buttons,e=0;e<n.length;e++)i+='<div class="dhx_qi_big_icon '+n[e]+'" title="'+gantt.locale.labels[n[e]]+"\"><div class='dhx_menu_icon "+n[e]+"'></div><div>"+gantt.locale.labels[n[e]]+"</div></div>";i+="</div>",t.innerHTML=i,dhtmlxEvent(t,"click",function(t){t=t||event,gantt._qi_button_click(t.target||t.srcElement)}),gantt.config.quick_info_detached&&dhtmlxEvent(gantt.$task_data,"scroll",function(){gantt.hideQuickInfo()})}return this._quick_info_box},gantt._qi_button_click=function(t){var i=gantt._quick_info_box;if(t&&t!=i){var n=t.className;if(-1!=n.indexOf("_icon")){var e=gantt._quick_info_box_id;gantt.$click.buttons[n.split(" ")[1].replace("icon_","")](e)}else gantt._qi_button_click(t.parentNode)}},gantt._get_event_counter_part=function(t){for(var i=gantt.getTaskNode(t),n=0,e=0,a=i;a&&"gantt_task"!=a.className;)n+=a.offsetLeft,e+=a.offsetTop,a=a.offsetParent;var o=this.getScrollState();if(a){var _=n+i.offsetWidth/2-o.x>gantt._x/2?1:0,c=e+i.offsetHeight/2-o.y>gantt._y/2?1:0;return{left:n,top:e,dx:_,dy:c,width:i.offsetWidth,height:i.offsetHeight}}return 0},gantt._fill_quick_data=function(t){var i=gantt.getTask(t),n=gantt._quick_info_box;gantt._quick_info_box_id=t;var e=n.firstChild.firstChild;e.innerHTML=gantt.templates.quick_info_title(i.start_date,i.end_date,i);var a=e.nextSibling;a.innerHTML=gantt.templates.quick_info_date(i.start_date,i.end_date,i);var o=n.firstChild.nextSibling;o.innerHTML=gantt.templates.quick_info_content(i.start_date,i.end_date,i)};