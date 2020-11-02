import React from 'react';
import styles from './index.css';
import { Link, Redirect } from 'UMI';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import { PieChartOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">User Role</Menu.Item>
    <hr></hr>
    <Menu.Item key="1">
      <a href="http://localhost:8000/userinfo">User Info</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <a href="http://localhost:8000/login">Logout</a>
    </Menu.Item>
  </Menu>
);

class LayoutCMS extends React.Component {
  state = {
    isLogin: false,
    collapsed: false,
    selectedKey: window.location.pathname.split('/'),
  };

  UNSAFE_componentWillMount = () => {
    if (window.location.href.split('/')[3] === '') {
      this.setState({ selectedKey: 'analytic' });
    }
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { isLogin,selectedKey } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={`${selectedKey}`} mode="inline">
            <Menu.Item key="analytic" disabled={false}>
              <Link to="/">
                <PieChartOutlined />
                <span>Analytic</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to="/user">
                <UserOutlined />
                <span>User</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="article">
              <Link to="/article">
                <UnorderedListOutlined />
                <span>Article List</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
              <a className="ant-dropdown-link" href="#/">
                <Avatar size="large">
                  <UserOutlined />
                </Avatar>
              </a>
            </Dropdown>
          </Header>
          <Breadcrumb className={styles.breakdcrum}></Breadcrumb>
          <Content className={styles.content}>
            {isLogin ? this.props.children : <Redirect to="/login" />}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutCMS;
