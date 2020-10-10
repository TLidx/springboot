package com.example.tlioa.common.entity;

/*
 * @description: 字典表实体类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/28日<br>
 * @author: tlidx <br>
 */


import cn.afterturn.easypoi.excel.annotation.Excel;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.models.auth.In;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@TableName("com_dict")
public class ComDictEntity {

    private static final long serialVersionUID= 1L;

    /**
     * id
     */
    @Excel( name = "id" , width = 15)
    private String id;

    /**
     * 编码
     */
    @Excel( name = "编码" , width = 15)
    private String code;

    /**
     * 名称
     */
    @Excel( name = "名称" , width = 15)
    private String name;

    /**
     * 父id
     */
    @Excel( name = "父id" , width = 15)
    private String pid;

    /**
     * 备注
     */
    @Excel( name = "备注" , width = 15)
    private String remark;

    /**
     * 排序
     */
    @Excel( name = "排序" , width = 15)
    private Integer idx;

    /**
     * 创建时间
     */
    @Excel( name = "创建时间" , width = 15 ,format = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8" ,pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;

    /**
     * 创建人
     */
    @Excel( name = "创建人" , width = 15)
    private String createBy;

    /**
     * 更新时间
     */
    @Excel( name = "更新时间" , width = 15 ,format = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8" , pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;

    /**
     * 更新人
     */
    @Excel( name = "更新人" , width = 15)
    private String updateBy;

    /**
     * 状态
     */
    @Excel( name = "状态" , width = 15 , replace = {"1_启用" , "2_禁用"})
    private Integer state;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPid() {
        return pid;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getIdx() {
        return idx;
    }

    public void setIdx(Integer idx) {
        this.idx = idx;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    @Override
    public String toString() {
        return "ComDictEntity{" +
                "id='" + id + '\'' +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", pid='" + pid + '\'' +
                ", remark='" + remark + '\'' +
                ", idx=" + idx +
                ", createTime=" + createTime +
                ", createBy='" + createBy + '\'' +
                ", updateTime=" + updateTime +
                ", updateBy='" + updateBy + '\'' +
                ", state=" + state +
                '}';
    }
}
