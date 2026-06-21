import Image from "next/image";

export default function CroissantButton() {
  return (
    <button type="button" className="croissant picture-button">
      <Image
        src="/images/croissant.png"
        alt="cute croissant on the table"
        fill
        style={{ objectFit: "cover" }}
      />
    </button>
  );
}
