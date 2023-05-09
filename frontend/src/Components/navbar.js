import { Menu, Layout, Button } from 'antd';
import '../Scss/navbar.scss';
import logo from '../Assets/logo3.jpg';

const { Header } = Layout
const Navbar = () => {
    return (
        <Header>
            <div className="logo">
                <img src={logo} alt="Logo"/> <div className="imageText">Health</div>
            </div>
            <div className="menu"><Menu mode="horizontal" className="ant-typography"  defaultSelectedKeys={['2']} style={{ float: 'left'}}>
                <Menu.Item key="1">
                    Home
                </Menu.Item>
                <Menu.Item key="2">
                    Doctor
                </Menu.Item>
                <Menu.Item key="3">
                    Services
                </Menu.Item>
                <Menu.Item key="4">
                    Review
                </Menu.Item>
            </Menu>
            <Button className="contact-btn">
             Contact Us <span className="right-arrow">{'>'}</span>    
            </Button>
            </div>
            
        </Header>
    );
};

export default Navbar;
