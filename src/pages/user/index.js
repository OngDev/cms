import React from 'react';
import styles from '../index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Divider, List, Dropdown, Descriptions, message } from 'antd';
import { PlusOutlined, DeleteOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import user from './dummydata';

class UserList extends React.Component {
  state = {
    path: window.location.pathname,
    data: user.users(),
    info: user.info(),
    list: [],
    itemShow: 6,
    itemLoad: 3,
    initLoading: true,
    loading: false,
  };

  componentDidMount() {
    let { data, itemShow } = this.state;
    const currentList = this.state.list;
    for (var i = 0; i < itemShow; i++) {
      currentList.push(data[i]);
    }
    this.setState({ initLoading: false, list: currentList });
  }

  handleLoadMore = () => {
    let { data, itemShow, itemLoad } = this.state;
    const currentList = [];
    const itemExist = data.length - itemShow;
    if (itemExist >= itemLoad) {
      for (var i = 0; i < itemShow + itemLoad; i++) {
        currentList.push(data[i]);
      }
      this.setState({ itemShow: itemShow + itemLoad });
    } else {
      for (var i = 0; i < itemShow + itemExist; i++) {
        currentList.push(data[i]);
      }
      this.setState({ itemShow: itemShow + itemExist });
    }
    if (itemShow + itemExist - currentList.length <= 0) {
      this.setState({ loading: true });
    }
    this.setState({ list: currentList });
  };

  handleTogglePublic = (userId, state) => {
    let currentUser = this.state.list;
    for (var i = 0; i < currentUser.length; i++) {
      if (currentUser[i].id == userId) {
        currentUser[i].public = !state;
        this.setState({ list: currentUser });
      }
    }
  };

  handleToggleLock = () => {
    let currentState = this.state.isLock;
    this.setState({ isLock: !currentState });
  };

  render() {
    const { path, info, list, initLoading, loading } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.handleLoadMore}>loading more</Button>
        </div>
      ) : null;
    const infomation = () => {
      return (
        <Descriptions layout="horizontal" column={4} size="middle" bordered>
          <Descriptions.Item label="User Name: ">Hello Hello</Descriptions.Item>
          <Descriptions.Item label="Age: ">18</Descriptions.Item>
          <Descriptions.Item label="Email: ">hello@hello.com</Descriptions.Item>
          <Descriptions.Item label="Date Register: ">01/01/2021</Descriptions.Item>
        </Descriptions>
      );
    };
    return (
      <div>
        <div className={styles.actionContainer}>
          <Button className={styles.buttonCreate} type="primary">
            <Link to={`${path}/create`}>
              <PlusOutlined />
            </Link>
          </Button>
        </div>
        <Divider orientation="center">User List</Divider>
        <Scrollbars autoHide autoHeight autoHeightMin={460}>
          <List
            className={styles.listArticle}
            loading={initLoading}
            loadMore={loadMore}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button
                    type={item.public ? '' : 'danger'}
                    onClick={() => this.handleTogglePublic(item.id, item.public)}
                  >
                    {item.public ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                  </Button>,
                  <Button type="danger">
                    <Link to={`${path}/delete`}>
                      <DeleteOutlined />
                    </Link>
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  className={styles.titleArticle}
                  title={
                    <Dropdown overlay={infomation}>
                      <a className="ant-dropdown-link">{item.title}</a>
                    </Dropdown>
                  }
                />
              </List.Item>
            )}
          />
        </Scrollbars>
      </div>
    );
  }
}

export default UserList;
