import React from 'react';
import styles from './Footer.module.css'
import { Icon } from 'antd';

const Footer = () => (
    <footer id={styles.flex} className={styles.flex_container}>
        <div className={styles.footer}>
            STU LOGO
        </div>
        <div>
        <Icon type="facebook" theme="filled" className={styles.icon} />
        <Icon type="twitter" className={styles.icon} />
        <Icon type="google" className={styles.icon} />
        <Icon type="instagram" theme="filled" className={styles.icon} />
        </div>
    </footer>
);

export default Footer;