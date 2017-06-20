package com.dyx.spring_start;

import lombok.Getter;
import lombok.Setter;

@Setter@Getter
public class Users {
	private String name;
	private String address;
	private String memo;
	public String toString(){
		return "Users [name="+name+"address="+address+"memo="+memo+"]";
	}

}
