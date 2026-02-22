import styles from '../styles/SponsorCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

function SponsorCard({name, image, link}: {name: string, image: any, link: string}) {
    return (
        <div>
          <div className={styles.container}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image className={styles.image} src={image} alt={name + " Logo"} width={200}/>
            </Link>
            <p>{name}</p>
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