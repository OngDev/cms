import React from 'react';
import { List, Button } from 'antd';

class ArticleList extends React.Component {
  render() {
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
    ];

    return (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<Button type="primary">Edit</Button>]}>
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    );
  }
}

export default ArticleList;
