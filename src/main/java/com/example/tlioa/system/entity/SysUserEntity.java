package com.example.tlioa.system.entity;

/*
 * @description: 用户表实体类
 * @version: 1.0 <br>
 * @date: 2020年09月2020/9/28日<br>
 * @author: tlidx <br>
 */

import cn.afterturn.easypoi.excel.annotation.Excel;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@TableName("sys_user")
public class SysUserEntity {

    /**
     * id
     */
    @Excel( name = "id" , width = 15)
    private String id;

    /**
     * 用户名
     */
    @Excel(name = "用户名" , width = 15)
    private String userName;

    /**
     * 密码
     */
    @Excel(name = "密码" , width = 15)
    private String password;

    /**
     * 中文名
     */
    @Excel(name = "中文名" , width = 15)
    private String cnName;

    /**
     * 头像文件id
     */
    @Excel(name = "头像文件id" , width = 15)
    private String avatarFileId;

    /**
     * 电话号码
     */
    @Excel( name = "电话号码" , width = 15)
    private Integer phone;

    /**
     * 电子邮箱
     */
    @Excel( name = "电子邮箱" , width = 15)
    private String email;

    /**
     * 性别
     */
    @Excel( name = "性别" , width = 15 , replace = {"true_男","false_女"})
    private Boolean sex;

    /**
     * 年龄
     */
    @Excel( name = "年龄" , width = 15)
    private Integer age;

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
    @Excel( name = "更新时间" , width = 15 , format = "yyyy-MM-dd HH:mm:ss")
    @JsonFormat(timezone = "GMT+8" , pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updateTime;

    /**
     * 更新人
     */
    @Excel( name = "更新人" , width = 15)
    private String updateBy;

    /**
     * 是否删除
     */
    @Excel( name = "是否删除" , width = 15 , replace = {"true_是" , "false_否"})
    private Boolean isDelete;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCnName() {
        return cnName;
    }

    public void setCnName(String cnName) {
        this.cnName = cnName;
    }

    public String getAvatarFileId() {
        return avatarFileId;
    }

    public void setAvatarFileId(String avatarFileId) {
        this.avatarFileId = avatarFileId;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getSex() {
        return sex;
    }

    public void setSex(Boolean sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
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
        return "SysUserEntity{" +
                "id='" + id + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", cnName='" + cnName + '\'' +
                ", avatarFileId='" + avatarFileId + '\'' +
                ", phone=" + phone +
                ", email='" + email + '\'' +
                ", sex=" + sex +
                ", age=" + age +
                ", createTime=" + createTime +
                ", createBy='" + createBy + '\'' +
                ", updateTime=" + updateTime +
                ", updateBy='" + updateBy + '\'' +
                ", isDelete=" + isDelete +
                '}';
    }
}
