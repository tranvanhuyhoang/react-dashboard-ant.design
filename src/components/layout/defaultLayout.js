import React from 'react';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UnorderedListOutlined,
  TeamOutlined

} from '@ant-design/icons';
import './style.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class DefaultLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick = e => {
    if(e.key == "manage-lesson"){this.props.history.push('/')}
    else{this.props.history.push(`/${e.key}`)}
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
            <Menu.Item key="manage-lesson" icon={<UnorderedListOutlined />} >
              Quản lý bài học
            </Menu.Item>
            <Menu.Item key="manage-students" icon={<TeamOutlined />}>
              Quản lý học viên
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Application ©2021 Super Heroes English</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(DefaultLayout);