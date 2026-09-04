import styles from '../../src/styles/Sponsor.module.css';
import Image from 'next/image';
import Link from 'next/link';
import sponsorshipPackage from '../../src/images/sponsor_images/BIoT_Sponsorship_Package_2526.png';
import SponsorCard from '@/src/components/SponsorCard';
import {sponsors} from '@/src/data/sponsorsData';
import Arrows from '../../src/images/logo_images/three_right_arrows.png';

export default function page() {
  return (
    <main >
      <div className = {styles.header}>
        <Image src={Arrows} alt="right arrows" className={styles.arrows} />
        <h1>Sponsor The Team. <br/> 
        Get Benefits.</h1>
      </div>
      <div className={styles.page}>
      <p>Sponsoring UBC Biological Internet of Things means more than supporting an organization; it means investing in the next generation of engineers and innovators. Our team is dedicated to equipping our members with hands-on experience in process engineering, biotechnology, control systems, Internet of Things devices, technical presentations, implementing sustainable practice, and much more. 
        <br /> <br />
      By sponsoring BIoT, you not only contribute to the education and development of aspiring engineers but also support the advancement of innovations in these fields. Join us as we strive to make a positive impact on both our industry and our planet.</p>
      {/*Sponsorship Package*/}
      <h3 >Sponsorship Package</h3>
      <div className={styles.info}>
        <div className={styles.sponsorPackageText}>
          
        </div>
        <Link href="https://drive.google.com/file/d/1Be9r7AWDOYDRoCpGzTZTHKS2uMpgLdT_/view">
        <Image src={sponsorshipPackage} alt="Sponsorship Package" className={styles.image} />
        </Link>
      </div>
      
      <h2>Our Sponsors</h2>
      <div className={styles.sponsors}>
        <div className = {styles.tieredContainer + ' ' + styles.diamond}>
          <p className = {styles.tierTitle}>Diamond Sponsors</p>
          {sponsors.Gold.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
          ))}
        </div>
    
        <div className={styles.tieredContainer + ' ' + styles.silver}>
          <p className = {styles.tierTitle}>Silver Sponsors</p>
          {sponsors.Silver.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
          ))}
        </div>
        <div className={styles.tieredContainer + ' ' + styles.supporter}>
          <p className = {styles.tierTitle}>Other Supporters</p>
          {sponsors.Supporters.map((sponsor, index) => (
            <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
          ))}
        </div>
      </div>
      <p>If you'd like to support us, you can either send us an email at <strong>ubcbiot@gmail.com</strong> or donate through our <Link href="https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=BioT+Student+Team+G2553&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaddXGBiB4PLZdRPOJm6lRO7jH17gjgFn5WSvtQk23kFGtDGM_2Q94gb0Of0ig_aem_7Y-lu_nfUjlzVXJ7cnjqhg">crowdfunding</Link> page!</p>
      </div>
      
    </main>
  );
}
