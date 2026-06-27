import Image from "next/image";
import CoffeeButton from "@/components/home/buttons/coffee";
import CroissantButton from "@/components/home/buttons/croissant";
import HeadphonesButton from "@/components/home/buttons/headphones";
import NotebookButton from "@/components/home/buttons/notebook";
import "./DesktopLayout.css";

export default function DesktopLayout() {
  return (
    <main className="main">
      <h1 className="title">MaiAda Carpano</h1>
      <div className="table">
        <div className="table-inner">
          <CroissantButton />
          <CoffeeButton />
          <Image
            src="/images/table.png"
            alt="cute table with checkered cloth"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="chair">
        <div className="chair-inner">
          <NotebookButton />
          <HeadphonesButton />
          <Image
            src="/images/chair.png"
            alt="cute chair near the table"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </main>
  );
}
