import TeamCard from "@/src/components/TeamCard";
import { subteams } from "@/src/data/teamData";
import styles from "@/src/styles/Team.module.css";

export default function Page() {
  return (
    <main>
      <h1 className={styles.header}>Our Team</h1>
      <h2 className={styles.subtitle}>Captains</h2>
      <div className={styles.subteams}>
        {subteams.Captain.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <h2 className={styles.subtitle}>Admin</h2>
      <div className={styles.subteams}>
        {subteams.Admin.map((item, index) => (
          <TeamCard
            key={index}
            name={item.name}
            role={item.role}
            peopleImages={item.peopleImages}
          />
        ))}
      </div>
      <h2 className={styles.subtitle}>Instrumentation Team</h2>
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
      <h2 className={styles.subtitle}>Brew Team</h2>
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
      <h2 className={styles.subtitle}>Lab Team</h2>
      <div className={styles.subteams} style={{ marginBottom: 0 }}>
        {subteams.Lab.map((item, index) => (
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
