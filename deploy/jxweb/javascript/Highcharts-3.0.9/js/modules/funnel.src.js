!function(t){"use strict";var e=t.getOptions(),n=e.plotOptions,a=t.seriesTypes,o=t.merge,i=function(){},r=t.each;n.funnel=o(n.pie,{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",dataLabels:{connectorWidth:1,connectorColor:"#606060"},size:!0,states:{select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}}}),a.funnel=t.extendClass(a.pie,{type:"funnel",animate:i,translate:function(){var t,e,n,a,o,s,h,l,c,p,d,u=function(t,e){return/%$/.test(t)?e*parseInt(t,10)/100:parseInt(t,10)},f=0,g=this,b=g.chart,w=b.plotWidth,y=b.plotHeight,C=0,L=g.options,k=L.center,W=u(k[0],w),v=u(k[0],y),A=u(L.width,w),H=u(L.height,y),P=u(L.neckWidth,w),X=u(L.neckHeight,y),m=H-X,T=g.data,Y="left"===L.dataLabels.position?1:0;g.getWidthAt=e=function(t){return t>H-X||H===X?P:P+(A-P)*((H-X-t)/(H-X))},g.getX=function(t,n){return W+(n?-1:1)*(e(t)/2+L.dataLabels.distance)},g.center=[W,v,H],g.centerX=W,r(T,function(t){f+=t.y}),r(T,function(r){d=null,a=f?r.y/f:0,s=v-H/2+C*H,c=s+a*H,t=e(s),o=W-t/2,h=o+t,t=e(c),l=W-t/2,p=l+t,s>m?(o=l=W-P/2,h=p=W+P/2):c>m&&(d=c,t=e(m),l=W-t/2,p=l+t,c=m),n=["M",o,s,"L",h,s,p,c],d&&n.push(p,d,l,d),n.push(l,c,"Z"),r.shapeType="path",r.shapeArgs={d:n},r.percentage=100*a,r.plotX=W,r.plotY=(s+(d||c))/2,r.tooltipPos=[W,r.plotY],r.slice=i,r.half=Y,C+=a}),g.setTooltipPoints()},drawPoints:function(){var t=this,e=t.options,n=t.chart,a=n.renderer;r(t.data,function(n){var o=n.graphic,i=n.shapeArgs;o?o.animate(i):n.graphic=a.path(i).attr({fill:n.color,stroke:e.borderColor,"stroke-width":e.borderWidth}).add(t.group)})},sortByAngle:i,drawDataLabels:function(){var t,e,n,o,i,r=this.data,s=this.options.dataLabels.distance,h=r.length;for(this.center[2]-=2*s;h--;)n=r[h],t=n.half,e=t?1:-1,i=n.plotY,o=this.getX(i,t),n.labelPos=[0,i,o+(s-5)*e,i,o+s*e,i,t?"right":"left",0];a.pie.prototype.drawDataLabels.call(this)}})}(Highcharts);