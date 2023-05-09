import { Card, Avatar, Button } from 'antd';
import { useState, useEffect } from 'react';
import profile1 from '../Assets/profile1.avif'
import '../Scss/Home.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { fetchDoctors } from '../Redux/actions/actions';
import { connect } from 'react-redux';

const { Meta } = Card;

const ProfileCard = ({ name, title, description, isExpanded, onMouseEnter, onMouseLeave }) => {
    const cardStyle = {
        width: '255px',
        height: '300px',
        float: 'left',
        flexDirection: 'row',
        alignItems: 'center',
        // transition: 'width 0.5s',
    };

    const expandedCardStyle = {
        width: '510px',
        height: '300px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // transition: 'width 0.5s',
        background: 'black',
        color: 'white',
    };

    const profileInfoStyle = {
        width: '255px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '16px',
        color: 'white',
    };

    const detailsStyle = {
        width: '255px',
        display: isExpanded ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        opacity: isExpanded ? 1 : 0,
        // transition: 'opacity 0.5s, width 0.5s',
        padding: '16px',
    };

    return (
        <Card
            style={isExpanded ? expandedCardStyle : cardStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={profileInfoStyle}>
                <div><Avatar src={profile1} size={150} style={{ margin: 'auto' }} /></div>
                <Meta title={name} description="Senior at orthopedic" />
            </div>
            <div style={detailsStyle} className='card-right'>
                <Button className="custom" style={{ float: 'right' }}>view profile</Button>
                <div className="card-item"><p style={{ color: 'grey' }}>Degree</p><p><b>MBBS, FCPS</b></p></div>
                <div className="card-item"><p style={{ color: 'grey' }}>Speciality</p><p><b>Senior at Orthopedic</b></p></div>
                <div className="card-item"><p style={{ color: 'grey' }}><b>Chamber</b></p><p style={{ color: 'grey' }} className='chamber'>International hospital in Bankok, Thailand</p></div>
                <div className="card-item"><p><b><ArrowRightOutlined style={{ padding: '5px' }} />Booking Available Online</b></p></div>
            </div>
        </Card>
    );
};

const ProfileCards = (props) => {
    const { loading, doctors, error, fetchDoctors } = props;

    console.log(props)
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        setExpandedIndex(-1);
    };

    useEffect(() => {
        fetchDoctors();
    }, [fetchDoctors]);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <div className='profileSet'>
            {doctors && doctors.map((item, index) => (
                <ProfileCard
                    key={index}
                    name={item.name}
                    title='abc'
                    description='abc'
                    isExpanded={index === expandedIndex}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.doctorReducer.Loading,
        doctors: state.doctorReducer.doctors,
        error: state.doctorReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDoctors: () => dispatch(fetchDoctors())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCards);



