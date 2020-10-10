package com.example.tlioa.common.entity;

/*
 * @description: 文件类型表实体类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/28日<br>
 * @author: tlidx <br>
 */

import cn.afterturn.easypoi.excel.annotation.Excel;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@TableName("com_file")
public class ComFileEntity {

    private static final long serialVersionUID= 1L;

    /**
     * id
     */
    @Excel( name = "id" , width = 15)
    private String id;

    /**
     * 文件名
     */
    @Excel( name = "文件名" , width = 15)
    private String name;

    /**
     * 文件拓展名
     */
    @Excel( name = "文件拓展名" , width = 15)
    private String ext;

    /**
     * 本地路径
     */
    @Excel( name = "本地路径" , width = 15)
    private String local;

    /**
     * 备注
     */
    @Excel( name = "备注" , width = 15)
    private String remark;

    /**
     * 文件来源
     */
    @Excel( name = "文件来源" , width = 15)
    private String bizId;

    /**
     * 来源类型
     */
    @Excel( name = "来源类型" , width = 15)
    private String bizType;

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

    @Excel( name = "是否删除" , width = 15 , replace = {"true_是" , "false_否"})
    private Boolean isDelete;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getExt() {
        return ext;
    }

    public void setExt(String ext) {
        this.ext = ext;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getBizId() {
        return bizId;
    }

    public void setBizId(String bizId) {
        this.bizId = bizId;
    }

    public String getBizType() {
        return bizType;
    }

    public void setBizType(String bizType) {
        this.bizType = bizType;
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

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    @Override
    public String toString() {
        return "ComFileEntity{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", ext='" + ext + '\'' +
                ", local='" + local + '\'' +
                ", remark='" + remark + '\'' +
                ", bizId='" + bizId + '\'' +
                ", bizType='" + bizType + '\'' +
                ", createTime=" + createTime +
                ", createBy='" + createBy + '\'' +
                ", updateTime=" + updateTime +
                ", updateBy='" + updateBy + '\'' +
                ", isDelete=" + isDelete +
                '}';
    }
}
