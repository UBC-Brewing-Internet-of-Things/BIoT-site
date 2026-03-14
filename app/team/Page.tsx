import TeamCard from "@/src/components/TeamCard";
import { subteams } from "@/src/data/teamData";
import styles from "@/src/styles/Team.module.css";

export default function page() {
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
      
    </main>
  );
}
