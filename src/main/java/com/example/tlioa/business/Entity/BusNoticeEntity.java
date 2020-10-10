package com.example.tlioa.business.Entity;

/*
 * @description: 公告表实体类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/28日<br>
 * @author: tlidx <br>
 */

import cn.afterturn.easypoi.excel.annotation.Excel;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@TableName("bus_notice")
public class BusNoticeEntity {

    /**
     * id
     */
    @Excel( name = "id" , width = 15)
    private String id;

    /**
     * 标题
     */
    @Excel( name = "标题" , width = 15)
    private String title;

    /**
     * 内容
     */
    @Excel( name = "内容" ,width = 15)
    private String content;

    /**
     * 备注
     */
    @Excel( name = "备注" , width = 15)
    private String remark;

    /**
     * 类型id
     */
    @Excel( name = "类型id" , width = 15)
    private String typeId;

    /**
     * 是否删除
     */
    @Excel( name = "是否删除" , width = 15 , replace = {"true_是" , "false_否"})
    private Boolean isDelete;

    /**
     * 是否发布
     */
    @Excel( name = "是否发布" , width = 15 ,replace = {"true_是" , "false_否"})
    private Boolean isPost;

    /**
     * 优先级
     */
    @Excel( name = "优先级" , width = 15)
    private Integer orderNumber;

    /**
     * 创建时间
     */
    @Excel( name = "创建时间" , width = 15 , format = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GTM+8" , pattern = "yyyy-MM-dd HH:mm:ss")
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
    @Excel( name ="更新时间" , width = 15 , format = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GTM+8" , pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;

    /**
     * 更新人
     */
    @Excel( name = "更新人" , width = 15 )
    private String updateBy;

    /**
     * 是否有附件
     */
    @Excel( name = "是否有附件" ,width = 15 , replace = {"true_是" , "false_否" })
    private Boolean haveAttach;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public Boolean getDelete() {
        return isDelete;
    }

    public void setDelete(Boolean delete) {
        isDelete = delete;
    }

    public Boolean getPost() {
        return isPost;
    }

    public void setPost(Boolean post) {
        isPost = post;
    }

    public Integer getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(Integer orderNumber) {
        this.orderNumber = orderNumber;
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

    public Boolean getHaveAttach() {
        return haveAttach;
    }

    public void setHaveAttach(Boolean haveAttach) {
        this.haveAttach = haveAttach;
    }

    @Override
    public String toString() {
        return "BusNoticeEntity{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", remark='" + remark + '\'' +
                ", typeId='" + typeId + '\'' +
                ", isDelete=" + isDelete +
                ", isPost=" + isPost +
                ", orderNumber=" + orderNumber +
                ", createTime=" + createTime +
                ", createBy='" + createBy + '\'' +
                ", updateTime=" + updateTime +
                ", updateBy='" + updateBy + '\'' +
                ", haveAttach=" + haveAttach +
                '}';
    }
}
