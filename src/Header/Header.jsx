import React from 'react';
import styles from './Header.module.css'
import MainNav from '../MainNav/MainNav';
import { Input } from 'antd';

const { Search } = Input;

const Header = () => (
    <header id={styles.flex} className={styles.flex_container}>
        <div className={styles.header}>
            Seattle Technological University
        </div>
        <div>
            <MainNav />
        </div>
        <div>
            <Search className={styles.search_bar} placeholder="search..." onSearch={value => console.log(value)} style={{ width: 200 }}/>
        </div>
    />
    </header>
);

export default Header;