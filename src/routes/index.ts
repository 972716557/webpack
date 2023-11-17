// 导入路由组件
import Home from "../home";
import Interview from "../interview";
// 导入路由管理工具

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/interview",
    exact: true,
    component: Interview,
  },
];

export default routes;
