package com.example.tlioa.common.controllor;

/*
 * @description: 主页 前端控制器
 * @version: 1.0 <br>
 * @date: 2020年10月2020/10/9日<br>
 * @author: tlidx <br>
 */

import com.example.tlioa.annotation.MethodLogAnnotation;
import groovy.util.logging.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/common/home")
public class ComHomeControllor {

    /**
     * hello页面 测试返回值页面
     * 页面跳转 -> /common/home/hello
     * @return
     */
    @GetMapping("/hello")
    @MethodLogAnnotation
    public String test(){
        return "hello world";
    }

    /**
     * testLayui页面 测试layui页面
     * 页面跳转 -> /common/home/testLayui
     * @param request
     * @return
     */
    @GetMapping("/testLayui")
    @MethodLogAnnotation
    public String test(HttpServletRequest request){
        return "/index";
    }
}
