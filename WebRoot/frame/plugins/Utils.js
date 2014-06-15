/**
 * @Description: 封装js常用方法。 注意：要先引入jquery.namespace.js
 * @author Turbo,Email:dailin2323@gmail.com
 * @Copyright: 2014
 * @version V1.0
 */
$.ns('Utils');
Utils = {
	/**
	 * 对param进行一次UTF-8编码
	 * 
	 * @param {}
	 *            param
	 * @return {}
	 */
	onceEncode : function(param) {
		return encodeURIComponent(param);
	},
	/**
	 * 对param进行两次UTF-8编码
	 * 
	 * @param {}
	 *            param
	 * @return {}
	 */
	twiceEncode : function(param) {
		return encodeURIComponent(encodeURIComponent(param));
	}
}