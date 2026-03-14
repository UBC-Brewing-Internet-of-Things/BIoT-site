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
