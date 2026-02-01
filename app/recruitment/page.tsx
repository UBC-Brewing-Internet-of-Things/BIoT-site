import styles from '../../src/styles/Recruitment.module.css';

export default function page() {
  return (
    <div className={styles.container}>
      <h1>Applications For The 2025/26 Cycle Are Now Closed.</h1>
      <p><b>Please follow our socials for more updates</b></p>
      <div className={styles.logos}>
        <a className={styles.recruitmentLogos}
            href="https://www.instagram.com/ubcbiot/">
            <img src="/logo_images/instagram_logo.png"
            className={styles.recruitmentLogos} />
        </a>
        <a className={styles.recruitmentLogos}
            href="https://www.linkedin.com/company/brewing-internet-of-things-biot/">
            <img src="/logo_images/linkedin_logo.png"
            className={styles.recruitmentLogos} />
        </a>
      </div>
      <hr className={styles.rectangle} />
      <h2 style={{fontSize: 'xx-large'}}>Why Join Us?</h2>
      <p>BIoT is a student-led team dedicated to recreating the industrial brewing process on a home-brewing scale using:</p>
      <div className={styles.tableIcons}>
        <div className={styles.icons}>
          <img src="/logo_images/sensor_icon.png" className={styles.recruitmentLogos}/>
          <p><b>Sensors</b></p>
        </div>
        <div className={styles.icons}>
          <img src="/logo_images/automation_icon.png" className={styles.recruitmentLogos}/>
          <p><b>Automation</b></p>
        </div>
        <div className={styles.icons}>
          <img src="/logo_images/bioengineering_icon.png" className={styles.recruitmentLogos}/>
          <p><b>Bioengineering</b></p>
        </div>
      </div>
      <p>
      We welcome curious undergraduate students from all backgrounds, especially those interested in brewing, chemical/biological engineering, and computer science <b>- no experience required! </b>
      </p>
      <p>Our 30-40 person team is divided into three sub-teams: <span>brewing and recipe design, bioengineering and assay development,
      and hardware/software integration. </span >Each year, we tackle new projects, so if you have an idea you want to explore, this is the place to make it happen.
      </p>
      <p style={{marginTop: '40px'}}><b> If you’re excited to learn, build, and innovate, join us! </b> </p>
      <p>
      Whether you want to develop a new brewing technique,
      design an experiment, or write software, there’s a place for you here.
      </p>


    </div>
  );
}

/* <div class="container recruitment-container">
    <h1 >Applications For The 2025/26 Cycle Are Now Closed.</h1>
    <p ><b>Please follow our socials for more updates</b></p>
    <!--
    <h1>Applications For The 2025/26 Cycle Are Now Open!</h1>
    <p><b>Please read below and follow our <br> socials for more updates</b></p>
    -->
    <div class="logos">
      <a class="recruitment-logos"
          href="https://www.instagram.com/ubcbiot/">
          <img src="logo_images/instagram_logo.png"
          class="recruitment-logos" />
      </a>
      <a class="recruitment-logos"
          href="https://www.linkedin.com/company/brewing-internet-of-things-biot/">
          <img src="logo_images/linkedin_logo.png"
          class="recruitment-logos" />
      </a>
    </div> 

    <hr class="rectangle-underline">

    <h2 style="font-size: xx-large;" >Why Join Us?</h2>
    <p>BIoT is a student-led team dedicated to recreating the industrial brewing process on a home-brewing scale using:
    <div class ="table-icons">
      <div class="icons">
        <img src="logo_images/sensor_icon.png" class="recruitment-logos"/>
        <p><b>Sensors</b></p>
      </div>
      <div class="icons">
        <img src="logo_images/automation_icon.png" class="recruitment-logos"/>
        <p><b>Automation</b></p>
      </div>
      <div class="icons">
        <img src="logo_images/bioengineering_icon.png" class="recruitment-logos"/>
        <p><b>Bioengineering</b></p>
      </div>
    </div>
    <p>
    We welcome curious undergraduate students from all backgrounds, especially those interested in brewing, chemical/biological engineering, and computer science <b>- no experience required! </b>
    </p>
    <p>Our 30-40 person team is divided into three sub-teams: <span>brewing and recipe design, bioengineering and assay development,
    and hardware/software integration. </span >Each year, we tackle new projects, so if you have an idea you want to explore, this is the place to make it happen.
    </p>
    <p style="margin-top: 40px;" ><b> If you’re excited to learn, build, and innovate, join us! </b> </p>
    <p>
    Whether you want to develop a new brewing technique,
    design an experiment, or write software, there’s a place for you here.
    </p>
      
    
  </div> */