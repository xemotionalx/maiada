import CoffeeButton from "@/components/home/buttons/coffee";
import CroissantButton from "@/components/home/buttons/croissant";
import HeadphonesButton from "@/components/home/buttons/headphones";
import NotebookButton from "@/components/home/buttons/notebook";
import "./MobileLayout.css";

export default function MobileLayout() {
  return (
    <main className="mobile-main">
      <h1 className="mobile-title">MaiAda Carpano</h1>
      <div className="mobile-grid">
        <div className="mobile-grid-item">
          <CoffeeButton />
        </div>
        <div className="mobile-grid-item">
          <NotebookButton />
        </div>
        <div className="mobile-grid-item">
          <CroissantButton imageSrc="/images/croissant-mobile.png" />
        </div>
        <div className="mobile-grid-item">
          <HeadphonesButton />
        </div>
      </div>
    </main>
  );
}
