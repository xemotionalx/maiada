import Image from "next/image";

export default function HeadphonesButton() {
  return (
    <button type="button" className="headphones picture-button">
      <Image
        src="/images/headphones.png"
        alt="cute headphones on the table"
        fill
        style={{ objectFit: "cover" }}
      />
    </button>
  );
}
