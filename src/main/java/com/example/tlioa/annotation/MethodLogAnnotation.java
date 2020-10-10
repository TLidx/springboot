package com.example.tlioa.annotation;

/*
 * @description: 日志注释
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/25日<br>
 * @author: tlidx <br>
 */

import com.example.tlioa.vo.MethodLogType;

import java.lang.annotation.*;

/**
 * 标注保留位置
 * @Retention(RetentionPolicy.SOURCE)   //注解仅存在于源码中，在class字节码文件中不包含
 *
 * @Retention(RetentionPolicy.CLASS)     // 默认的保留策略，注解会在class字节码文件中存在，但运行时无法获得，
 *
 * @Retention(RetentionPolicy.RUNTIME)  // 注解会在class字节码文件中存在，在运行时可以通过反射获取到
 */
@Retention(RetentionPolicy.RUNTIME)
/**
 * 标注作用位置
 * @Target(ElementType.TYPE)   //接口、类、枚举
 *
 * @Target(ElementType.FIELD) //字段、枚举的常量
 *
 * @Target(ElementType.METHOD) //方法
 *
 * @Target(ElementType.PARAMETER) //方法参数
 *
 * @Target(ElementType.CONSTRUCTOR)  //构造函数
 *
 * @Target(ElementType.LOCAL_VARIABLE)//局部变量
 *
 * @Target(ElementType.ANNOTATION_TYPE)//注解
 *
 * @Target(ElementType.PACKAGE) ///包
 */
@Target({ElementType.METHOD,ElementType.TYPE})
//让这个Annotation类型的信息能够显示在API说明文档上；没有添加的话，使用javadoc生成的API文件找不到这个类型生成的信息
@Documented
public @interface MethodLogAnnotation {
    MethodLogType type() default MethodLogType.HOME;
}
