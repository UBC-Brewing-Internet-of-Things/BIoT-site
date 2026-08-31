import TeamCard from "@/src/components/TeamCard";
import { subteams } from "@/src/data/teamData";
import styles from "@/src/styles/Team.module.css";

export default function page() {
  return (
    <main className = {styles.container}>
      <h1 className={styles.header}>Our Team</h1>
  
      <h2 className={styles.subtitle}>Admin</h2>
      <div className={styles.subteams}>
        {subteams.Captain.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
        {subteams.Admin.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <hr className={styles.rectangle} />
      <h1 className={styles.header}>Beer R&D Team</h1>
      <h2 className={styles.subtitle}>Instrumentation Subteam</h2>
      <div className={styles.subteams}>
        {subteams.Instrumentation.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <h2 className={styles.subtitle}>Brew Subteam</h2>
      <div className={styles.subteams}>
        {subteams.Brew.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <h2 className={styles.subtitle}>Lab Subteam</h2>
      <div className={styles.subteams}>
        {subteams.Lab.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <hr className={styles.rectangle} />
      <h1 className={styles.header}>ChemE Cube Team</h1>
      <div className={styles.subteams} style={{ marginBottom: 0 }}>
        {subteams.Cheme.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
    </main>
  );
}
