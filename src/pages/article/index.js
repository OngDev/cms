import React from 'react';
import styles from '../index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Divider, List } from 'antd';
import {
  PlusOutlined,
  ReadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import article from "./dummydata";

class ArticleList extends React.Component {
  state = {
    path: window.location.pathname,
    data: article.articles(),
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

  handleTogglePublic = (articleId, state) => {
    let currentArticle = this.state.list;
    for (var i = 0; i < currentArticle.length; i++) {
      if (currentArticle[i].id == articleId) {
        currentArticle[i].public = !state;
        this.setState({ list: currentArticle });
      }
    }
  };

  render() {
    const { path, list, initLoading, loading} = this.state;
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
    return (
      <div>
        <div className={styles.actionContainer}>
          <Button className={styles.buttonCreate} type="primary">
            <Link to={`${path}/create`}>
              <PlusOutlined />
            </Link>
          </Button>
        </div>
        <Divider orientation="center">Article List</Divider>
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
                  <Button>
                    <ReadOutlined />
                  </Button>,
                  <Button type="primary">
                    <Link to={`${path}/edit`}>
                      <EditOutlined />
                    </Link>
                  </Button>,
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
                  title={<a href="#">{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </Scrollbars>
      </div>
    );
  }
}

export default ArticleList;
