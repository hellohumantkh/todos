import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Menu,
  Icon,
  Breadcrumb,
} from 'antd';
import { Link } from 'react-router-dom';
import { MENU } from '../../config';
import './index.scss';

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class AppLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  generateMenu = data => data.map(level1 =>
    (
      <SubMenu
        key={level1.name}
        title={<span>{ level1.icon && <Icon type={level1.icon} />}<span>{level1.label}</span></span>}
      >
        {
            level1.children.filter(level2 => level2.menu === true).map(level2 => (
              <Menu.Item key={level2.name}>
                <Link to={level2.name}>{level2.label}</Link>
              </Menu.Item>
            ))
          }
      </SubMenu>
    ))

  generateBreadcrumb = (data, path) => {
    const bcs = [];
    data.forEach((level1) => {
      level1.children.forEach((level2) => {
        if (level2.name === path) {
          bcs.push(level1.label);
          bcs.push(level2.label);
        }
      });
    });
    return (
      <Breadcrumb>
        { bcs.map(bc => <Breadcrumb.Item>{bc}</Breadcrumb.Item>) }
      </Breadcrumb>
    );
  }

  render() {
    const { children } = this.props;

    return (
      <Layout className="app-container">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            Hello AiMake
          </div>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            { this.generateMenu(MENU) }
          </Menu>
        </Sider>
        <Layout>
          <Header className="app-header-container">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className="app-content-container">
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;

