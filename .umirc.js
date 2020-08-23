// ref: https://umijs.org/config/

export default {
  treeShaking: true,
  routes: [
    { path: '/login', component: '../pages/login/index' },
    {
      path: '/',
      component: '../pages/index',
      routes: [
        {
          routes: [
            { path: '/', component: '../pages/analytic/index' },
            {
              path: '/user',
              component: '../pages/user/index',
            },
            {
              path: '/article',
              component: '../pages/article/index',
            },
            {
              path: '/article/edit',
              component: '../pages/article/edit',
            },
          ],
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'cms',
        dll: false,
        locale: {
          enable: true,
          default: 'en-US',
        },
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
