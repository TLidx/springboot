package com.example.tlioa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

//springboot启动
@SpringBootApplication
//启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
@EnableTransactionManagement
public class TlioaApplication {
    public static void main(String[] args) {
        SpringApplication.run(TlioaApplication.class, args);
    }

}
