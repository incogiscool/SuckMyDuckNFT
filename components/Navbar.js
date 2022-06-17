import React from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.navContainer}>
            <ul className={styles.listContainer}>
                <Link href='#'>
                    <a>Roadmap</a>
                </Link>
                <Link href='#'>
                    <a>About</a>
                </Link>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/'>
                    <p>Suck My Duck</p>
                </Link>
            </ul>
        </div>
    )
}