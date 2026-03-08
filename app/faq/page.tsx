import FaqCard from "@/src/components/FaqCard";
import styles from "@/src/styles/Faq.module.css";
import { qna } from "@/src/data/faqData";

export default function page() {
  return(
    <main>
      <h1 className={styles.header}>Frequently Asked Questions</h1>
      {qna.map((item, index) => (
        <FaqCard key={index} 
        question={item.question} 
        answer={item.answer} />))}
        {/*Iterates through the qna array from faqData*/}
    </main>
  );
}