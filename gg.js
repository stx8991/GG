var randoms = {
	ads_codes: ['<script src="//www.fafawm.com/cf.aspx?action=cycadget&ad_class=7&userid=389&lowunionusername=&clickstate=2&adshowtype=AdCode_sjdb&ad_size=640x200&showsel=2&newadsel=1&maxadid=&prohibit="><'+'/script>','<script src="//www.fafawm.com/cf.aspx?action=cycadget&ad_class=7&userid=389&lowunionusername=&clickstate=1&adshowtype=AdCode_sjdb&ad_size=640x200&showsel=2&newadsel=1&maxadid=&prohibit="><'+'/script>','<script async=\'async\' src=\'https://vpn.ch-hr12333.com/xxd.php?id=6450\'><'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();
