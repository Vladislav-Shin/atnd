import React from 'react';
import { NavLink } from "react-router-dom"
import { Menu } from "antd";
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { useStyles } from './styles';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const getItems = () => {
  const lists = [
    {
      name: "Home",
      path: "/",
      icon: <PieChartOutlined />
    },
    {
      name: "About",
      path: "/about",
      icon: <DesktopOutlined />
    },
    {
      name: "Product",
      path: "/product",
      icon: <TeamOutlined />
    },
    {
      name: "Team",
      path: "/team",
      icon: <TeamOutlined />
    },
  ]

  return lists;
}


export const SideNavigation = () => {
  const classes = useStyles()
  const getMenu = (menu) => {

    return menu.map((item) => {
      const menuItem = (
        <div>
          {item.path ?
            <NavLink to={item.path} className>
              <span>{item.name}</span>
            </NavLink>
            :
            <span>{item.name}</span>
          }
        </div>
      )

      const icon = item.icon ? <span className={classes.menuItemIcon}>{item.icon}</span> : null;

      const itemObj = {
        key: item.path || item.key,
        label: menuItem,
        icon: icon,
      }

      return itemObj
    })
  }
  return (
    <Menu theme="dark" mode="inline" className={classes.navigation} items={getMenu(getItems())} />
  );
};
