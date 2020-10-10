package com.example.tlioa.system.dao;

/*
 * @description: 菜单表 Mapper 接口
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/25日<br>
 * @author: tlidx <br>
 */


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.tlioa.system.entity.SysMenuEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SysMenuDAO extends BaseMapper<SysMenuEntity> {

}
