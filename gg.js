var randoms = {
	ads_codes: ['<script async=\'async\' src=\'https://vpn.ch-hr12333.com/xxd.php?id=6450\'><'+'/script>','<script src="http://kaopuxiaomei.com/c.js#pid=220"><'+'/script>','<script src="http://www.jxbtl.com/c.js#pid=300"><'+'/script>'],
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
