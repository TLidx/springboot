package com.example.tlioa.vo;

import java.io.Serializable;

/**
 * @Description: 返回对象实体 封装controllor返回数据给前端
 * @author: tlidx
 * @version: 1.0.0
 * @createTime: 2020年09月23日
 */
public class Result<T> implements Serializable {

    private static long serialVersionUID = 1L;

    public int code;

    private String msg;

    private T data;

    public int getCode() {
        return code;
    }

    public Result<T> setCode(int code) {
        this.code = code;
        return this;
    }

    public Result<T> setCode(ReCode reCode){
        this.code = reCode.code;
        return this;
    }

    public String getMsg() {
        return msg;
    }

    public Result<T> setMsg(String msg) {
        this.msg = msg;
        return this;
    }

    public T getData() {
        return data;
    }

    public Result<T> setData(T data) {
        this.data = data;
        return this;
    }

}
