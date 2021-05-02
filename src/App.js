import { Layout, Menu, Table } from 'antd';
import { MailOutlined, AppstoreOutlined, DingdingOutlined, BugOutlined } from '@ant-design/icons';
import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { browserName, osName } from "react-device-detect";

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;

function App() {
  // Location details api fetch... 
  const [details, setDetails] = useState([]);
  fetch("https://geolocation-db.com/json/56a44b30-a71d-11eb-8c73-0f972c34e9c0")
    .then(res => res.json())
    .then(datas => setDetails(datas))

  // Table data and UI starts here...

  // UI...
  const columns = [
    {
      title: 'Browser Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
      ellipsis: true,
    },
    {
      title: 'Device',
      dataIndex: 'device',
      key: 'device',
      ellipsis: true,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      ellipsis: true,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ellipsis: true,
    },
    {
      title: 'Ip Address',
      dataIndex: 'ip',
      key: 'ip',
      ellipsis: true,
    },
    {
      title: 'Postal Code',
      dataIndex: 'postal',
      key: 'postal',
      ellipsis: true,
    },
    {
      title: 'Latitude',
      dataIndex: 'latitude',
      key: 'latitude',
      ellipsis: true,
    },
    {
      title: 'Country_Code',
      dataIndex: 'country_code',
      key: 'country_code',
      ellipsis: true,
    },
  ];

  // Data...
  const data = [
    {
      key: '1',
      name: browserName,
      location: details.city,
      device: osName,
      latitude: details.latitude,
      country: details.country_name,
      ip: details.IPv4,
      country_code: details.country_code,
      postal: details.postal,
    }
  ];

  // Table data an UI ends...


  return (
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

        {/* Main content starts here... */}
        <Content>
          <Table style={{ paddingTop: "50px" }} columns={columns} dataSource={data} />
        </Content>
        {/* Main content ends here... */}

        {/* Footer starts here... */}
        <Footer>
          <DingdingOutlined style={{ fontSize: '42px', color: "green" }} /> <b>Fly to heaven...</b> <BugOutlined style={{ fontSize: '18px', color: "blue" }} />
        </Footer>
        {/* Footer end here... */}
      </Layout>
  );
}

export default App;
