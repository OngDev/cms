import React from 'react';
import styles from '../index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Divider, List, Avatar } from 'antd';
import { PlusOutlined, DeleteOutlined, UnlockOutlined, LockOutlined } from '@ant-design/icons';

class UserList extends React.Component {
  state = { path: window.location.pathname, isLock: false };

  handleToggleLock = () => {
    let currentState = this.state.isLock;
    this.setState({ isLock: !currentState });
  };

  render() {
    const { path, isLock } = this.state;
    const data = [
      {
        name: 'User 1',
      },
      {
        name: 'User 1',
      },
      {
        name: 'User 1',
      },
      {
        name: 'User 1',
      },
    ];

    return (
      <div>
        <div className={styles.actionContainer}>
          <Button className={styles.buttonCreate} type="primary">
            <PlusOutlined />
          </Button>
        </div>
        <Divider orientation="center">User List</Divider>
        <Scrollbars autoHide autoHeight autoHeightMin={470}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button type={isLock ? 'danger' : 'primary'} onClick={this.handleToggleLock}>
                    {isLock ? <LockOutlined /> : <UnlockOutlined />}
                  </Button>,
                  <Button type="danger">
                    <Link to={`${path}/delete`}>
                      <DeleteOutlined />
                    </Link>
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name}
                  description="This is a description"
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
