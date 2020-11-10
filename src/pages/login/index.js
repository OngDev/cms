import React from 'react';
import styles from '../index.css';
import { Form, Button } from 'antd';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';

class Login extends React.Component {

  state = { token: "" }

  componentDidMount = () => {
    // let token = window.location.search.slice(7, 222)
    let token = window.location.search.split(/[=,&]/)[1]
    localStorage.setItem('token', token)
    if (token) {
      setTimeout(() => window.location.replace("http://localhost:3333/analytic?" + token), 0)
    }
  }

  render() {
    const uriGoogle = 'http://localhost:3333/login';
    const uriGithub = 'http://localhost:3333/login';
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
