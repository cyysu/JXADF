!function(){function e(e){if(!e)throw"Languages-by-groups list are required for construct selectbox";var t,n=[],i="";for(t in e)for(var o in e[t]){var a=e[t][o];"en_US"==a?i=a:n.push(a)}return n.sort(),i&&n.unshift(i),{getCurrentLangGroup:function(t){e:{for(var n in e)for(var i in e[n])if(i.toUpperCase()===t.toUpperCase()){t=n;break e}t=""}return t},setLangList:function(){var t,n={};for(t in e)for(var i in e[t])n[e[t][i]]=i;return n}()}}var t=function(){var e=function(e,t,n){var n=n||{},i=n.expires;if("number"==typeof i&&i){var o=new Date;o.setTime(o.getTime()+1e3*i),i=n.expires=o}i&&i.toUTCString&&(n.expires=i.toUTCString());var a,t=encodeURIComponent(t),e=e+"="+t;for(a in n)t=n[a],e+="; "+a,!0!==t&&(e+="="+t);document.cookie=e};return{postMessage:{init:function(e){window.addEventListener?window.addEventListener("message",e,!1):window.attachEvent("onmessage",e)},send:function(e){var t=Object.prototype.toString,n=e.fn||null,i=e.id||"",o=e.target||window,a=e.message||{id:i};e.message&&"[object Object]"==t.call(e.message)&&(e.message.id||(e.message.id=i),a=e.message),e=window.JSON.stringify(a,n),o.postMessage(e,"*")},unbindHandler:function(e){window.removeEventListener?window.removeEventListener("message",e,!1):window.detachEvent("onmessage",e)}},hash:{create:function(){},parse:function(){}},cookie:{set:e,get:function(e){return(e=document.cookie.match(RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(e[1]):void 0},remove:function(t){e(t,"",{expires:-1})}},misc:{findFocusable:function(e){var t=null;return e&&(t=e.find("a[href], area[href], input, select, textarea, button, *[tabindex], *[contenteditable]")),t},isVisible:function(e){return!(0===e.offsetWidth||0==e.offsetHeight||"none"===(document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null).display:e.currentStyle?e.currentStyle.display:e.style.display))},hasClass:function(e,t){return!(!e.className||!e.className.match(RegExp("(\\s|^)"+t+"(\\s|$)")))}}}}(),n=n||{};n.TextAreaNumber=null,n.load=!0,n.cmd={SpellTab:"spell",Thesaurus:"thes",GrammTab:"grammar"},n.dialog=null,n.optionNode=null,n.selectNode=null,n.grammerSuggest=null,n.textNode={},n.iframeMain=null,n.dataTemp="",n.div_overlay=null,n.textNodeInfo={},n.selectNode={},n.selectNodeResponce={},n.langList=null,n.langSelectbox=null,n.banner="",n.show_grammar=null,n.div_overlay_no_check=null,n.targetFromFrame={},n.onLoadOverlay=null,n.LocalizationComing={},n.OverlayPlace=null,n.LocalizationButton={ChangeTo:{instance:null,text:"Change to"},ChangeAll:{instance:null,text:"Change All"},IgnoreWord:{instance:null,text:"Ignore word"},IgnoreAllWords:{instance:null,text:"Ignore all words"},Options:{instance:null,text:"Options",optionsDialog:{instance:null}},AddWord:{instance:null,text:"Add word"},FinishChecking:{instance:null,text:"Finish Checking"}},n.LocalizationLabel={ChangeTo:{instance:null,text:"Change to"},Suggestions:{instance:null,text:"Suggestions"}};var i,o,a=function(e){var t,i;for(i in e)t=e[i].instance.getElement().getFirst()||e[i].instance.getElement(),t.setText(n.LocalizationComing[i])},l=function(e){for(var t in e){if(!e[t].instance.setLabel)break;e[t].instance.setLabel(n.LocalizationComing[t])}};n.framesetHtml=function(e){return"<iframe id="+n.iframeNumber+"_"+e+' frameborder="0" allowtransparency="1" style="width:100%;border: 1px solid #AEB3B9;overflow: auto;background:#fff; border-radius: 3px;"></iframe>'},n.setIframe=function(e,t){var i;i=n.framesetHtml(t);var o=n.iframeNumber+"_"+t;e.getElement().setHtml(i),i=document.getElementById(o),i=i.contentWindow?i.contentWindow:i.contentDocument.document?i.contentDocument.document:i.contentDocument,i.document.open(),i.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>iframe</title><style>html,body{margin: 0;height: 100%;font: 13px/1.555 "Trebuchet MS", sans-serif;}a{color: #888;font-weight: bold;text-decoration: none;border-bottom: 1px solid #888;}.main-box {color:#252525;padding: 3px 5px;text-align: justify;}.main-box p{margin: 0 0 14px;}.main-box .cerr{color: #f00000;border-bottom-color: #f00000;}</style></head><body><div id="content" class="main-box"></div><iframe src="" frameborder="0" id="spelltext" name="spelltext" style="display:none; width: 100%" ></iframe><iframe src="" frameborder="0" id="loadsuggestfirst" name="loadsuggestfirst" style="display:none; width: 100%" ></iframe><iframe src="" frameborder="0" id="loadspellsuggestall" name="loadspellsuggestall" style="display:none; width: 100%" ></iframe><iframe src="" frameborder="0" id="loadOptionsForm" name="loadOptionsForm" style="display:none; width: 100%" ></iframe><script>(function(window) {var ManagerPostMessage = function() {var _init = function(handler) {if (document.addEventListener) {window.addEventListener("message", handler, false);} else {window.attachEvent("onmessage", handler);};};var _sendCmd = function(o) {var str,type = Object.prototype.toString,fn = o.fn || null,id = o.id || "",target = o.target || window,message = o.message || { "id": id };if (o.message && type.call(o.message) == "[object Object]") {(o.message["id"]) ? o.message["id"] : o.message["id"] = id;message = o.message;};str = JSON.stringify(message, fn);target.postMessage(str, "*");};return {init: _init,send: _sendCmd};};var manageMessageTmp = new ManagerPostMessage;var appString = (function(){var spell = parent.CKEDITOR.config.wsc.DefaultParams.scriptPath;var serverUrl = parent.CKEDITOR.config.wsc.DefaultParams.serviceHost;return serverUrl + spell;})();function loadScript(src, callback) {var scriptTag = document.createElement("script");scriptTag.type = "text/javascript";callback ? callback : callback = function() {};if(scriptTag.readyState) {scriptTag.onreadystatechange = function() {if (scriptTag.readyState == "loaded" ||scriptTag.readyState == "complete") {scriptTag.onreadystatechange = null;setTimeout(function(){scriptTag.parentNode.removeChild(scriptTag)},1);callback();}};}else{scriptTag.onload = function() {setTimeout(function(){scriptTag.parentNode.removeChild(scriptTag)},1);callback();};};scriptTag.src = src;document.getElementsByTagName("head")[0].appendChild(scriptTag);};window.onload = function(){loadScript(appString, function(){manageMessageTmp.send({"id": "iframeOnload","target": window.parent});});}})(this);</script></body></html>'),i.document.close()},n.setCurrentIframe=function(e){n.setIframe(n.dialog._.contents[e].Content,e)},n.setHeightBannerFrame=function(){var e=n.dialog.getContentElement("SpellTab","banner").getElement(),t=n.dialog.getContentElement("GrammTab","banner").getElement(),i=n.dialog.getContentElement("Thesaurus","banner").getElement();e.setStyle("height","90px"),t.setStyle("height","90px"),i.setStyle("height","90px")},n.setHeightFrame=function(){document.getElementById(n.iframeNumber+"_"+n.dialog._.currentTabId).style.height="240px"},n.sendData=function(e){var t,i,o=e._.currentTabId,a=e._.contents[o].Content;n.setIframe(a,o);var l=function(l){l=l||window.event,l.data.getTarget().is("a")&&o!=e._.currentTabId&&(o=e._.currentTabId,a=e._.contents[o].Content,t=n.iframeNumber+"_"+o,n.div_overlay.setEnable(),a.getElement().getChildCount()?h(n.targetFromFrame[t],n.cmd[o]):(n.setIframe(a,o),i=document.getElementById(t),n.targetFromFrame[t]=i.contentWindow))};e.parts.tabs.removeListener("click",l),e.parts.tabs.on("click",l)},n.buildSelectLang=function(e){var t=new CKEDITOR.dom.element("div"),n=new CKEDITOR.dom.element("select"),e="wscLang"+e;return t.addClass("cke_dialog_ui_input_select"),t.setAttribute("role","presentation"),t.setStyles({height:"auto",position:"absolute",right:"0",top:"-1px",width:"160px","white-space":"normal"}),n.setAttribute("id",e),n.addClass("cke_dialog_ui_input_select"),n.setStyles({width:"160px"}),t.append(n),t},n.buildOptionLang=function(e,t){var i,o,a=document.getElementById("wscLang"+t),l=document.createDocumentFragment(),s=[];if(0===a.options.length){for(i in e)s.push([i,e[i]]);s.sort();for(var r=0;r<s.length;r++)i=document.createElement("option"),i.setAttribute("value",s[r][1]),o=document.createTextNode(s[r][0]),i.appendChild(o),s[r][1]==n.selectingLang&&i.setAttribute("selected","selected"),l.appendChild(i);a.appendChild(l)}},n.buildOptionSynonyms=function(e){e=n.selectNodeResponce[e],n.selectNode.synonyms.clear();for(var t=0;t<e.length;t++)n.selectNode.synonyms.add(e[t],e[t]);n.selectNode.synonyms.getInputElement().$.firstChild.selected=!0,n.textNode.Thesaurus.setValue(n.selectNode.synonyms.getInputElement().getValue())};var s=function(e){var t=document,n=e.target||t.body,i=e.id||"overlayBlock",o=e.opacity||"0.9",e=e.background||"#f1f1f1",a=t.getElementById(i),l=a||t.createElement("div");return l.style.cssText="position: absolute;top:30px;bottom:41px;left:1px;right:1px;z-index: 10020;padding:0;margin:0;background:"+e+";opacity: "+o+";filter: alpha(opacity="+100*o+");display: none;",l.id=i,a||n.appendChild(l),{setDisable:function(){l.style.display="none"},setEnable:function(){l.style.display="block"}}},r=function(e,t,i){var o=new CKEDITOR.dom.element("div"),a=new CKEDITOR.dom.element("input"),l=new CKEDITOR.dom.element("label"),s="wscGrammerSuggest"+e+"_"+t;return o.addClass("cke_dialog_ui_input_radio"),o.setAttribute("role","presentation"),o.setStyles({width:"97%",padding:"5px","white-space":"normal"}),a.setAttributes({type:"radio",value:t,name:"wscGrammerSuggest",id:s}),a.setStyles({"float":"left"}),a.on("click",function(e){n.textNode.GrammTab.setValue(e.sender.getValue())}),i&&a.setAttribute("checked",!0),a.addClass("cke_dialog_ui_radio_input"),l.appendText(e),l.setAttribute("for",s),l.setStyles({display:"block","line-height":"16px","margin-left":"18px","white-space":"normal"}),o.append(a),o.append(l),o},d=function(e){e=e||"true",null!==e&&"false"==e&&y()},c=function(i){var o=new e(i),i="wscLang"+n.dialog.getParentEditor().name,i=document.getElementById(i),a=n.iframeNumber+"_"+n.dialog._.currentTabId;n.buildOptionLang(o.setLangList,n.dialog.getParentEditor().name),p[o.getCurrentLangGroup(n.selectingLang)](),d(n.show_grammar),i.onchange=function(){p[o.getCurrentLangGroup(this.value)](),d(n.show_grammar),n.div_overlay.setEnable(),n.selectingLang=this.value,t.postMessage.send({message:{changeLang:n.selectingLang,text:n.dataTemp},target:n.targetFromFrame[a],id:"selectionLang_outer__page"})}},g=function(e){if("no_any_suggestions"==e){e="No suggestions",n.LocalizationButton.ChangeTo.instance.disable(),n.LocalizationButton.ChangeAll.instance.disable();var t=function(e){e=n.LocalizationButton[e].instance,e.getElement().hasClass("cke_disabled")?e.getElement().setStyle("color","#a0a0a0"):e.disable()};t("ChangeTo"),t("ChangeAll")}else n.LocalizationButton.ChangeTo.instance.enable(),n.LocalizationButton.ChangeAll.instance.enable(),n.LocalizationButton.ChangeTo.instance.getElement().setStyle("color","#333"),n.LocalizationButton.ChangeAll.instance.getElement().setStyle("color","#333");return e},u={iframeOnload:function(){n.div_overlay.setEnable();var e=n.dialog._.currentTabId;h(n.targetFromFrame[n.iframeNumber+"_"+e],n.cmd[e])},suggestlist:function(e){delete e.id,n.div_overlay_no_check.setDisable(),v(),c(n.langList);var t=g(e.word),i="";for(t instanceof Array&&(t=e.word[0]),i=t=t.split(","),o.clear(),n.textNode.SpellTab.setValue(i[0]),e=0;e<i.length;e++)o.add(i[e],i[e]);x(),n.div_overlay.setDisable()},grammerSuggest:function(e){delete e.id,delete e.mocklangs,v(),c(n.langList);var t=e.grammSuggest[0];n.grammerSuggest.getElement().setHtml(""),n.textNode.GrammTab.reset(),n.textNode.GrammTab.setValue(t),n.textNodeInfo.GrammTab.getElement().setHtml(""),n.textNodeInfo.GrammTab.getElement().setText(e.info);for(var e=e.grammSuggest,t=e.length,i=!0,o=0;t>o;o++)n.grammerSuggest.getElement().append(r(e[o],e[o],i)),i=!1;x(),n.div_overlay.setDisable()},thesaurusSuggest:function(e){delete e.id,delete e.mocklangs,v(),c(n.langList),n.selectNodeResponce=e,n.textNode.Thesaurus.reset(),n.selectNode.categories.clear();for(var t in e)n.selectNode.categories.add(t,t);e=n.selectNode.categories.getInputElement().getChildren().$[0].value,n.selectNode.categories.getInputElement().getChildren().$[0].selected=!0,n.buildOptionSynonyms(e),x(),n.div_overlay.setDisable()},finish:function(e){delete e.id,w(),e=n.dialog.getContentElement(n.dialog._.currentTabId,"BlockFinishChecking").getElement(),e.removeStyle("display"),e.removeStyle("position"),e.removeStyle("left"),e.show(),n.div_overlay.setDisable()},settext:function(e){delete e.id,n.dialog.getParentEditor().getCommand("checkspell");var t=n.dialog.getParentEditor();try{t.focus()}catch(i){}t.setData(e.text,function(){n.dataTemp="",t.unlockSelection(),t.fire("saveSnapshot"),n.dialog.hide()})},ReplaceText:function(e){delete e.id,n.div_overlay.setEnable(),n.dataTemp=e.text,n.selectingLang=e.currentLang,window.setTimeout(function(){try{n.div_overlay.setDisable()}catch(e){}},500),a(n.LocalizationButton),l(n.LocalizationLabel)},options_checkbox_send:function(e){delete e.id,e={osp:t.cookie.get("osp"),udn:t.cookie.get("udn"),cust_dic_ids:n.cust_dic_ids},t.postMessage.send({message:e,target:n.targetFromFrame[n.iframeNumber+"_"+n.dialog._.currentTabId],id:"options_outer__page"})},getOptions:function(e){var i=e.DefOptions.udn;if(n.LocalizationComing=e.DefOptions.localizationButtonsAndText,n.show_grammar=e.show_grammar,n.langList=e.lang,n.bnr=e.bannerId){n.setHeightBannerFrame();var o=e.banner;n.dialog.getContentElement(n.dialog._.currentTabId,"banner").getElement().setHtml(o)}else n.setHeightFrame();"undefined"==i&&(n.userDictionaryName?(i=n.userDictionaryName,o={osp:t.cookie.get("osp"),udn:n.userDictionaryName,cust_dic_ids:n.cust_dic_ids,id:"options_dic_send",udnCmd:"create"},t.postMessage.send({message:o,target:n.targetFromFrame[void 0]})):i=""),t.cookie.set("osp",e.DefOptions.osp),t.cookie.set("udn",i),t.cookie.set("cust_dic_ids",e.DefOptions.cust_dic_ids),t.postMessage.send({id:"giveOptions"})},options_dic_send:function(){var e={osp:t.cookie.get("osp"),udn:t.cookie.get("udn"),cust_dic_ids:n.cust_dic_ids,id:"options_dic_send",udnCmd:t.cookie.get("udnCmd")};t.postMessage.send({message:e,target:n.targetFromFrame[n.iframeNumber+"_"+n.dialog._.currentTabId]})},data:function(e){delete e.id},giveOptions:function(){},setOptionsConfirmF:function(){},setOptionsConfirmT:function(){i.setValue("")},clickBusy:function(){n.div_overlay.setEnable()},suggestAllCame:function(){n.div_overlay.setDisable(),n.div_overlay_no_check.setDisable()},TextCorrect:function(){c(n.langList)}},m=function(e){e=e||window.event,(e=window.JSON.parse(e.data))&&e.id&&u[e.id](e)},h=function(e,i,o,a){i=i||CKEDITOR.config.wsc_cmd,o=o||n.dataTemp,t.postMessage.send({message:{customerId:n.wsc_customerId,text:o,txt_ctrl:n.TextAreaNumber,cmd:i,cust_dic_ids:n.cust_dic_ids,udn:n.userDictionaryName,slang:n.selectingLang,reset_suggest:a||!1},target:e,id:"data_outer__page"}),n.div_overlay.setEnable()},p={superset:function(){n.dialog.showPage("Thesaurus"),n.dialog.showPage("GrammTab"),C()},usual:function(){b(),y(),C()},rtl:function(){b(),y(),C()}},f=function(e){var t=new function(e){var t={};return{getCmdByTab:function(n){for(var i in e)t[e[i]]=i;return t[n]}}}(n.cmd);e.selectPage(t.getCmdByTab(CKEDITOR.config.wsc_cmd)),n.sendData(e)},b=function(){n.dialog.hidePage("Thesaurus")},y=function(){n.dialog.hidePage("GrammTab")},C=function(){n.dialog.showPage("SpellTab")},x=function(){var e=n.dialog.getContentElement(n.dialog._.currentTabId,"bottomGroup").getElement();e.removeStyle("display"),e.removeStyle("position"),e.removeStyle("left"),e.show()},w=function(){var e,i=n.dialog.getContentElement(n.dialog._.currentTabId,"bottomGroup").getElement(),o=document.activeElement;i.setStyles({display:"block",position:"absolute",left:"-9999px"}),setTimeout(function(){if(i.removeStyle("display"),i.removeStyle("position"),i.removeStyle("left"),i.hide(),n.dialog._.editor.focusManager.currentActive.focusNext(),e=t.misc.findFocusable(n.dialog.parts.contents),t.misc.hasClass(o,"cke_dialog_tab")||t.misc.hasClass(o,"cke_dialog_contents_body")||!t.misc.isVisible(o)){for(var a,l=0;l<e.count();l++)if(a=e.getItem(l),t.misc.isVisible(a.$)){try{a.$.focus()}catch(s){}break}}else try{o.focus()}catch(r){}},0)},v=function(){var e,i=n.dialog.getContentElement(n.dialog._.currentTabId,"BlockFinishChecking").getElement(),o=document.activeElement;i.setStyles({display:"block",position:"absolute",left:"-9999px"}),setTimeout(function(){if(i.removeStyle("display"),i.removeStyle("position"),i.removeStyle("left"),i.hide(),n.dialog._.editor.focusManager.currentActive.focusNext(),e=t.misc.findFocusable(n.dialog.parts.contents),t.misc.hasClass(o,"cke_dialog_tab")||t.misc.hasClass(o,"cke_dialog_contents_body")||!t.misc.isVisible(o)){for(var a,l=0;l<e.count();l++)if(a=e.getItem(l),t.misc.isVisible(a.$)){try{a.$.focus()}catch(s){}break}}else try{o.focus()}catch(r){}},0)};CKEDITOR.dialog.add("checkspell",function(e){var i=function(){this.getElement().focus(),n.div_overlay.setEnable();var i=n.dialog._.currentTabId,o=n.iframeNumber+"_"+i,a=n.textNode[i].getValue(),l=this.getElement().getAttribute("title-cmd");t.postMessage.send({message:{cmd:l,tabId:i,new_word:a},target:n.targetFromFrame[o],id:"cmd_outer__page"}),("ChangeTo"==l||"ChangeAll"==l)&&e.fire("saveSnapshot"),"FinishChecking"==l&&e.config.wsc_onFinish.call(CKEDITOR.document.getWindow().getFrame())};return{title:e.config.wsc_dialogTitle||e.lang.wsc.title,minWidth:560,minHeight:444,buttons:[CKEDITOR.dialog.cancelButton],onLoad:function(){n.dialog=this,b(),y(),C()},onShow:function(){if(e.lockSelection(e.getSelection()),n.TextAreaNumber="cke_textarea_"+CKEDITOR.currentInstance.name,t.postMessage.init(m),n.dataTemp=CKEDITOR.currentInstance.getData(),n.OverlayPlace=n.dialog.parts.tabs.getParent().$,CKEDITOR&&CKEDITOR.config){n.wsc_customerId=e.config.wsc_customerId,n.cust_dic_ids=e.config.wsc_customDictionaryIds,n.userDictionaryName=e.config.wsc_userDictionaryName,n.defaultLanguage=CKEDITOR.config.defaultLanguage;var i="file:"==document.location.protocol?"http:":document.location.protocol;CKEDITOR.scriptLoader.load(e.config.wsc_customLoaderScript||i+"//loader.webspellchecker.net/sproxy_fck/sproxy.php?plugin=fck2&customerid="+n.wsc_customerId+"&cmd=script&doc=wsc&schema=22",function(t){CKEDITOR.config&&CKEDITOR.config.wsc&&CKEDITOR.config.wsc.DefaultParams?(n.serverLocationHash=CKEDITOR.config.wsc.DefaultParams.serviceHost,n.logotype=CKEDITOR.config.wsc.DefaultParams.logoPath,n.loadIcon=CKEDITOR.config.wsc.DefaultParams.iconPath,n.loadIconEmptyEditor=CKEDITOR.config.wsc.DefaultParams.iconPathEmptyEditor,n.LangComparer=new CKEDITOR.config.wsc.DefaultParams._SP_FCK_LangCompare):(n.serverLocationHash=DefaultParams.serviceHost,n.logotype=DefaultParams.logoPath,n.loadIcon=DefaultParams.iconPath,n.loadIconEmptyEditor=DefaultParams.iconPathEmptyEditor,n.LangComparer=new _SP_FCK_LangCompare),n.pluginPath=CKEDITOR.getUrl(e.plugins.wsc.path),n.iframeNumber=n.TextAreaNumber,n.templatePath=n.pluginPath+"dialogs/tmp.html",n.LangComparer.setDefaulLangCode(n.defaultLanguage),n.currentLang=e.config.wsc_lang||n.LangComparer.getSPLangCode(e.langCode),n.selectingLang=n.currentLang,n.div_overlay=new s({opacity:"1",background:"#fff url("+n.loadIcon+") no-repeat 50% 50%",target:n.OverlayPlace});var i=n.dialog.parts.tabs.getId(),i=CKEDITOR.document.getById(i);i.setStyle("width","97%"),i.getElementsByTag("DIV").count()||i.append(n.buildSelectLang(n.dialog.getParentEditor().name)),n.div_overlay_no_check=new s({opacity:"1",id:"no_check_over",background:"#fff url("+n.loadIconEmptyEditor+") no-repeat 50% 50%",target:n.OverlayPlace}),t&&(f(n.dialog),n.dialog.setupContent(n.dialog))})}else n.dialog.hide()},onHide:function(){var i=CKEDITOR.plugins.scayt,o=e.scayt;e.unlockSelection(),i&&o&&i.state[e.name]&&o.setMarkupPaused&&o.setMarkupPaused(!1),n.dataTemp="",t.postMessage.unbindHandler(m)},contents:[{id:"SpellTab",label:"SpellChecker",accessKey:"S",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(e){var e=n.iframeNumber+"_"+e._.currentTabId,t=document.getElementById(e);n.targetFromFrame[e]=t.contentWindow}},{type:"hbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",widths:["50%","50%"],children:[{type:"hbox",id:"leftCol",align:"left",width:"50%",children:[{type:"vbox",id:"rightCol1",widths:["50%","50%"],children:[{type:"text",id:"text",label:n.LocalizationLabel.ChangeTo.text+":",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",width:"140px","default":"",onShow:function(){n.textNode.SpellTab=this,n.LocalizationLabel.ChangeTo.instance=this},onHide:function(){this.reset()}},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"text",id:"labelSuggestions",label:n.LocalizationLabel.Suggestions.text+":",onShow:function(){n.LocalizationLabel.Suggestions.instance=this,this.getInputElement().setStyles({display:"block",position:"absolute",left:"-9999px"})}},{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=n.logotype,this.getElement().getParent().setStyles({"text-align":"left"})}}]},{type:"select",id:"list_of_suggestions",labelStyle:"font: 12px/25px arial, sans-serif;",size:"6",inputStyle:"width: 140px; height: auto;",items:[["loading..."]],onShow:function(){o=this},onHide:function(){this.clear()},onChange:function(){n.textNode.SpellTab.setValue(this.getValue())}}]}]}]},{type:"hbox",id:"rightCol",align:"right",width:"50%",children:[{type:"vbox",id:"rightCol_col__left",widths:["50%","50%","50%","50%"],children:[{type:"button",id:"ChangeTo",label:n.LocalizationButton.ChangeTo.text,title:"Change to",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.ChangeTo.instance=this},onClick:i},{type:"button",id:"ChangeAll",label:n.LocalizationButton.ChangeAll.text,title:"Change All",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.ChangeAll.instance=this},onClick:i},{type:"button",id:"AddWord",label:n.LocalizationButton.AddWord.text,title:"Add word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.AddWord.instance=this},onClick:i},{type:"button",id:"FinishChecking",label:n.LocalizationButton.FinishChecking.text,title:"Finish Checking",style:"width: 100%;margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.FinishChecking.instance=this},onClick:i}]},{type:"vbox",id:"rightCol_col__right",widths:["50%","50%","50%"],children:[{type:"button",id:"IgnoreWord",label:n.LocalizationButton.IgnoreWord.text,title:"Ignore word",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.IgnoreWord.instance=this},onClick:i},{type:"button",id:"IgnoreAllWords",label:n.LocalizationButton.IgnoreAllWords.text,title:"Ignore all words",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),n.LocalizationButton.IgnoreAllWords.instance=this},onClick:i},{type:"button",id:"option",label:n.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){n.LocalizationButton.Options.instance=this,"file:"==document.location.protocol&&this.disable()},onClick:function(){this.getElement().focus(),"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):(_=document.activeElement,e.openDialog("options"))}}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().setStyles({display:"block",position:"absolute",left:"-9999px"})},onHide:x,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",setup:function(){this.getChild()[0].getElement().$.src=n.logotype,this.getChild()[0].getElement().getParent().setStyles({"text-align":"center"})},children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">'}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"Option_button",label:n.LocalizationButton.Options.text,title:"Option",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id),"file:"==document.location.protocol&&this.disable()},onClick:function(){this.getElement().focus(),"file:"==document.location.protocol?alert("WSC: Options functionality is disabled when runing from file system"):(_=document.activeElement,e.openDialog("options"))}},{type:"button",id:"FinishChecking",label:n.LocalizationButton.FinishChecking.text,title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]}]}]}]},{id:"GrammTab",label:"Grammar",accessKey:"G",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"GrammarContent",html:"",setup:function(){var e=n.iframeNumber+"_"+n.dialog._.currentTabId,t=document.getElementById(e);n.targetFromFrame[e]=t.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: 0 auto;",children:[{type:"hbox",id:"leftCol",widths:["66%","34%"],children:[{type:"vbox",children:[{type:"text",id:"text",label:"Change to:",labelLayout:"horizontal",labelStyle:"font: 12px/25px arial, sans-serif;",inputStyle:"float: right; width: 200px;","default":"",onShow:function(){n.textNode.GrammTab=this},onHide:function(){this.reset()}},{type:"html",id:"html_text",html:"<div style='min-height: 17px; line-height: 17px; padding: 5px; text-align: left;background: #F1F1F1;color: #595959; white-space: normal!important;'></div>",onShow:function(){n.textNodeInfo.GrammTab=this}},{type:"html",id:"radio",html:"",onShow:function(){n.grammerSuggest=this}}]},{type:"vbox",children:[{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i},{type:"button",id:"IgnoreWord",label:"Ignore word",title:"Ignore word",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i},{type:"button",id:"IgnoreAllWords",label:"Ignore Problem",title:"Ignore Problem",style:"width: 133px; float: right;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 133px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().setStyles({display:"block",position:"absolute",left:"-9999px"})},onHide:x,children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=n.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]}]}]}]},{id:"Thesaurus",label:"Thesaurus",accessKey:"T",elements:[{type:"html",id:"banner",label:"banner",style:"",html:"<div></div>"},{type:"html",id:"Content",label:"spellContent",html:"",setup:function(){var e=n.iframeNumber+"_"+n.dialog._.currentTabId,t=document.getElementById(e);n.targetFromFrame[e]=t.contentWindow}},{type:"vbox",id:"bottomGroup",style:"width:560px; margin: -10px auto; overflow: hidden;",children:[{type:"hbox",widths:["75%","25%"],children:[{type:"vbox",children:[{type:"hbox",widths:["65%","35%"],children:[{type:"text",id:"ChangeTo",label:"Change to:",labelLayout:"horizontal",inputStyle:"width: 160px;",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onShow:function(){n.textNode.Thesaurus=this},onHide:function(){this.reset()}},{type:"button",id:"ChangeTo",label:"Change to",title:"Change to",style:"width: 121px; margin-top: 1px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]},{type:"hbox",children:[{type:"select",id:"categories",label:"Categories:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){n.selectNode.categories=this},onHide:function(){this.clear()},onChange:function(){n.buildOptionSynonyms(this.getValue())}},{type:"select",id:"synonyms",label:"Synonyms:",labelStyle:"font: 12px/25px arial, sans-serif;",size:"5",inputStyle:"width: 180px; height: auto;",items:[],onShow:function(){n.selectNode.synonyms=this,n.textNode.Thesaurus.setValue(this.getValue())},onHide:function(){this.clear()},onChange:function(){n.textNode.Thesaurus.setValue(this.getValue())}}]}]},{type:"vbox",width:"120px",style:"margin-top:46px;",children:[{type:"html",id:"logotype",label:"WebSpellChecker.net",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=n.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}},{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 121px; float: right; margin-top: 9px;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]}]}]},{type:"hbox",id:"BlockFinishChecking",style:"width:560px; margin: 0 auto;",widths:["70%","30%"],onShow:function(){this.getElement().setStyles({display:"block",position:"absolute",left:"-9999px"})},children:[{type:"hbox",id:"leftCol",align:"left",width:"70%",children:[{type:"vbox",id:"rightCol1",children:[{type:"html",id:"logo",html:'<img width="99" height="68" border="0" src="" title="WebSpellChecker.net" alt="WebSpellChecker.net" style="display: inline-block;">',setup:function(){this.getElement().$.src=n.logotype,this.getElement().getParent().setStyles({"text-align":"center"})}}]}]},{type:"hbox",id:"rightCol",align:"right",width:"30%",children:[{type:"vbox",id:"rightCol_col__left",children:[{type:"button",id:"FinishChecking",label:"Finish Checking",title:"Finish Checking",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onClick:i}]}]}]}]}]}});var _=null;CKEDITOR.dialog.add("options",function(){var e=null,o={},a={},l=null,s=null;t.cookie.get("udn"),t.cookie.get("osp");var r=function(){s=this.getElement().getAttribute("title-cmd");var e=[];e[0]=a.IgnoreAllCapsWords,e[1]=a.IgnoreWordsNumbers,e[2]=a.IgnoreMixedCaseWords,e[3]=a.IgnoreDomainNames,e=e.toString().replace(/,/g,""),t.cookie.set("osp",e),t.cookie.set("udnCmd",s?s:"ignore"),"delete"!=s&&(e="",""!==i.getValue()&&(e=i.getValue()),t.cookie.set("udn",e)),t.postMessage.send({id:"options_dic_send"})},d=function(){l.getElement().setHtml(n.LocalizationComing.error),l.getElement().show()};return{title:n.LocalizationComing.Options,minWidth:430,minHeight:130,resizable:CKEDITOR.DIALOG_RESIZE_NONE,contents:[{id:"OptionsTab",label:"Options",accessKey:"O",elements:[{type:"hbox",id:"options_error",children:[{type:"html",style:"display: block;text-align: center;white-space: normal!important; font-size: 12px;color:red",html:"<div></div>",onShow:function(){l=this}}]},{type:"vbox",id:"Options_content",children:[{type:"hbox",id:"Options_manager",widths:["52%","48%"],children:[{type:"fieldset",label:"Spell Checking Options",style:"border: none;margin-top: 13px;padding: 10px 0 10px 10px",onShow:function(){this.getInputElement().$.children[0].innerHTML=n.LocalizationComing.SpellCheckingOptions
},children:[{type:"vbox",id:"Options_checkbox",children:[{type:"checkbox",id:"IgnoreAllCapsWords",label:"Ignore All-Caps Words",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){a[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreWordsNumbers",label:"Ignore Words with Numbers",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){a[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreMixedCaseWords",label:"Ignore Mixed-Case Words",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){a[this.id]=this.getValue()?1:0}},{type:"checkbox",id:"IgnoreDomainNames",label:"Ignore Domain Names",labelStyle:"margin-left: 5px; font: 12px/16px arial, sans-serif;display: inline-block;white-space: normal;",style:"float:left; min-height: 16px;","default":"",onClick:function(){a[this.id]=this.getValue()?1:0}}]}]},{type:"vbox",id:"Options_DictionaryName",children:[{type:"text",id:"DictionaryName",style:"margin-bottom: 10px",label:"Dictionary Name:",labelLayout:"vertical",labelStyle:"font: 12px/25px arial, sans-serif;","default":"",onLoad:function(){i=this,this.setValue(n.userDictionaryName?n.userDictionaryName:(t.cookie.get("udn"),this.getValue()))},onShow:function(){i=this,this.setValue(t.cookie.get("udn")?t.cookie.get("udn"):this.getValue()),this.setLabel(n.LocalizationComing.DictionaryName)},onHide:function(){this.reset()}},{type:"hbox",id:"Options_buttons",children:[{type:"vbox",id:"Options_leftCol_col",widths:["50%","50%"],children:[{type:"button",id:"create",label:"Create",title:"Create",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){(this.getElement().getFirst()||this.getElement()).setText(n.LocalizationComing.Create)},onClick:r},{type:"button",id:"restore",label:"Restore",title:"Restore",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){(this.getElement().getFirst()||this.getElement()).setText(n.LocalizationComing.Restore)},onClick:r}]},{type:"vbox",id:"Options_rightCol_col",widths:["50%","50%"],children:[{type:"button",id:"rename",label:"Rename",title:"Rename",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){(this.getElement().getFirst()||this.getElement()).setText(n.LocalizationComing.Rename)},onClick:r},{type:"button",id:"delete",label:"Remove",title:"Remove",style:"width: 100%;",onLoad:function(){this.getElement().setAttribute("title-cmd",this.id)},onShow:function(){(this.getElement().getFirst()||this.getElement()).setText(n.LocalizationComing.Remove)},onClick:r}]}]}]}]},{type:"hbox",id:"Options_text",children:[{type:"html",style:"text-align: justify;margin-top: 15px;white-space: normal!important; font-size: 12px;color:#777;",html:"<div>"+n.LocalizationComing.OptionsTextIntro+"</div>",onShow:function(){this.getElement().setText(n.LocalizationComing.OptionsTextIntro)}}]}]}]}],buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton],onOk:function(){var e=[];e[0]=a.IgnoreAllCapsWords,e[1]=a.IgnoreWordsNumbers,e[2]=a.IgnoreMixedCaseWords,e[3]=a.IgnoreDomainNames,e=e.toString().replace(/,/g,""),t.cookie.set("osp",e),t.cookie.set("udn",i.getValue()),t.postMessage.send({id:"options_checkbox_send"}),l.getElement().hide(),l.getElement().setHtml(" ")},onLoad:function(){e=this,o.IgnoreAllCapsWords=e.getContentElement("OptionsTab","IgnoreAllCapsWords"),o.IgnoreWordsNumbers=e.getContentElement("OptionsTab","IgnoreWordsNumbers"),o.IgnoreMixedCaseWords=e.getContentElement("OptionsTab","IgnoreMixedCaseWords"),o.IgnoreDomainNames=e.getContentElement("OptionsTab","IgnoreDomainNames")},onShow:function(){t.postMessage.init(d);var e=t.cookie.get("osp").split("");a.IgnoreAllCapsWords=e[0],a.IgnoreWordsNumbers=e[1],a.IgnoreMixedCaseWords=e[2],a.IgnoreDomainNames=e[3],parseInt(a.IgnoreAllCapsWords,10)?o.IgnoreAllCapsWords.setValue("checked",!1):o.IgnoreAllCapsWords.setValue("",!1),parseInt(a.IgnoreWordsNumbers,10)?o.IgnoreWordsNumbers.setValue("checked",!1):o.IgnoreWordsNumbers.setValue("",!1),parseInt(a.IgnoreMixedCaseWords,10)?o.IgnoreMixedCaseWords.setValue("checked",!1):o.IgnoreMixedCaseWords.setValue("",!1),parseInt(a.IgnoreDomainNames,10)?o.IgnoreDomainNames.setValue("checked",!1):o.IgnoreDomainNames.setValue("",!1),a.IgnoreAllCapsWords=o.IgnoreAllCapsWords.getValue()?1:0,a.IgnoreWordsNumbers=o.IgnoreWordsNumbers.getValue()?1:0,a.IgnoreMixedCaseWords=o.IgnoreMixedCaseWords.getValue()?1:0,a.IgnoreDomainNames=o.IgnoreDomainNames.getValue()?1:0,o.IgnoreAllCapsWords.getElement().$.lastChild.innerHTML=n.LocalizationComing.IgnoreAllCapsWords,o.IgnoreWordsNumbers.getElement().$.lastChild.innerHTML=n.LocalizationComing.IgnoreWordsWithNumbers,o.IgnoreMixedCaseWords.getElement().$.lastChild.innerHTML=n.LocalizationComing.IgnoreMixedCaseWords,o.IgnoreDomainNames.getElement().$.lastChild.innerHTML=n.LocalizationComing.IgnoreDomainNames},onHide:function(){if(t.postMessage.unbindHandler(d),_)try{_.focus()}catch(e){}}}}),CKEDITOR.dialog.on("resize",function(e){var e=e.data,t=e.dialog,i=CKEDITOR.document.getById(n.iframeNumber+"_"+t._.currentTabId);"checkspell"==t._.name&&(n.bnr?i&&i.setSize("height",e.height-310):i&&i.setSize("height",e.height-220))}),CKEDITOR.on("dialogDefinition",function(e){if("checkspell"===e.data.name){var t=e.data.definition;n.onLoadOverlay=new s({opacity:"1",background:"#fff",target:t.dialog.parts.tabs.getParent().$}),n.onLoadOverlay.setEnable(),t.dialog.on("cancel",function(){return t.dialog.getParentEditor().config.wsc_onClose.call(this.document.getWindow().getFrame()),n.div_overlay.setDisable(),n.onLoadOverlay.setDisable(),!1},this,null,-1)}})}();