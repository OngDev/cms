import React from 'react';
import styles from '../index.css';
import { Form, Button } from 'antd';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const uriGoogle = 'http://localhost/';
    const uriGithub = 'http://localhost/';
    return (
      <Form name="normal_login" className={styles.loginForm} onFinish={this.handleSubmit}>
        <Form.Item>
          <Button
            className={styles.loginGoogle}
            href={`https://user-anm.herokuapp.com/oauth2/authorize/google?redirect_uri=${uriGoogle}`}
          >
            <GoogleOutlined />
            Sign in with Google
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            className={styles.loginGithub}
            href={`https://user-anm.herokuapp.com/oauth2/authorize/github?redirect_uri=${uriGithub}`}
          >
            <GithubOutlined />
            Sign in with Github
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
