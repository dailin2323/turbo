/**
 * @Description: 命名空间函数，在单独的js文件中写js时，尽量使用面向对象的方式:
 *               在自己的功能函数前加上命名空间，防止函数重名，代码可读性增强; ns是namespace的简写，推荐使用ns的方式，代码简练。
 * @author Turbo,Email:dailin2323@gmail.com
 * @Copyright: 2014
 * @version V1.0
 */

(function($) {
	$.namespace = function() {
		var o, d;
		$.each(arguments, function(i, v) {
					d = v.split(".");
					o = window[d[0]] = window[d[0]] || {};
					$.each(d.slice(1), function(i2, v2) {
								o = o[v2] = o[v2] || {};
							});
				});
		return o;
	};
	$.ns = $.namespace;
})(jQuery);