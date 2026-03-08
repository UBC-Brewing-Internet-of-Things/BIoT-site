'use client'
import { useState } from "react";
import ProjectCard from "@/src/components/ProjectCard";
import styles from "@/src/styles/ProjectPage.module.css";
import { projects } from "@/src/data/projectData";

export default function page() {
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  
  //Adding team to selectedTeams if not already in it, otherwise removing it from selectedTeams
  const filter = (team:string) => {
    setSelectedTeams (prev => {
      if (prev.includes(team)) {
        return prev.filter(t => t !== team);
      } else {
        return [...prev, team];
      }
    });
  };

  //If no teams are selected, show all projects. Otherwise, filter projects to only show those that have a team in selectedTeams
  const filteredProjects =
    selectedTeams.length === 0
      ? projects
      : projects.filter(projects =>
          projects.team.some(team =>
            selectedTeams.includes(team)
          )
        );

  //Resets selectedTeams to an empty array, which shows all projects
  const resetFilters = () => {
    setSelectedTeams([]);
  };

  return (
    <main>
      <h1 className={styles.header}>Check Out Our Projects</h1>
      <div className={styles.projectDisplay}>
        <div className={styles.filter}>
              <button className={selectedTeams.length === 0 ? styles.active : ""} onClick={resetFilters} >All</button>
              <button className={selectedTeams.includes("Lab Team") ? styles.active : ""} onClick={() => filter("Lab Team")}>Lab Team</button>
              <button className={selectedTeams.includes("Instrumentation Team") ? styles.active : ""} onClick={() => filter("Instrumentation Team")}>Instrumentation Team</button>
              <button className={selectedTeams.includes("Brew Team") ? styles.active : ""} onClick={() => filter("Brew Team")}>Brew Team</button>
        </div>
        {filteredProjects.map((item,index)=> (
          <ProjectCard key={index} title={item.title} description={item.description} date={item.date} team={item.team} image={item.image}/>
        ))}
      </div>
    </main>
    
  );

}