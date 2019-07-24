import React from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd';

const MainNav = () => {
  return (
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/schools">Schools</Link>
    //     </li>
    //     <li>
    //       <Link to="/degrees">Degrees</Link>
    //     </li>
    //     <li>
    //       <Link to="/calendar">Calendar</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Directions and Contact</Link>
    //     </li>
    //   </ul>
    // </nav>

    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/schools">Schools</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/degrees">Degrees</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/calendar">Calendar</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">Directions and Contact</Link>
      </Menu.Item>
    </Menu>


  );
};

export default MainNav;
