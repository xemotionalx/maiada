import "./page.css";
import DesktopLayout from "@/components/home/layouts/DesktopLayout";
import MobileLayout from "@/components/home/layouts/MobileLayout";

export default function Home() {
  return (
    <div className="page">
      <div className="layout-desktop">
        <DesktopLayout />
      </div>
      <div className="layout-mobile">
        <MobileLayout />
      </div>
    </div>
  );
}
