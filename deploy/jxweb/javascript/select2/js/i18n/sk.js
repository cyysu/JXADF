!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sk",[],function(){var e={2:function(e){return e?"dva":"dve"},3:function(){return"tri"},4:function(){return"štyri"}};return{inputTooLong:function(n){var t=n.input.length-n.maximum;return 1==t?"Prosím, zadajte o jeden znak menej":t>=2&&4>=t?"Prosím, zadajte o "+e[t](!0)+" znaky menej":"Prosím, zadajte o "+t+" znakov menej"},inputTooShort:function(n){var t=n.minimum-n.input.length;return 1==t?"Prosím, zadajte ešte jeden znak":4>=t?"Prosím, zadajte ešte ďalšie "+e[t](!0)+" znaky":"Prosím, zadajte ešte ďalších "+t+" znakov"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(n){return 1==n.maximum?"Môžete zvoliť len jednu položku":n.maximum>=2&&n.maximum<=4?"Môžete zvoliť najviac "+e[n.maximum](!1)+" položky":"Môžete zvoliť najviac "+n.maximum+" položiek"},noResults:function(){return"Nenašli sa žiadne položky"},searching:function(){return"Vyhľadávanie…"}}}),{define:e.define,require:e.require}}();