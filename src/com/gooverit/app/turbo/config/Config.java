package com.gooverit.app.turbo.config;

import com.gooverit.app.turbo.controller.CommonController;
import com.gooverit.app.turbo.entity.Blog;
import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;

/**
 * @Project: turbo
 * @Title: Config.java
 * @Package com.gooverit.app.turbo.config
 * @Description: 配置文件
 * @author Turbo,Email:dailin@gmail.com
 * @date 2014年6月15日 下午4:25:35
 * @Copyright: 2014
 * @version V1.0
 */
public class Config extends JFinalConfig {

	@Override
	public void configConstant(Constants me) {
		this.loadPropertyFile("dev/db.properties");
		me.setDevMode(true);
		me.setViewType(ViewType.JSP);
	}

	@Override
	public void configRoute(Routes me) {
		me.add("/", CommonController.class,"/WEB-INF");
	}

	@Override
	public void configPlugin(Plugins me) {
		String jdbcUrl = this.getProperty("jdbcUrl").trim();
		String user = this.getProperty("user").trim();
		String password = this.getProperty("password").trim();
		C3p0Plugin c3p0Plugin = new C3p0Plugin(jdbcUrl, user, password);
		me.add(c3p0Plugin);
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p0Plugin);
		me.add(arp);
		arp.addMapping("blog", Blog.class);
	}

	@Override
	public void configInterceptor(Interceptors me) {

	}

	@Override
	public void configHandler(Handlers me) {

	}

}
