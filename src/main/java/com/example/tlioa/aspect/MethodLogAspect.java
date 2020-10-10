package com.example.tlioa.aspect;

/*
 * @description: 日志切面类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/25日<br>
 * @author: tlidx <br>
 */

import com.example.tlioa.annotation.MethodLogAnnotation;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

//功能： 把当前类标识为一个切面供容器读取
@Aspect
//spring bean
@Component
public class MethodLogAspect {

    //通过注释引入注释点
    @Before(value = "@annotation(before)")
    public void testLog(MethodLogAnnotation before){
        System.out.println(before.type().type+"...");
    }


}
