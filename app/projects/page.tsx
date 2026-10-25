'use client'
import { useState } from "react";
import ProjectCard from "@/src/components/ProjectCard";
import styles from "@/src/styles/ProjectPage.module.css";
import { projects } from "@/src/data/projectData";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

//Converts a date like "Sept 2024" into a sortable number (year * 12 + month)
const dateValue = (date: string) => {
  const [month, year] = date.split(" ");
  return Number(year) * 12 + MONTHS.indexOf(month.slice(0, 3).toLowerCase());
};

//Newest projects first
const sortedProjects = [...projects].sort((a, b) => dateValue(b.date) - dateValue(a.date));

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
      ? sortedProjects
      : sortedProjects.filter(projects =>
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
        {/* Filter buttons */}
        <div className={styles.filter}>
          <button className={selectedTeams.length === 0 ? styles.active : ""} onClick={resetFilters} >All</button>
          <button className={selectedTeams.includes("Lab Team") ? styles.active : ""} onClick={() => filter("Lab Team")}>Lab Team</button>
          <button className={selectedTeams.includes("Instrumentation Team") ? styles.active : ""} onClick={() => filter("Instrumentation Team")}>Instrumentation Team</button>
          <button className={selectedTeams.includes("Brew Team") ? styles.active : ""} onClick={() => filter("Brew Team")}>Brew Team</button>
          <button className={selectedTeams.includes("ChemE Cube Team") ? styles.active : ""} onClick={() => filter("ChemE Cube Team")}>ChemE Cube</button>
        </div>
        
        {filteredProjects.map((item,index)=> (
          <ProjectCard key={index} title={item.title} description={item.description} date={item.date} team={item.team} image={item.image} link = {item.link}/>
        ))}
      </div>
    </main>
    
  );

}