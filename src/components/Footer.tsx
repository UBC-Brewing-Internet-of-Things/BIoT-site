'use client';
import { usePathname } from "next/navigation";
import styles from '../styles/components/Footer.module.css';
import Logo from '../images/logo_images/logo_with_text.png';
import Image from 'next/image';
import Link from 'next/link';
import InterestButton from './InterestButton';


export default function Footer(){
const pathname = usePathname();
{/*Hide if the current path name is /recruitment*/}
  const hiddenRoutes =  ["/recruitment/"].includes(pathname);
    return (
      <>
      {/*Conditional display based on path name*/}
        {!hiddenRoutes && <InterestButton/>}
        
        <footer className={styles.footer}>
          
            <div className={styles.footerContent}>
                <Link href="/">
                <Image
                src={Logo}
                alt="UBC BIoT Logo"
                className = {styles.logo}/>
                </Link>
                <div className={styles.textGroup}>
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
      </>
      
    );
}
