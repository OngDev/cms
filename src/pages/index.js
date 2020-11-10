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
    token: "",
    collapsed: false,
    selectedKey: window.location.pathname.split('/'),
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if (token == "undefined" || token == null) {
      setTimeout(() => window.location.replace("http://localhost:3333/login"), 0)
    } else {
      this.setState({token: token})
    }
  }

  UNSAFE_componentWillMount = () => {
    if (window.location.href.split('/')[3] === '') {
      this.setState({ selectedKey: 'analytic' });
    }
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const {token, selectedKey } = this.state;
    return (
      <div>
      {token ? <Layout style={{ minHeight: '100vh' }}>
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
            {this.props.children}
          </Content>
        </Layout>
      </Layout> : null}
      </div>
    );
  }
}

export default LayoutCMS;
