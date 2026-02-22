import ProjectCard from "@/src/components/ProjectCard";
import styles from "@/src/styles/ProjectPage.module.css";
import { projects } from "@/src/data/projectData";

export default function page() {
  return (
    <main>
      <h1 className={styles.header}>Our Projects</h1>
      {projects.map((item,index)=> (
        <ProjectCard key={index} title={item.title} description={item.description} date={item.date} team={item.team} image={item.image}/>
      ))}
    </main>
    
  );

}