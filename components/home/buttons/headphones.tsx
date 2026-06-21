import Image from "next/image";

export default function HeadphonesButton({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <button
      type="button"
      className="headphones picture-button"
      onClick={onOpenModal}
    >
      <div className="button-inner">
        <span className="label headphones-label">quiet time</span>
        <Image
          src="/images/headphones.png"
          alt="cute headphones on the table"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
