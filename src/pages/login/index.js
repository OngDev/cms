import React from 'react';
import styles from '../index.css';
import { Redirect } from 'UMI';
import { Form, Button } from 'antd';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';

class Login extends React.Component {

  state = { token: "" }

  componentDidMount = () => {
    this.setState({token: window.location.search})
    console.log(window.location.search)
  }

  render() {
    const uriGoogle = 'http://localhost:3333/login';
    const uriGithub = 'http://localhost:3333/';
    return (
      <Form name="normal_login" className={styles.loginForm}>
        <Form.Item>
          <Button
            className={styles.loginGoogle}
            href={`https://user-anm-dev.herokuapp.com/oauth2/authorize/google?redirect_uri=${uriGoogle}`}
          >
            <GoogleOutlined />
            Sign in with Google
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            className={styles.loginGithub}
            href={`https://user-anm-dev.herokuapp.com/oauth2/authorize/github?redirect_uri=${uriGithub}`}
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
