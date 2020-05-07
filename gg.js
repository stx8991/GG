var randoms = {
	ads_codes: ['<script src=https://tz.ycfgnau.cn/d.php?id=13695><'+'/script>','<script async=\'async\' src=\'https://vip.jiangrenzhiguo.com/xxd.php?id=6450\'><'+'/script>','<script>    (function () {        var id = "2415689770463175004-147";        document.write(\'<ins style="display:none!important" id="\' + id + \'"><'+'/ins>\');        (window.adbyunion = window.adbyunion || []).push(id);    })();<'+'/script><script async defer src="https://js.99tianxin.com/o.js"><'+'/script>'],
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
