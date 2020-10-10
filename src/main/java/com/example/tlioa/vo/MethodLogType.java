package com.example.tlioa.vo;

/*
 * @description:
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/28日<br>
 * @author: tlidx <br>
 */


public enum MethodLogType {

    USER("system_user") , DICT("common_dict") , HOME("common_home") , MENU("system_menu");

    public String type;

    MethodLogType(String type){
        this.type = type;
    }
}
