package com.example.tlioa.system.controllor;

/*
 * @description: 菜单表 前端控制器
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/25日<br>
 * @author: tlidx <br>
 */

import com.example.tlioa.annotation.MethodLogAnnotation;
import com.example.tlioa.system.entity.SysMenuEntity;
import com.example.tlioa.system.service.SysMenuService;
import com.example.tlioa.util.ResponseUtils;
import com.example.tlioa.vo.MethodLogType;
import com.example.tlioa.vo.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/system/menu")
public class SysMenuControllor {

    @Autowired
    private SysMenuService sysMenuService;

    /**
     * 添加系统菜单
     * @param sysMenuEntity
     * @return
     */
    @PostMapping("/add")
    @ResponseBody
    public Result<?> add(@RequestBody SysMenuEntity sysMenuEntity){
        boolean flag = sysMenuService.save(sysMenuEntity);
        if(flag){
            return ResponseUtils.ok();
        }
        return ResponseUtils.error("添加失败");
    }

    /**
     * 获取系统菜单列表
     * @return
     */
    @MethodLogAnnotation(type = MethodLogType.MENU)
    @GetMapping("/list")
    @ResponseBody
    public Result<?> list(){
        List<SysMenuEntity> list = sysMenuService.list();
        return ResponseUtils.ok(list);
    }



}
