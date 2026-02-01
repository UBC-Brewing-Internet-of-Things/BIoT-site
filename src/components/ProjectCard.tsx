import styles from "@/src/styles/ProjectCard.module.css";
import Image from "next/image";
import ProjectImage from "../images/project images/glow_in_the_darkbeer_project.jpg";

function ProjectCard() {
  return (
        <div className={styles.project} data-category="lab brew">
            <div className={styles.headings}>
                <h3 className={styles.title}>Glow-in-the-dark Beer</h3>
                <p className={styles.date}>Sept 2024</p>
                <p className={styles.team}>Lab Team, Brew Team</p>
            </div>
            <div className={styles.description}>
                <Image
                src={ProjectImage}
                alt="Glow-in-the-dark Beer Project"
                className={styles.image}
                width={400}
                height={300}
                />
                <p className={styles.text}>Our project focuses on creating a glow-in-the-dark beer through the use of biotechnology. We are utilizing yeast, a fundamental organism in brewing, as a vector to express Green Fluorescent Protein (GFP), which naturally glows under specific wavelengths of light. GFP, originally found in jellyfish, will be expressed by the yeast during fermentation, producing a beer with a unique glowing effect.
                <br/><br/>
                The primary goal is to incorporate GFP into yeast under a constitutive promoter, ensuring continuous expression throughout fermentation, while maintaining the beer’s flavor and quality. This innovative project blends brewing with biotechnology, creating a visually captivating and scientifically-driven product.</p> 
            </div>
            




        </div>
  );
}
export default ProjectCard;
/*<div class="project" data-category="lab brew">
                <div class="project-headings">
                  <h3 class="project-title">Glow-in-the-dark Beer</h3>
                  <span class="project-date">Sept 2024</span>
                  <strong class="project-team">Lab Team, Brew Team</strong>
                </div>
                <div class="project-inner">
                  <img class="project-image" src="project images/glow_in_the_darkbeer_project.jpg"/>
                  <div class="project-text">
                    <p class="project-desc">Our project focuses on creating a glow-in-the-dark beer through the use of biotechnology. We are utilizing yeast, a fundamental organism in brewing, as a vector to express Green Fluorescent Protein (GFP), which naturally glows under specific wavelengths of light. GFP, originally found in jellyfish, will be expressed by the yeast during fermentation, producing a beer with a unique glowing effect.
                      <br/><br/>
                      The primary goal is to incorporate GFP into yeast under a constitutive promoter, ensuring continuous expression throughout fermentation, while maintaining the beer’s flavor and quality. This innovative project blends brewing with biotechnology, creating a visually captivating and scientifically-driven product.</p>
                  </div>
                </div>
            </div>
            */