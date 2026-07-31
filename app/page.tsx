import SubteamHomepageCard from "@/src/components/SubteamHomepageCard";
import HomepageImage from "@/src/images/home_images/home1.jpg";
import { subteamsDescription } from "@/src/data/homePageData";
import styles from "@/src/styles/Homepage.module.css";
import Logo from "@/src/images/logo_images/white_logo_text.png";
import Image from "next/image";
import Biofluorescent_Beer from "../src/images/project_images/glow_in_the_darkbeer_project.jpg";
import Link from "next/link";
import CurrentProjectCard from "@/src/components/CurrentProjectCard";
import ChemE_Cube from "../src/images/project_images/biofluorescent_beer_project.jpg";

export default function Page() {
  return (
  <main className={styles.container}>
    <div className={styles.parallax} style={{backgroundImage: `url(${HomepageImage.src})`}}>
      
      <div className={styles.home_title}>
        <Image
        src={Logo}
        alt="UBC BIoT"
        className={styles.home_logo}
        />
        <p>Known as “UBC’s beer-brewing design team”, Biological Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.</p>
      </div>
    </div>
    <div className = {styles.projectContainer}>
      <h1>Current Projects</h1>
      <div className = {styles.projectsButtonContainer}>
        <div className = {styles.projects}>
          <CurrentProjectCard
          title="Biofluorescent Beer"
          description="Use of yeast as a vector to express Green Fluorescent Protein (GFP)"
          image={Biofluorescent_Beer} link = "/biofluorescent-beer"/> 
          <CurrentProjectCard
          title="ChemE Cube"
          description=" 1 cubic foot plant that solves direct air capture and regeneration"
          image={ChemE_Cube} link = "/chemeCube"/>

        </div>
        <Link className={styles.exploreButton} href="/projects">
          Explore More
        </Link>                           
      </div>
      
      

    </div>
    <h1>Meet the Subteams</h1>
    {subteamsDescription.map((item,index) => (
      <SubteamHomepageCard key={index} image={item.image} description={item.description} title={item.title}/>
    ))}
  </main>
  );
}