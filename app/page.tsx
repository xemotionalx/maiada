import Image from "next/image";
import styles from "./page.module.css";
import AsciiSpeechBubble from "@/components/speech-bubble";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AsciiSpeechBubble />
        <Image
          className={styles.unicorn}
          src="/unicorn_baby.gif"
          alt="A pink unicorn  is flying"
          width={200}
          height={200}
          priority
        />
      </main>
    </div>
  );
}
