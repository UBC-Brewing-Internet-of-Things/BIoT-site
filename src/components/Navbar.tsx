'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Logo from '../images/logo_images/white_logo_text.png';
import { useRouter } from 'next/navigation';

function Navbar(){
  const router = useRouter();

    return(
        <>  
        <div className={styles.navbar}>
            <Link href="/"><Image 
            src={Logo}
            alt="UBC BIoT Logo"
            width={130}
            height={20}
            style={{ width: "70%", height: "auto", marginTop: "8px" }} />
            </Link>
            <div>
            <Link href="/" className={styles.text}>Home</Link>
            <Link href="/projects" className={styles.text}>Projects</Link>
            <Link href="/team" className={styles.text}>Team</Link>
            <Link href="/recruitment" className={styles.text}>Recruitment</Link> 
            <Link href="/faq" className={styles.text}>FAQ</Link>
            <button onClick={() => router.push("/sponsor")} className={styles.sponsorButton}>Sponsor Us</button>
          </div>
        </div>        
        </>
    );


}

export default Navbar;

/*  <div class="navbar">
    <div class="hamburger-portion">
      <div class="hamburger-left">
        <button class="hamburger">&#9776;</button>
        <a href="index.html"><img class="hamburger-logo" src="/home_images/white_logo_text.png"/></a>
      </div>
      <button class="sponsor-button hide-wide" id="sponsor-hamburger" onclick="window.location.href='sponsor.html'">Sponsor Us</button>
    </div>
    <div class="navbar-links hide-thin">
      <a href="index.html"><img class="logo-img" src="home_images/white_logo_text.png"/></a>
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="team.html">Team</a>
      <a href="recruitment.html">Recruitment</a>
      <a href="faq.html">FAQ</a>
      <button class="sponsor-button hide-thin" onclick="window.location.href='sponsor.html'">Sponsor Us</button>
    </div>
  </div> */