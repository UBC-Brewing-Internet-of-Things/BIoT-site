'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/CurrentProjectCard.module.css";
import { useRouter } from 'next/navigation';



function CurrentProjectCard({title, description,image, link}:{title: string, description: string, image: any, link: string}){
    const router = useRouter();
    return(
        <div className = {styles.container}>
         
            <Image 
            onClick={() => router.push(link)}
            src={image}
            className = {styles.image}
            alt={title}
            />
           
            <h3 className = {styles.title}>{title}</h3>
            <h4 className = {styles.description}><i>{description}</i></h4>
            


        </div>
    );
}

export default CurrentProjectCard;