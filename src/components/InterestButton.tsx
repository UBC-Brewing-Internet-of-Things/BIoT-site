import Link from "next/link";
import styles from '../styles/InterestButton.module.css';

function InterestButton(){
    return(
        <div className={styles.joinUs}>
            <h2 className={styles.text}>Interested?</h2>
            <Link className={styles.joinButton} href="/recruitment">
                Join Us!
            </Link>
        </div>
    );
}

export default InterestButton;

/*
<div class="join-us-container">
      <div class="join-us">
        <h2>Interested?</h2>
        <div class="join-button">
          <a href="recruitment.html">Join Us!</a>
        </div>
      </div>
 */