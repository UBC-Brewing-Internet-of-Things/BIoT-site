import styles from '../styles/TeamCard.module.css';
import Image from 'next/image';
import Profile from '../images/headshots_2025/Edan_Steen.jpg';

function TeamCard() {
    return (
        <div className={styles.teamMember}>
            <Image 
                src={Profile}
                alt="Captain" 
                width={100}
                height={200}
                className={styles.teamImage} />
            <div className={styles.teamInfo}>
                <h3 style={{ fontSize: 'clamp(18px, 2.4vw, 24px)' }}>Edan Steen</h3>
                <p style={{ color: 'gray' }}>Co-Captain</p>
            </div>
        </div>
    );


}

export default TeamCard;

/*
<div class="team-member">
        <img src="headshots_2025/Edan_Steen.jpg" alt="Captain">
        <div class="team-info">
          <h3>Edan Steen</h3>
          <p>Co-Captain</p>
        </div>
 */