import { Layout, Menu, Table } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { isMAC } from 'getmac';

import {
  isIOS,
  isChrome,
  isFirefox,
  isSafari,
  isOpera,
  isIE,
  isEdge,
  isMobileSafari,
  browserVersion,
  browserName,
  mobileVendor,
  mobileModel,
  engineVersion,
  engineName,
  OsTypes,
  deviceDetect,
  osVersion,
  osName
} from "react-device-detect";

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;



function App() {
  // Location details.. 
  const [details, setDetails] = useState([]);
  fetch("https://geolocation-db.com/json/56a44b30-a71d-11eb-8c73-0f972c34e9c0")
    .then(res => res.json())
    .then(datas => setDetails(datas))

  // if (isChrome) {
  //   return <div> This content is unavailable on mobile</div>
  // }
  // else {
  //   return <div> ...content </div>
  // } 

  // Table..
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'Browser',
      dataIndex: 'browser',
      key: 'browser',
      width: 100,
    },
    {
      title: 'Ip Address',
      dataIndex: 'ip',
      key: 'ip',
      width: 130,
    },
    {
      title: 'Mac Address',
      dataIndex: 'mac',
      key: 'mac',
      width: 120,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      width: 120,
    },
    {
      title: 'Device',
      dataIndex: 'device',
      key: 'device',
      width: 80,
    },
    {
      title: 'Long Column Long Column',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: true,
    },
    {
      title: 'Long Column',
      dataIndex: 'address',
      key: 'address 4',
      ellipsis: true,
    },
  ];

  const data = [
    {
      key: '1',
      name: details.country_name,
      browser: 'lol',
      ip: details.IPv4,
      mac: '0000.0000',
      location: 'Comilla',
      device: osName,
    }
  ];

  // Table


  return (
    <div>
      <Layout>
        {/*  Header starts here... */}
        <Header>
          <Menu mode="horizontal" theme="dark">
            {/* Home navigation */}
            <Menu.Item key="" icon={<MailOutlined />} title="Home">Home</Menu.Item>
            {/* Career */}
            <SubMenu key="sub1" title="Career" >
              <Menu.Item key="2">Front-End Development</Menu.Item>
              <Menu.Item key="3">Back-End Development</Menu.Item>
              <Menu.Item key="4">Go</Menu.Item>
              <Menu.Item key="5">Others</Menu.Item>
            </SubMenu>
            {/* Themes */}
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Themes">
              <Menu.Item key="5">PSD Templates</Menu.Item>
              <Menu.Item key="6">Wordpress Theme</Menu.Item>
              <SubMenu key="sub3" title="JavaScript">
                <Menu.Item key="7">React</Menu.Item>
                <Menu.Item key="8"> Angular </Menu.Item>
              </SubMenu>
            </SubMenu>
            {/* About us */}
            <Menu.Item key="2">About Us</Menu.Item>
          </Menu>
        </Header>
        {/* Header ends here... */}

        <Content>
          <Table columns={columns} dataSource=