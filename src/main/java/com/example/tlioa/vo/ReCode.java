package com.example.tlioa.vo;

/**
 * @Description: 响应码枚举 参考HTTP状态码的语义
 * @author: tlidx
 * @version: 1.0.0
 * @createTime: 2020年09月23日
 */
public enum ReCode {

    //成功
    SUCCESS(200) ,
    //失败
    Fail(400),

    // 未认证（签名错误）
    UNAUTHORIZED(401),

    // 接口不存在
    NOT_FOUND(404),

    // 服务器内部错误
    INTERNAL_SERVER_ERROR(500);

    public int code;

    ReCode(int code){
        code = this.code;
    }

}
