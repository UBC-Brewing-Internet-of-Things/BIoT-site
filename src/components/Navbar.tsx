import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

function Navbar(){
  const router = useRouter();

    return(
        <>  
        {/*<div className={styles.navbar}>
            <button className={styles.hamburger} onClick={() => router.push('/') }>&#9776;</button>
            <a href="/"><img className={styles.hamburgerLogo} src="/home_images/white_logo_text.png" alt="UBC BIoT Logo"/></a>
            <button className={styles.sponsorButton + ' ' + styles.hideWide}id="sponsor-hamburger" onClick={() => router.push('/sponsor') }>Sponsor Us</button>
          <div className={styles.navbarLinks + ' ' + styles.hideThin}>
            <a href="/"><img className={styles.logoImg} src="/home_images/white_logo_text.png" alt="UBC BIoT Logo"/></a>
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/team">Team</a>
            <a href="/recruitment">Recruitment</a> 
            <a href="/faq">FAQ</a>
            <button className={styles.sponsorButton + ' ' + styles.hideThin} onClick={() => router.push('/sponsor') }>Sponsor Us</button>
          </div>
        </div>*/}
        
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