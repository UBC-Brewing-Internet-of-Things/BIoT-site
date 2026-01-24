
import styles from '../styles/Footer.module.css';
import Logo from '../images/logo_images/logo_with_text.png';
import Image from 'next/image';
import Link from 'next/link';


function Footer(){
    return (
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <Link href="/">
                    <Image
                    src={Logo}
                    alt="UBC BIoT Logo"
                    width={300}
                    height={120}
                    style={{ width: "100%", height: "auto" }}/>
                    </Link>
                    <div style={{display: 'flex', gap: '3vw'}}>
                        <div>
                            <h3 className={styles.heading}>Resources</h3>
                            <Link href="https://github.com/UBC-Brewing-Internet-of-Things" className={styles.text}>GitHub</Link>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Contact</h3>
                            <Link href="/sponsor" className={styles.text}>Sponsorships</Link>
                            <a href="mailto:ubcbiot@gmail.com" className={styles.text}>General Inquiries</a>
                        </div>
                        <div>
                            <h3 className={styles.heading}>Socials</h3>
                            <Link href="https://www.instagram.com/ubcbiot/" className={styles.text}>Instagram</Link>
                            <Link href="https://www.linkedin.com/company/brewing-internet-of-things-biot/" className={styles.text}>LinkedIn</Link>
                        </div>
                    </div>
                    
                </div>
                <p className={styles.copyright}>@ 2025 UBC Biological Internet of Things</p>





                
                
            </footer>
    );
}

export default Footer;

/*
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-logo">
        <img class="footer-logo-img" src="logo-with-text.png" />
      </div>

      <div class="footer-links">
        <div>
          <h3>Resources</h3>
          <a href="https://github.com/UBC-Brewing-Internet-of-Things">GitHub</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="sponsor.html">Sponsorships</a><br>
          <a href="mailto:ubcbiot@gmail.com">General Inquiries</a>
        </div>
        <div>
          <h3>Socials</h3>
          <a href="https://www.instagram.com/ubcbiot/">Instagram</a><br>
          <a href="https://www.linkedin.com/company/brewing-internet-of-things-biot/">LinkedIn</a>
        </div>
      </div>
    </div>
    <p class="footer-copy">@ 2025 UBC Biological Internet of Things</p>
  </footer> */