import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Spin, notification, Icon } from 'antd';

const openNotification = () => {
    notification.open({
      message: 'Welcome to STU !',
      description:
        'you are not far from us, come over and visit our beautiful campus !',
      duration: 5,
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
  };

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.605516,
      lng: -122.331733
    },
    zoom: 11
  };
  
  state = {
      userLocation: { lat: 47.605516, lng: -122.331733 },
      loading: true
  };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {

    const { userLocation, loading} = this.state;
    if(loading) {
        return (
            <Spin tip="Map is loading..." />
        );
    }

    openNotification();

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '20rem', width: '20rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD0mHhnhEpGMM1BH_C1LnDeVjtUCBaHnH8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
            <Icon 
            type="heart"
            theme="twoTone" 
            twoToneColor="#eb2f96"
            lat={userLocation.lat}
            lng={userLocation.lng} 
            />

            <Icon 
            type="home" 
            theme="twoTone" 
            lat={this.props.center.lat}
            lng={this.props.center.lng} 
            />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;