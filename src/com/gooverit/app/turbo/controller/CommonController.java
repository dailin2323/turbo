package com.gooverit.app.turbo.controller;

import com.jfinal.core.Controller;

/**
 * @Project: turbo
 * @Title: CommonController.java
 * @Package com.gooverit.app.turbo.controller
 * @Description: CommonController.java
 * @author Turbo,Email:dailin2323@gmail.com
 * @date 2014年6月15日 下午4:48:51
 * @Copyright: 2014
 * @version V1.0
 */
public class CommonController extends Controller {

	public void index() {
		render("index.jsp");
	}
}
