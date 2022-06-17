import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Title />
        <Navbar />
        <h1 className={styles.mainH1}>Suck My Duck</h1>
        <p className={styles.mainP}>Crypto sucks, NFTs sucks, so lets SUCK MY DUCK!</p>
        <p className={styles.catchPhrase}>5555 ducks ready to suck by you.</p>
      </div>
    </div>
  )
}
