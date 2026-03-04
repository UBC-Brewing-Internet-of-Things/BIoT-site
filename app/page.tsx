import SubteamHomepageCard from "@/src/components/SubteamHomepageCard";
import HomepageImage from "@/src/images/home_images/beaker_home.jpg";
import { subteamsDescription } from "@/src/data/homePageData";
import styles from "@/src/styles/Homepage.module.css";

export default function Page() {
  return (
  <main className={styles.container}>
    <div className={styles.parallax} style={{backgroundImage: `url(${HomepageImage.src})`}}>
      
      <div className={styles.home_title}>
        <h1>What If Homebrewers Could Automate Brews Like Large Companies?</h1>
        <p>Our team aims to design and implement low-cost data monitoring and develop innovative techniques to brew novel, high-quality beers through various projects.</p>
      </div>
    </div>
    <h1>Meet the Subteams</h1>
    {subteamsDescription.map((item,index) => (
      <SubteamHomepageCard key={index} image={item.image} description={item.description} title={item.title}/>
    ))}
  </main>
  );
}