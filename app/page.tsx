import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        hello world!
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
