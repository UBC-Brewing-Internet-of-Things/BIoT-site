'use client'
import { useState } from 'react';
import styles from '../styles/FaqCard.module.css';


function FaqCard ({question, answer}: {question: string, answer: string}) {
    const [dropdownQuestion, setDropdownQuestion] = useState(false);

    return(
        <div className={styles.item}>
            <div className = {styles.question}>
                <h3 onClick={() => setDropdownQuestion(!dropdownQuestion)}>{question}</h3>
                <div onClick={() => setDropdownQuestion(!dropdownQuestion)} className = {`${styles.triangle} ${dropdownQuestion ? styles.active : ''}`}></div>
            </div>
            <p className = {`${styles.answer} ${dropdownQuestion ? styles.active : ''}`}>{answer}</p>
        </div>
        

    );



}

export default FaqCard;