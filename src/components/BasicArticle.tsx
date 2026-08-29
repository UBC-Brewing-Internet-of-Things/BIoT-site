import Image from 'next/image';
import styles from '../styles/components/BasicArticle.module.css';

//"summary" props is optional at the moment
function BasicArticle({title, summary, description, date, team, image1, image2, image3}: {title: string, summary: string, description: string, date: string, team: string[], image1: any, image2: any, image3: any}) {
    return (
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className = {styles.info}><i>{date}</i>, {team.join(', ')}</p>
                </div>
            </div>
            <div className = {styles.imageContainer}>
                <Image 
                src={image1} 
                alt={title}
                className = {styles.image1}/>
                <div className = {styles.smallImageContainer}>
                    <Image
                    src={image2} 
                    alt={title}
                    className = {styles.image2}/>
                    <Image
                    src={image3} 
                    alt={title}
                    className = {styles.image3}/>
                </div>
            </div>
            
            <p>{description}</p>
            
        </div>
    );
}

export default BasicArticle;