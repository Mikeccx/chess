import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
import { useRouter, useNavigate } from 'react-router-dom'
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Wiki', 'wiki', <MailOutlined />),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('wiki', 'wiki')
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Option 11', '11'),
    //   getItem('Option 12', '12'),
    ]),
  ];

  export default () => {
    const [theme, setTheme] = useState('light');
    const [current, setCurrent] = useState('1');
    const na =useNavigate()

    const changeTheme = (value) => {
      setTheme(value ? 'dark' : 'light');
    };
  
    const onClick = (e) => {
      const { key } = e
      na(`/${key}`)
      setCurrent(e.key);
    };
  
    return (
      <>
        {/* <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
        <Menu
          theme={theme}
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultOpenKeys={['home']}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </>
    );
  };