'use client'

import 'antd/dist/reset.css';
import { Inter } from "next/font/google";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import React from "react";
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ["latin"] });



export function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const router = useRouter();
  const navItem = [
    {
      key: '1',
      label: '浙江一区'
    }
  ]
  const menuItem = [{
    key: `loggingData`,
    icon: React.createElement(UserOutlined),
    label: `价格录入`,
  },{
    key: '2',
    icon: React.createElement(LaptopOutlined),
    label: '数据面板'
  },{
    key: '3',
    icon: React.createElement(NotificationOutlined),
    label: '装备录入'
  }]
  const { Header, Content, Sider, Footer } = Layout;
  const handleClickMenu = (value:any)=>{
    console.log('value', value)
    router.push(`/${value.key}`)
  }
  return (


        <Layout className="container">
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              items={navItem}
            />
          </Header>
          <Content style={{ padding: "0 50px"}}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout>
              <Sider  width={300}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                  items={menuItem}
                  onClick={handleClickMenu}
                />
              </Sider>
              {children}
              
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>


  )
}