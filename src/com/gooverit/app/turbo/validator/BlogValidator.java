package com.gooverit.app.turbo.validator;

import com.gooverit.app.turbo.entity.Blog;
import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;

/**
 * @Project: turbo
 * @Title: BlogValidator.java
 * @Package com.gooverit.app.turbo.validator
 * @Description: BlogValidator.java
 * @author Turbo,Email:dailin2323@gmail.com
 * @date 2014年6月15日 下午4:49:23
 * @Copyright: 2014
 * @version V1.0
 */
public class BlogValidator extends Validator {

	protected void validate(Controller controller) {
		validateRequiredString("blog.title", "titleMsg", "请输入Blog标题!");
		validateRequiredString("blog.content", "contentMsg", "请输入Blog内容!");
	}

	protected void handleError(Controller controller) {
		controller.keepModel(Blog.class);

		String actionKey = getActionKey();
		if (actionKey.equals("/blog/save"))
			controller.render("add.html");
		else if (actionKey.equals("/blog/update"))
			controller.render("edit.html");
	}
}
