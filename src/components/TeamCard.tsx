import styles from '../styles/TeamCard.module.css';
import Image from 'next/image';


function TeamCard({ name, role, peopleImages }: { name: string, role: string, peopleImages: any }) {
    return (
        <div className={styles.teamMember}>
            <Image 
                src={peopleImages}
                alt={name} 
                className={styles.teamImage} unoptimized/>
            <div className={styles.teamInfo}>
                <h3 >{name}</h3>
                <p style={{ color: 'gray' }}>{role}</p>
            </div>
        </div>
    );


}

export default TeamCard;

