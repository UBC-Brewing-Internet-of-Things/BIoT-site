import styles from '../styles/TeamCard.module.css';
import Image from 'next/image';


function TeamCard({ name, role, peopleImages }: { name: string, role: string, peopleImages: any }) {
    return (
        <div className={styles.teamMember}>
            <Image 
                src={peopleImages}
                alt={name} 
                width={100}
                height={200}
                className={styles.teamImage} />
            <div className={styles.teamInfo}>
                <h3 >{name}</h3>
                <p style={{ color: 'gray' }}>{role}</p>
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