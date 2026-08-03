'use client'
import { useState } from 'react';
import styles from '../styles/components/FaqCard.module.css';


export default function FaqCard ({question, answer}: {question: string, answer: string}) {
    const [dropdownQuestion, setDropdownQuestion] = useState(false);

    return(
        <div className={styles.item}>
            {/*Change dropdownQuestion to its opposite*/}
            <div onClick={() => setDropdownQuestion(!dropdownQuestion)} className = {styles.question}>
                <h3>{question}</h3>
                {/*If dropdownQuestion is true, display active style*/}
                <div onClick={() => setDropdownQuestion(!dropdownQuestion)} className = {`${styles.triangle} ${dropdownQuestion ? styles.active : ''}`}></div>
            </div>
            <p className = {`${styles.answer} ${dropdownQuestion ? styles.active : ''}`}>{answer}</p>
        </div>
        

    );



}