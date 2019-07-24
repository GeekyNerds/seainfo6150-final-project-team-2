import React from "react";

import Button from 'antd/es/button';
import '../App.css';
import styles from './HomePage.module.css';

import { Carousel } from 'antd';


const HomePage = () => {
  return (
    <div>
      {/* <p>This is the home page</p> */}
      {/* here's an example of how to use the images in the /public/images directory */}
      {/* <img src="images/background_low.jpg" alt="background" /> */}

      <Carousel autoplay className={styles["ant-carousel"]} >
      <div> 
        <div className={styles.slide_container}>
          <div className={styles.slide_text}>Seattle Technological University is devoted to excellence in teaching, 
          learning, and research, <br/>and to developing leaders in many disciplines who 
          make a difference globally. <br/>We have an enrollment of over 20,000 degree 
          candidates, <br/>including undergraduate, graduate, and professional students.
          <br/>We have more than 360,000 alumni around the world.</div>
          <img src="images/background_high.jpg" alt="slide_background" />
        </div>
      </div>

      <div> 
        <div className={styles.slide_container}>
          <span className={styles.slide_text}>Our faculty are engaged with teaching and research to push the boundaries
          of human knowledge. <br/>For students who are excited to investigate the
          biggest issues of the 21st century, <br/>we offer an unparalleled student
          experience and a generous financial aid program, <br/>with over $160 million
          awarded to more than 60% of our undergraduate students. <br/>We have six
          degree-granting Schools, offering a truly global education.</span>
          <img src="images/background_high.jpg" alt="slide_background" />
        </div>
      </div>

      <div> 
        <div className={styles.slide_container}>
          <div className={styles.slide_text}>Established in 1936, Seattle Technological University is the oldest
          institution of higher education in Seattle.</div>
          <img src="images/background_high.jpg" alt="slide_background" />
        </div>
      </div>
      

      </Carousel>

      {/* <br />
      Seattle Technological University is devoted to excellence in teaching,
      learning, and research, and to developing leaders in many disciplines who
      make a difference globally. We have an enrollment of over 20,000 degree
      candidates, including undergraduate, graduate, and professional students.
      We have more than 360,000 alumni around the world.
      <br />
      Our faculty are engaged with teaching and research to push the boundaries
      of human knowledge. For students who are excited to investigate the
      biggest issues of the 21st century, we offer an unparalleled student
      experience and a generous financial aid program, with over $160 million
      awarded to more than 60% of our undergraduate students. We have six
      degree-granting Schools, offering a truly global education.
      <br />
      Established in 1936, Seattle Technological University is the oldest
      institution of higher education in Seattle. */}
    </div>
  );
};

export default HomePage;
