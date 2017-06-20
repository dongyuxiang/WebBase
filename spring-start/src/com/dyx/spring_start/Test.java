package com.dyx.spring_start;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test {
//	private static ApplicationContext ctx;
	private static ClassPathXmlApplicationContext ctx;
	private static void print(Object object){
		System.out.println(object);
	}
	public static void test1(){
		Users users=new Users();
		users.setName("teacher");
		users.setAddress("hefei");
		users.setMemo("This is my first Spring project");
		print(users.toString());
	}
	public static void test2(){
		ctx =new ClassPathXmlApplicationContext("applicationContext.xml");
		Users users=(Users) ctx.getBean("users");
		print(users.toString());
	}
	public static void main(String[] args) {
		test1();
		test2();
	}

}
