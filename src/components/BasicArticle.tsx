import Image from 'next/image';
import styles from '../styles/BasicArticle.module.css';

function BasicArticle({title, summary, description, date, team, image1, image2, image3}: {title: string, summary: string, description: string, date: string, team: string[], image1: string, image2: string, image3: string}) {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p><i>{date}</i>, {team.join(', ')}</p>
                </div>
                <p>{summary}</p>
            </div>
            <p>{description}</p>
            
                
         
            
            <Image 
            src={image1} 
            alt={title}
            height={300} 
            width={300} />
            <Image
            src={image2} 
            alt={title}
            height={300} 
            width={300}/>
            <Image
            src={image3} 
            alt={title}
            height={300} 
            width={300}/>
        </div>
    );
}

export default BasicArticle;