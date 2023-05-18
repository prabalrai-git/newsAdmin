import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import HeaderCustom from "../components/Header";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menuItems = [
    { key: 1, label: "Dashboard" },
    { key: 2, label: "News" },
    { key: 3, label: "Stories" },
    { key: 4, label: "Ads" },
    { key: 5, label: "Users" },
    { key: 6, label: "Analytics" },
  ];

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        style={{ minHeight: "100vh", backgroundColor: "#008358" }}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <div
          style={{
            width: "100%",
            background: "#006300",
            // height: 55,
            marginBottom: 20,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            padding: "15px",
          }}
        >
          LOGO
        </div>
        <Menu
          style={{ backgroundColor: "#008358", color: "white", width: "100%" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <HeaderCustom
          pageTitle={"Created news"}
          addTitle={"Create News"}
          buttonTitle={"Add a News"}
        />
        <Content style={{ margin: " 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default MainLayout;
