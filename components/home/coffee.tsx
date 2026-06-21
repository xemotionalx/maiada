import Image from "next/image";

export default function CoffeeButton() {
  return (
    <button type="button" className="coffee picture-button">
      <Image
        src="/images/coffee.png"
        alt="cute coffee on the table"
        fill
        style={{ objectFit: "cover" }}
      />
    </button>
  );
}
