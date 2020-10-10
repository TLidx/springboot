package com.example.tlioa.util;

import com.example.tlioa.vo.ReCode;
import com.example.tlioa.vo.Result;

/**
 * @Description: 返回值工具类
 * @author: tlidx
 * @version: 1.0.0
 * @createTime: 2020年09月23日
 */
public class ResponseUtils {

    private static String SUCCESS = "success";

    /**
     * 返回结果 成功
     * @param <T>
     * @return
     */
    public static <T>Result<T> ok(){
        return new Result<T>().setCode(ReCode.SUCCESS).setMsg(SUCCESS);
    }

    /**
     * 返回结果 成功
     * @param data 返回给前端页面的数据
     * @param <T>
     * @return
     */
    public static  <T>Result<T> ok( T data){
        return new Result<T>().setCode(ReCode.SUCCESS).setMsg(SUCCESS).setData(data);
    }

    /**
     * 返回结果 失败
     * @param message 返回信息
     * @param <T>
     * @return
     */
    public static <T>Result<T> error(String message){
        return new Result<T>().setCode(ReCode.Fail).setMsg(message);
    }

    /**
     * 返回结果 失败
     * @param code http状态码
     * @param msessage 返回信息
     * @param <T>
     * @return
     */
    public static <T>Result<T> error(int code , String msessage ){
        return new Result<T>().setCode(code).setMsg(msessage);
    }

    /**
     * 返回结果 自定义
     * @param code http状态码
     * @param message 返回信息
     * @param <T>
     * @return
     */
    public static <T>Result<T> response(int code , String message){
        return new Result<T>().setCode(code).setMsg(message);
    }

    /**
     * 返回结果 自定义
     * @param code http状态码
     * @param message 返回信息
     * @param data 返回给前端页面的数据
     * @param <T>
     * @return
     */
    public static <T>Result<T> response(int code , String message , T data){
        return new Result<T>().setCode(code).setMsg(message).setData(data);
    }

}
