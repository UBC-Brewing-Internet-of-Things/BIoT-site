'use client';
import styles from "@/src/styles/components/ProjectCard.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';


export default function ProjectCard({title, description, date, team, image, link}: {title:string, description:string, date:string, team:string[], image:any, link: string}) {
  const router = useRouter();
  return (
        <div onClick={() => router.push(link)} className={styles.project} data-category="lab brew">
            <div className={styles.headings}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.date}>{date}</p>
                <p className={styles.team}>{team.join(", ")}</p>
            </div>
            <div className={styles.description}>
                <Image
                src={image}
                alt="Glow-in-the-dark Beer Project"
                className={styles.image}
                width={400}
                height={300}
                />
                <p className={styles.text}>{description}</p>
            </div>
            




        </div>
  );
}