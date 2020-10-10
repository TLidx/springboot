package com.example.tlioa.common.controllor;

/*
 * @description: 测试返回值类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/24日<br>
 * @author: tlidx <br>
 */

import com.example.tlioa.annotation.MethodLogAnnotation;
import com.example.tlioa.util.ResponseUtils;
import com.example.tlioa.vo.Result;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/common/test")
public class TestControllor {

    @MethodLogAnnotation
    @GetMapping("/testOk")
    public Result<?> testOk(){
        return ResponseUtils.ok();
    }

    @GetMapping("/testOkAndData")
    public Result<?> testOkAndData(){
        Map<String,String> map = new HashMap<String, String>();
        map.put("name","jack");
        map.put("sex","femail");
        return ResponseUtils.ok(map);
    }



}
