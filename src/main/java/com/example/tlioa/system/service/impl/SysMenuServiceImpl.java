package com.example.tlioa.system.service.impl;

/*
 * @description: 菜单表 服务接口 实现类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/25日<br>
 * @author: tlidx <br>
 */


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.tlioa.system.dao.SysMenuDAO;
import com.example.tlioa.system.entity.SysMenuEntity;
import com.example.tlioa.system.service.SysMenuService;
import org.springframework.stereotype.Service;

@Service
public class SysMenuServiceImpl extends ServiceImpl<SysMenuDAO, SysMenuEntity> implements SysMenuService {
}
