import Image from "next/image";
import "./style.css";

export default function CoffeeButton({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <button
      type="button"
      className="coffee picture-button"
      onClick={onOpenModal}
    >
      <div className="button-inner">
        <span className="label">about me</span>
        <Image
          src="/images/coffee.png"
          alt="cute coffee on the table"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
