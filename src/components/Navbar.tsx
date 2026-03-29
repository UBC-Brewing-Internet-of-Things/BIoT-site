'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Logo from '../images/logo_images/white_logo_text.png';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Navbar(){
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);


    return(
        <>  
        <div className={styles.navbar}>
          <div className={styles.mobileNavbar} onClick={() => setMenuOpen(!menuOpen)}>
            <div className = {`${styles.bar1} ${menuOpen ? styles.active : ''}`}></div>
            <div className = {`${styles.bar2} ${menuOpen ? styles.active : ''}`}></div>
            <div className = {`${styles.bar3} ${menuOpen ? styles.active : ''}`}></div>
          </div>
          <Link href="/"><Image 
            src={Logo}
            alt="UBC BIoT Logo"
            className={styles.navbarLogo} />
          </Link>

          <div className = {styles.pcNavbar}>
            <Link href="/" className={styles.text}>Home</Link>
            <Link href="/projects" className={styles.text}>Projects</Link>
            <Link href="/test" className={styles.text}>Team</Link>
            <Link href="/recruitment" className={styles.text}>Recruitment</Link> 
            <Link href="/faq" className={styles.text}>FAQ</Link>
          
          </div>
          <button onClick={() => router.push("/sponsor")} className={styles.sponsorButton}>Sponsor Us</button>
          
        </div>
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.mobileLink}>Home</Link>
          <Link href="/projects" className={styles.mobileLink}>Projects</Link>
          <Link href="/test" className={styles.mobileLink}>Team</Link>
          <Link href="/recruitment" className={styles.mobileLink}>Recruitment</Link> 
          <Link href="/faq" className={styles.mobileLink}>FAQ</Link>
        </div>

        </>
    );


}

export default Navbar;
