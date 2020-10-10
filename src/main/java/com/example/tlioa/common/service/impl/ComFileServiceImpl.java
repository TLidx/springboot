package com.example.tlioa.common.service.impl;

/*
 * @description: 文件表 服务接口 实现类
 * @version: 1.0 <br>
 * @date: 2020年10月2020/10/9日<br>
 * @author: tlidx <br>
 */


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.tlioa.common.dao.ComFileDAO;
import com.example.tlioa.common.entity.ComFileEntity;
import com.example.tlioa.common.service.ComFileService;
import org.springframework.stereotype.Service;

@Service
public class ComFileServiceImpl extends ServiceImpl<ComFileDAO , ComFileEntity> implements ComFileService {

}
