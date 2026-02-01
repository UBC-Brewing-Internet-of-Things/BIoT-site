import styles from '../styles/Sponsor.module.css';
import Link from 'next/link';
import Image from 'next/image';
import UBCEngineeringLogo from '../images/sponsor images/ubc_engineering.png';

function SponsorCard() {
    return (
        <div>
            <div className={styles.container}>
            <Link href="https://engineering.ubc.ca" target="_blank" rel="noopener noreferrer">
              <Image className={styles.image} src={UBCEngineeringLogo} alt="UBC Engineering Logo" width={200} height={200} />
            </Link>
            <p>UBC Engineering</p>
          </div>
        </div>
    );

}

export default SponsorCard;
/*          <div className={styles.tieredSponsorImageBox}>
            <a className={styles.tieredSponsorImageLink} href="https://engineering.ubc.ca" target="_blank" rel="noopener noreferrer">
              <img className={styles.tieredSponsorImage} src="sponsor images/ubc_engineering.png" alt="UBC Engineering Logo" />
            </a>
            <p>UBC Engineering</p>
          </div> */