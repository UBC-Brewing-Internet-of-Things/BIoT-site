import SubteamHomepageCard from "@/src/components/SubteamHomepageCard";
import HomepageImage from "@/src/images/home_images/beaker_home.jpg";
import { subteamsDescription } from "@/src/data/homePageData";
import styles from "@/src/styles/Homepage.module.css";
import Logo from "@/src/images/logo_images/white_logo_text.png";
import Image from "next/image";

export default function Page() {
  return (
  <main className={styles.container}>
    <div className={styles.parallax} style={{backgroundImage: `url(${HomepageImage.src})`}}>
      
      <div className={styles.home_title}>
        <Image
        src={Logo}
        alt="UBC BIoT Logo"
        className={styles.home_logo}
        />
        <p>Known as “UBC’s beer-brewing design team”, Biological Internet of Things (BIoT) has expanded to include a variety of projects in process control, R&D, and automation, including building a miniature chemical plant for the ChemE Cube competition, IoT process automation devices, and experimental research projects in food technology like making glow-in-the-dark beer.</p>
      </div>
    </div>
    <h1>Meet the Subteams</h1>
    {subteamsDescription.map((item,index) => (
      <SubteamHomepageCard key={index} image={item.image} description={item.description} title={item.title}/>
    ))}
  </main>
  );
}