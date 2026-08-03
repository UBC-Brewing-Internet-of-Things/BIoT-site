'use client'; //Necessary for useRouter to work
import Image from "next/image";
import styles from "../styles/components/CurrentProjectCard.module.css";
import { useRouter } from 'next/navigation';



export default function CurrentProjectCard({title, description,image, link}:{title: string, description: string, image: any, link: string}){
    const router = useRouter();
    return(
        <div className = {styles.container}>
         {/*Pushes link obtained from the parent*/}
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