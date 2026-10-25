'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Navbar.module.css';
import Logo from '../images/logo_images/colourful biotlogo in circle.png';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Navbar(){
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);


    return(
        <>  
        <div className={styles.navbar}>
          {/*Mobile Specific Style + Reverse menuOpen state on click & change to/from its active style*/}
          <div className={styles.mobileNavbar} onClick={() => setMenuOpen(!menuOpen)} role="button" aria-label="Toggle menu" aria-expanded={menuOpen}>
            <div className = {`${styles.bar1} ${menuOpen ? styles.active : ''}`}></div>
            <div className = {`${styles.bar2} ${menuOpen ? styles.active : ''}`}></div>
            <div className = {`${styles.bar3} ${menuOpen ? styles.active : ''}`}></div>
          </div>
          <Link href="/" onClick={closeMenu}><Image 
            src={Logo}
            alt="UBC BIoT Logo"
            className={styles.navbarLogo} />
          </Link>
          {/*PC specific style*/}
          <div className = {styles.pcNavbar}>
            <Link href="/" className={styles.text}>Home</Link>
            <Link href="/projects" className={styles.text}>Projects</Link>
            <Link href="/team" className={styles.text}>Team</Link>
            <Link href="/faq" className={styles.text}>FAQ</Link>
            <Link href="/sponsor" className={styles.text}>Sponsor Us</Link> 
          
          </div>
          <button onClick={() => { closeMenu(); router.push("/recruitment"); }} className={styles.joinButton}>Join Us</button>
          
        </div>
        {/*Mobile Specific Style*/}
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.mobileLink} onClick={closeMenu}>Home</Link>
          <Link href="/projects" className={styles.mobileLink} onClick={closeMenu}>Projects</Link>
          <Link href="/team" className={styles.mobileLink} onClick={closeMenu}>Team</Link>
          <Link href="/sponsor" className={styles.mobileLink} onClick={closeMenu}>Sponsor Us</Link> 
          <Link href="/faq" className={styles.mobileLink} onClick={closeMenu}>FAQ</Link>
        </div>

        </>
    );


}

export default Navbar;
