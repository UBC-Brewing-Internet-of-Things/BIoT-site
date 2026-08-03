import Image from 'next/image';
import styles from '../styles/components/SubteamHomepageCard.module.css';

export default function SubteamHomepageCard({image, description, title, color}: {image:any, description:string, title:string, color: string}) {
  return (
    <div className={`${styles.container} ${color == "green" ? styles.green : styles.beige}`}>
      {/*Change color based on given props (green for ChemE cube team)*/}
        <Image 
          src={image}
          alt={title}
          className={styles.image}
        />
        <div className={styles.text}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    
    
    
    </div> 
  );
}