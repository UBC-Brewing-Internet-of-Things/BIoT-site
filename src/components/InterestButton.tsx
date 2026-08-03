import Link from "next/link";
import styles from '../styles/components/InterestButton.module.css';

export default function InterestButton(){
    return(
        <div className={styles.joinUs}>
            <h2 className={styles.text}>Interested?</h2>
            <Link className={styles.joinButton} href="/recruitment">
                Join Us!
            </Link>
        </div>
    );
}
