import SubteamHomepageCard from "@/src/components/SubteamHomepageCard";
import { subteamsDescription } from "@/src/data/homePageData";
import styles from "@/src/styles/Homepage.module.css";
import Logo from "@/src/images/logo_images/colourful_logo_text.png";
import Image from "next/image";
import Biofluorescent_Beer from "../src/images/project_images/biofluorescent_beer.jpg";
import Link from "next/link";
import CurrentProjectCard from "@/src/components/CurrentProjectCard";
import ChemE_Cube from "../src/images/project_images/cheme_cube/cheme_cube_cad.png";
import RightArrows from "../src/images/logo_images/right_arrows.png";
import LeftArrows from "../src/images/logo_images/left_arrows.png";
import Leaf from "../src/images/logo_images/half_leaf.png";

export default function Page() {
  const beerRnD = subteamsDescription.slice(0, 3);
  const chemECube = subteamsDescription.slice(3);

  subteamsDescription
  return (
  <main className={styles.container}>
    {/*Main Section*/}
    <div className={styles.titlebackground} >
      
      <div className={styles.home_title}>
        <Image
        src={RightArrows}
        alt="right arrows"
        className={styles.arrows}
        />
        <Image
        src={Logo}
        alt="UBC BIoT"
        className={styles.home_logo}
        />
        <Image
        src={LeftArrows}
        alt="left arrows"
        className={styles.arrows}
        />
      </div>
      <div className = {styles.rectangle_text}>
          <p>Known as “UBC’s beer-brewing design team”, Biological Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.</p>
        </div>
    </div>
    {/*Current Project Section*/}
    <Image
        src={Leaf}
        alt="leaf"
        className={styles.leaf}
        />
    <div className = {styles.projectContainer}>
      <h1>Current Projects</h1>
      <div className = {styles.projectsButtonContainer}>
        <div className = {styles.projects}>
          <CurrentProjectCard
          title="Biofluorescent Beer"
          description="Engineering yeast to produce glow-in-the-dark beer using green fluorescent protein."
          image={Biofluorescent_Beer} link = "/biofluorescentBeer"/> 
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
    {/*Meet the Subteams, R&D claims first three subteams in subteamsDescription list while ChemE Cube claims the rest*/}
    <h1>Meet the Subteams</h1>
    
    <h2 style={{ marginTop: '80px' }}>ChemE Cube</h2>
    {chemECube.map((item,index) => (
      <SubteamHomepageCard key={index} image={item.image} description={item.description} title={item.title} color = {item.color}/>
    ))}
    <h2>Beer R&D</h2>
    {beerRnD.map((item,index) => (
      <SubteamHomepageCard key={index} image={item.image} description={item.description} title={item.title} color = {item.color}/>
    ))}
  </main>
  );
}