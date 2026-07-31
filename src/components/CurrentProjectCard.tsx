import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/CurrentProjectCard.module.css";



function CurrentProjectCard({title, description,image}:{title: string, description: string, image: any}){
    return(
        <div className = {styles.container}>
            <Link href="/biofluorescentBeer">
                <Image
                src={image}
                width={350}
                height={270}
                alt={title}
                />
            </Link>
            <h3 className = {styles.title}>{title}</h3>
            <h4 className = {styles.description}><i>{description}</i></h4>
            


        </div>
    );
}

export default CurrentProjectCard;