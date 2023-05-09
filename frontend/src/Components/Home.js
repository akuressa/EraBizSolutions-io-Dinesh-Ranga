import Navbar from './navbar'
import Form from './Form'
import SearchBar from './SearchBar'
import SpecialityForm from './Speciality'
import Profile from './Profile'
import '../Scss/navbar.scss';
import '../Scss/Home.scss';
import {Col, Row, Menu, Dropdown, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';

const country = (
    <Menu>
      <Menu.Item key="1">Bangladesh</Menu.Item>
      <Menu.Item key="2">Srilanka</Menu.Item>
      <Menu.Item key="3">Australia</Menu.Item>
    </Menu>
  );
const state = (
    <Menu>
      <Menu.Item key="1">Matara</Menu.Item>
      <Menu.Item key="2">Galle</Menu.Item>
      <Menu.Item key="3">Sydney</Menu.Item>
    </Menu>
  );

const Home = () => {
    return (
        <div>
            <div className="homePage">
                <div className="container">
                    <Navbar />
                    <div className="headers">
                        <h1>Search Doctor, Make an Appointment</h1>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>
                    <Form />
                </div>     
            </div>
            <div className="content">
                <div className="container">
                    <Row className="search-bar">
                        <Col md={8} style={{float:'left'}}>
                            <SearchBar />
                            <div>
                                <div className="label">Country</div>
                                <Dropdown overlay={country}>
                                    <Button className="dropdown-btn">
                                        <div style={{float:'left', color:"grey"}}>Select a country</div>
                                        <div style={{float:'right'}}><DownOutlined /></div>    
                                    </Button>
                                </Dropdown>
                            </div>
                            <div>
                                <div className="label">District/State</div>
                                <Dropdown overlay={state}>
                                    <Button className="dropdown-btn">
                                        <div style={{float:'left', color:"grey"}}>Select a state</div>
                                        <div style={{float:'right'}}><DownOutlined /></div> 
                                    </Button>
                                </Dropdown>
                            </div>
                            <div className="specialityForm">
                                <div className="label">Speciality</div>
                                <SpecialityForm/>
                            </div>
                        </Col>
                        <Col md={16} offset= {2} style={{float:'left'}} className="rightcol">
                            <div className="right-side">
                                <Profile />
                            </div>
                        </Col>
                    </Row>
                </div> 
            </div>  
        </div>
    );
};

export default Home;