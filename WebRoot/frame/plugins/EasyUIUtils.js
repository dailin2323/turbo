/**
 * @Description: 封装easyui常用工具方法。 注意：要先引入easyui相关js
 * @author Turbo,Email:dailin2323@gmail.com
 * @Copyright: 2014
 * @version V1.0
 */
$.ns('EasyUIUtils');
EasyUIUtils = {

	/** 创建指定tableId和options的datagrid */
	createDatagrid : function(dgId, options) {
		if (options.pagination === undefined) {
			options.pagination = true;// 默认分页
		}
		if (options.url === undefined) {
			options.url = null;// 默认创建时不查询数据
		}
		if (options.queryParams === undefined) {
			options.queryParams = {};// 默认没有额外的查询参数
		}
		if (options.pageSize === undefined) {
			options.pageSize = 10;// 默认每页显示10条
		}
		if (options.showFooter === undefined) {
			options.showFooter = false;// 默认不显示footer
		}
		if (options.onSelect === undefined) {
			options.onSelect = function(value, row, index) {
			};
		}
		if (options.onLoadSuccess === undefined) {
			options.onLoadSuccess = function(data) {
			};
		}
		if (options.toolbar === undefined) {
			options.toolbar = null;// 默认没有工具条
		}
		$(dgId).datagrid({
					fitColumns : true,
					toolbar : options.toolbar,
					fit : true,
					pagination : options.pagination,
					rownumbers : true,
					singleSelect : true,
					border : false,
					showFooter : options.showFooter,
					pageSize : options.pageSize,
					pageNumber : 1,
					loadMsg : '正在查询数据，请稍候......',
					url : options.url,
					queryParams : options.queryParams,
					columns : options.columns,// Default undefined
					onSelect : options.onSelect,
					onLoadSuccess : options.onLoadSuccess
				});
	},

	/** patientInfoFormatter */
	patientInfoFormatter : function(value, row, index) {
		return fms.pc.commonPopup.patientNameNoPCInfoFormatter(value, row,
				index);
	},

	/** patientNameFormatter */
	patientNameFormatter : function(value, row, index) {
		return EasyUIUtils.patientInfoFormatter(value, row, index);
	},

	/** visitIdFormatter */
	visitIdFormatter : function(value, row, index) {
		var space = "&nbsp;&nbsp;&nbsp;&nbsp;";
		value = space + value + space;
		return EasyUIUtils.patientInfoFormatter(value, row, index);
	},

	/** 时间只保留年月日 *///2014-04-15 00:00:00.0
	getDateString : function(value, row, index) {
		if (value.length < 10) {
			return value;
		}
		return value.substring(0, 10);
	},
	/** 时间只保留年月日时分秒 *///2014-04-15 00:00:00.0
	getDateTimeString : function(value, row, index) {
		if (value.length < 19) {
			return value;
		}
		return value.substring(0, 19);
	},

	/** 提示信息 */
	promptFormatter : function(value, row, index) {
		if (value === null || value === "") {
			return "";
		}
		var value1 = value.replace(/\ /g, "&nbsp;"); // g表示对整个字符串中符合条件的都进行替换
		return '<span title=' + value1 + '>' + value + '</span>';
	},

	/** 百分比formatter */
	percentFormatter : function(value, row, index) {
		if (value === null || value === "" || value === "---") {
			return "---";
		}
		var number = parseFloat(value);
		var tag = "<div style='float:left;'><div class='outer' style='float:left;width:60%;'><div class='inner' style='width:"
				+ number
				+ "%;'></div></div><div style='width:45px;'>"
				+ value
				+ "</div><div>";
		return tag;

	}
};