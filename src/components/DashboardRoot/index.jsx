import { useState } from 'react';

import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { IconMenu, IconClose } from '../../assets/icons';
import { useStyles } from './styles';
import { SideNavigation } from '../../ui/sideNavigation';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

export const DashboardRoot = (props) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const onSiderCollapse = () => {
    const value = !collapsed;
    setCollapsed(value);
  }

  return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={classes.leftMenu}
          width={270}
          collapsedWidth={60}
        >
          <div className={classes.leftMenuMask} />
          <Button className={[classes.btn, classes.leftMenuBurger].join(" ")} type="primary" onClick={onSiderCollapse}>
            {collapsed ? <MenuOutlined /> : <CloseOutlined />}
          </Button>
          <SideNavigation />
        </Sider>

        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content>{props.children}</Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
          </Footer>
        </Layout>
      </Layout>
  );
};