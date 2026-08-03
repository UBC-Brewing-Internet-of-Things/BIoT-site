import styles from '../styles/components/SponsorCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function SponsorCard({name, image, link}: {name: string, image: any, link: string}) {
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
