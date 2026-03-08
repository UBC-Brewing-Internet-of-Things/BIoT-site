import styles from '../../src/styles/Sponsor.module.css';
import Image from 'next/image';
import Link from 'next/link';
import sponsorshipPackage from '../../src/images/sponsor_images/BIoT_Sponsorship_Package_2025.png';
import SponsorCard from '@/src/components/SponsorCard';
import {sponsors} from '@/src/data/sponsorsData';

export default function page() {
  return (
    <main className={styles.page}>
      <h1>Join Us In Shaping A Greener Future In Homebrewing!</h1>
      <h2>Sponsor The Team. Get Benefits.</h2>
      <p>Sponsoring UBC Biological Internet of Things means more than supporting an organization; it means investing in the next generation of engineers and innovators. Our team is dedicated to revolutionizing brewing through cutting-edge technologies and sustainable practices.
      <br/><br/>
      BIoT focuses on bridging the gap between theory and practice by providing hands-on experience in brewing and programming. With projects centered around the Internet of Things, we aim to develop low-cost, innovative solutions for automated brewing systems. Students gain valuable skills in process control, data analysis, and teamwork, preparing them for successful careers in the industry.
      <br/><br/>
      By sponsoring BIoT, you not only contribute to the education and development of aspiring engineers but also support the advancement of sustainable brewing practices. Join us as we explore new frontiers in brewing technology and strive to make a positive impact on both our industry and our planet.</p>
      <div className={styles.info}>
        <div className={styles.sponsorPackageText}>
          <h2 style={{textAlign: 'left'}}>Sponsorship Package</h2>
          <p>Unlock the potential of tomorrow's engineers with a sponsorship from UBC Biological Internet of Things (BIoT)! Our sponsorship package offers an exclusive opportunity to support student-led innovation in brewing and technology while gaining visibility among a diverse audience of aspiring engineers and industry professionals. Join us in shaping the future of brewing and sustainability. Contact us today to explore partnership opportunities!</p>
        </div>
        <Link href="https://www.canva.com/design/DAGz8gEoIGg/wgecpnlrlIVxqHmQZE1k_w/view?utm_content=DAGz8gEoIGg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h12b1279685">
        <Image src={sponsorshipPackage} alt="Sponsorship Package" className={styles.image} />
        </Link>
      </div>
      <h2>Our Sponsors</h2>
      <h3>Platinum Sponsors</h3>
      <div className={styles.tieredContainer}>
        {sponsors.Platinum.map((sponsor, index) => (
          <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
        ))}
      </div>      
      <h3 className={styles.sponsorTierHeading}>Silver Sponsors</h3>
      <div className={styles.tieredContainer}>
        {sponsors.Silver.map((sponsor, index) => (
          <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
        ))}
      </div>
      <h3 className={styles.sponsorTierHeading}>Supporters</h3>
      <div className={styles.tieredContainer}>
        {sponsors.Supporters.map((sponsor, index) => (
          <SponsorCard key={index} name={sponsor.title} image={sponsor.logo} link={sponsor.link}/>
        ))}
      </div>
    </main>
  );
}
/*
 <div class="header">
      <h1>Join Us In Shaping A Greener Future In Homebrewing!</h1>
    </div>
    <div class="sponsorship-section">
      <h2>Sponsor The Team. Get Benefits.</h2>
      <p>Sponsoring UBC Biological Internet of Things means more than supporting an organization; it means investing in
        the next generation of engineers and innovators. Our team is dedicated to revolutionizing brewing through
        cutting-edge technologies and sustainable practices.
        </br></br>
        BIoT focuses on bridging the gap between theory and practice by providing hands-on experience in brewing and
        programming. With projects centered around the Internet of Things, we aim to develop low-cost, innovative
        solutions for automated brewing systems. Students gain valuable skills in process control, data analysis, and
        teamwork, preparing them for successful careers in the industry.
        </br></br>
        By sponsoring BIoT, you not only contribute to the education and development of aspiring engineers but also
        support the advancement of sustainable brewing practices. Join us as we explore new frontiers in brewing
        technology and strive to make a positive impact on both our industry and our planet.</p>
      <div class="sponsor-package-info">
        <div class="sponsor-package-text">
          <h2>Sponsorship Package</h2>
          <p>Unlock the potential of tomorrow's engineers with a sponsorship from UBC Biological Internet of Things
            (BIoT)! Our sponsorship package offers an exclusive opportunity to support student-led innovation in brewing
            and technology while gaining visibility among a diverse audience of aspiring engineers and industry
            professionals. Join us in shaping the future of brewing and sustainability. Contact us today to explore
            partnership opportunities!</p>
        </div>
        <a class="sponsor-package-image-link"
          href="https://www.canva.com/design/DAGz8gEoIGg/wgecpnlrlIVxqHmQZE1k_w/view?utm_content=DAGz8gEoIGg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h12b1279685">
          <img src="BIoT_Sponsorship_Package_2025.png" class="sponsor-package-image" />
        </a>
      </div>
      <div class="our-sponsors">
        <h2>Our Sponsors</h2>
        <h3 class="sponsor-tier-heading">Platinum Sponsors</h3>
        <div class="tiered-sponsors">
          <div class="tiered-sponsor-image-box">
            <a class="tiered-sponsor-image-link" href="https://engineering.ubc.ca" target="_blank" rel="noopener noreferrer">
              <img class="tiered-sponsor-image" src="sponsor images/ubc_engineering.png" alt="UBC Engineering Logo" />
            </a>
            <p>UBC Engineering</p>
          </div>
          <div class="tiered-sponsor-image-box">
            <a class="tiered-sponsor-image-link" href="https://www.tydralabs.com/" target="_blank" rel="noopener noreferrer">
              <img class="tiered-sponsor-image" src="sponsor images/tydra_laboratories.png" alt="Tydra Laboratories Logo" />
            </a>
            <p>Tydra Laboratories</p>
          </div>
        </div>
        <h3 class="sponsor-tier-heading">Silver Sponsors</h3>
        <div class="tiered-sponsors">
          <div class="tiered-sponsor-image-box">
            <a href="https://vpstudents.ubc.ca/walter-gage/" target="_blank" rel="noopener noreferrer">
              <img class="tiered-sponsor-image" src="sponsor images/walter_h_gage_memorial_fund.png" alt="Walter H. Gage Memorial Fund Logo" />
            </a>
            <p>Walter H. Gage Memorial Fund</p>
          </div>
        </div>
        <h3 class="sponsor-tier-heading">Supporters</h3>
        <div class="tiered-sponsors">
          <div class="tiered-sponsor-image-box">
            <a href="https://www.breka.ca/" target="_blank" rel="noopener noreferrer">
              <img class="tiered-sponsor-image" src="sponsor images/breka.png" alt="Breka Logo" />
            </a>
            <p>Breka</p>
          </div>
        </div>
        <div class="tiered-sponsors">
          <div class="tiered-sponsor-image-box">
            <a href="https://www.bosagrape.com/" target="_blank" rel="noopener noreferrer">
              <img class="tiered-sponsor-image" src="sponsor images/bosa_grape.png" alt="Bosa Grape Logo" />
            </a>
            <p>BosaGrape Winery & Brew Supplies</p>
          </div>
        </div>
      </div>      
    </div>
 */