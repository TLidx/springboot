package com.example.tlioa.common.dao;

/*
 * @description: 字典表 Mapper 接口
 * @version: 1.0 <br>
 * @date: 2020年10月2020/10/9日<br>
 * @author: tlidx <br>
 */


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.tlioa.common.entity.ComDictEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ComDictDAO extends BaseMapper<ComDictEntity> {

}
