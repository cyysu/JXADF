!function(t){t.effects.effect.puff=function(e,o){var i=t(this),r=t.effects.setMode(i,e.mode||"hide"),h="hide"===r,f=parseInt(e.percent,10)||150,c=f/100,s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:r,complete:o,percent:h?f:100,from:h?s:{height:s.height*c,width:s.width*c,outerHeight:s.outerHeight*c,outerWidth:s.outerWidth*c}}),i.effect(e)},t.effects.effect.scale=function(e,o){var i=t(this),r=t.extend(!0,{},e),h=t.effects.setMode(i,e.mode||"effect"),f=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===h?0:100),c=e.direction||"both",s=e.origin,d={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()},n={y:"horizontal"!==c?f/100:1,x:"vertical"!==c?f/100:1};r.effect="size",r.queue=!1,r.complete=o,"effect"!==h&&(r.origin=s||["middle","center"],r.restore=!0),r.from=e.from||("show"===h?{height:0,width:0,outerHeight:0,outerWidth:0}:d),r.to={height:d.height*n.y,width:d.width*n.x,outerHeight:d.outerHeight*n.y,outerWidth:d.outerWidth*n.x},r.fade&&("show"===h&&(r.from.opacity=0,r.to.opacity=1),"hide"===h&&(r.from.opacity=1,r.to.opacity=0)),i.effect(r)},t.effects.effect.size=function(e,o){var i,r,h,f=t(this),c=["position","top","bottom","left","right","width","height","overflow","opacity"],s=["position","top","bottom","left","right","overflow","opacity"],d=["width","height","overflow"],n=["fontSize"],a=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],g=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],m=t.effects.setMode(f,e.mode||"effect"),u=e.restore||"effect"!==m,p=e.scale||"both",w=e.origin||["middle","center"],y=f.css("position"),W=u?c:s,l={height:0,width:0,outerHeight:0,outerWidth:0};"show"===m&&f.show(),i={height:f.height(),width:f.width(),outerHeight:f.outerHeight(),outerWidth:f.outerWidth()},"toggle"===e.mode&&"show"===m?(f.from=e.to||l,f.to=e.from||i):(f.from=e.from||("show"===m?l:i),f.to=e.to||("hide"===m?l:i)),h={from:{y:f.from.height/i.height,x:f.from.width/i.width},to:{y:f.to.height/i.height,x:f.to.width/i.width}},("box"===p||"both"===p)&&(h.from.y!==h.to.y&&(W=W.concat(a),f.from=t.effects.setTransition(f,a,h.from.y,f.from),f.to=t.effects.setTransition(f,a,h.to.y,f.to)),h.from.x!==h.to.x&&(W=W.concat(g),f.from=t.effects.setTransition(f,g,h.from.x,f.from),f.to=t.effects.setTransition(f,g,h.to.x,f.to))),("content"===p||"both"===p)&&h.from.y!==h.to.y&&(W=W.concat(n).concat(d),f.from=t.effects.setTransition(f,n,h.from.y,f.from),f.to=t.effects.setTransition(f,n,h.to.y,f.to)),t.effects.save(f,W),f.show(),t.effects.createWrapper(f),f.css("overflow","hidden").css(f.from),w&&(r=t.effects.getBaseline(w,i),f.from.top=(i.outerHeight-f.outerHeight())*r.y,f.from.left=(i.outerWidth-f.outerWidth())*r.x,f.to.top=(i.outerHeight-f.to.outerHeight)*r.y,f.to.left=(i.outerWidth-f.to.outerWidth)*r.x),f.css(f.from),("content"===p||"both"===p)&&(a=a.concat(["marginTop","marginBottom"]).concat(n),g=g.concat(["marginLeft","marginRight"]),d=c.concat(a).concat(g),f.find("*[width]").each(function(){var o=t(this),i={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()};u&&t.effects.save(o,d),o.from={height:i.height*h.from.y,width:i.width*h.from.x,outerHeight:i.outerHeight*h.from.y,outerWidth:i.outerWidth*h.from.x},o.to={height:i.height*h.to.y,width:i.width*h.to.x,outerHeight:i.height*h.to.y,outerWidth:i.width*h.to.x},h.from.y!==h.to.y&&(o.from=t.effects.setTransition(o,a,h.from.y,o.from),o.to=t.effects.setTransition(o,a,h.to.y,o.to)),h.from.x!==h.to.x&&(o.from=t.effects.setTransition(o,g,h.from.x,o.from),o.to=t.effects.setTransition(o,g,h.to.x,o.to)),o.css(o.from),o.animate(o.to,e.duration,e.easing,function(){u&&t.effects.restore(o,d)})})),f.animate(f.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===f.to.opacity&&f.css("opacity",f.from.opacity),"hide"===m&&f.hide(),t.effects.restore(f,W),u||("static"===y?f.css({position:"relative",top:f.to.top,left:f.to.left}):t.each(["top","left"],function(t,e){f.css(e,function(e,o){var i=parseInt(o,10),r=t?f.to.left:f.to.top;return"auto"===o?r+"px":i+r+"px"})})),t.effects.removeWrapper(f),o()}})}}(jQuery);