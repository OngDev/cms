import React from 'react';
import styles from '../index.css';
import { Link } from 'UMI';
import { Scrollbars } from 'react-custom-scrollbars';
import { Button, Divider, Card, Row, Col } from 'antd';
import {
  PlusOutlined,
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
  };

  handleTogglePublic = (index, state) => {
    let currentArticle = this.state.articles;
    currentArticle[index].public = !state;
    this.setState({ articles: currentArticle });
  };

  render() {
    const { path, articles } = this.state;
    const article = articles.map((data, index) => {
      return (
        <Col key={index} span={12}>
          <div style={{ padding: '8px 0', margin: '0 8px' }}>
            <Card
              type="inner"
              hoverable={true}
              activeTabKey={index}
              title={data.title}
              actions={[
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
              <div className={styles.hiddenContent}>{data.content}</div>
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
        <Scrollbars autoHide autoHeight autoHeightMin={440}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '0 8px' }}>
            {article}
          </Row>
        </Scrollbars>
      </div>
    );
  }
}

export default ArticleList;
