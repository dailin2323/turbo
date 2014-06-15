/**
 * @Description: 判断对象是否为空(null、undefined、""、length===0)的插件
 * @author Turbo,Email:dailin2323@gmail.com
 * @Copyright: 2014
 * @version V1.0
 */
(function($) {
	$.isEmpty = function(v, allowBlank) {
		return v === null || v === undefined || (($.isArray(v) && !v.length))
				|| (!allowBlank ? v === '' : false);
	};
})(jQuery);
