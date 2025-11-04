import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <Link href="/pixel">Go to Pixel Page</Link>
      </main>
    </div>
  );
}
