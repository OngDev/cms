import React from 'react';
import styles from './index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Row, Col, Button, Divider, List } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';

class ArticleList extends React.Component {
  state = { path: window.location.pathname };

  render() {
    const { path } = this.state;
    const data = [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
      {
        title: 'Ant Design Title 4',
      },
    ];

    return (
      <div>
        <div className={styles.actionContainer}>
          <Button className={styles.buttonCreate} type="primary">
            <PlusOutlined />
          </Button>
        </div>
        <Divider orientation="center">Article List</Divider>
        <Scrollbars autoHide autoHeight autoHeightMin={470}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button type="primary">
                    <Link to={`${path}/edit`}>
                      <EditOutlined />
                    </Link>
                  </Button>,
                  <Button>
                    <Link to={`${path}/public`}>
                      <EyeInvisibleOutlined />
                    </Link>
                  </Button>,
                  <Button type="danger">
                    <Link to={`${path}/delete`}>
                      <DeleteOutlined />
                    </Link>
                  </Button>,
                ]}
              >
                <List.Item.Meta title={item.title} description="This is a content of article" />
              </List.Item>
            )}
          />
        </Scrollbars>
      </div>
    );
  }
}

export default ArticleList;
