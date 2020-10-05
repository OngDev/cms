import React from 'react';
import styles from '../index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Divider, Card, Row, Col } from 'antd';
import {
  PlusOutlined,
  ReadOutlined,
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
import article from './dummydata';

class ArticleList extends React.Component {
  state = {
    path: window.location.pathname,
    articles: article.articles(),
    selectedArticle: null,
  };

  handleReadArticle = indexArticle => {
    console.log('ok ' + indexArticle);
    if (indexArticle != this.state.selectedArticle) {
      this.setState({ selectedArticle: indexArticle });
    } else {
      this.setState({ selectedArticle: null });
    }
  };

  handleTogglePublic = (indexArticle, state) => {
    let currentArticle = this.state.articles;
    currentArticle[indexArticle].public = !state;
    this.setState({ articles: currentArticle });
  };

  render() {
    const { path, articles, selectedArticle } = this.state;
    const article = articles.map((data, index) => {
      return (
        <Col key={index} span={index == selectedArticle ? 24 : 12}>
          <div className={styles.cardArticle} style={{}}>
            <Card
              type="inner"
              hoverable={true}
              activeTabKey={index}
              title={data.title}
              actions={[
                <Button onClick={() => this.handleReadArticle(index)}>
                  <ReadOutlined />
                </Button>,
                <Button type="primary">
                  <Link to={`${path}/edit`}>
                    <EditOutlined />
                  </Link>
                </Button>,
                <Button type="danger">
                  <Link to={`${path}/delete`}>
                    <DeleteOutlined />
                  </Link>
                </Button>,
                <Button
                  type={data.public ? '' : 'danger'}
                  onClick={() => this.handleTogglePublic(index, data.public)}
                >
                  {data.public ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </Button>,
              ]}
            >
              <div className={index == selectedArticle ? styles.maxContent : styles.minContent}>
                {data.content}
              </div>
              <h5>{data.date}</h5>
            </Card>
          </div>
        </Col>
      );
    });

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
        <Scrollbars autoHide autoHeight autoHeightMin={480}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '0 8px' }}>
            {article}
          </Row>
        </Scrollbars>
      </div>
    );
  }
}

export default ArticleList;
