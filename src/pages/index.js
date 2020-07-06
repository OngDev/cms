import React from 'react';
import styles from './index.css';
import { Layout, Menu, Breadcrumb, Icon, Avatar, Dropdown } from 'antd';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu mode="horizontal">
    <Menu.Item key="0">User Role</Menu.Item>
    <hr></hr>
    <Menu.Item key="1">
      <a href="http://localhost:8000/userinfo">User Info</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="http://localhost:8000/login">Logout</a>
    </Menu.Item>
  </Menu>
);

class HomePage extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                <Avatar size="large" icon="user"></Avatar>
              </a>
            </Dropdown>
          </Header>
          <Breadcrumb style={{ margin: '8px 0' }}></Breadcrumb>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default HomePage;
