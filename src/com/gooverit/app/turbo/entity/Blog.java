package com.gooverit.app.turbo.entity;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

/**
 * @Project: turbo
 * @Title: Blog.java
 * @Package com.gooverit.app.turbo.entity
 * @Description: Blog.java
 * @author Turbo,Email:dailin2323@gmail.com
 * @date 2014年6月15日 下午4:39:32
 * @Copyright: 2014
 * @version V1.0
 */
@SuppressWarnings("serial")
public class Blog extends Model<Blog> {
	public static final Blog dao = new Blog();

	public Page<Blog> paginate(int pageNumber, int pageSize) {
		return this.paginate(pageNumber, pageSize, "select *", "from blog order by id asc");
	}
}
