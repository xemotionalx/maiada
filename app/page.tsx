"use client";

import { useState } from "react";
import "./page.css";
import Image from "next/image";
import CoffeeButton from "@/components/home/buttons/coffee";
import CroissantButton from "@/components/home/buttons/croissant";
import HeadphonesButton from "@/components/home/buttons/headphones";
import NotebookButton from "@/components/home/buttons/notebook";
import { AboutMeModal } from "@/components/home/info/about-me";
import { PortfolioModal } from "@/components/home/info/portfolio";
import { ResumeModal } from "@/components/home/info/resume";
import { QuietTimeModal } from "@/components/home/info/quiet-time";

export default function Home() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isQuietTimeOpen, setIsQuietTimeOpen] = useState(false);

  return (
    <div className="page">
      <main className="main">
        <h1 className="title">MaiAda Carpano</h1>
        <div className="table">
          <div className="table-inner">
            <CroissantButton onOpenModal={() => setIsPortfolioOpen(true)} />
            <CoffeeButton onOpenModal={() => setIsAboutMeOpen(true)} />
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
            <NotebookButton onOpenModal={() => setIsResumeOpen(true)} />
            <HeadphonesButton onOpenModal={() => setIsQuietTimeOpen(true)} />
            <Image
              src="/images/chair.png"
              alt="cute chair near the table"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </main>

      <AboutMeModal
        isOpen={isAboutMeOpen}
        onClose={() => setIsAboutMeOpen(false)}
      />
      <PortfolioModal
        isOpen={isPortfolioOpen}
        onClose={() => setIsPortfolioOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
      <QuietTimeModal
        isOpen={isQuietTimeOpen}
        onClose={() => setIsQuietTimeOpen(false)}
      />
    </div>
  );
}
