import React from 'react';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Image from 'next/image';
import TwitterLogo from '../public/twitterlogo.webp';
import DiscordLogo from '../public/discordlogo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Title />
        <Navbar />
        <h1 className={styles.mainH1}>Suck My Duck</h1>
        <p className={styles.mainP}>Crypto is sucks, NFTs is sucks, so lets SUCK MY DUCK!</p>
        <p className={styles.catchPhrase}>5555 ducks ready to suck by you.</p>
        <div className={styles.socials}>
          <Link href='https://twitter.com/Suckmyducknft'>
            <a target='_blank'>
              <Image
                src={TwitterLogo}
                alt="TwitterLogo"
                width='110px'
                height='90px'
              />
            </a>
          </Link>
          <Link href='https://discord.gg/xpu64ENsRz'>
            <a target='_blank'>
              <Image
                src={DiscordLogo}
                alt="DiscordLogo"
                width='120px'
                height='90px'
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
