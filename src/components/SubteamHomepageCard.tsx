import Image from 'next/image';
import styles from '../styles/SubteamHomepageCard.module.css';
import InstrumentationImage from '../images/home_images/instrumentation.png';

function SubteamHomepageCard() {
  return (
    <div className={styles.container}>
        <Image 
          src={InstrumentationImage}
          alt="Instrumentation Team"
          width={400}
          height={270}
          className={styles.image}
        />
        <div className={styles.text}>
            <h3>Instrumentation Team</h3>
            <p>The instrumentation team is responsible for creating equipment to sense brew data and automate tasks
            associated with the brewing process, and culminate it into a central web app. Common parameters to control are
            temperature, pH, dissolved oxygen, and specific gravity.</p>
        </div>



    
    
    
    </div> 
  );
}
export default SubteamHomepageCard;
/*<div class="subteam-container">
        <div class="subteam-image-container">
          <img src="home_images/instrumentation.png" class="subteam-image"/>
        </div>
        <div class="subteam-text">
          <h3>Instrumentation Team</h3>
          <p>The instrumentation team is responsible for creating equipment to sense brew data and automate tasks
            associated with the brewing process, and culminate it into a central web app. Common parameters to control are
            temperature, pH, dissolved oxygen, and specific gravity.</p>
        </div>
        */